<template>
    <head-nav></head-nav>

    <div class="main_bg">
        <div class="content">
            <div class="carousel">
                <div class="carousel_item previous_left" @click="clickBtn(inStage - 2, 'previous_tow')">
                    <div class="img_cover" v-show="dataList[inStage - 2] ?? false">
                        <h1>{{ dataList[inStage - 2]?.name }}</h1>
                        <h3>{{ dataList[inStage - 2]?.weight }}</h3>
                        <img :src="getinfoImg(dataList[inStage - 2]?.images)" />
                        <div class="info" v-html="dataList[inStage - 2]?.info"></div>
                    </div>
                </div>
                <div class="carousel_item previous" @click="clickBtn(inStage - 1, 'previous')">
                    <div v-show="dataList[inStage - 1] ?? false" class="img_cover">
                        <h1>{{ dataList[inStage - 1]?.name }}</h1>
                        <h3>{{ dataList[inStage - 1]?.weight }}</h3>
                        <img :src="getinfoImg(dataList[inStage - 1]?.images)" />
                        <div class="info" v-html="dataList[inStage - 1]?.info"></div>
                    </div>
                </div>
                <div class="carousel_item medium" @click="clickBtn(inStage, 'medium')">
                    <div class="img_cover">
                        <h1>{{ dataList[inStage]?.name }}</h1>
                        <h3>{{ dataList[inStage]?.weight }}</h3>
                        <img :src="getinfoImg(dataList[inStage]?.images)" />
                        <div class="info" v-html="dataList[inStage]?.info"></div>
                    </div>
                </div>
                <div class="carousel_item next" @click="clickBtn(inStage + 1, 'next')">
                    <div v-show="dataList[inStage + 1] ?? false" class="img_cover">
                        <h1>{{ dataList[inStage + 1]?.name }}</h1>
                        <h3>{{ dataList[inStage + 1]?.weight }}</h3>
                        <img :src="getinfoImg(dataList[inStage + 1]?.images)" />
                        <div class="info" v-html="dataList[inStage + 1]?.info"></div>
                    </div>
                </div>
                <div class="carousel_item next_right" @click="clickBtn(inStage + 2, 'next_tow')">
                    <div v-show="dataList[inStage + 2] ?? false" class="img_cover">

                        <h1>{{ dataList[inStage + 2]?.name }}</h1>
                        <h3>{{ dataList[inStage + 2]?.weight }}</h3>
                        <img :src="getinfoImg(dataList[inStage + 2]?.images)" />
                        <div class="info" v-html="dataList[inStage + 2]?.info"></div>
                    </div>
                </div>

                <div class="carousel_thumbnail ">
                    <div class="carousel_arrow arrow_left" @click="leftClick">
                        <img :src="left">
                    </div>

                    <div id="carousel_thumbnail" class="thumbnail_item_box">
                        <div v-for="(item, index) in dataList" id="thumbnail_item" :key="index"
                            :class="inStage === index ? 'thumbnail_item_active' : ''"
                            :style="{ 'transform': `translateX(${leftRoll}px)`, '-webkit-transform': `translateX(${leftRoll}px) ` }"
                            class="thumbnail_item">
                            <img :src="geticonImg(item.images)">
                        </div>
                    </div>

                    <div class="carousel_arrow arrow_right" @click="rightClick">
                        <img :src="right">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import headNav from '@/components/headNav.vue';
import { ref, onMounted } from "vue";
import left from "@/assets/import/left-btn.png";
import right from "@/assets/import/right-btn.png";

