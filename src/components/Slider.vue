<template>
  <div id="slider-wrap">
    <div class="containt">
      <div class="left" @click="zuohua">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div v-on:mouseover="stopmove()" v-on:mouseout="move()">
        <ul ref="image" :style="{'left':calleft + 'px'}">
          <li v-for="item in list" :key="item.id">
            <img :src="item.img" />
          </li>
        </ul>
      </div>

      <div class="right" @click="youhua">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "slider",
  data() {
    return {
      list: [
        {
          url: "",
          id: 1,
          img: "../../static/images/1.jpg"
        },
        {
          url: "",
          id: 2,
          img: "../../static/images/2.jpg"
        },
        {
          url: "",
          id: 3,
          img: "../../static/images/3.jpg"
        },
        {
          url: "",
          id: 4,
          img: "../../static/images/4.jpg"
        },
        {
          url: "",
          id: 5,
          img: "../../static/images/5.jpg"
        },
        {
          url: "",
          id: 6,
          img: "../../static/images/6.jpg"
        }
      ],
      calleft: 0
    };
  },
  created() {
    this.move();
  },
  methods: {
    //移动
    move() {
      this.timer = setInterval(this.starmove, 2000);
    },
    //开始移动
    starmove() {
      this.calleft -= 600;
      if (this.calleft <= -1200) {
        this.calleft = 0;
      }
    },
    //鼠标悬停时停止移动
    stopmove() {
      clearInterval(this.timer);
    },
    //点击按钮左移
    zuohua() {
      clearInterval(this.timer); //点击向左按钮时停止自动轮播
      this.calleft -= 600;
      if (this.calleft <= -1200) {
        this.calleft = 0;
      }
    },
    //点击按钮右移
    youhua() {
      clearInterval(this.timer); //点击向右按钮时停止自动轮播
      this.calleft += 600;
      if (this.calleft >= 0) {
        this.calleft = -1200;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#slider-wrap {
  width: 600px;
  height: 400px;
  margin: 0 auto;
  background-color: cyan;
  overflow: hidden;
  .containt {
    position: relative;
    height: 100%;
    width: 100%;
    .left,
    .right {
      position: absolute;
      top: 50%;
      z-index: 99;
      height: 50px;
      width: 50px;
      font-size: 30px;
      background-color: rgba(226, 218, 218, 0.6);
      border-radius: 50%;
      line-height: 50px; //字体图标在盒子垂直居中
      transform: translateY(-50%); //盒子垂直居中
    }
    .left {
      left: 10px;
    }
    .right {
      right: 10px;
    }
    .left:hover,
    .right:hover {
      cursor: pointer;
      background-color: rgba(134, 130, 130, 0.6);
    }
    ul {
      user-select: none; //当鼠标多次点击会出现蓝色的块，用此行代码消除掉
      position: absolute;
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      // transition:all 1s ease  ;

      img {
        width: 300px;
        height: 400px;
      }
    }
  }
}
</style>