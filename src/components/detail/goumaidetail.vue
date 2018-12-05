<template>
  <div class="goumaidetail">
    <p>{{info.name}}</p>
    <p>{{info.characteristic}}</p>
    <ul>
      <li><span>￥{{info.minPrice}}</span><span>原价￥{{info.originalPrice}}</span></li>
      <li>已售 258</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "goumaidetail",
         props:['info'],
    }
</script>

<style scoped>

</style>
