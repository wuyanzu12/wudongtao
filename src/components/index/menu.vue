<template>
    <div class="m-menu">
        <dl class="nav" 
            @mouseleave="menuLeave">
            <dt>全部分类</dt>
            <dd v-for="(item, index) in menuList" 
                :key="index" 
                @mouseenter="menuEnter(item)">
                <i :class="item.type"></i>
                {{item.name}}
                <span class="arrow"></span>
            </dd>
        </dl>
        
        <div v-if="curDetail" 
             class="detail" 
             @mouseenter="detailEnter"
             @mouseleave="detailLeave">
            <template v-for="(item, index) in curDetail.items" >
                <h4 :key="index">
                    {{item.title}}
                </h4>
                <span v-for="(v, i) in item.items" 
                      :key="v + '_'+ i">
                        {{v}}
                </span>
            </template>
        </div>
    </div>
</template>
<script>
import api from '@/api/index.js'
export default {
    data() {
        return {
            // menuList: [
            //     {
            //         title: '美食',
            //         icon: 'food',
            //         children: [{
            //             title: '美食',
            //             children: ['代金券', '甜点饮品', '大锅自助']
            //         }]
            //     },
            //     {
            //         title: '外卖',
            //         icon: 'takeout',
            //         children: [{
            //             title: '美食',
            //             children: ['美团外卖']
            //         }]
            //     },
            //     {
            //         title: '酒店',
            //         icon: 'hotel',
            //         children: [{
            //             title: '酒店星级',
            //             children: ['经典型', '舒适性', '高档四星', '豪华五星']
            //         }]
            //     }
            // ],

            curDetail: null,
            menuList: []
        }
    },
    created() {
        api.getMenuList().then(res => {
            if (res.data.status == 'success') {
                this.menuList = res.data.data;
            }
        } )
    },
    methods: {
        menuEnter(item) {
            this.curDetail = item;
        },
        menuLeave() {
            var self = this;
            this.timer = setTimeout(function () {
                self.curDetail = null;
            }, 200);
        },
        detailEnter() {
            clearTimeout(this.timer);
        },
        detailLeave() {
            this.curDetail = null;
        }
    }
}
</script>

