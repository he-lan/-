<template>
    <div id="home-wraper">
        <h3>轮播图</h3>
        <!-- <hr> -->
        <div class="lunbotu">
 <!-- <p>hhhh</p> -->
 <slider></slider>
        </div>
       
    </div>
</template>

<script>
import slider from './Slider'
export default {
    name:'home',
    components:{
        slider
    }

}
</script>

<style lang="scss" scoped>
    #home-wraper{
        width: 60%;
        margin: 0 auto;
        h3{
            font-size: 24px;
            padding-bottom: 15px;
            border-bottom: 3px solid rgb(17, 117, 175) !important;
        }
        .lunbotu{
        margin: 0 auto;
        margin-top: 20px;
        }
    


    }
</style>