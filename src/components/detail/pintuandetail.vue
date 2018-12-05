<template>
  <div class="pintuandetail">
    <p>{{info.name}}</p>
    <p>{{info.characteristic}}</p>
    <ul>
      <li>
        <p>拼团价<span>￥{{info.pingtuanPrice}}</span></p>
        <p><span>2人开团</span><br><s>原价￥{{info.originalPrice}}</s></p>
      </li>
      <li>已团5421件</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "pintuandetail",
        props:['info'],
    }
</script>

<style scoped>

</style>
