<template>
    <head-nav></head-nav>
    <div class="main_bg">
        <div class="content">
            <div class="distribution_content">
                <div @click="locationBtn(item)" class="location" :class="item" :key="index + 'item'"
                    v-for="(item, index) in locationXY">
                    <img :src="getImg(item)" />
                </div>
            </div>
        </div>
    </div>
    <div class="dialog" v-show="dialogVisible">
        <div class="dialog_bg">
            <div class="dialog_content">
                <div class="left_img_box">
                    <div class="left_imgs" v-for="item in locationData?.imgs" :key="item.id + 'data'">
                        <img :src="getinfoImg(item.src)" />
                        <div class="imgs_text">
                            <span>
                                {{ item.info }}

                            </span>
                        </div>
                    </div>
                </div>
                <div class="right_content">
                    <h1>
                        {{ locationData?.title }}
                    </h1>
                    <h3>
                        {{ locationData?.time }}
                    </h3>
                    <div class="main_text">
                        <div v-html="locationData?.info"></div>
                    </div>
                </div>
            </div>
            <div class="dialogclose" @click="closeDialog">
            </div>
        </div>

    </div>
</template>
    
<script setup>
import headNav from '@/components/headNav.vue';

import { ref } from 'vue'

const getImg = (name) => {
    return `/src/assets/distribution/${name}.png`
}
const getinfoImg = (name) => {
    return `/src/assets/distribution/${locationType.value}/${name}.jpg`
}
const locationXY = [
    'glm', 'bzt', 'gbs', 'gzy', 'gyd', 'ysl', 'gxl'
]
const locationData = ref()
const dataList = [
    {
        id: 'gxl',
        title: '古希腊及希腊化时代',
        time: '公元前9世纪-前1世纪',
        info: '<p>广义上古希腊指的是爱琴海诸文明被罗马人征服之前的一段历史时期。公元前9世纪末期，随着海上贸易的兴盛，古希腊进入了小国寡民的城邦时期，先后在希腊本岛、地中海西岸的伊比利亚半岛、意大利南部、西西里岛、小亚细亚西部、黑海周边以及塞浦路斯岛等地建立了上百个城邦，著名的如雅典、科林斯、叙拉古等。</p><p>吕底亚王国位于小亚细亚中西部。国王克洛伊索斯统治时期，吕底亚王国征服了小亚细亚全部的希腊城邦，进入全盛时期。吕底亚王国大约在公元前7世纪开始打造金银币，是世界上最早使用钱币的国家。公元前6世纪起，古希腊各城邦间因贸易、贡税和战争等原因，也相继也开始打造钱币。</p><p>公元前336年，年仅20岁的亚历山大三世登上马其顿王国的王位，他东征波斯，横扫小亚西亚，直捣印度河流域，建立起继波斯阿契美尼德王朝之后第二个横跨亚欧非三个大洲的庞大帝国。公元前323年，亚历山大大帝英年早逝，帝国落入其将军们即继承者之手，帝国分裂为马其顿、塞琉古、托勒密、色雷斯等王国。</p><p>广义上古希腊指的是爱琴海诸文明被罗马人征服之前的一段历史时期。公元前9世纪末期，随着海上贸易的兴盛，古希腊进入了小国寡民的城邦时期，先后在希腊本岛、地中海西岸的伊比利亚半岛、意大利南部、西西里岛、小亚细亚西部、黑海周边以及塞浦路斯岛等地建立了上百个城邦，著名的如雅典、科林斯、叙拉古等。</p><p>吕底亚王国位于小亚细亚中西部。国王克洛伊索斯统治时期，吕底亚王国征服了小亚细亚全部的希腊城邦，进入全盛时期。吕底亚王国大约在公元前7世纪开始打造金银币，是世界上最早使用钱币的国家。公元前6世纪起，古希腊各城邦间因贸易、贡税和战争等原因，也相继也开始打造钱币。</p><p>公元前336年，年仅20岁的亚历山大三世登上马其顿王国的王位，他东征波斯，横扫小亚西亚，直捣印度河流域，建立起继波斯阿契美尼德王朝之后第二个横跨亚欧非三个大洲的庞大帝国。公元前323年，亚历山大大帝英年早逝，帝国落入其将军们即继承者之手，帝国分裂为马其顿、塞琉古、托勒密、色雷斯等王国。</p>'
        , imgs: [
            {
                src: '1',
                info: '萨迪斯，位于今土耳其马尼萨省境内，始建于公元前13世纪。它曾是吕底亚王国的首都，也是波斯帝国重要的城市之一，罗马帝国资深执政官的所在地，拜占庭帝国统治时期吕底亚省的省会。'
            },
            {
                src: '2',
                info: '以弗所，位于土耳其西南部，是吕底亚古城和小亚细亚西岸希腊的重要城邦。阿尔忒弥斯神庙为古代世界七大奇观之一。罗马时代以弗所是亚细亚省的首府和罗马总督驻地。以弗所是地中海东岸保存得最完好的古典城市。'
            }
            ,
            {
                src: '3',
                info: '雅典卫城，位于雅典市中心的山丘上，始建于公元前580年，最高处有供奉雅典娜女神的帕特农神庙。'
            },
            {
                src: '4',
                info: '德尔斐，位于希腊雅典以北150公里，是世界闻名的著名古迹。主要由阿波罗太阳神庙、雅典女神庙、剧场、体育训练场和运动场组成，其中最有名的是古代希腊象征光明和青春并且主管音乐、诗歌及医药、畜牧的太阳神阿波罗的神庙。古希腊人认为，德尔菲是地球的中心，是“地球的肚脐”。'
            },
            {
                src: '5',
                info: '叙拉古，位于意大利西西里岛东南沿海，公元前734年由希腊城邦科林斯殖民所建。公元前五至前四世纪势力强盛，为西西里岛东部霸主。现存的古希腊剧场气势恢宏，建于公元前五世纪。'
            },
            {
                src: '6',
                info: '神殿之谷，位于意大利西西里岛阿格里真托市。山头排列着赤色的古希腊神殿遗迹，始建于公元前5世纪。包括朱诺神殿、和谐神殿、赫拉神殿、朱庇特神殿等，保存相当完整。'
            },
            {
                src: '7',
                info: '佩特拉，位于约旦首都安曼南250公里处，隐藏在一条连接死海和阿卡巴海峡的狭窄的峡谷内。古代曾为重要的商路中心，厄多姆王国的都城，始建于公元前4世纪。因其色彩而常常被称为“玫瑰红城市”。'
            },
            {
                src: '8',
                info: '菲莱，位于埃及尼罗河上游。从古埃及开始，该岛便是伊希斯女神的圣地。现存伊希斯神庙建筑为公元前3世纪的托勒密二世及托勒密三世时代完成。'
            },
            {
                src: '9',
                info: '内姆鲁特山，位于土耳其东部阿德亚曼省，这里是科马吉尼地区国王安条克一世的陵墓。自公元前69年至前34年，安条克一世在山上建造了他自己的巨大雕像，以及许多希腊波斯神像。'
            },

        ]
    },
    {
        id: 'glm',
        title: '古罗马',
        time: '公元前9世纪-476年',
        info: '<p>古罗马在公元前9世纪初兴起于意大利半岛中部，自公元前5世纪初开始先后征服意大利半岛南部的土著和希腊人的城邦，成为地中海西部的大国。公元前3世纪至前2世纪，罗马为争夺地中海霸权，掠夺资源与奴隶，同地中海西部强国迦太基进行了三次战争，史称布匿战争。公元前2世纪，罗马成为地中海霸主。在凯撒、奥古斯都的治理下，到公元1世纪前后扩张成为横跨欧亚非、称霸地中海的庞大帝国。涅尔瓦（96年—98年）、图拉真（98年—117年）、哈德良（117年—138年）、安东尼·庇护（138年—161年） 以及马可·奥勒留（161年—180年）所处的五贤帝时代，被称为罗马的黄金时代。公元3世纪起，罗马逐渐陷入危机和混乱。公元395年，罗马帝国分裂为西罗马帝国和东罗马帝国（即拜占庭帝国）。</p>',
        imgs: [{
            src: '1',
            info: '尼姆竞技场，位于法国尼姆市，是世界仅存的几座古罗马竞技场中最完整的一座。尼姆竞技场建造于罗马帝国皇帝奥古斯都时期的公元70年，椭圆形，长133米，宽101米，设有34排座位，能容纳16300名观众同时观看比赛。'
        }, {
            src: '2',
            info: '塞戈维亚输水道，位于西班牙塞戈维亚市，建于罗马帝国皇帝图拉真时代（公元53－117年），至今完好。输水道用土黄色花岗岩干砌而成，坚固异常。全长813米，分上下两层，由148个拱组成，高出地面30.25米，气势非凡。'
        }, {
            src: '3',
            info: '尼格拉城门，又称黑城门，位于德国特里尔，为古罗马时期的城门，是特里尔城市的象征。建于罗马帝国皇帝马可奥勒留时期的公元180年，是保存的最为完整的罗马式城门。建筑宽36米，纵深23米，高30米，由巨厚的砂岩垒成，石块间都用铁链连接，最重的可达6吨。由于多年的风化，最后导致了外表成为黑色。'
        }, {
            src: '4',
            info: '塞维鲁凯旋门，位于罗马广场西北端。建于公元203年，用以庆祝罗马皇帝塞维鲁和他的两个儿子卡拉卡拉和盖塔在公元194-195年和公元197-199年两次战胜帕提亚。'
        },
        {
            src: '5',
            info: '君士坦丁凯旋门，位于意大利罗马。由罗马元老院于公元315年建造，以纪念公元312年君士坦丁大帝在密尔维安桥战役中战胜马克森提乌斯。'
        },]
    },
    {
        id: 'bzt',
        title: '拜占庭帝国',
        time: '公元395年-1453年',
        info: '<P>罗马帝国分裂之后，西罗马帝国于公元476年即告灭亡，而拜占廷帝国历经12个朝代，93位皇帝，成为欧洲历史上最悠久的君主制国家。起初其疆域包括巴尔干半岛、小亚细亚、叙利亚、巴勒斯坦、埃及、美索不达米亚及外高加索的一部分，到了皇帝查士丁尼在位时，又将北非以西、意大利和西班牙的东南并入版图。554年，击败法兰克王国，国力达到顶峰。1204年，拜占廷帝国的首都君士坦丁堡曾被第四次十字军东征攻陷，直到1261年收复。1453年首都君士坦丁堡被被奥斯曼帝国攻陷，拜占廷帝国灭亡。</p>',
        imgs: [{
            src: '1',
            info: '圣索菲亚大教堂，现位于土耳其伊斯坦布尔，始建于公元537年，是当时拜占庭帝国最大的基督教教堂，1453年，君士坦丁堡被奥斯曼帝国攻陷后，被改建为清真寺。'
        }, {
            src: '2',
            info: '圣维塔莱教堂，位于意大利拉文纳。拉文纳是拜占庭帝国统治意大利的中心。教堂建于公元547年，室内采用了大理石和玻璃马赛克进行装修，柱头部分镂空雕刻，无论从色彩还是从马赛克壁画的题材方面都具有拜占庭建筑梦幻般华丽的风格，有“西方的圣索菲亚”之称。'
        }, {
            src: '3',
            info: '查士丁尼国王及其随从，壁画现存于意大利拉文纳圣维塔莱大教堂，马赛克镶嵌画，公元547年'
        }]
    },
    {
        id: 'gbs',
        title: '古波斯',
        time: '公元前6世纪到公元7世纪',
        info: '<p>公元前6世纪到公元7世纪，波斯人以伊朗高原为中心先后建立了三个横跨亚欧非三大洲的帝国，即阿契美尼德王朝、帕提亚王朝和萨珊王朝。</p><p>阿契美尼德王朝，波斯第一帝国。由居鲁士大帝于公元前550年创建。极盛时期的领土疆域东起印度河平原，西至小亚细亚、巴尔干半岛，西南至北非。成为第一个横跨亚欧非三大洲的强大帝国。公元前330年，马其顿王国的亚历山大大帝进攻波斯，阿契美尼德王朝灭亡。</p><p>帕提亚王朝，又名安息帝国、波斯第二帝国。由阿尔撒息始建于公元前247年，全盛时期疆域西达幼发拉底河，东抵阿姆河，与汉朝、罗马和贵霜并列为当时亚欧四大强国，至公元226年为萨珊王朝所取代。</p><p>萨珊王朝，波斯第三帝国，是古波斯最后一个王朝。由阿尔达希尔一世创建于公元224年。萨珊王朝同样拥有横跨亚欧非三个大洲的广大领土。至公元642年灭于阿拉伯人之手。</p>',
        imgs: [{
            src: '1',
            info: '波斯波利斯，位于伊朗扎格罗斯山区的盆地中，波斯阿契美尼德王朝的第二个都城。始建于大流士一世（公元前522-前486年在位）时期，城址东面依山，其余三面有围墙。主要遗迹有大流士王的接见厅与百柱宫等。公元前330年毁于亚历山大大帝的入侵。'
        }, {
            src: '2',
            info: '缺图19'
        }, {
            src: '3',
            info: '纳克歇-洛斯塔姆的浮雕之一：沙普尔一世的胜利，约241-272年，是萨珊王朝最著名的岩石浮雕。描绘了萨珊皇帝沙普尔一世战胜两位罗马皇帝瓦勒良和菲利普的胜利。乘马者为沙普尔一世，其对面站立者为瓦勒良，跪在其前方乞降者为菲利普。'
        }, {
            src: '4',
            info: '哈特拉，是位于今伊拉克尼尼微省的一座古城，该城于公元1到2世纪在帕提亚王朝统治下成为宗教和贸易中心，也是现存帕提亚王朝保存最完好的的城市之一。'
        }, {
            src: '5',
            info: '塔克基思拉宫，萨珊王朝首都泰西封的标志性建筑，位于今伊拉克巴格达东南。建于公元6世纪，圆穹顶高37米,是萨珊首创的建筑技术,1500多年仍屹立不倒。 ​​​​'
        }, {
            src: '6',
            info: '沙普尔·卡斯特城堡，位于伊朗洛雷斯坦省首府霍拉马巴德市。建于萨珊王朝时期（224–651），是伊朗现存最重要的萨珊王朝遗迹之一'
        }]
    },
    {
        id: 'gzy',
        title: '古中亚',
        time: '公元前3世纪-8世纪',
        info: '<p>公元前250年，塞琉古王朝的巴克特里亚总督狄奥多托斯宣布独立，建立巴克特里亚-希腊王朝，宣告了塞琉古王朝在中亚统治的终结。公元前185年前后，国王德米特里乌斯一世南下印度扩张，此后巴克特里亚王国的本土和北印度部分发生分裂，建立了许多松散的小国，统称印度-希腊王朝，最终于公元前10年左右在塞克人的入侵下灭亡。</p><p>贵霜原为大月氏的一部，公元1世纪中叶贵霜翕侯（即首领）丘就却统一五部，建立贵霜王朝。公元127年~180年间，贵霜帝国达到鼎盛，与汉朝、罗马、安息并列为当时欧亚四大强国。公元3世纪，贵霜帝国日益衰落，分裂为东西两半，最终于公元360年为附属国寄多罗王朝所取代。除此之外，这一地区还有嚈哒、西突厥、北吐火罗、花剌子模和粟特等王朝的存在。</p>',
        imgs: [{
            src: '1',
            info: '塔克特依巴依佛教僧院遗址，位于巴基斯坦北部，1世纪时由印度-帕提亚人建造，此后属于贵霜帝国，6-7世纪废弃'
        }, {
            src: '2',
            info: '法雅兹-特佩佛教建筑群遗址，位于今乌兹别克斯坦铁尔梅兹附近。最早建于公元前1世纪前后，在公元3-4世纪的贵霜时期达到顶峰，后毁于萨珊入侵。'
        }, {
            src: '3',
            info: '巴米扬西大佛，位于阿富汗中部巴米扬山谷，高55米，建于公元6-7世纪，是世界上最大的雕刻立佛像。2001年被塔利班炸毁。'
        }, {
            src: '4',
            info: '巴米扬东大佛，位于阿富汗中部巴米扬山谷，高38米，建于公元6-7世纪（历史照片）'
        }, {
            src: '5',
            info: '梅尔夫，是土库曼斯坦乃至中亚最重要的历史遗迹。公元前6世纪以来，阿契美尼德王朝、塞琉古王朝、帕提亚王朝、萨珊王朝、花拉子模等相继统治并建设该城。附近还有佛教寺院，拜火教祭坛和基督教修道院的遗址和相关的出土文物。1221年，全城毁于蒙古西征。'
        }, {
            src: '6',
            info: '布拉纳，又称巴拉沙衮城，位于吉尔吉斯斯坦第三大城市托克马克城，建于公元10世纪，是中世纪时期楚河流域最大的城市之一，古丝绸之路上重要的商贸中心。遗址周边现存一座半截砖塔，并有大量石人散落在遗址附近。'
        }]
    },
    {
        id: 'gyd',
        title: '古印度',
        time: '前6世纪-12世纪',
        info: '<p>古印度位于南亚次大陆，地域范围包括今印度、巴基斯坦等国。古印度文明最早在印度河流域兴起，它是人类最古老的文明之一。古印度人建立了严密的社会等级制度，创作了精美的绘画和雕塑，还有世界上最长的史诗。这块古老的土地还是世界三大宗教之一的佛教的诞生地。古印度是人类文明的发源地之一，古印度文明以其异常丰富、玄奥和神奇深深地吸引着世人，对亚洲诸国包括中国产生过深远的影响。其中印度河流域有犍陀罗、印度-赛克、印度-帕提亚等王朝，恒河流域有孔雀、笈多等王朝等。</p>'
        , imgs: [{
            src: '1',
            info: '摩亨佐-达罗，位于巴基斯坦信德省，约建成于公元前2600年，废弃于公元前1900年，是印度河流域文明的重要城市，世界上最早的主要城市之一，被认为是古印度文明的代表。'
        }, {
            src: '2',
            info: '桑奇大塔，现位于印度中央邦首府博帕尔附近，由孔雀王朝阿育王于公元前3世纪始建，是目前保存最完好的古代窣堵坡形式的佛塔，也是印度现存最古老的石质建筑之一。'
        }, {
            src: '3',
            info: '达美克大塔，位于印度北方邦瓦拉纳西。是公元五世纪时的笈多王朝所建。'
        }, {
            src: '4',
            info: '那烂陀，位于印度比哈尔邦巴特那东南。为古代东印度佛教最高学府和学术中心，玄奘曾两次造访此地。当地佛教遗迹可能最早兴建于公元前6世纪，衰落于13世纪初穆斯林的入侵。'
        }, {
            src: '5',
            info: '布里哈迪希瓦拉神庙，位于印度泰米尔纳德邦的坦贾武尔地区，供奉湿婆神，由朱罗王朝的国王罗茶罗乍建于1000年左右，是印度现存最高的神庙。'
        }]
    }, {
        id: 'ysl',
        title: '伊斯兰化时期',
        time: '公元7～19世纪',
        info: '<p>公元7世纪中叶，阿拉伯人在征服西亚和北非，建立第一个阿拉伯伊斯兰帝国倭马亚王朝后，又将伊斯兰教带入东方，伊朗和中亚大部分地区呈现伊斯兰化。由阿拉伯人、突厥人、库尔德人、高加索人、柏柏尔人、土耳其人、波斯人、塞种人和蒙古人等建立起大大小小数十个王朝，统治地区包括北非、西亚、中亚的广大地区。期间涌现出阿拔斯、法蒂玛、萨曼尼、塞尔柱、伊尔、金帐、帖木儿、奥斯曼等强盛王朝。13世纪以来，随着信仰伊斯兰教的德里苏丹国、莫卧儿帝国等王朝在印度建立统治，伊斯兰教深入南亚次大陆进行传播，对印度的伊斯兰化产生了深远影响。</p>'
        , imgs: [{
            src: '1',
            info: '安曼城堡，位于约旦首都安曼。该地曾先后被亚述、巴比伦、塞琉古、罗马和倭马亚等王朝占领。目前可见的主要建筑有大力神神庙、拜占庭教堂和倭玛亚王朝宫殿。'
        }, {
            src: '2',
            info: '倭马亚清真寺，位于叙利亚首都大马士革，是世界上最大和最古老的清真寺之一，被认为是伊斯兰教的第四大圣寺。公元706年，倭马亚王朝第六位哈里发阿尔瓦利德一世在基督教教堂遗址上修建该清真寺。'
        }, {
            src: '3',
            info: '阿尔罕布拉宫，位于西班牙南部城市格拉纳达，建于13世纪，是摩尔人在西班牙建立的格拉纳达王国的王宫，是伊斯兰教世俗建筑与造园技艺完美结合的建筑名作、阿拉伯式宫殿庭院建筑的优秀代表。'
        }, {
            src: '4',
            info: '布哈拉，位于乌兹别克斯坦，始建于公元前1世纪，距撒马尔罕250公里，座落在一块绿洲上。丝绸之路途径此处，历史上是重要的宗教和贸易中心。城内有数千年来各个王朝修建的宫殿、清真寺等，被称为“博物馆城”。'
        }, {
            src: '5',
            info: '撒马尔罕，位于乌兹别克斯坦，是中亚最古老的城市之一，丝绸之路上重要的枢纽城市，有2500年的历史，为古代帖木尔帝国的首都。撒马尔罕连接着中国、波斯帝国和印度这三大帝国，善于经商的粟特人把撒马尔罕建造成一座美轮美奂的都城。'
        }, {
            src: '6',
            info: '帖木儿白宫，位于乌兹别克斯坦沙赫里萨布兹。由帖木儿于公元1380年下令营造，今仅存伊斯兰风格的拱门，图中帖木儿雕像为后人增建。'
        }, {
            src: '7',
            info: '阿格拉红堡，位于印度北方邦阿格拉市。由莫卧儿王朝第3代皇帝阿克巴始建于1565年。城堡占地38万平方米，外围由高十二米的红色砂石城墙围成，总体呈半圆形。这里曾经是莫卧儿王朝的皇城所在地，是伊斯兰教建筑的代表之作'
        }, {
            src: '8',
            info: '泰姬陵，位于印度北方邦阿格拉市。由莫卧儿王朝第5代皇帝沙贾汗为纪念其妻姬蔓·芭奴而建，建成于公元1653年前后，被称为“印度穆斯林艺术的瑰宝奇葩”。'
        }, {
            src: '9',
            info: '蓝色清真寺，原名苏丹艾哈迈德清真寺，位于土耳其伊斯坦布尔。是奥斯曼帝国著名清真寺之一，17世纪建造，因清真寺内墙壁全部用蓝、白两色的依兹尼克瓷砖装饰故名。'
        }]
    },
]

