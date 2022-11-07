<template>
  <van-cell
    center
    :title="name"
    :label="author + ' - ' + name"
    :key="id"
    @click="toPlay"
  >
    <template #right-icon>
      <van-icon name="play-circle-o" size=".6rem"/>
    </template>
  </van-cell>
</template>

<script>
export default {
    props:{
        name:String,
        author: String,
        id: Number

    },
    data(){
        return {
            
        }
    },
    methods: {
        toPlay(){
            this.$router.push({
                path: '/play',
                query: {
                    id: this.id
                }
            })
        }
    }
};
</script>

<style scoped> 
.van-cell__title{
  width: 6.25rem;
}
.van-cell__title span, .van-cell__title div{
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
