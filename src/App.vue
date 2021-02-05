<template>
  <div id="app">
    开始疯狂编码
  </div>
</template>

<script>
export default {
  data(){
    return {
    
    }
  },
  mounted() {
    
  },
};
</script>

<style scoped>
*{
  padding: 0 0;
  margin: 0 0;
  outline: none;
}
html,
body, 
#app{
  width: 100%;
  height: 100%;
  color: brown;
}
/*修改滚动条样式*/
*::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
*::-webkit-scrollbar-track {
  background: rgba(0,0,0,0);
  border-radius: 0px;
}
*::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0);
  border-radius: 0px;
}
*::-webkit-scrollbar-thumb:hover {
  background: rgba(0,0,0,0);
}
*::-webkit-scrollbar-corner {
  background: rgba(0,0,0,0);
}
</style>