const dialogVisible = ref(false)
const locationType = ref('')
const locationBtn = (location) => {
    locationData.value = dataList.filter((i) => {
        return String(i.id) == String(location)
    })[0]
    locationType.value = location
    dialogVisible.value = true
}
const closeDialog = () => {
    dialogVisible.value = false
}
</script>
    
<style lang="scss" scoped>
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

.distribution_content {
    background-image: url('@/assets/distribution/map_bg.png');
    background-size: 100% 100%;
    width: 14.85em;
    height: 8.43em;
    margin: -0.5em auto;
    position: relative;
    z-index: 10;

    .location {
        position: absolute;
        width: 1.24em;
        height: 0.4em;
        cursor: pointer;

        >img {
            display: block;
            width: 100%;
            height: 100%;

        }

    }

    .bzt {
        width: 1.5em;
        height: 0.4em;
        // position: relative;
        left: 2.6em;
        top: 2.2em;
    }

    .glm {
        left: 0.5em;
        top: 3.1em;
    }

    .gbs {
        left: 3.6em;
        top: 4.2em;
    }

    .gxl {
        left: 2.1em;
        top: 4.1em;
    }

    .gzy {
        top: 2.5em;
        left: 4.6em;
    }

    .gyd {
        top: 4.7em;
        left: 4.3em;
    }

    .ysl {
        width: 1.81em;
        top: 3.9em;
        left: 6.1em;
    }
}

