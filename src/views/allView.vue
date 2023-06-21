<template>
    <head-nav></head-nav>
    <div class="main_bg">
        <div class="content">
        </div>
    </div>
</template>
    
<script setup>
import headNav from '@/components/headNav.vue';

</script>
    
<style lang="scss" scoped>
.main_bg {
    background-image: url('@/assets/nav/index-bg.png');
    background-size: 100% 100%;
    width: 100%;
    height: calc(100vh - 2.5em);
    margin-top: -1px;
    left: 0;
    clear: both;
    position: absolute;
    top: 1.8em;
}
</style>