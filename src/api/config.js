let config = {
  timeout: 30000
}

// wdj
// 接口自动区分
const host = window.location.host
if (host.indexOf('hfhomes.cn') > -1) {//生产
  config.api = 'https://mall-api.hfhomes.cn/'
  config.domain = 'https://[config].hfhomes.cn/'
  config.uploadApi = 'https://mall-api.hfhomes.cn/'
  config.linkApi = 'https://m.hfhomes.cn/'
  config.adminLink = 'https://admin.hfhomes.cn/'
  config.fullUrlPath = 'https://m.hfhomes.cn/html/home/#/'
  config.imgServerUrl = 'https://img[0].hfhomes.cn/'
  config.staticUrl = 'https://static.hfhomes.cn'
} else if (host.indexOf('heyoucloud.com') > -1) {//预生产
  config.api = 'https://mall-api.heyoucloud.com/'
  config.domain = 'https://[config].heyoucloud.com/'
  config.uploadApi = 'https://mall-api.heyoucloud.com/'
  config.linkApi = 'https://m.heyoucloud.com/'
  config.adminLink = 'https://admin.heyoucloud.com/'
  config.fullUrlPath = 'https://m.heyoucloud.com/html/home/#/'
  config.imgServerUrl = 'https://img[0].hfhomes.cn/'
  config.staticUrl = 'https://static.heyoucloud.com'
} else if (host.indexOf('fybanks.cn') > -1) {//测试一
  config.api = 'https://mall-api.fybanks.cn/'
  config.domain = 'https://[config].fybanks.cn/'
  config.uploadApi = 'https://mall-api.fybanks.cn/'
  config.linkApi = 'https://m.fybanks.cn/'
  config.adminLink = 'https://admin.fybanks.cn/'
  config.fullUrlPath = 'https://m.fybanks.cn/html/home/#/'
  config.imgServerUrl = 'https://img[0].heyoucloud.com/'
  config.staticUrl = 'https://static.fybanks.cn'
} else if (host.indexOf('9yuekj.com') > -1) {//测试二
  config.api = 'https://mall-api.9yuekj.com/'
  config.domain = 'https://[config].9yuekj.com/'
  config.uploadApi = 'https://mall-api.9yuekj.com/'
  config.linkApi = 'https://m.9yuekj.com/'
  config.adminLink = 'https://admin.9yuekj.com/'
  config.fullUrlPath = 'https://m.9yuekj.com/html/home/#/'
  config.imgServerUrl = 'https://img[0].heyoucloud.com/'
  config.staticUrl = 'https://static.9yuekj.com'
} else if (host.indexOf('hfjyuan.com') > -1) {//测试三
  config.api = 'https://mall-api.hfjyuan.com/'
  config.domain = 'https://[config].hfjyuan.com/'
  config.uploadApi = 'https://mall-api.hfjyuan.com/'
  config.linkApi = 'https://m.hfjyuan.com/'
  config.adminLink = 'https://admin.hfjyuan.com/'
  config.fullUrlPath = 'https://m.hfjyuan.com/html/home/#/'
  config.imgServerUrl = 'https://img[0].heyoucloud.com/'
  config.staticUrl = 'https://static.hfjyuan.com'
} else if (host.indexOf('ijiuyue.com') > -1) {//开发一
  config.api = 'https://mall-api.ijiuyue.com/'
  config.domain = 'https://[config].ijiuyue.com/'
  config.uploadApi = 'https://mall-api.ijiuyue.com/'
  config.linkApi = 'https://m.ijiuyue.com/'
  config.adminLink = 'https://admin.ijiuyue.com/'
  config.fullUrlPath = 'https://m.ijiuyue.com/html/home/#/'
  config.imgServerUrl = 'https://img[0].heyoucloud.com/'
  config.staticUrl = 'https://static.ijiuyue.com'
} else if (host.indexOf('hfqqjia.com') > -1) {//开发二
  config.api = 'https://mall-api.hfqqjia.com/'
  config.domain = 'https://[config].hfqqjia.com/'
  config.uploadApi = 'https://mall-api.hfqqjia.com/'
  config.linkApi = 'https://m.hfqqjia.com/'
  config.adminLink = 'https://admin.hfqqjia.com/'
  config.fullUrlPath = 'https://m.hfqqjia.com/html/home/#/'
  config.imgServerUrl = 'https://img[0].heyoucloud.com/'
  config.staticUrl = 'https://static.hfqqjia.com'
} else if (host.indexOf('heimh.com') > -1) {//开发三
  config.api = 'https://mall-api.heimh.com/'
  config.domain = 'https://[config].heimh.com/'
  config.uploadApi = 'https://mall-api.heimh.com/'
  config.linkApi = 'https://m.heimh.com/'
  config.adminLink = 'https://admin.heimh.com/'
  config.fullUrlPath = 'https://m.heimh.com/html/home/#/'
  config.imgServerUrl = 'https://img[0].heyoucloud.com/'
  config.staticUrl = 'https://static.heimh.com'
} else {//本地
  config.api = 'http://192.168.0.93:7300/mock/5ee050aa22d409057428e06e/'
  // config.api = 'https://mall-api.heyoucloud.com/'
  config.domain = 'https://[config].heyoucloud.com/'
  config.uploadApi = 'https://mall-api.heyoucloud.com/'
  config.linkApi = 'https://m.heyoucloud.com/'
  config.adminLink = 'https://admin.heyoucloud.com/'
  config.fullUrlPath = 'https://m.heyoucloud.com/html/home/#/'
  config.imgServerUrl = 'https://img[0].hfhomes.cn/'
  config.staticUrl = 'https://static.heyoucloud.com'
}
module.exports = config

