<template>
  <div>
      <van-search @input="searchFn" shape='round' v-model="value" placeholder="请输入搜索关键词"/>
      <div class="search_wrap" v-if="searchRes.length<1">
        <p class=".hot_title">热门搜索</p>
        <div class="hot_name_wrap">
          <span class="hot_item" v-for="(v, i) in hotArr" :key="i" @click="spanFn(v.first)">{{ v.first }}</span> 
        </div>
      </div>

      <div class="search_wrap" v-else>
        <p class=".hot_title">最佳匹配</p>
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <van-cell center :title="obj.name" :label='obj.ar[0].name + " - " +obj.name'  v-for="obj in searchRes" :key="obj.id">
              <template #right-icon>
                <van-icon name="play-circle-o" size=".6rem"/>
              </template>
            </van-cell>
          </van-list>
      </div>
  </div>
</template>

<script>
import { hotSearchAPI, resultSearchAPI } from '@/api'
export default {
  data(){
    return {
      value: '',
      hotArr: [],
      searchRes: [],
      loading: false,
      finished:false,
      page: 1
    }
  },
  async created(){
    const res = await hotSearchAPI()
    this.hotArr = res.data.result.hots
  },
  methods:{
    async getSearchRes(){
      return await resultSearchAPI({
        keywords: this.value,
        limit: 20,
        offset: (this.page - 1)*20
      })
    },
    async spanFn(val){
      this.value = val
      const res = await this.getSearchRes()
      this.searchRes = res.data.result.songs
    },
    async searchFn(){
      if(this.value.length === 0){
        this.searchRes = []
        return
      }
      const res = await this.getSearchRes()
      this.searchRes = res.data.result.songs
    },
    async onLoad(){
      this.page++;
      const res = await this.getSearchRes()
      this.searchRes = [...this.searchRes, ...res.data.result.songs]
      this.loading = true
    }
  }
}
</script>

<style scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
.van-cell{
  border-bottom: 1px solid #ccc;
}
</style>