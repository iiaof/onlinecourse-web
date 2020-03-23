<template>
  <div class="home-course">
    <div class="course-content">
          <span class="all-course-title all-course-text">
            <i class="icon-menu"/>
            全部课程
          </span>
          <label class="home-course-text">
            路径
          </label>
          <label class="home-course-text">
            训练营
          </label>
          <label class="home-course-text">
            课程+
          </label>
          <label class="home-course-text">
            会员
          </label>
        <div class="home-course-sub">
          <label class="home-course-text">
            社区
          </label>
          <span class="d3"></span>
          <ul class="home-course-sub-content">
            <li class="home-course-sub-item home-course-text" v-for="item in communityList" :key='item'>
              <label>
                {{item}}
              </label>
            </li>
          </ul>
        </div>
        <div class="all-course-list">
          <div v-for="item in courseList" 
               :key=item.id 
               class="all-course-item" 
               @mouseover="courseItemOver(item)"
               :ref="getCourseItemRef(item.id)"
          >
            <span class="all-course-item-text home-course-text all-course-text">
              {{item.courseType}}
            </span>
            <span class="all-course-item-text home-course-text all-course-text small-text">
              {{item.courseName[0]}}
            </span>
            <span class="all-course-item-text home-course-text all-course-text small-text">
              {{item.courseName[1]}}
            </span>
          </div>
          <div class="all-course-item-special">
            <span class="all-course-text all-course-item-special-btn">
              经营专区
            </span>
          </div>
          <div class="course-item-detail" :style="styleObj">
            <span class="course-item-detail-title">{{currentItem.courseType}}</span>
            <div class="course-item-detail-list">
              <span>|</span>
              <span v-for="item in currentItem.courseName" :key="item"> {{item}} |</span>
            </div>
            <span class="course-item-detail-title">课程推荐</span>
            <div class="course-item-detail-recommmend">
              <span v-for="item in currentItem.courseRecommend" :key="item">{{item}}</span>
            </div>
          </div>
        </div>
    </div>
    <div class="course-search">

    </div>
  </div>
</template>

<script>
  import SearchCom from '@/components/common/searchCom/SearchCom.vue'

  export default {
    name: 'HomeCourse',
    data: function() {
      return {
        courseList: [
          {
            id: 1,
            courseType: '后端开发',
            courseName: ['Python','PHP','Java','Ruby','Laravel','C','C++','Go','Flask',
                         'OpenCV','ThinkPHP','爬虫','Django','Spring','SSM','SpringBoot',
                         'Node.js','Rust','Nginx','MongoDB','Micronaut'],
            courseRecommend: ['Python 新手入门课','Java 编程语言基础','Django 基础教程','Python3 实现简单的 Web 服务器']
          },
          {
            id: 2,
            courseType: 'Linux运维',
            courseName: ['Linux','Shell','网络','Nginx','Ansible','Git'],
            courseRecommend: ['Linux 基础入门（新版）','高级 bash 脚本编程指南','Git 与 GitHub 入门实践','Kubernetes 入门与实战']
          },
          {
            id: 3,
            courseType: '云计算与大数据',
            courseName: ['Hadoop','Spark','Scala','Docker','机器学习','云计算大数据','TensorFlow','知识图谱','Kubernetes','数据分析'],
            courseRecommend: ['机器学习开放基础课程','Kaggle 数据分析项目入门实战','使用 Flume 收集数据','大数据带你挖掘打车的秘籍']
          },
          {
            id: 4,
            courseType: '数据库',
            courseName: ['SQL','NoSQL','MongoDB','MySQL','Redis','Neo4j','Oracle'],
            courseRecommend: ['MySQL 基础课程','MongoDB 基础教程','Python3 实现键值数据库','Spark SQL 入门到上手实战']
          },
          {
            id: 5,
            courseType: '信息安全',
            courseName: ['Web安全','安全开发','网络安全','Kali','加密解密系统','安全渗透','测试信息隐藏'],
            courseRecommend: ['密钥加解密实验','SQL 注入基础原理介绍','Python 实现端口扫描器','Linux 防火墙技术']
          },
          {
            id: 6,
            courseType: 'Web前端',
            courseName: ['HTML5','Web','HTML','JavaScript','jQuery','Bootstrap','React','CSS','Node.js','Vue.js'],
            courseRecommend: ['HTML 基础课程','CSS 基础课程','JavaScript 基础课程','React 全家桶实现销售管理系统']
          },
          {
            id: 7,
            courseType: '计算机专业课',
            courseName: ['新手入门','算法','计算机专业课','设计模式','汇编'],
            courseRecommend: ['数据结构(新版)','操作系统原理与实践','TCP/IP 网络协议基础','C 语言入门教程']
          },
          {
            id: 8,
            courseType: '其他技术',
            courseName: ['Swift','Windows','Electron','Android','R','Julia','Pygame'],
            courseRecommend: ['R 语言基础入门','基于R的高级数据管理','对英国房屋价格建模并预测','使用 Githook 实现团队 Coding Review 流程']
          }
        ],
        communityList: ['讨论','教程库','直播','比赛'],
        currentItem: {},
        styleObj: {
          position:'absolute',
          top:0
        } 
      }
    },
    components: {
      SearchCom
    },
    methods: {
      getCourseItemRef(id) {
        return 'courseItem' + id;
      },
      courseItemOver(itemInfo) {
        this.currentItem = itemInfo;
        let ref = this.getCourseItemRef(itemInfo.id);
        // console.log("this.$refs[ref] = ",this.$refs[ref][0].offsetTop);
        this.styleObj.top = this.$refs[ref][0].offsetTop + 'px';
      }
    }
  }
