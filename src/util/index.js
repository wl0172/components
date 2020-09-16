
/**
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/\+/g, ' ') +
    '"}'
  )
}

/**
 * 1000,000,000,000
 * @param n
 * @returns {string}
 */
export function sep2(n){
  let str = n.toString()
  str.indexOf('.') < 0 ? str+= '.' : void 0
  return str.replace(/(\d)(?=(\d{3})+\.)/g, '$1,').replace(/\.$/, '')
}

/**
 * 支付方式 数字
 * @param n
 * @returns {string}
 */
export function payType(type){
  const payType = [//1线下支付,2账号内支付,4支付宝支付,5微信支付,8快钱支付
    {
      value: '1',
      label: '线下支付'
    },
    {
      value: '2',
      label: '账户余额支付'
    },
    {
      value: '4',
      label: '支付宝支付'
    },
    {
      value: '5',
      label: '微信支付'
    },
    {
      value: '8',
      label: '快钱支付'
    },
  ];

  return payType.find(item => item.value == type).label;
}
/**
 * 获取参数
 * @param n
 * @returns {string}
 */
export function getUrlQueryParams(paramsName) {
  console.log(window.location.hash.substr(window.location.hash.indexOf('?')))
  let u = window.location.search || window.location.hash.substr(window.location.hash.indexOf('?')+1)
  let queryKey = []
  let queryValue =[]
  if (u != '') {
    let parms = decodeURIComponent(u).split('&');
    for (var i = 0, len = parms.length; i < len; i++) {
      if (parms[i] != '') {
        var p = parms[i].split("=");
        if (p.length == 1 || (p.length == 2 && p[1] == '')) {// p | p=
          queryValue.push(['']);
          queryKey[p[0]] = queryValue.length - 1;
        } else if (typeof(p[0]) == 'undefined' || p[0] == '') { // =c | =
          queryValue[0] = [p[1]];
        } else if (typeof(queryKey[p[0]]) == 'undefined') { // c=aaa
          queryValue.push([p[1]]);
          queryKey[p[0]] = queryValue.length - 1;
        } else {// c=aaa
          queryValue[queryKey[p[0]]].push(p[1]);
        }
      }
    }
  }
  console.log(queryValue)
  console.log(queryKey)
  if(queryValue[parseInt(queryKey[paramsName])]) {
    return queryValue[parseInt(queryKey[paramsName])][0]
  } else {
    return '';
  }
}


/**
 * 支付方式 字符串
 * @param n
 * @returns {string}
 */
export function payTypeStr(type){
  const payType = [
    {
      value: 'P_MODE_OFFLINE',
      label: '线下支付'
    },
    {
      value: 'P_MODE_BALANCE',
      label: '账户余额支付'
    },
    {
      value: 'P_MODE_EXPRESS',
      label: '银联快捷支付'
    },
    {
      value: 'P_MODE_ALI',
      label: '支付宝支付'
    },
    {
      value: 'P_MODE_WECHAT',
      label: '微信支付'
    },
    {
      value: 'P_MODE_BANK',
      label: '网银支付'
    },
    {
      value: 'P_MODE_EXPRESS_CHANPAY',
      label: '畅捷快捷支付'
    },
    {
      value: 'P_MODE_EXPRESS_KQ99BILL',
      label: '快钱支付'
    },
    {
      value: 'P_MODE_BONUS',
      label: '购物津贴支付'
    },
  ];

  return payType.find(item => item.value == type).label;
}
