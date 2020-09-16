let config = {
  timeout: 30000
}

// wdj
// 接口自动区分
const host = window.location.host
if (host === "m.hfhomes.cn") {//生产
  config.api = "https://mall-api.hfhomes.cn/"
  config.domain = "https://[config].hfhomes.cn/"
  config.linkApi = "https://m.hfhomes.cn/"
  config.fullUrlPath = "https://m.hfhomes.cn/html/home/#/"
  config.imgServerUrl = "https://img[0].hfhomes.cn/"
  config.staticUrl = 'https://static.hfhomes.cn'
} else if (host === "m.heyoucloud.com") {//预生产
  config.api = "https://mall-api.heyoucloud.com/"
  config.domain = "https://[config].heyoucloud.com/"
  config.linkApi = "https://m.heyoucloud.com/"
  config.fullUrlPath = "https://m.heyoucloud.com/html/home/#/"

  // config.imgServerUrl = "https://img1.hfhomes.cn/"
  // config.staticUrl = 'https://static.hfhomes.cn'

  config.imgServerUrl = "https://img[0].hfhomes.cn/"
  config.staticUrl = 'https://static.heyoucloud.com'

} else if (host === "m.fybanks.cn") {//测试
  config.api = "https://mall-api.fybanks.cn/"
  config.domain = "https://[config].fybanks.cn/"
  config.linkApi = "https://m.fybanks.cn/"
  config.fullUrlPath = "https://m.fybanks.cn/html/home/#/"
  config.imgServerUrl = "https://img1.heyoucloud.com/"
  config.staticUrl = 'https://static.fybanks.cn'
} else if (host === "m.hfqqjia.com") {//测试
  config.api = "https://mall-api.hfqqjia.com/"
  config.domain = "https://[config].hfqqjia.com/"
  config.linkApi = "https://m.hfqqjia.com/"
  config.fullUrlPath = "https://m.hfqqjia.com/html/home/#/"
  config.imgServerUrl = "https://img1.heyoucloud.com/"
  config.staticUrl = 'https://static.hfqqjia.com'

}else if (host === "m.9yuekj.com") {//测试
  config.api = "https://mall-api.9yuekj.com/"
  config.domain = "https://[config].9yuekj.com/"
  config.linkApi = "https://m.9yuekj.com/"
  config.fullUrlPath = "https://m.9yuekj.com/html/home/#/"
  config.imgServerUrl = "https://img1.heyoucloud.com/"
  config.staticUrl = 'https://static.9yuekj.com'

}else if (host === "m.heimh.com") {//测试
  config.api = "https://mall-api.heimh.com/"
  config.domain = "https://[config].heimh.com/"
  config.linkApi = "https://m.heimh.com/"
  config.fullUrlPath = "https://m.heimh.com/html/home/#/"
  config.imgServerUrl = "https://img1.heyoucloud.com/"
  config.staticUrl = 'https://static.heimh.com'

}else if (host === "m.hfjyuan.com") {//测试
  config.api = "https://mall-api.hfjyuan.com/"
  config.domain = "https://[config].hfjyuan.com/"
  config.linkApi = "https://m.hfjyuan.com/"
  config.fullUrlPath = "https://m.hfjyuan.com/html/home/#/"
  config.imgServerUrl = "https://img1.heyoucloud.com/"
  config.staticUrl = 'https://static.hfjyuan.com'

}else if (host === "m.ijiuyue.com") {//测试
  config.api = "https://mall-api.ijiuyue.com/"
  config.domain = "https://[config].ijiuyue.com/"
  config.linkApi = "https://m.ijiuyue.com/"
  config.fullUrlPath = "https://m.ijiuyue.com/html/home/#/"
  config.imgServerUrl = "https://img1.heyoucloud.com/"
  config.staticUrl = 'https://static.ijiuyue.com'

}else if (host === "m.hfspaces.com") {//测试
  config.api = "https://mall-api.hfspaces.com/"
  config.domain = "https://[config].hfspaces.com/"
  config.linkApi = "https://m.hfspaces.com/"
  config.fullUrlPath = "https://m.hfspaces.com/html/home/#/"
  config.imgServerUrl = "https://img1.heyoucloud.com/"
  config.staticUrl = 'https://static.hfspaces.com'

}else {//本地
  config.api = 'http://192.168.0.93:7300/mock/5ee050aa22d409057428e06e/'
  config.domain = "https://[config].hfjyuan.com/"
  config.linkApi = "https://m.hfhomes.cn/"
  config.fullUrlPath = "https://m.hfhomes.cn/html/home/#/"
  config.imgServerUrl = "https://img[0].hfhomes.cn/"
  config.staticUrl = 'https://static.hfhomes.cn'
}
module.exports = config

