// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    },
    current: {
      type: Number,
      value: 0
    },
    normalColor: {
      type: String,
      value: "#101010"
    },
    activeColor: {
      type: String,
      value: "#55b428"
    },
    showBadge: {
      type: Boolean,
      value: true
    },
    circular: {
      type: Boolean,
      value: true
    },
    swiper: {
      type: Boolean,
      value: false
    }
  },

  relations: {
    '../tab-page/tab-page': {
      type: 'child'
    }
  },

  options: {
    multipleSlots: true
  },

  externalClasses: [
    'tab-class',
    'tab-header-class',
    'tab-item-class',
    'tab-item-name-class',
    'tab-item-badge-class',
    'tab-page-class'
  ],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _selectIndex: function (e) {
      this.setData({
        current: e.currentTarget.dataset.index
      })
      this.triggerEvent("change", {
        current: e.currentTarget.dataset.index
      })
    },

    _swiperChange: function (e) {
      this.setData({
        current: e.detail.current
      })
      this.triggerEvent("change", {
        current: e.detail.current
      })
    },

    _onTouchMove: function (e) {

    }
  }
})