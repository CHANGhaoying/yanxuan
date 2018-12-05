<template>
    <div class="kanjiadetail">
      <p>{{info.name}}</p>
      <p>{{info.characteristic}}</p>
      <ul>
        <li><p>底价<span>￥{{info.minPrice}}</span></p><span>原价￥{{info.originalPrice}}</span></li>
        <li>库存 {{info.stores}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "KanjiaDetail",
        props:['info'],
        

    }
</script>


