<template>
  <van-cell
    center
    :title="name"
    :label="author + ' - ' + name"
    :key="id"
  >
    <template #right-icon>
      <van-icon name="play-circle-o" size=".6rem" @click="toPlay"/>
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

<style></style>
