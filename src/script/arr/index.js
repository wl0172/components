const handleArr = {

  // 数组检测数据变化-数据拦截
  handlePush(){
    // 重写push等方法，然后再把原型指回原方法
    var ARRAY_METHOD = [ 'push', 'pop', 'shift', 'unshift', 'reverse',  'sort', 'splice' ];
    var array_methods = Object.create(Array.prototype);
    ARRAY_METHOD.forEach(method => {
      array_methods[method] = function () {
        // 拦截方法
        console.log('调用的是拦截的 ' + method + ' 方法，进行依赖收集');
        return Array.prototype[method].apply(this, arguments);
      }
    });
  },


  // 浅拷贝
  isObject (obj) {
    return obj !== null && typeof obj === 'object'
  },
  looseEqual (a, b) {
    if (a === b) { return true }
    var isObjectA = isObject(a);
    var isObjectB = isObject(b);
    if (isObjectA && isObjectB) {
      try {
        var isArrayA = Array.isArray(a);
        var isArrayB = Array.isArray(b);
        if (isArrayA && isArrayB) {
          return a.length === b.length && a.every(function (e, i) {
            return looseEqual(e, b[i])
          })
        } else if (!isArrayA && !isArrayB) {
          var keysA = Object.keys(a);
          var keysB = Object.keys(b);
          return keysA.length === keysB.length && keysA.every(function (key) {
            return looseEqual(a[key], b[key])
          })
        } else {
          /* istanbul ignore next */
          return false
        }
      } catch (e) {
        /* istanbul ignore next */
        return false
      }
    } else if (!isObjectA && !isObjectB) {
      return String(a) === String(b)
    } else {
      return false
    }
  },


  

  
}

export default handleArr