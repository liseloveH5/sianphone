<template>
  <b-card class="news-list-item">
    <b-media>
      <b-img slot="aside" :src="image" width="200" height="160" alt="placeholder" />

      <h5 class="mt-0 title">{{title}}</h5>
      <span class="data-time">{{date}}</span>
      <p class="desc">
        {{desc}}
      </p>
      <div>
        <b-btn class="float-right" variant="primary" to="/news/detail">查看详情</b-btn>
      </div>
    </b-media>
  </b-card>
</template>

<script>
  export default {
    name: 'list-items',
    data() {
      return {

      }
    },
    props:{
      image:String,
      title:String,
      date:String,
      desc:String,
    },
    // 挂载之后 相当于原来的ready
    mounted: function () {
      this.$nextTick(function () {
        // 保证 this.$el 已经插入文档
      })
    },
  };
</script>

<style lang="less">
  @import "~@/assets/style/base/_fn";

  .news-list-item{
    .title{
      color:@color3;
      margin-bottom:5px;
    }
    .data-time{
      color:#81899e;
    }
    .desc{
      font-size:14px;
      line-height:25px;
      margin-top:10px;
      .ellipsisLn(2);
    }
  }

</style>
