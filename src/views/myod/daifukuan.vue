<template>
    <ul class="daifukuan">
      <li>
        <p></p>
        <p><span>下单时间：132565151</span><a href="#">经发局</a></p>
        <p>订单号:88888888888</p>
        <p><a href="#"><img src="" alt=""></a></p>
        <div>
          <p>合计：￥499</p>
          <p><span>取消订单</span><span>立即支付</span></p>
        </div>
      </li>
    </ul>
</template>

<script>
export default {
  sname: "daifukuan",
  computed: {
    orderlist() {
      return this.$store.state.orderlist
    }
  },
  methods: {
    goodsMap(id) {
      console.log(id.toString())
      let a=id.toString()
      console.log(this.orderlist.goodsMap)
    },


  }
}
</script>

<style scoped>

</style>
