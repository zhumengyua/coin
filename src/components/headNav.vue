<template>
    <div class="head_bg">
        <div class="content">
            <div class="nav_box">
                <ul class="nav_img">
                    <li v-for="(item, i) in navData" :key="i + 'nav'">
                        <img class="imgs" @click="link(`/${item.path}`)"
                            :src="navActive === String(`/${item.path}`) || navActive === item.path ? item.active : item.nav"
                            alt="item.alt">
                    </li>
                </ul>

            </div>
            <div class="head_logo" v-if="navActive != '/'">
                <img class="logo" :src="logo" alt="流金丝路">
            </div>

        </div>
    </div>
</template>
    
<script setup>
import indexNav from '@/assets/nav/nav-index.png'
import indexNavActive from '@/assets/nav/nav-index-active.png'
import importNav from '@/assets/nav/nav-import.png'
import importNavActive from '@/assets/nav/nav-import-active.png'
import distributionNav from '@/assets/nav/nav-distribution.png'
import distributionNavActive from '@/assets/nav/nav-distribution-active.png'
import allNav from '@/assets/nav/nav-all.png'
import allNavActive from '@/assets/nav/nav-all-avtive.png'
import logo from '@/assets/nav/nav-logo.png'
// nav-all-avtive
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router'
const navActive = ref('')
const navData = reactive([
    {
        path: 'index',
        nav: indexNav,
        active: indexNavActive,
        alt: '首页'
    },
    {
        path: 'import',
        nav: importNav,
        active: importNavActive,
        alt: '重要钱币'
    },
    {
        path: 'distribution',
        nav: distributionNav,
        active: distributionNavActive,
        alt: '钱币分布'
    },
    {
        path: 'all',
        nav: allNav,
        active: allNavActive,
        alt: '钱币总览'
    }
])
let router = useRouter()
navActive.value = String(router.currentRoute.value.path)
const link = (val) => {
    router.push(val)
}
</script>

<style lang="scss" scoped>
.head_bg {
    background-image: url('@/assets/nav/index-heard.png');
    background-size: 100% 100%;
    width: 100%;
    height: 2em;
    max-height: 200px;
    z-index: 9;
    position: absolute;
    top: 0;
    left: 0;
}

.nav_box {
    // border: 1px solid red;
    width: 5.62em;
    max-width: 562px;
    height: 0.52em;
    max-height: 52px;
    margin-top: 0.78em;
    float: right;
    margin-right: 0.66em;

    .nav_img {
        margin: 0;
        padding: 0;
        clear: both;
        height: 100%;
        width: 100%;

        .imgs {
            display: block;
            float: left;
            width: 1.40em;
            height: 0.52em;
            cursor: pointer;
        }
    }
}

.head_logo {
    margin-left: 0.3em;
    padding-top: 0.24em;

    .logo {
        width: 3.55em;
        height: 3.10em;
        max-width: 355px;
        max-height: 310px;
    }
}
</style>