const getinfoImg = (name) => {
    return `/src/assets/import/coin${name}`
}
const geticonImg = (name) => {
    return `/src/assets/import/${name}`
}
const dataList = [
    {
        name: '吕底亚王国狮子',
        info: '公元前646 -前610年，正面为怒吼狮首，背面为两个方形压印。此币被认为是西方货币体系中最古老的金属币之一。',
        weight: '1/3标准重琥珀金币',
        images: '01.png'
    },
    {
        name: '吕底亚狮子公牛',
        info: '<p>吕底亚王国克罗伊索斯时期（公元前560-前547年）萨第斯城打制，正面是迎面相对的狮子和公牛，背部是两个方形压印。</p><p>吕底亚国王克罗伊索斯因他的巨额财富而青史留名。西方有谚语“as rich as Croesus”（像克罗伊索斯一样富有）。这种银币也是世界上最早的银币。</p>',
        weight: '半斯塔特银币',
        images: '02.png'
    }, {
        name: '阿契美尼德王朝',
        info: '公元前490-前400年波斯造币厂打制。正面为一个年迈的国王头戴芒冠手持弓箭和矛半跪侧面像，是世界上最早的帝王像金币。',
        weight: '1大流克金币',
        images: '03.png'
    }
    , {
        name: '古希腊雅典城',
        info: '<p>公元前480-前475年雅典城打制，正面雅典城守护神雅典娜戴橄榄枝花环阿提卡式头盔头像，背面猫头鹰，橄榄枝，新月和雅典的缩写文字“ΑΘΕ”。</p><p>雅典娜是战神、智慧和雅典城的守护神。猫头鹰是雅典城的守护鸟，为雅典娜传递消息，是“智慧”的象征。早期猫头鹰银币没有花环装饰。前480年以后的猫头鹰银币在雅典娜阿提卡式头盔上装饰橄榄枝花环，据说是为了纪念希腊人战胜薛西斯波斯大军。这是雅典鼎盛时期的主要货币，也是地中海地区的硬通货。</p>'
        , weight: '4德拉克马银币',
        images: '04.png'
    }, {
        name: '托勒密王朝亚历山大大帝',
        info: '<p>公元前316年推罗造币厂打制，正面为戴狮皮大力神头像，背面为持鹰宙斯坐像与国王名。在宙斯托鹰的胳膊下方有四个腓尼基字母表明了年号“RY34”，属于旧推罗国王阿则米卡斯记年，准确的说是公元前316年。</p><p>公元前323年亚历山大大帝驾崩后，爆发了著名的继业者战争。马其顿的腓力三世、埃及的托勒密一世、马其顿的独眼将军安提柯一世和亚洲的塞琉古等人都相继获得过推罗的统治权。<p><p>从打制风格来看，该币已经有成熟的希腊化风格，正面赫拉克勒斯和狮皮头盔的机理结构比例都恰到好处，背面的宙斯也不是之前那种呆板的东方风格，而更富人性化。<p>',
        weight: '4德拉克马银币',
        images: '05.png'
    }, {
        name: '色雷斯王国利西马科斯',
        info: '<p>公元前297-前281年兰普萨柯斯造币厂打制。正面为亚历山大大帝戴阿蒙神公羊角像，背面为手持胜利女神和长矛的雅典娜坐像，右下方有一盾牌，下方有一个几何纹饰。</p><p>利西马科斯是亚历山大大帝的近身护卫官之一，亚历山大逝世后作为继业者之一，夺取了色雷斯和小亚西亚地区并于公元前306年称王，建立阿加索克利斯王朝，成为色雷斯王国及小亚细亚国王、马其顿国王。</p><p>公元前331年亚历山大曾访问埃及锡瓦阿蒙神庙祈求神谕，并自称为阿蒙神之子，公羊是阿蒙的神兽。利西马科斯在前297年打制亚历山大大帝像钱币时，就将公羊角戴在了亚历山大大帝头上，意思是受了神的庇护，是神的化身。</p>'
        , weight: '4德拉克马银币',
        images: '06.png'
    }, {
        name: '罗马共和国',
        info: '公元前2世纪发行。正面为戴盔罗马女神头像，背面为维多利亚胜利女神四马双轮战车，下面是制币官名和罗马（ROMA）。'
        , weight: '1第纳尔银币',
        images: '07.png'
    }, {
        name: '帕提亚王朝阿塔巴努斯一世',
        info: '约公元前127-前124年。正面国王束头带面左胸像，背面牧人持弓面右坐于脐石上，币文“尊父为神的大王阿萨克斯”。',
        weight: '1德拉克马银币',
        images: '08.png'
    }, {
        name: '拜占庭帝国阿卡狄乌斯',
        info: '公元397-402年，正面为皇帝阿卡狄乌斯头像与名称头衔，背面为君士坦丁堡女神持胜利女神加冕花环。',
        weight: '1索里德金币',
        images: '09.png'
    },
    {
        name: '巴克特里亚-希腊王朝狄奥多托斯一世',
        info: '公元前256-前248年艾哈农造币厂打制。正面国王束头带面右头像，背面宙斯左手托神盾右手持霹雳左行像，左右希腊文“安条克国王”。此时,狄奥多托斯一世还是塞琉古王朝的行省，所以以安条克的名义制造钱币。',
        weight: '1斯达特金币',
        images: '10.png'
    }, {
        name: '巴克特里亚-希腊王朝德米特里乌斯一世',
        info: '公元前200-前185年木鹿造币厂打制。正面头戴象鼻盔王国头像，背面赫拉克勒斯一手自行加冕，一手持棍棒及狮皮裸体正面站像。币文为“德米特里乌斯国王”,象鼻盔正是德米特里乌斯南征印度胜利的象征。',
        weight: '4德拉克马银币',
        images: '11.png'
    }, {
        name: '印度-希腊王朝米南德一世',
        info: ' <p>公元前160-前145年塔克西拉造币厂打制。正面为国王米南德一世头像，周围是希腊语米南德国王，背面为雅典娜女神手持神盾和雷电球站像，周围是佉卢文。 </p><p>米南德一世是德米特里乌斯二世之子，攸克拉提底斯一世副王。印度-希腊王朝最著名的君王之一。他大力推崇佛教，与孔雀王朝的阿育王、贵霜王朝的伽腻色伽一世并称为佛教的三大护法王。</p>',
        weight: '1德拉克马银币',
        images: '12.png'
    }, {
        name: '印度塞克王朝阿泽斯二世',
        info: '公元前35-前12年。正面国王骑马右行像，外圈希腊文“王中之王阿泽斯大王”。背面宙斯一手握权杖一手托奈克女神面左站像，外圈佉卢文“王中之王阿泽斯”。',
        weight: '4德拉克马银币',
        images: '13.png'
    }, {
        name: '贵霜王朝国王威玛·卡德菲西斯',
        info: '约公元110-127年。正面国王右手持大头棒垂腿面左坐像，单侧焰肩，外圈希腊文1点钟位置起“威玛卡德菲西斯国王”。背面持三叉戟面左裸身的湿婆及神牛，外圈佉卢文“伟大的国王，王中之王，世界之主，伟大的主，威玛卡德菲西斯，救星”。',
        weight: '2第纳尔金币',
        images: '14.png'
    }, {
        name: '贵霜萨珊王朝阿达希尔一世',
        info: '<p>公元230-250年。正面国王着戎装右手给祭坛敬献左手持三叉戟面左站像，祭坛旁有三叉戟，外圈贵霜文“王中之王，贵霜王婆苏提婆”。背面是持三叉戟的湿婆及神牛，头部有新月纹及头光，右侧贵霜文“奥索”。左上侧为婆苏提婆一世国王徽记。</p><p>公元230年，萨珊王朝国王阿达希尔一世灭帕提亚王朝后继续东进，占领巴克特里亚。公元240-270年间，其子沙普尔一世占领塔克西拉、犍陀罗等地，建立印度-萨珊王朝。公元410年，嚈哒人灭印度-萨珊王朝，建立印度-嚈哒王朝。</p>',
        weight: '1第纳尔金币',
        images: '15.png'
    }, {
        name: '萨珊王朝沙普尔一世',
        info: '公元241-272年。正面国王戴球髻城齿冠面右胸像，外圈巴列维文“天降伊朗的王中之王，马兹达的崇拜者，神圣的沙普尔”，背面是国王与祭司分站在祭火坛两侧，币文“沙普尔之火”。',
        weight: '1第纳尔金币',
        images: '16.png'
    }, {
        name: '贵霜萨珊王朝巴赫兰二世',
        info: '公元325-350年。正面国王戴双羊角冠，顶部有花球，头后有双飘带，身着戎装右手给祭坛敬献左手持三叉戟面左站像，双侧焰肩，左臂下有3个点，祭坛旁有三叉戟，右侧是寄多罗王族徽记，上有万字符，外圈贵霜文“巴赫兰大王，贵霜的国王”。背面是持三叉戟的湿婆及神牛，右侧贵霜文“至尊的神祗”。',
        weight: '1第纳尔金币',
        images: '17.png'
    }, {
        name: '寄多罗王朝寄多罗王',
        info: '公元360-380年，塔克西拉地区。正面国王着戎装右手给祭坛敬献左手持矛面左站像，祭坛旁有三叉戟，右侧婆罗米铭文“贵霜”，左臂下婆罗米文“寄多罗”，祭坛右侧婆罗米文“卡潘”及花团。背面丰饶女神右手持绶带左手捧丰饶角坐像，左上侧为徽记。',
        weight: '1第纳尔金币',
        images: '18.png'
    }, {
        name: '阿拉伯帝国阿巴斯王朝金币',
        info: '公元750-860年，正背面都是伊斯兰清真言，万物非主唯有真主，穆罕默德真主使者。该币是中世纪世界上最著名的金币之一，以其很高的含金量而广受欢迎，当时曾广泛流通于从北欧到北非的广大地域，阿拉伯故事集《一千零一夜》中提到的金币就是这种。',
        weight: '',
        images: '19.png'
    }, {
        name: '犍陀罗',
        info: '公元前500-前400年。正面是凹印六臂符，背面光面。',
        weight: '16分之1萨塔玛纳银币',
        images: '20.png'
    },
]
const inStage = ref(0);
const leftRoll = ref(0);
const centerValue = ref(0);
const lastStage = ref(0);
const clickBtn = (index, type) => {
    if (type === "previous") {
        if (leftRoll.value != 0) {
            leftRoll.value = leftRoll.value + 80;
        }
    }
    if (type === "previous_tow") {

        if (leftRoll.value != 0) {
            leftRoll.value = leftRoll.value + 160;
        }
    }
    if (type === "next") {
        if (!((inStage.value + centerValue.value) >= dataList.length) && !(inStage.value < centerValue.value)) {
            leftRoll.value = leftRoll.value - 80;
        }
    }
    if (type === "next_tow") {
        if (!((inStage.value + centerValue.value) >= dataList.length) && !(inStage.value < centerValue.value)) {
            leftRoll.value = leftRoll.value - 160;
        }
    }
    if (index > -1 && !(index - 1 > dataList.length - 2)) {
        inStage.value = index;
    }

};

