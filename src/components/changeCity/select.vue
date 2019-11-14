<template>
    <div :class="['choose-wrap', disabled ? 'disbaled-wrap' : '']" 
         @click="showWrapper" 
         v-document-click="documentClick" >
        <div :class="['choose', chooseClass+'-choose']">
            <span>{{value}}</span>
            <i class="el-icon-caret-bottom"></i>
            <div :class="{'mt-content': true, 'active': showWrapperActive}">
                <h2>{{title}}</h2>
                <div class="wrapper">
                    <div class="col" 
                         v-for="(col, index) in colList" 
                         :key="index">
                        <span :class="{'mt-item': true, 'active': item == value}" 
                              v-for="(item, index) in col" 
                              :key="index" 
                              @click="changeValue(item)">
                               {{item.name}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    props: [
        "list", // 下拉框数据的渲染
        "title", // 下拉框内的表头名
        "value", // 传输入框的默认值
        "showWrapperActive", // 下拉框是显示与否
        "disabled", // 输入框是否能被点击
        "chooseClass" // 添加特殊类名
    ],
    computed: {
        colList: function () {
            let col = Math.ceil(this.list.length / 12); // 多少列
            let result = [];
            for (var i = 0; i < col; i++) {
                result.push(this.list.slice(i * 12, i * 12 + 12));
            }
            return result;
        }
    },
    methods: {
        showWrapper(e) { 
            if (this.disabled) {
                return false;
            }
            e.stopPropagation(); // 阻止事件冒泡
            this.$emit('change_active', true);
        },
        documentClick() {
            this.$emit('change_active', false);
            // console.log('document-click');
        },
        changeValue(item) { // 传入点击的值
            this.$emit('change', item);
        }
    }
}
</script>
<style lang="scss">
    @import "@/assets/css/changecity/select.scss";
    .disbaled-wrap {
        cursor: not-allowed;
    }
    .choose-wrap.disbaled-wrap > .choose {
        cursor: not-allowed;
    }
</style>


