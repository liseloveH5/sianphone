import ListItem from "./compoment/list-item.vue";

const index = {
  name: 'news-list',
  components: {ListItem},

  data() {
    return {
      currentPage: 1,
      items: [{
        text: '首页',
        href: '#'
      }, {
        text: '最新资讯',
        active: true
      }]
    }
  },

  // 挂载之后 相当于原来的ready
  mounted: function () {
    this.$nextTick(function () {
      // 保证 this.$el 已经插入文档
      this.initData();
    })
  },

  /* watch: {
     // 如果路由有变化，会再次执行该方法
     '$route': 'routerChange'
   },*/

  methods: {
    initData(){
      // 发送请求
      this.$http.post('/Sian/backend/getIndexPics').then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      });

    }

  }

};

export default index;
