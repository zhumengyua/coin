<template>
    <head-nav></head-nav>
    <div class="main_bg">
        <div class="content">
            <div class="main_content">
                <div class="left-bg">
                    <span class="left_name one">
                        狮首
                    </span>
                    <span class="left_name two">
                        虎首
                    </span>
                    <span class="left_name three">
                        豹首
                    </span>
                </div>
                <div class="right-bg">
                    <div class="right_question">
                        <span>
                            请问这模塑科技市第六届卡尔看李佳琦断开连接俺都快
                            来第三款权威的记录卡大家来看爱我的快乐骄傲地离开家塞德里克甲氨蝶呤就是

                        </span>
                        <span>
                            （请拖动金币至您认为正确的答案）
                        </span>

                        <div class="coin_box">
                            <img :src="coin" alt="请拖动金币至您认为正确的答案">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import coin from '@/assets/game/coin.png'
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

.main_content {
    clear: both;
    // border: 1px solid red;
    width: 100%;
    height: 100%;
    position: relative;

    .left-bg {
        // margin-top: 1.40em;
        // margin-left: 0.56em;
        width: 15.00em;
        height: 5.00em;
        // max-width: 1585px;
        // max-height: 552px;
        background-image: url('@/assets/game/left-bg.png');
        background-size: 100% 100%;
        position: absolute;
        top: 1.4em;
        left: 0.56em;

        .left_name {
            font-size: 0.5em;
            color: #efdebd;
            font-family: '宋体';
            font-weight: bold;
            text-align: center;
            position: relative;

        }

        .one {
            left: 2.6em;
            top: 0.8em;
        }

        .two {
            left: 6.1em;
            top: 0.8em;
        }

        .three {
            left: 9.4em;
            top: 0.8em;
        }
    }

    .right-bg {

        width: 6.7em;
        height: 6.7em;
        background-image: url('@/assets/game/right-bg.png');
        background-size: 100% 100%;
        position: absolute;
        right: 0.4em;
        top: 0.25em;

        .right_question {
            width: 80%;
            height: 5em;
            max-width: 500px;
            // border: 1px solid red;
            margin: 0 auto;
            margin-top: 1em;
            font-family: '宋体';

            >span {
                display: block;
                font-size: 0.2em;
                line-height: 2em;
            }

        }

        .coin_box {
            width: 2em;
            height: 2em;
            position: absolute;
            bottom: 1.2em;
            left: calc(50% - 1em);

            >img {
                width: 100%;
                height: 100%;
            }
        }
    }

}
</style>