const leftClick = () => {
    if (leftRoll.value != 0) {
        //如果left偏移=0,则说明是开始的时候
        leftRoll.value = leftRoll.value + 80;
    }
    if (inStage.value > 0) {
        inStage.value = Math.abs(inStage.value) - 1;
    }
};
const rightClick = () => {
    if (!(inStage.value > dataList.length - 2)) {
        //如果是最后一个 就不要动了
        inStage.value = Math.abs(inStage.value) + 1;
        if (!((inStage.value - centerValue.value) < centerValue.value)) {
            leftRoll.value = leftRoll.value - 80;
        }
    }
};

onMounted(() => {
    let boxWidth = document.getElementById("carousel_thumbnail").offsetWidth;
    let marginLeft = getStyle(document.getElementById('thumbnail_item'), "marginLeft")
    marginLeft = String(marginLeft).replace('px', '')

    let oneWidth = document.getElementById("thumbnail_item").offsetWidth + Number(marginLeft);
    //居中选择第几个在中间
    inStage.value = Math.ceil(Math.floor(boxWidth / oneWidth) / 2);
    centerValue.value = Math.ceil(Math.floor(boxWidth / oneWidth) / 2);
    lastStage.value = dataList.length - centerValue.value;

})
const getStyle = (obj, attr) => {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return document.defaultView.getComputedStyle(obj, null)[attr];
    }
}


