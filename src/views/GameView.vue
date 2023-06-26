<template>
    <head-nav></head-nav>
    <div class="main_bg">
        <!-- <div class="wrapper">
            <section class="show">
                <h1>{{ h1Text }}</h1>
                <div class="tshirt">
                    <img src="" alt="">
                    <div id="empty" class="empty"></div>
                    <div id="empty" class="empty"></div>
                    <div id="empty" class="empty"></div>
                </div>
            </section>
            <section class="patterns">
                <img draggable="true" :src="coin" alt="蜡笔小新">
                <img draggable="true" :src="coin" alt="折木奉太郎">
                <img draggable="true" :src="coin" alt="樱木花道">
            </section>
        </div> -->
        <div class="content">
            <div class="main_content">
                <div class="left-bg">

                    <div id="empty" class="left_name one empty">
                        <span>
                            {{ subjectData.answer?.[0].title }}
                        </span>
                    </div>
                    <div id="empty" class="left_name two empty">
                        <span>
                            {{ subjectData.answer?.[1].title }}
                        </span>
                    </div>
                    <div id="empty" class="left_name three empty">
                        <span>
                            {{ subjectData.answer?.[2].title }}
                        </span>
                    </div>
                </div>
                <div class="right-bg">
                    <div class="right_question">
                        <span v-show="drag">
                            {{ subjectData.subject }}
                        </span>
                        <span v-show="drag">
                            （请拖动金币至您认为正确的答案）
                        </span>
                        <span v-show="!drag">
                            <span v-html="prompt"></span>
                        </span>
                        <div class="coin_box">
                            <img :draggable="drag" :src="geticonImg(subjectData.imgs)" alt="请拖动金币至您认为正确的答案">
                        </div>
                        <div v-show="!drag" class="enter" @click="routerIndex"> <img :src="enter" /></div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import enter from '@/assets/game/enter-index.png'
import headNav from '@/components/headNav.vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'

const drag = ref(true)
const geticonImg = (name) => {
    return `/src/assets/game/${name}`
}
let router = useRouter()

const routerIndex = () => {
    router.push('/index')

}

const subject = [
    {
        subject: '猜一猜此类金币在下列哪个故事集中被广泛的提到过',
        answer: [{
            title: '阿拉伯《一千零一夜》',
            isSuer: true
        }, {
            title: '丹麦《安徒生童话》',
            isSuer: false
        }, {
            title: '中国《山海经》',
            isSuer: false
        },
        ],
        imgs: '1.png'

    },
    {
        subject: '猜一猜这枚银币属于哪个古代文明国家？',
        answer: [{
            title: '古印度',
            isSuer: false
        }, {
            title: '古希腊',
            isSuer: true
        }, {
            title: '古中国',
            isSuer: false
        },
        ],
        imgs: '2.png'
    },
    {
        subject: '这枚金币被认为是西方货币体系中最古老的金属币之一。请问金币上的纹饰是什么动物',
        answer: [{
            title: '狮首',
            isSuer: true
        }, {
            title: '虎首',
            isSuer: false
        }, {
            title: '豹首',
            isSuer: false
        },
        ],
        imgs: '3.png'

    }
]

const subjectData = ref({})
const prompt = ref('')
onMounted(() => {
    var randElement = subject[Math.floor(Math.random() * subject.length)];
    subjectData.value = randElement
    const empty = document.querySelectorAll("#empty");
    let name;
    empty.forEach((item, index) => {

        item.addEventListener("dragover", e => {
            e.preventDefault();
        }, false);

        item.addEventListener("drop", e => {
            e.preventDefault();
            e.target.appendChild(document.querySelector(`img[alt=${name}]`));
            drag.value = false
            let istrue = subjectData.value.answer.filter((i) => {
                return i.isSuer ? i : ''
            })[0]
            console.log(istrue.title)
            if (subjectData.value.answer?.[index].isSuer) {
                prompt.value = '恭喜你，答对啦！</br>正确答案是' + subjectData.value.answer?.[index].title + '。'
            } else {
                prompt.value = '抱歉，答错了！</br>正确答案是' + istrue.title + '。'
            }
        }, false);

    });
    document.addEventListener("dragstart", (e) => {
        name = e.target.alt;
    }, false);

    document.addEventListener("dragend", (e) => {
        // 拖拽结束时边框消失
        e.target.style.border = "none";
    }, false);
    // 拖动事件开始
})

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
        display: flex;

        .left_name {

            width: 2.8em;
            height: 3em;
            margin-left: 0.2em;
            margin-top: 1.5em;

            >* {
                font-size: 0.25em;
                color: #efdebd;
                font-family: '宋体';
                font-weight: bold;
                text-align: center;
                position: relative;
                text-align: center;
                display: block;
            }
        }

        .left_name:first-child {
            margin-left: 0.5em;
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

            .enter {
                width: 4.38em;
                height: 0.58em;
                // margin-top: 1em;
                margin: 0 auto;
                cursor: pointer;

                >img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .coin_box {
            width: 2em;
            height: 2em;
            // position: absolute;
            // bottom: 1.2em;
            // left: calc(50% - 1em);
            margin: 0 auto;
            margin-top: 1em;

            >img {
                width: 100%;
                height: 100%;
            }
        }
    }

}


.empty {
    width: 300px;
    height: 300px;
    display: flex;
    //margin-left: 20px;
    float: left;
    display: block;
}

.empty img {
    width: 7em;
    height: 7em;
    position: absolute;
    top: 2em;
    display: block;
    left: 2.4em;
}
</style>