.dialog {
    border: 1px solid;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(1, 1, 0, 0.418);

    .dialog_bg {
        background-image: url('@/assets/distribution/paper_bg.png');
        background-size: 100% 100%;
        width: 14.85em;
        height: 8.43em;
        position: relative;
        z-index: 10;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;

        .dialogclose {
            background-image: url('@/assets/distribution/back_btn.png');
            background-size: 100% 100%;
            width: 1.28em;
            height: 1.28em;
            z-index: 11;
            position: absolute;
            left: 94%;
            top: 0.55em;
            cursor: pointer;
        }

        .dialog_content {
            width: 99%;
            height: 8.43em;
            overflow: hidden;
            margin: 0 auto;
            padding-top: 0.5em;
            display: flex;

            .left_img_box {
                width: 5.58em;
                height: 7.5em;
                margin: 0 0.35em;
                overflow-y: scroll;
                overflow-x: hidden;

                .left_imgs {
                    position: relative;
                    margin-bottom: 0.12em;

                    >img {
                        position: relative;
                        display: block;
                        width: 5.58em;
                        // height: auto;
                    }

                    .imgs_text {
                        >span {
                            display: block;
                            padding: 10px;
                        }

                        width: 100%;
                        height: auto;
                        min-height: 0.8em;
                        position: absolute;
                        bottom: 0;
                        background-color: rgba(0, 0, 0, 0.5);
                        font-size: 0.15em;
                        color: white;
                        font-weight: bold;
                        // padding: 10px;

                    }
                }

            }

            .left_img_box::-webkit-scrollbar {
                display: block;
                height: 200px !important;
                background-color: bisque !important;
                ;

            }

            .right_content {
                width: 7em;
                height: 7.5em;

                >h1 {
                    margin-bottom: 0;
                    font-size: 0.6em;
                    font-family: syHeavy;

                }

                >h3 {
                    margin: 0;
                    font-size: 0.3em;
                    font-family: syMedium;

                }

                .main_text {
                    margin-top: 0.3em;
                    height: 5.3em;
                    overflow-y: auto;
                    overflow-x: hidden;

                    ::v-deep>div>p {
                        text-indent: 2em;

                        font-size: 0.17em;
                        line-height: 30px;
                        margin: 0 !important;
                        padding: 0 !important;

                    }
                }
            }

        }

    }


}
</style>