</script>
    
<style scoped lang="scss">
@import url('@/assets/font.css');

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

.import_content {
    position: relative;
    background-image: url('@/assets/import/card-bg.png');
    background-size: 100% 100%;
    width: 10em;
    height: 6.4em;
    margin: 0 auto;
    margin-top: 0.36em;
    z-index: 3
}

.previous,
.next {
    width: 8em;
    height: 5.12em;
    z-index: 2;
}

.previous_left,
.next_right {
    width: 6.4em;
    height: 4.1em;
    z-index: 0;
}

.previous_left,
.previous {
    float: left;
}

.next_right,
.next {
    float: right;
}

.carousel {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
    width: 18em;
    // max-width: 1000px;
    height: 8em;
    position: relative;
    display: flex;
    transition: width 2s;
    -webkit-transition: width 2s;
    /* Safari */
    transition-duration: .25s, 1s;
    transition-timing-function: ease;
    margin: 0.3em auto 0 auto;

    .carousel_thumbnail {
        z-index: 20;
        position: absolute;
        width: 16em;
        background-image: url('@/assets/import/list-ground.png');
        transform: translate(-50%, -50%);
        left: 50%;
        bottom: 0;

        .thumbnail_item_box {
            float: left;
            display: flex;
            width: 96%;
            margin: 0 30px;
            height: 1.2em;
            overflow: hidden;

            .thumbnail_item {
                position: relative;
                width: 0.72em;
                height: 0.72em;
                margin-left: 0.1em;
                width: 100%;

                >img {
                    // display: block;
                    width: 0.72em;
                    height: 0.72em;
                }
            }

            .thumbnail_item:before {
                content: "";
                position: absolute;
                top: 0.32em;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.8);
                opacity: 0;
                transition: opacity .5s;
                opacity: 1;
            }
        }


        .thumbnail_item_active.thumbnail_item:before {
            opacity: 0;
        }

        .carousel_arrow {
            position: absolute;
            z-index: 11;
            cursor: pointer;
            margin: 0;

            >img {
                display: block;
                z-index: 11;
                margin-top: 0.45em;
            }
        }

        .arrow_left {
            left: 0;
            margin-left: -0.15em;

        }

        .arrow_right {
            right: 0;
            margin-right: -0.15em;
        }
    }



    .carousel_item {
        cursor: pointer;
        height: 100%;
        width: 10em;
        position: relative;

        .img_cover {
            background-image: url('@/assets/import/card-bg.png');
            width: 10em;
            height: auto;
            position: absolute;

            color: white;

            >* {
                width: 80%;
                // border: 1px solid red;
                float: left;
                text-align: left;
            }

            >h1 {
                font-size: 0.4em;
                margin: 0;
                margin-left: 6rem;
                margin-top: 0.8em;
                padding: 0;
                font-family: syBlod;

            }

            >h3 {
                width: 80%;
                margin: 0;
                padding: 0;
                font-size: 0.3em;
                font-weight: 500;
                margin-left: 6rem;
                margin-top: 0.2em;
                font-family: syMedium;


            }

            ::v-deep>div>p {
                margin: 0;
                padding: 0;
            }

            >img {
                width: 6.5em;
                height: 3.2em;
                opacity: 1;
                //height: auto;
                display: block;
                float: right;
                margin-right: 0.72em;
                margin-top: 0.2em;
            }

            .info {
                max-width: 85.6em;
                max-height: 8rem;
                overflow: scroll;
                float: left;
                margin-left: 6rem;
                margin-top: 10px;
            }

        }

    }


    .medium {
        width: 10em;
        z-index: 9;
        height: 6.4em;

        //top: 50%;
        //left: 50%;
        .img_cover {
            width: 10em;
            height: 6.4em;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;

            >img {
                width: 6.5em;
                height: 3.2em;
                opacity: 1;
            }

            >div {
                font-size: 0.2em;
            }

        }
    }


    .previous,
    .next {
        z-index: 8;

        .img_cover {
            width: calc(10em * 0.8);
            height: calc(6.4em *0.8);
            transform: translate(-40%, -50%);
            top: 40%;
            left: 50%;

            >h1 {
                font-size: 0.35em;
            }

            >h3 {
                font-size: 0.28em;
            }

            >img {
                width: calc(6.5em *0.7);
                height: calc(3.2em *0.7);
            }

            >div {
                font-size: 0.15em;
            }

            .info {
                max-height: calc(8em *0.7);
            }

        }

        .img_cover:before {
            content: "";
            position: absolute;
            // top: 0.32em;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            opacity: 0;
            transition: opacity .5s;
            opacity: 1;
        }
    }

    .next {
        .img_cover {
            transform: translate(-40%, -50%);
            top: 40%;
            left: 10%;
        }
    }

    .previous_left {
        .img_cover {
            transform: translate(-50%, -30%);
            top: 30%;
            left: 100%;
        }
    }

    .next_right {
        .img_cover {
            transform: translate(-50%, -30%);
            top: 30%;
            left: 0%;
        }
    }

    .previous_left,
    .next_right {
        z-index: 6;

        .img_cover {
            width: calc(10em * 0.64);
            height: calc(6.4em *0.64);
            // transform: translate(-50%, -30%);
            // top: 30%;
            // left: 30%;

            >img {
                width: calc(6.5em *0.5);
                height: calc(3.2em *0.5);
            }

            >h1 {
                font-size: 0.31em;
            }

            >h3 {
                font-size: 0.24em;
            }

            >div {
                font-size: 0.15em;
            }

            .info {
                max-height: calc(8em *0.5);
            }
        }

        .img_cover:before {
            content: "";
            position: absolute;
            // top: 0.32em;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            opacity: 0;
            transition: opacity .5s;
            opacity: 1;
        }

    }


}
</style>