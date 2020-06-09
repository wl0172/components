<template>
  <div class="region">

    <van-nav-bar title="选择国家和地区" left-arrow @click-left="onClickLeft"/>

    <div class="city_body">
      <div class="city_list">
        <div class="city_hot">
          <h2>常用地区</h2>
          <ul class="clearfix">
            <li @click="handle_city_sort_list({id:86,nm:'中国'})">
              <span>中国</span>
              <span class="phono">86</span>
            </li>
          </ul>
        </div>
        <div class="city_sort" ref="city_sort">
          <div v-for="item in cityList" :key="item.index">
            <h2>{{ item.index }}</h2>
            <ul>
              <li @click="handle_city_sort_list(itemList)" v-for="itemList in item.list" :key="itemList.id">
                <span>{{ itemList.nm }}</span>
                <span class="phono">{{ itemList.id }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="city_index">
        <ul>
          <li @touchstart="handleToIndex(-1)">#</li>
          <li v-for="(item, index) in cityList" :key="item.index"  @touchstart="handleToIndex(index)">{{ item.index }}</li>
        </ul>
      </div>
    </div>


  </div>
</template>
    
<script>
  export default {
    name: 'region',
    data() {
      return {
        cityList: [
          { index: 'A', list: [
              { nm: '阿富汗', id: 93},
              { nm: '阿尔巴尼亚', id: 355},
              { nm: '阿尔及利亚', id: 213},
              { nm: '阿根廷', id: 54},
              { nm: '阿拉伯联合酋长国', id: 971},
              { nm: '阿拉伯叙利亚共和国', id: 963},
              { nm: '阿鲁巴', id: 297},
              { nm: '阿曼', id: 968},
              { nm: '阿塞拜疆', id: 994},
              { nm: '埃及', id: 20},
              { nm: '埃塞俄比亚', id: 251},
              { nm: '爱尔兰', id: 353},
              { nm: '爱沙尼亚', id: 372},
              { nm: '安道尔', id: 376},
              { nm: '安哥拉', id: 244},
              { nm: '安圭拉岛', id: 1264},
              { nm: '安提瓜和巴布达', id: 1268},
              { nm: '奥地利', id: 43},
              { nm: '澳大利亚', id: 61},
            ]
          },
          { index: 'B', list: [
              { nm: '巴巴多斯', id: 1246},
              { nm: '巴布亚新几内亚', id: 675},
              { nm: '巴哈马群岛', id: 1242},
              { nm: '巴基斯坦', id: 92},
              { nm: '巴拉圭', id: 595},
              { nm: '巴林', id: 973},
              { nm: '巴拿马', id: 507},
              { nm: '巴西', id: 55},
              { nm: '白俄罗斯', id: 375},
              { nm: '百慕大群岛', id: 1441},
              { nm: '保加利亚', id: 359},
              { nm: '贝宁', id: 229},
              { nm: '比利时', id: 32},
              { nm: '冰岛', id: 354},
              { nm: '波多黎各', id: 1787},
              { nm: '波黑(波斯尼亚和黑塞哥维那)', id: 387},
              { nm: '波兰', id: 48},
              { nm: '玻利维亚', id: 591},
              { nm: '伯利兹', id: 501},
              { nm: '博茨瓦纳', id: 267},
              { nm: '不丹', id: 975},
              { nm: '布基纳法索', id: 226},
              { nm: '布隆迪', id: 257},
            ]
          },
          { index: 'C', list: [
              { nm: '朝鲜', id: 850},
              { nm: '赤道几内亚', id: 240},
            ]
          },
          { index: 'D', list: [
              { nm: '丹麦', id: 45},
              { nm: '德国', id: 49},
              { nm: '东帝汶', id: 670},
              { nm: '多哥', id: 228},
              { nm: '多米尼加共和国', id: 1890},
              { nm: '多米尼克', id: 1767},
            ]
          },
          { index: 'E', list: [
              { nm: '俄罗斯联邦', id: 7},
              { nm: '厄瓜多尔', id: 593},
              { nm: '厄立特里亚', id: 291},
            ]
          },
          { index: 'F', list: [
              { nm: '法国', id: 33},
              { nm: '法罗群岛', id: 298},
              { nm: '法属玻利尼西亚', id: 689},
              { nm: '法属圭亚那', id: 594},
              { nm: '菲律宾', id: 63},
              { nm: '斐济', id: 679},
              { nm: '芬兰', id: 358},
              { nm: '佛得角', id: 238},
              { nm: '福克兰群岛', id: 500},
            ]
          },
          { index: 'G', list: [
              { nm: '冈比亚', id: 220},
              { nm: '刚果', id: 242},
              { nm: '刚果民主共和国', id: 243},
              { nm: '哥伦比亚', id: 57},
              { nm: '哥斯达黎加', id: 506},
              { nm: '格林纳达', id: 1809},
              { nm: '格陵兰岛', id: 299},
              { nm: '格鲁吉亚', id: 995},
              { nm: '根西', id: 44},
              { nm: '古巴', id: 53},
              { nm: '瓜德罗普', id: 590},
              { nm: '关岛', id: 671},
              { nm: '圭亚那', id: 592},
            ]
          },
          { index: 'H', list: [
              { nm: '哈萨克斯坦', id: 7},
              { nm: '海地', id: 509},
              { nm: '韩国', id: 82},
              { nm: '荷兰', id: 31},
              { nm: '荷属安的列斯群岛', id: 599},
              { nm: '黑山共和国', id: 382},
              { nm: '洪都拉斯', id: 504},
            ]
          },
          { index: 'I', list: [
              { nm: ' ', id: ''},
            ]
          },
          { index: 'J', list: [
              { nm: '吉布提', id: 253},
              { nm: '吉尔吉斯斯坦', id: 996},
              { nm: '几内亚', id: 675},
              { nm: '几内亚比绍共和国', id: 245},
              { nm: '加拿大', id: 1},
              { nm: '加纳', id: 233},
              { nm: '加蓬', id: 241},
              { nm: '柬埔寨', id: 855},
              { nm: '捷克共和国', id: 420},
              { nm: '津巴布韦', id: 263},
            ]
          },
          { index: 'K', list: [
              { nm: '喀麦隆', id: 237},
              { nm: '卡塔尔', id: 974},
              { nm: '开曼群岛', id: 1345},
              { nm: '科摩罗', id: 269},
              { nm: '科索沃', id: 381},
              { nm: '科特迪瓦', id: 225},
              { nm: '科威特', id: 965},
              { nm: '克罗地亚', id: 385},
              { nm: '肯尼亚', id: 254},
              { nm: '库克群岛', id: 682},
            ]
          },
          { index: 'L', list: [
              { nm: '拉脱维亚', id: 371},
              { nm: '莱索托', id: 266},
              { nm: '老挝人民民主共和国', id: 856},
              { nm: '黎巴嫩', id: 961},
              { nm: '立陶宛', id: 370},
              { nm: '利比里亚', id: 231},
              { nm: '利比亚', id: 218},
              { nm: '列支敦斯登', id: 423},
              { nm: '留尼旺', id: 262},
              { nm: '卢森堡', id: 352},
              { nm: '卢旺达', id: 250},
              { nm: '罗马尼亚', id: 40},
            ]
          },
          { index: 'M', list: [
              { nm: '马达加斯加', id: 261},
              { nm: '马恩', id: 44},
              { nm: '马尔代夫', id: 960},
              { nm: '马耳他', id: 356},
              { nm: '马拉维', id: 265},
              { nm: '马来西亚', id: 60},
              { nm: '马里', id: 223},
              { nm: '马其顿王国', id: 389},
              { nm: '马提尼克', id: 596},
              { nm: '毛里求斯', id: 230},
              { nm: '毛里塔尼亚', id: 222},
              { nm: '美国', id: 1},
              { nm: '美属萨摩亚', id: 684},
              { nm: '蒙古', id: 976},
              { nm: '蒙特塞拉特岛', id: 1664},
              { nm: '孟加拉共和国', id: 880},
              { nm: '秘鲁', id: 51},
              { nm: '缅甸', id: 95},
              { nm: '摩尔多瓦', id: 373},
              { nm: '摩洛哥', id: 212},
              { nm: '摩纳哥', id: 377},
              { nm: '莫桑比克', id: 258},
              { nm: '墨西哥', id: 52},
            ]
          },
          { index: 'N', list: [
              { nm: '纳米比亚', id: 264},
              { nm: '南非', id: 27},
              { nm: '南苏丹', id: 211},
              { nm: '尼泊尔', id: 977},
              { nm: '尼加拉瓜', id: 505},
              { nm: '尼日尔', id: 227},
              { nm: '尼日利亚', id: 234},
              { nm: '挪威', id: 47},
            ]
          },
          { index: 'O', list: [
              { nm: '', id: ''},
            ]
          },
          { index: 'P', list: [
              { nm: '帕劳', id: 680},
              { nm: '葡萄牙', id: 351},
            ]
          },
          { index: 'Q', list: [
              { nm: '', id: ''},
            ]
          },
          { index: 'R', list: [
              { nm: '日本', id: 81},
              { nm: '瑞典', id: 46},
              { nm: '瑞士', id: 41},
            ]
          },
          { index: 'S', list: [
              { nm: '萨尔瓦多', id: 503},
              { nm: '萨摩亚群岛', id: 684},
              { nm: '塞尔维亚', id: 381},
              { nm: '塞拉利昂', id: 232},
              { nm: '塞内加尔', id: 221},
              { nm: '塞浦路斯', id: 357},
              { nm: '塞舌尔', id: 248},
              { nm: '沙特阿拉伯', id: 966},
              { nm: '圣基茨和尼维斯', id: 1869},
              { nm: '圣卢西亚岛', id: 1758},
              { nm: '圣马力诺', id: 378},
              { nm: '圣文森特和格林纳丁斯', id: 1784},
              { nm: '斯里兰卡', id: 94},
              { nm: '斯洛伐克', id: 421},
              { nm: '斯洛文尼亚', id: 386},
              { nm: '斯威士兰', id: 268},
              { nm: '苏丹', id: 249},
              { nm: '苏里南', id: 597},
              { nm: '所罗门群岛', id: 677},
              { nm: '索马里', id: 252},
            ]
          },
          { index: 'T', list: [
              { nm: '塔吉克斯坦', id: 992},
              { nm: '泰国', id: 66},
              { nm: '坦桑尼亚', id: 255},
              { nm: '汤加', id: 676},
              { nm: '特克斯和凯科斯群岛', id: 1649},
              { nm: '特立尼达和多巴哥', id: 1809},
              { nm: '突尼斯', id: 216},
              { nm: '土耳其', id: 90},
              { nm: '土库曼斯坦', id: 993},
            ]
          },
          { index: 'U', list: [
              { nm: '', id: ''},
            ]
          },
          { index: 'V', list: [
              { nm: '', id: ''},
            ]
          },
          { index: 'W', list: [
              { nm: '瓦努阿图', id: 678},
              { nm: '危地马拉', id: 502},
              { nm: '委内瑞拉', id: 58},
              { nm: '文莱达鲁萨兰国', id: 673},
              { nm: '乌干达', id: 256},
              { nm: '乌克兰', id: 380},
              { nm: '乌拉圭', id: 598},
              { nm: '乌兹别克斯坦', id: 998},
            ]
          },
          { index: 'X', list: [
            { nm: '西班牙', id: 34},
            { nm: '希腊', id: 30},
            { nm: '新加坡', id: 65},
            { nm: '新喀里多尼亚', id: 687},
            { nm: '新西兰', id: 64},
            { nm: '匈牙利', id: 36},
            ]
          },
          { index: 'Y', list: [
              { nm: '牙买加', id: 1876},
              { nm: '亚美尼亚', id: 374},
              { nm: '也门', id: 967},
              { nm: '伊拉克', id: 964},
              { nm: '伊朗', id: 98},
              { nm: '以色列', id: 972},
              { nm: '意大利', id: 39},
              { nm: '印度', id: 91},
              { nm: '印度尼西亚', id: 62},
              { nm: '英国', id: 44},
              { nm: '英属维尔京群岛', id: 1340},
              { nm: '约旦', id: 962},
              { nm: '越南', id: 84},
            ]
          },
          { index: 'Z', list: [
              { nm: '赞比亚', id: 260},
              { nm: '泽西', id: 44},
              { nm: '乍得', id: 235},
              { nm: '直布罗陀', id: 350},
              { nm: '智利', id: 56},
              { nm: '中非共和国', id: 236},
              { nm: '中国澳门', id: 853},
              { nm: '中国台湾', id: 886},
              { nm: '中国香港', id: 852},
            ]
          },
        ],
        hotList: [],
      }
    },
    props:{
      s:Boolean,
    },
    created(){},
    mounted() {},
    methods: {
      formatCityList(cities) {
        var cityList = [];
        var hotList = [];
        // 热门城市列表信息		
        for (var i = 0; i < cities.length; i++) {
          if (cities[i].isHot === 1) {
            hotList.push(cities[i]);
          }
        }
        // 城市列表信息
        for (var i = 0; i < cities.length; i++) {
          var firstLetter = cities[i].py.substring(0, 1).toUpperCase();
          if (toCom(firstLetter)) { // 新添加到索引中
            cityList.push({
              index: firstLetter,
              list: [{
                nm: cities[i].nm,
                id: cities[i].id
              }]
            });
          } else { // 累计到已有的索引
            for (var j = 0; j < cityList.length; j++) {
              if (cityList[j].index === firstLetter) {
                cityList[j].list.push({
                  nm: cities[i].nm,
                  id: cities[i].id
                });
              }
            }
          }
        }
        // 城市数据索引index的排序
        cityList.sort((n1, n2) => {
          if (n1.index > n2.index) {
            return 1;
          } else if (n1.index < n2.index) {
            return -1;
          } else {
            return 0;
          }
        })
        // 判断index是否存在于cityList中
        function toCom(firstLetter) {
          for (var i = 0; i < cityList.length; i++) {
            if (cityList[i].index === firstLetter) {
              return false;
            }
          }
          return true;
        }
        // console.log(cityList);
        // console.log(hotList);
        return {
          cityList,
          hotList
        }
      },
      // 点击右侧索引，左侧城市列表也滚动到指定的位置
      handleToIndex(index) {
        if(index == -1){
          this.$refs.city_sort.parentNode.scrollTop = 0
          return
        }
        var h2 = this.$refs.city_sort.getElementsByTagName('h2');
        this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
      },
      handle_city_sort_list(itemList){
        this.$emit('handleCloseReg',itemList)
      },
      onClickLeft(){
        this.$emit('handleCloseReg',{id: -1, nm: "返回"})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .region{
    height: 100%;
    width: calc( 100% - 0.4rem );
  }
  .region .city_body {
    margin-top: 1rem;
    display: flex;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    font-size: 0.32rem;
  }
  .city_body .city_list {
    // flex: 1;
    width: 100%;
    overflow: auto;
    background: #fff;
  }
  .city_body .city_list::-webkit-scrollbar {
    background-color: transparent;
    width: 0;
  }
  .city_body .city_hot {
    margin-top: 0.4rem;
  }
  .city_body .city_hot h2 {
    padding-left: 0.15rem;
    background: #F5F5F5;
    font-weight: normal;
    font-size: .24rem;
    height: .5rem;
    line-height: .5rem;
    color: #999;
    margin: 0;
  }
  .city_body .city_hot ul li {
    height: 1rem;
    line-height: 1rem;
    border-bottom: 0.01rem solid #eee;
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between;
  }
  .city_body .city_sort div {
  }
  .city_body .city_sort h2 {
    padding-left: 0.2rem;
    line-height: 0.3rem;
    background: #F5F5F5;
    font-weight: normal;

    font-size: .24rem;
    height: .5rem;
    line-height: .5rem;
    color: #999;
    margin: 0;
  }
  .city_body .city_sort ul {
  }
  .city_body .city_sort ul li {
    height: 1rem;
    line-height: 1rem;
    padding: 0 0.2rem;
    border-bottom: 0.01rem solid #eee;

    display: flex;
    justify-content: space-between;
  }
  .city_body .city_hot ul li:active{
    background: #f0f0f0;
  }
  .city_body .city_sort ul li:active{
    background: #f0f0f0;
  }
  .city_body .city_index {
    
    font-size: 0.24rem;
    width: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-left: 0.01rem #e6e6e6 solid;
    li{
      height: 0.37rem;
      line-height: 0.37rem;
    }
  }
  .phono{
    margin: auto 0.2rem auto 0;
    background: #f2f2f2;
    color: #979797;
    height: .6rem;
    line-height: .6rem;
    font-size: .24rem;
    padding: 0 .1rem;
    border-radius: .1rem;
    width: 0.4rem;
    text-align: center;
  }
</style>
