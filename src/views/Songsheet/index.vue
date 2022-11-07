<template>
  <div>
    <div class="header">
      <van-icon
        name="arrow-left"
        size="20"
        class="left-incon"
        @click="$router.back()"
      />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  height: 50px;
}

</style>