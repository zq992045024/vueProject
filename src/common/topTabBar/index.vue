<template>
    <div id="footer">
        <SearchCom />
        <ul>
            <router-link v-for="(item,index) in list" :to="item.path" tag="li" :key="index">
            <span>{{item.text}}</span>
            </router-link>
        </ul>
        
    </div>
</template>

<script>
    export default {
        name: "topTabBar",
        data(){
            return {
                list:[
                    {
                        path:"/show",
                        text:"演唱会",
                    },
                    {
                        path:"/Modern",
                        text:"话剧表演",
                    },
                    {
                        path:"/Vocal",
                        text:"休闲展览",
                    },
                    {
                        path:"/Tiyu",
                        text:"体育赛事",
                    },
                    {
                        path:"/tour",
                        text:"旅游玩乐",
                    },
                    {
                        path:"/concert",
                        text:"音乐会",
                    },
                ]
            }
        },
        methods:{
            abc(){
            }
        }
    }
</script>

<style scoped>
    .box{
        color: red;
        font-size: .3rem;
        position: absolute;
        top: 10px;
        font-size:.4rem;
    }
    .box1 i{
        position: absolute;
        left: 60px;
        top: 10px;
        z-index: 1;
    }
    .box1 input{
        border-radius: 5px;
        background: #F5F5F5;
        width: 300px;
        text-align: center;
        position: absolute;

        left: 55px;
        height: 40px;
    }
    #footer{
        width: 100%;
        height: 180px;
        background: #ffffff;
        position: fixed;
        left: 10px;
        top: 15px;

    }
    #footer ul,#footer ul li{
        height: 100%;
        width: 100%;
        /*border-bottom: 3px solid #ff2661;*/
    }
    #footer ul {
        display: flex;
        white-space: nowrap;
        overflow: auto;
        height: 0.6rem;
    }
    #footer ul li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size:.4rem;
        margin-left: 20px;
    }
    #footer ul .router-link-active {
        color: red;
    }
    .list{
        position: absolute;
        top: 130px;
        left: 10px;

    }
    .list ul{
        display: flex;
    }
    .list ul li{
        margin-left: 40px;
        align-items: center;
        font-size:.3rem;
    }
    select{
        outline: none;
        border: none;
    }





        /*#footer{*/
        /*width: 100%;*/
        /*height: 1rem;*/
        /*position: fixed;*/
        /*left: 0;*/
        /*bottom:0;*/
        /*background: #fff;*/
        /*border-top:1px solid #ccc;*/
    /*}*/

    /*#footer ul,#footer ul li{*/
        /*width: 100%;*/
        /*height: 100%;*/
    /*}*/
    /*#footer ul{*/
        /*display: flex;*/
    /*}*/
    /*#footer ul li{*/
        /*display: flex;*/
        /*flex-direction: column;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        /*font-size:.3rem*/
    /*}*/
    /*#footer ul li i{*/
        /*font-size:.4rem;*/
    /*}*/

    /*#footer ul .router-link-active{*/
        /*color:#c33;*/
    /*}*/
    /*#footer span{*/
        /*width: 100px;*/
        /*display: block;*/
        /*color: red;*/
    /*}*/


</style>