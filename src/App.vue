<template>
  <div id="app">
    成功
    <aaa/>
  </div>
</template>

<script>
import aaa from "./aaa"
export default {
  components:{
    aaa
  },
  data(){
    return {
      aaa:1
    }
  },
  mounted() {
    console.log(this.aaa)
  },
};
</script>

<style lang="css">
#app{
  width: 100%;
  height: 100%;
  background: brown;
}
</style>