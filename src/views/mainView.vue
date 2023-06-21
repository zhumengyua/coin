<template>
    <head-nav></head-nav>

    <div class="main_bg">
        <div class="content">
            <div class="index_content">
                <div class="index_text">
                    <span>
                        <p>19世纪的德国地理学家费迪南·冯·李希霍芬（Ferdinand von Richthofen）在地图上画的一条线揭开了丝绸之路的神秘面纱。之后，德国历史学家阿尔巴特·赫尔曼（A
                            Herrmann）将这条路的概念拓展到丝绸等商品能达到的国家和地区，从地理上把这条横跨亚欧大陆的通道延伸到地中海和小亚细亚，这就明确了丝绸之路的基本内涵，即古代至中世纪中国经中亚通往南亚、西亚及欧洲、北非的陆上贸易通道。
                        </p>
                        <p>自公元前2世纪起，中国的丝绸、茶叶、铁器、铜器、漆器和地中海及印度等地的玻璃、宝石、香料、马匹等商品就沿着这条商路来来往往、川流不息，沿途各国铸造的金银货币就是贸易繁荣的见证。
                        </p>
                        <p>
                            最早铸造金银币的是公元前7世纪小亚细亚的吕底亚王国。古希腊城邦商业贸易成就了古希腊多姿多彩的金银币，内容涉及神话宗教、地域风情、动物植物等。公元前4世纪，随着亚历山大大帝的东征，希腊化地区金银币的风格影响到了西至地中海东至印度的广大地区。公元7世纪中叶，阿拉伯人在征服伊朗和中亚后，将伊斯兰教带入东方。伊斯兰控制区域的流通钱币被重新设计，去掉帝王神祗头像，钱币的两面写上古兰经经文。
                        </p>
                        <p>古代丝绸之路沿途众多民族和国家的金银货币，不仅是见证古代中国与世界各国商业贸易，更重要的是文化融合的重要文物。
                        </p>
                    </span>

                </div>
            </div>

        </div>
    </div>
</template>
    
<script setup>
import headNav from '@/components/headNav.vue';

</script>
    
<style scoped lang="scss">
.main_bg {
    background-image: url('@/assets/index/index-bg.png');
    background-size: 100% 100%;
    width: 100%;
    height: calc(100vh - 2.5em);
    margin-top: -1px;
    left: 0;
    clear: both;
    position: absolute;
    top: 1.8em;

    .index_content {
        background-image: url('@/assets/index/index-content.png');
        background-size: 100% 100%;
        width: 18em;
        height: 7.25em;
        margin-top: 0.36em;
        margin-left: 0.5em;

        .index_text {
            width: 6.3em;
            height: 4.2em;
            overflow-y: scroll;
            float: right;
            margin-right: 2em;
            margin-top: 1.72em;

            >span {
                color: white;
                display: block;
                font-size: 0.2em;
                line-height: 2em;
                text-indent: 2em;

                >p {
                    padding: 0;
                    margin: 0;
                }
            }
        }

    }
}
</style>