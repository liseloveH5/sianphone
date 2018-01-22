const index = {
  name: 'contact-message',

  data() {
    return {
      form: {
        email: '',
        name: '',
        message:'',
        phone:'',
        tel:'',
      },

      show: true,
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
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }

  }

};

export default index;
