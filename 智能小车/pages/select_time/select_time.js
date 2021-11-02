const date = new Date()
const day = []
const hour = []
const minute = []

day.push(2)

for (let i = 1; i <= 24; i++) {
  hour.push(i)
}

for (let i = 1; i <= 60; i++) {
  minute.push(i)
}

Page({
  data: {
    days: day,
    day: 2,
    hours: hour,
    hour: 17,
    minutes: minute,
    minute: 20,
    value: [9999, 1, 1],
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      day: this.data.days[val[0]],
      hour: this.data.hours[val[1]],
      minute: this.data.minutes[val[2]]
    })
  },
  goto: function (e) {
    wx.navigateTo({
      url: '/pages/wait_page/wait_page',
    })
  },
  onLoad: function (options) {
    wx.showLoading({
        title: '加载中',
      })
      
      setTimeout(function () {
        wx.hideLoading()
      }, 500)
},
})