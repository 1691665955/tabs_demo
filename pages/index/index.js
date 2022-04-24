// index.js

Page({
  data: {
    tabs: [{
      name: "派单",
      count: 99
    }, {
      name: "接单",
      count: 0
    }, {
      name: "订单",
      count: 4
    }],
    colors: [
      "#FF0000",
      "#00FF00",
      "#0000FF"
    ]
  },

  onLoad() {

  },

  tabChange: function(e) {
    console.log(e.detail.current)
  }
})