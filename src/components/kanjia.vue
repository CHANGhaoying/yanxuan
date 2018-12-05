<template>
    <div class="kanjia">
        <p><i class="iconfont icon-fanhui" @click='back'></i>
        &nbsp;&nbsp;&nbsp;&nbsp;全民砍价 &nbsp;&nbsp;<i class="iconfont icon-rightarrow" @click="go"></i></p>
        <ul>
            <li v-for="(i,x) in kanjiaList" :key='x'>
            <router-link :to='"/detail?id="+i.id'><img :src="i.pic" alt=""></router-link>
                <dl>
                    <dt>{{i.name}}</dt>
                    <dd>{{i.characteristic}}</dd>
                    <dt>
                        <p><span>￥{{i.minPrice}}</span><span>底价</span></p>
                        <p><span>￥{{i.originalPrice}}</span><span>原价</span></p>
                        <p><span>{{i.stores}}件</span><span>限量</span></p>
                    </dt>
                </dl>
            </li>
           
        </ul>
    </div>
</template>
<script>
import myvue from '../myvue'
import Axios from 'axios'
import wx from 'weixin-js-sdk'
export default {
    data() {
        return {
            //kanjiaList:[]
        }
    },
    computed:{
        kanjiaList() {
            let data =  this.$store.state.list;
            return data.filter(i => {
                return i.kanjia == true
            })
        }
    },
    created() {//650 https://api.it120.cc/small4/shop/goods/kanjia/join
    //    Axios.get('https://api.it120.cc/small4/shop/goods/kanjia/list').then(res => {
    //        console.log(res)
    //    })

    //    Axios.get('https://api.it120.cc/small4/shop/goods/kanjia/my?kjid=650&token=1aa2bb23-84be-43af-a8fb-2f22fdfbf153').then(res => {
    //        console.log(res)
    //    })

    //     Axios.get('https://api.it120.cc/small4/shop/goods/kanjia/join?kjid=650&token=1aa2bb23-84be-43af-a8fb-2f22fdfbf153').then(res => {
    //        console.log(res)
    //    })
        let url = location.href.split('#')[0]
        //console.log(wx)
        Axios.get('http://www.wyunfei.com/tp/WeChat/?url='+url
        /* ,{'url':'file:///E:/%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%88%86%E4%BA%AB.html'} */).then(res => {
            wx.config({
                debug:true,
                appId:res.appId,
                timestamp:res.timestamp,
                signature:res.sign,
                nonceStr:res.nonceStr,
                jsApiList:[
                    // 所有要调用的 API 都要加到这个列表中
                    'onMenuShareTimeline',       // 分享到朋友圈接口
                    'onMenuShareAppMessage'  //分享给好友
                ]
            });
            wx.ready(function(){
                wx.onMenuShareTimeline({
                    title: '今天是个好天气，大家都在努力学习~朋友圈分享测试',
                    desc:"测试分享",
                    link: "http://www.wyunfei.com/pay1.html",
                    imgUrl: 'http://www.wyunfei.com/1.png',
                    success: function (res) {
                        alert('分享成功');
                        console.log(res)
                    },
                })
                // wx.onMenuShareAppMessage({
                //     title: '今天是个好天气，大家都在努力学习~分享给好友测试',
                //     desc:"测试分享",
                //     link: "http://www.wyunfei.com/pay1.html",
                //     imgUrl: 'http://www.wyunfei.com/1.png',
                //     success: function (res) {
                //         alert('分享成功');
                //     },
                // })
            })
            
        })

    },
    methods: {
        back() {
            this.$router.push('/')
            myvue.$emit('back')
        },
        go() {
            this.$router.push('/kanjia')
             myvue.$emit('go')
        }
    }

}
</script>