</script>

<style scoped>
  
  .home-course {
    width: 70%;
    height: var(--main-bar-height);
    color: #666;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .course-content {
    width: 55%;
    height: 100%;

    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .all-course-title {
    width: 40%;
    height: 100%;
    background-color: var(--main-color);
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .icon-menu {
    margin-left: 20px;
    font-size: 28px;
  }
  .all-course-text {
    color: #ffffff
  }
  .small-text {
    font-size: 13px;
  }
  .all-course-list {
    width: 40%;
    height: 525px;
    position: absolute;
    top: var(--main-bar-height);
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .all-course-item {
    width: 100%;
    height: 11%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #999;
    text-align: start;
  }
  .all-course-item-text {
    height: 100%;
    padding-left: 20px;
    display: flex;
    align-items: center;
  }
  .all-course-item-special {
    width: 100%;
    height: 11%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .all-course-item-special-btn {
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 1px solid #fff;
  }
  .all-course-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  .all-course-item-special-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  .course-item-detail {
    display: inline-block;
    position: absolute;
    left: 100%;
    width: 350px;
    background-color: #fff;
  }
  .course-item-detail-title {
    background-color: rgba(0,0,0,0.09);
    color: #666;
    margin-left: 10px;
    margin-top: 50px;
  }
  .course-item-detail-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: 20px;
  }
  .course-item-detail-recommmend {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 20px;
  }
  .course-search {
    width: 45%;
    height: 100%;
  }
  .home-course-text:hover {
    color: var(--main-color);
    cursor:pointer;
  }
  .home-course li {
    list-style: none;
  }
  .d3 {
    margin-left: 7px;
    margin-top: 7px;
    float: right;
    width: 0; 
    height: 0;
    border-width: 6px;
    border-style: solid;
    border-color:#666 transparent transparent transparent;
  }
  .d3:hover {
    border-color: var(--main-color) transparent transparent transparent;
  }
  .home-course-sub-content {
    display: none;
    position: absolute;
    top: var(--main-bar-height);
    width: 150px;
    background: #fff;
    padding: 0;
    margin: 0;
    box-shadow: 0 15px 16px 0 rgba(0,0,0,.18);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    z-index: 10;
  }
  .home-course-sub {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .home-course-sub:hover ul{
    display: block;
  }
  .home-course-sub-item {
    display: block;
    color: #3a3a3a;
    width: 90%;
    padding: 15px 0 15px 15px;
    font-size: 16px;
  }
  .home-course-sub-item:hover {
    background-color: rgba(0,0,0,.05);
  }
</style>