<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location" />
            {{$store.state.position.name}}

            <!-- 切换城市是一个按钮 -->
            <router-link class="changeCity" 
                         :to="{name: 'changeCity'}">
                切换城市
            </router-link>
            [
               <a href="#" 
                  v-for="item in $store.state.position.nearCity"
                  :key="item.id">
                  {{item.name}}
                </a>
            ]
        </div>
        
        <div class="m-user" v-if="!$store.state.user">
            <router-link class="login" 
                         :to="{name: 'login'}">
                立即登录
            </router-link>
            <router-link class="register" 
                         :to="{name: 'register'}">
                注册
            </router-link>
        </div>
        <div class="m-user" v-else>
            <router-link class="login" 
                         :to="{name: 'user'}">
                         {{$store.state.user}}
            </router-link>
            <router-link class="register" 
                         :to="{name: 'exit'}">
                         推出
            </router-link>
        </div>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    // data() {
    //     return {
    //         nearCity: [],
    //     }
    // },
    // watch: {
    //     $store.state.position: function() {
    //         this.nearCity = $store.state.position.nearCity;
    //     }
    // },
    created() {
        api.getCurPoisition().then((res) => {
            this.$store.dispatch('setPosition', res.data.data);   
        })
    },
}
</script>


