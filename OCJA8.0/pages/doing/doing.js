const questionBank = require('../../题库.js');
Page({
  data: {
    questions: questionBank.map((q, index) => ({
      ...q,
      options: q.options.map(opt => ({
        text: typeof opt === 'string' ? opt : opt.text,
        value: typeof opt === 'string' ? opt.split('.')[0].trim() : opt.value,
        selected: false
      })),
      // 强制设置为多选题
      multiSelect: true
    })),
    current: 0,
    showAnswer: false,
    touchStartX: 0,
    touchEndX: 0,
    showPreview: false,
    groupTabs: [],
    activeGroup: 0,
    visibleQuestions: [],
    scrollTop: 0
  },

  onLoad(options) {
    // 检查是否是错题模式
    if (options && options.mode === 'wrong') {
      // 从本地存储加载错题
      const wrongQuestions = wx.getStorageSync('wrongQuestions') || [];
      this.setData({
        questions: wrongQuestions.map((q, index) => ({
          ...q,
          options: q.options.map(opt => ({
            ...opt,
            selected: false
          })),
          // 强制设置为多选题
          multiSelect: true
        }))
      });
    } else {
      // 使用正常题库
      const questionBank = require('../../题库.js');
      this.setData({
        questions: questionBank.map((q, index) => ({
          ...q,
          options: q.options.map(opt => ({
            text: typeof opt === 'string' ? opt : opt.text,
            value: typeof opt === 'string' ? opt.split('.')[0].trim() : opt.value,
            selected: false
          })),
          // 强制设置为多选题
          multiSelect: true
        }))
      });
    }
    this.initQuestionGroups();
  },

  initQuestionGroups() {
    const groupSize = 50;
    const groups = [];
    const total = this.data.questions.length;
    
    for (let i = 0; i < total; i += groupSize) {
      const start = i + 1;
      const end = Math.min(i + groupSize, total);
      groups.push({ start, end });
    }
    
    this.setData({
      groupTabs: groups,
      visibleQuestions: this.getQuestionsForGroup(0)
    });
  },

  getQuestionsForGroup(groupIndex) {
    const groupSize = 50;
    const start = groupIndex * groupSize;
    const end = start + groupSize;
    
    return this.data.questions.slice(start, end).map((q, i) => ({
      ...q,
      index: start + i
    }));
  },

  handleSwitchGroup(e) {
    const groupIndex = e.currentTarget.dataset.index;
    this.setData({
      activeGroup: groupIndex,
      visibleQuestions: this.getQuestionsForGroup(groupIndex),
      scrollTop: 0
    });
  },

  getNumberClass(index) {
    const { current, showAnswer, visibleQuestions } = this.data;
    const question = visibleQuestions[index];
    const isCurrent = question.index === current;
    const isAnswered = showAnswer && question.options.some(opt => opt.selected);
    
    let classList = [];
    if (isCurrent) classList.push('active');
    if (isAnswered) classList.push('answered');
    return classList.join(' ');
  },

  handleJumpToQuestion(e) {
    const index = e.currentTarget.dataset.index;
    const groupIndex = Math.floor(index / 50);
    
    this.setData({
      current: index,
      showPreview: false,
      showAnswer: false,
      activeGroup: groupIndex,
      visibleQuestions: this.getQuestionsForGroup(groupIndex)
    });
    
    setTimeout(() => {
      const rowSize = Math.floor((wx.getSystemInfoSync().windowWidth - 40) / 90);
      const row = Math.floor((index % 50) / rowSize);
      this.setData({ scrollTop: row * 90 });
    }, 100);
  },

  handleTogglePreview() {
    this.setData({
      showPreview: !this.data.showPreview,
      activeGroup: Math.floor(this.data.current / 50),
      visibleQuestions: this.getQuestionsForGroup(Math.floor(this.data.current / 50))
    });
    
    if (!this.data.showPreview) {
      setTimeout(() => {
        const index = this.data.current % 50;
        const rowSize = Math.floor((wx.getSystemInfoSync().windowWidth - 40) / 90);
        const row = Math.floor(index / rowSize);
        this.setData({ scrollTop: row * 90 });
      }, 100);
    }
  },
  
  // 移除错题
  handleRemoveWrongQuestion() {
    const currentQuestion = this.data.questions[this.data.current];
    
    // 获取本地存储中的错题
    let wrongQuestions = wx.getStorageSync('wrongQuestions') || [];
    
    // 过滤掉当前题目
    const updatedWrongQuestions = wrongQuestions.filter(q => q.id !== currentQuestion.id);
    
    // 保存更新后的错题集
    wx.setStorageSync('wrongQuestions', updatedWrongQuestions);
    
    // 显示成功提示
    wx.showToast({ title: '错题已移除', icon: 'success' });
    
    // 更新页面数据
    const newQuestions = this.data.questions.filter(q => q.id !== currentQuestion.id);
    
    if (newQuestions.length === 0) {
      // 没有错题了，返回上一页
      wx.navigateBack();
    } else {
      // 更新题目列表
      const newCurrent = Math.min(this.data.current, newQuestions.length - 1);
      this.setData({
        questions: newQuestions,
        current: newCurrent,
        showPreview: false
      });
      
      // 重新初始化题目分组
      this.initQuestionGroups();
    }
  },

  // 多选功能核心代码
  handleSelectOption(e) {
    const index = e.currentTarget.dataset.index;
    const currentQ = this.data.questions[this.data.current];
    
    // 多选题逻辑 - 直接切换选中状态
    currentQ.options[index].selected = !currentQ.options[index].selected;
    
    this.setData({
      [`questions[${this.data.current}].options`]: currentQ.options
    });
  },

  handleSubmitAnswer() {
    const currentQ = this.data.questions[this.data.current];
    const selectedOptions = currentQ.options.filter(opt => opt.selected);
    
    if (selectedOptions.length === 0) {
      wx.showToast({ title: '请至少选择一个选项', icon: 'none' });
      return;
    }
    
    this.setData({ showAnswer: true });
    
    // 检查答案是否错误
    const isAnswerCorrect = this.checkAnswer(currentQ, selectedOptions);
    if (!isAnswerCorrect) {
      this.addToWrongQuestions(currentQ);
    }
  },
  
  // 检查答案是否正确
  checkAnswer(question, selectedOptions) {
    // 假设正确答案存储在question.correctAnswer中
    // 这里需要根据实际的数据结构调整
    if (!question.answer) return false;
    
    // 对于多选题，比较选中的选项和正确答案
    const selectedValues = selectedOptions.map(opt => opt.value).sort();
    const correctValues = Array.isArray(question.answer) ? 
      question.answer.sort() : [question.answer].sort();
    
    return JSON.stringify(selectedValues) === JSON.stringify(correctValues);
  },
  
  // 添加到错题集
  addToWrongQuestions(question) {
    // 获取本地存储中的错题
    let wrongQuestions = wx.getStorageSync('wrongQuestions') || [];
    
    // 检查是否已经存在该错题
    const isDuplicate = wrongQuestions.some(q => q.id === question.id);
    if (!isDuplicate) {
      // 添加错题信息
      wrongQuestions.push({
        id: question.id,
        content: question.content,
        options: question.options,
        correctAnswer: question.correctAnswer,
        answer: question.answer,
        explanation: question.explanation || '暂无解析',
        timestamp: new Date().getTime()
      });
      
      // 保存到本地存储
      wx.setStorageSync('wrongQuestions', wrongQuestions);
      wx.showToast({ title: '已添加到错题集', icon: 'success' });
    }
  },

  handleNextQuestion() {
    if (this.data.current < this.data.questions.length - 1) {
      const newCurrent = this.data.current + 1;
      const groupIndex = Math.floor(newCurrent / 50);
      this.setData({
        current: newCurrent,
        showAnswer: false,
        activeGroup: groupIndex,
        visibleQuestions: this.getQuestionsForGroup(groupIndex)
      });
    } else {
      wx.showToast({ title: '已经是最后一题', icon: 'none' });
    }
  },

  handlePrevQuestion() {
    if (this.data.current > 0) {
      this.setData({
        current: this.data.current - 1,
        showAnswer: false
      });
    }
  },

  handleTouchStart(e) {
    this.setData({ touchStartX: e.changedTouches[0].clientX });
  },

  handleTouchEnd(e) {
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - this.data.touchStartX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        this.handlePrevQuestion();
      } else {
        this.handleNextQuestion();
      }
    }
  }
});