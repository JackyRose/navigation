import { IConfig } from './src/types'

const c: IConfig = {
  // [必填], 请填写您的仓库地址
  gitRepoUrl: 'https://github.com/cunyu1943/nav',

  // 部署分支
  branch: 'main',

  // 路由是否Hash模式, 如果是部署在github pages 务必设为 true
  hashMode: true,

  // 是否显示右上角的 Github 图标
  showGithub: true,

  // 您的网站地址，有利于SEO
  homeUrl: 'https://cunyu1943.site',

  // 网站标题
  title: '村雨遥的导航 - 精选优质网站、软件、工具',

  // 网站描述
  description: '村雨遥的导航 - 精选优质网站、软件、工具',

  // 网站关键字
  keywords: '村雨遥,软件,网站,工具',

  // 默认主题: Light | Sim | Side | App
  theme: 'Sim',

  // 网站底部内容, 版权信息、备案号, 可以是 HTML
  footerContent: `
    <div style="font-weight: bold;">共收录\${total}个网站</div>
    <div>Copyright © 2021 cunyu1943.site, All Rights Reserved</div>
  `,

  // 百度统计地址
  // https://tongji.baidu.com/web/welcome/login
  baiduStatisticsUrl: 'https://hm.baidu.com/hm.js?0e04a42f3ef801de0a628947884a3bcd',

  // CNZZ 统计地址
  // https://www.cnzz.com/o_index.php
  cnzzStatisticsUrl: '',

  // Light 主题配置
  lightThemeConfig: {
    // https://www.nav3.cn/#/light?q=grabient
    backgroundLinear: [
      'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
      'linear-gradient(90deg, #FEE140 0%, #FA709A 100%)',
      'linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)',
      'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
      'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)',
      'linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)',
      'linear-gradient(180deg, #52ACFF 25%, #FFE32C 100%)',
      'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',
      'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
      'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)',
      'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
      'linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)',
      'linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)',
      'linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)',
      'linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)',
      'linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)',
      'linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)',
      'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)',
      'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
      'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
      'linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)',
      'linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)',
      'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
      'linear-gradient(132deg, #F4D03F 0%, #16A085 100%)',
      'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
      'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)'
    ]
  },

  // Sim 主题配置
  simThemeConfig: {
    // 海报图
    posterImageUrls: [
      'https://raw.sevencdn.com/xjh22222228/nav/image/sim-wallpaper.jpg'
//       'https://gitee.com/cunyu1943/images/raw/master/blogpic/ironman.png'
    ],
    description: '精选 <b>${total}</b> 个优质网站、软件、工具'
  }
}

export default c
