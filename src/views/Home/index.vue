<template>
  <div>
      <p class="title">推荐歌单</p>
      <van-row gutter="6">
        <van-col span="8" v-for="obj in reLists" :key="obj.id" @click="toSeeSheet(obj)">
          <div class="play_count">
            <van-icon name="service" size=".32rem" color="#fff" />
            {{ obj.playCount | numberFormat }}
          </div>

          <van-image
              width="100%"
              height="3rem"
              fit="contain"
              :src="obj.picUrl"
            />
             <p class="song_name">{{ obj.name }}</p>
        </van-col>
      </van-row>

      <p class="title">最新音乐</p>
      <SongItem 
      v-for="obj in newSongs"
      :key="obj.id"
      :name="obj.name"
      :author="obj.song.artists[0].name"
      :id="obj.id"
      ></SongItem>
  </div>
</template>

<script>
import { recommendMusicAPI, newMusicAPI } from "../../api/index";
import SongItem from '../../components/SongItem.vue';
export default {
  components: {
    SongItem
  },
  data(){
    return {
      reLists: [],
      newSongs:[]
    }
  },
  async created(){
    const { data } = await recommendMusicAPI({
      limit: 6
    })
    this.reLists = data.result
    const res = await newMusicAPI({
        limit: 10
      })
    this.newSongs = res.data.result
  },
  filters: {
    numberFormat: (value)=> {
      var param = {};
      var k = 10000,
          sizes = ['', '万', '亿', '万亿'],
          i;
          if(value < k){
              param.value =value
              param.unit=''
          }else{
              i = Math.floor(Math.log(value) / Math.log(k)); 
              param.value = ((value / Math.pow(k, i))).toFixed(1);
              param.unit = sizes[i];
          }
      return `${param.value}${param.unit}`;
    }
  },
  methods: {
    toSeeSheet(sheetobj) {
      console.log(sheetobj)
      this.$router.push({
          path: '/songsheet'
      })
    }
  }

}
</script>

<style scoped>
.play_count{
  position: absolute;
  top: 0.1rem;
  right: 0.2rem;
  z-index: 100;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 0.15rem;
}
.play_count i{
  margin-right: 0.04rem;
}

  /* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
.van-col{
  position: relative;
}
.van-cell{
  border-bottom: 1px solid #ccc;
}
</style>