Page({
  goToBlank() {
    wx.navigateTo({
      url: '/pages/blank/blank'
    });
  },
  showFeatureTip() {
    wx.showToast({
      title: '功能开发中，敬请期待！',
      icon: 'none'
    });
  },
  goToAbout() {
    wx.navigateTo({
      url: '/pages/about/about'
    });
  },
  // 跳转到错题记录页面
  goToWrongQuestions() {
    // 获取本地存储中的错题
    const wrongQuestions = wx.getStorageSync('wrongQuestions') || [];
    
    if (wrongQuestions.length === 0) {
      wx.showToast({
        title: '暂无错题记录',
        icon: 'none'
      });
      return;
    }
    
    // 跳转到doing页面，并传递错题数据
    wx.navigateTo({
      url: '/pages/doing/doing?mode=wrong'
    });
  }
});