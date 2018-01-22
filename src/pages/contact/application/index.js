const index = {
  name: 'science-application',

  data() {
    return {
      organForm: {
        name: '',
        contactName:'',
        contactPhone:'',
        applyProject:'',
        selected: 'car-t',
        options: [
          { value: 'car-t', text: 'CART-T系列' },
          { value: 'tcr-t', text: 'TCR-T系列' },
          { value: 'car-nk', text: 'CAR-NK系列' },
        ]
      },

      personForm: {
        name: '',
        phone:'',
        location:'',
        selected: 'car-t',
        options: [
          { value: 'car-t', text: 'CART-T系列' },
          { value: 'tcr-t', text: 'TCR-T系列' },
          { value: 'car-nk', text: 'CAR-NK系列' },
        ]
      },
    }
  },


  // 挂载之后 相当于原来的ready
  mounted: function () {
    this.$nextTick(function () {
      // 保证 this.$el 已经插入文档
    })
  },

  /* watch: {
     // 如果路由有变化，会再次执行该方法
     '$route': 'routerChange'
   },*/

  methods: {
    onOrganSubmit (evt) {
      evt.preventDefault();
      let obj = {
        title: 'Alert Title',
        message: 'Alert Message',
        type: 'success'
      }
      // alert(JSON.stringify(this.organForm));
    },

    onPersonSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.personForm));
    }

  }

};

export default index;
