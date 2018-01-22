<template>
  <div class="common-page news-list">
    <global-header></global-header>
    <div class="img-wrap"><img src="@/assets/images/main/friends-bg.png" /></div>
    <div class="common-contain container">
      <b-row >
        <b-col cols="3">

          <b-list-group class="sticky-top">
            <b-list-group-item >资讯中心</b-list-group-item>
            <b-list-group-item to="" active>公司简讯</b-list-group-item>
            <b-list-group-item to="">行业简讯</b-list-group-item>
            <b-list-group-item to="">政策法规</b-list-group-item>
          </b-list-group>
        </b-col>

        <b-col cols="9">
          <b-breadcrumb :items="items"/>
         <!-- <nav aria-label="breadcrumb">

            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">首页</a></li>
              <li class="breadcrumb-item">资讯中心</li>
              <li class="breadcrumb-item active" >公司简讯</li>
            </ol>
          </nav>-->

          <div class="list-container">
            <div>

            </div>
            <list-item
              image="http://oyqbjwu6v.bkt.clouddn.com/blog/180115/fGidhf2AjF.png"
              title="华北制药集团新药研究开发有限责任公司与我司开展会谈"
              date="2018-01-07"
              desc="具有20余年医药相关企业经营管理经验，曾担任多家医药企业董事长、总经理职务，并参与多家医药相关企业的投资。对国家卫生、医药有关政策法规有深入的研究，对中国医疗机构的组织管理等有较深的了解，在中美两国医药行业有较强的人才、技术等高端资源整合能力。"
            ></list-item>

            <list-item
              image="http://oyqbjwu6v.bkt.clouddn.com/blog/180115/Jf7KJdfAAG.png"
              title="思安医疗参展第二届光谷国际生物产业博览会"
              date="2018-01-06"
              desc="2017年6月30日至7月2日，第二届光谷国际生物产业博览会在光谷科技会展中心隆重召开，本届生博会以“创新引领、生命健康”为主题，吸引了来自海内外众多知名研发机构、医疗机构、金融机构、企业、人才团队集聚，思安医疗作为本次生博会的参展企业，展会期间，详细的向各位专家..."
            ></list-item>

            <list-item
              image="http://oyqbjwu6v.bkt.clouddn.com/blog/180115/I6B4ljL8Ai.png"
              title="改革网：——专访武汉思安医疗技术有限公司"
              date="2018-01-05"
              desc="2017年7月19日，思安医疗首席科学家接受改革网专访，详细介绍了CAR-T免疫细胞治疗的最新进展与突破，以下是专访全文：本网记者 叶仕春什么是CAR-T生物免疫治疗技术？在治疗癌症方面有何疗效？这项技术在国内外临床上的应用情况如何？是否达到国际上领先水平？对此，记…"
            ></list-item>

            <list-item
              image="http://oyqbjwu6v.bkt.clouddn.com/blog/180115/0i1mJHi7JJ.png"
              title="长江日报：思安医疗湖北省首例异体CAR-T免疫细胞治疗获得成功"
              date="2018-01-04"
              desc="具有20余年医药相关企业经营管理经验，曾担任多家医药企业董事长、总经理职务，并参与多家医药相关企业的投资。对国家卫生、医药有关政策法规有深入的研究，对中国医疗机构的组织管理等有较深的了解，在中美两国医药行业有较强的人才、技术等高端资源整合能力。"
            ></list-item>

            <list-item
              image="http://oyqbjwu6v.bkt.clouddn.com/blog/180115/CFEBke6fFK.png"
              title="思安医疗荣获2017年第四届诺贝尔奖获得者医学峰会创新创业大赛国际创新奖"
              date="2018-01-03"
              desc="9月14日，为期三天的2017第四届诺贝尔奖获得者医学峰会在贵阳国际生态会议中心隆重开幕。五位诺奖得主、十余位中美院士、2000余位权威专家以及国内外生物医药产业新锐领袖、资深投资机构齐聚“林城”贵阳，围绕“科学：事实与虚构的博弈（Science-Fact and Fiction）”这一主题共商..."
            ></list-item>
          </div>

          <b-pagination-nav align="center" :number-of-pages="10" base-url="#" v-model="currentPage" />
        </b-col>

      </b-row>






    </div>

    <global-link></global-link>
    <global-footer></global-footer>

  </div>
</template>

<script>
  import index from './index.js'
  export default index
</script>

<style lang="less">
  @import "./index.less";
</style>
