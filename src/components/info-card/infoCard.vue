<template>

  <el-card :padding="0">
    <div class="info-card-con">
      <el-col class="info-card-icon-con" :style="{backgroundColor: color, color: 'white'}" :span="8">
      <div class="align-middle">
        <i :type="iconType" :size="iconSize"></i>
      </div>
      </el-col>
      <el-col :span="16" class="height-100">
      <div  class="align-middle" >
        <p :style="{color: color}" class="info-num">{{count}}</p>
        <p class="info-intro-text">{{ message }}</p>
      </div>
      </el-col>
    </div>
  </el-card>
</template>
<style lang="less">


  .info-num {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
  }

  .info-card-icon-con {
    height: 100%;
  }

  .height-100 {
    height: 100%;
  }

  .info-card-con {
    height: 100px;
  }

  .info-intro-text {
    font-size: 12px;
    font-weight: 500;
    color: #C8C8C8;
  }
</style>
<script>
  import ElCol from 'element-ui/packages/col/src/col'

  export default {
    components: {ElCol},
    name: 'infoCard',
    props: {
      color: String,
      iconType: String,
      count: String,
      message: String,
      iconSize: {
        type: Number,
        default: 40
      }
    }
  }
</script>
