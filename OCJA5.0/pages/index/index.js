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
  }
});