

// 公用函数区域
export default {
  /**
  * [增加cookie]
  * @param {string} name [存储名称]
  * @param {any} value [存储值]
  * @param {number} days [有效天数]
  * @param {String} path [路径]
  */
  setCookie(name, value, days, path) {
    var name = escape(name);
    var value = escape(value);
    var expires = new Date();
    expires.setTime(expires.getTime() + (3600000 * 24 + days));
    path = path == ("" || undefined) ? "/" : ";path=" + path;
    var _expires = (typeof days) == "string" ? "" : ";expires=" + expires.toUTCString();
    document.cookie = name + "=" + value + _expires + path;
  },


  /**
  * [取出cookie(字符串裁剪)]
  * @param {string} name [存储名称]
  */
  getCookie(name) {
    var name = escape(name);
    var allcookies = document.cookie;
    name += "=";
    var pos = allcookies.indexOf(name);
    //如果找到了具有该名字的cookie，那么提取并使用它的值
    if (pos != -1) {
      var start = pos + name.length;
      var end = allcookies.indexOf(";", start);
      if (end == -1)
          end = allcookies.length;
      var value = allcookies.substring(start, end);
      return (unescape(value));
    } else { //搜索失败，返回空字符串
      return "";
    }
  },


  /**
  * [取出cookie(正则匹配)]
  * @param {string} name [存储名称]
  */
  getCookieReg(name) {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) return (arr[2]);
    else return null;
  },


  /**
  * [删除cookie]
  * @param {string} name [存储名称]
  * @param {String} path [路径]
  */
  removeCookie(name, path) {
    var name = escape(name);
    var expires = new Date(0);
    path = (path == ("" || undefined) ? "/" : ";path=" + path);
    document.cookie = name + "=" + ";expires=" + expires.toUTCString() + path;
  },


  /**
  * [存localStorage(设置期限)]
  * @param {string} key [名称]
  * @param {number} value [设置有效期(秒)]
  */
  setLocalTime(key, value) {
    var curTime = new Date().getTime() / 1000;
    localStorage.setItem(key, JSON.stringify({
      data: value,
      time: curTime
    }));
  },


  /**
  * [取localStorage(设置期限)]
  * @param {string} key [存储的名称]
  * @param {number} value [过期的时间 (秒)]
  */
  getLocalTime(key, exp) {
    var data = localStorage.getItem(key);
    var dataObj = JSON.parse(data);

    if(dataObj){
      if (new Date().getTime() / 1000 - dataObj.time > exp) {
        // 存储已过期
        return {status: false, mag: "存储已过期"}
      } else {
        return dataObj.data
      }
    }else{
      //找不到时
      return {status: false, mag: "不存在的"}
    }
  },


  /**
  * [localstorage存值]
  * @param {string} key [存储的名称]
  * @param {any} value [值]
  */
  setLocal(key, value) {
    let obj = localStorage.getItem(key);
    if (obj) {
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(value));
    } else {
        localStorage.setItem(key, JSON.stringify(value));
    }
  },


  /**
  * [localstorage取值]
  * @param {string} key [存储的名称]
  */
  getLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return ""
    }
  },


  /**
  * [LocalStorage删除值]
  * @param {string} key [存储的名称]
  * @param {any} value [值]
  */
  removeLocal(key) {
    localStorage.removeItem(key);
  },


  /**
  * [存sessionstorage]
  * @param {string} key [存储的名称]
  * @param {any} value [值]
  */
  setSession(key, value) {
    let obj = sessionStorage.getItem(key);
    if (obj) {
      sessionStorage.removeItem(key);
      sessionStorage.setItem(key, JSON.stringify(value));
    } else {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  },


  /**
  * [取sessionstorage值]
  * @param {string} key [取值名称]
  */
  getSession(key) {
    try {
      return JSON.parse(sessionStorage.getItem(key));
    } catch {
      return ""
    }
  },


  /**
  * [删除sessionStorage中的值]
  * @param {string} key [删除名称]
  */
  removeSession(key) {
    sessionStorage.removeItem(key);
  },

    
  /**
  * [判定是否微信浏览器]
  * @return {Boolean} [返回布尔值]
  */
  isWechatBrowerHandle() {
    let ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('micromessenger') != -1) {
        return true;
    } else {
        return false;
    }
  },

  
  /**
  * [时间戳]
  * @return {String} [返回时间戳字符串]
  */
  getTimestamp() {
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    return timestamp;
  },


  /**
   * [生成一个范围内的随机整数]
   * @param  {Number} min [范围最小值]
   * @param  {Number} max [范围内最大值]
   * @return {Number}     [返回随机整数]
  */
  randomNumber(min,max){
    return parseInt(Math.random()*(max-min+1)) + min
  },


  /**
   * [生成随机颜色]
   * @return {String} [返回rgb颜色字符串]
   */
  randomColor(){
    var r = parseInt(Math.random()*256);
    var g = parseInt(Math.random()*256);
    var b = parseInt(Math.random()*256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  },


  /**
   * [是否含有非法字符串]
   * @param  {String} str [需要过滤的字符串]
   * @return {Boolean} 
  */
  illegalFilter(str){
    let regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
    let regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;

    if (regEn.test(str) || regCn.test(str)) return false;
    return true;
  },


  /**
  * [数据深拷贝]
  * @param {Object} obj
  * @param {Fn} hash
  * @returns {Object}
  */
  deepClone(obj, hash = new WeakMap()) {

    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Date) return new Date(obj);
    if (obj === null || typeof obj !== "object") {
      //如果不是复杂数据类型，直接返回
      return obj;
    }

    if (hash.has(obj)) {
      return hash.get(obj);
    }

    /**
     * 如果obj是数组， 那么 obj.constructor 是 [Function: Array]
     * 如果obj是对象， 那么 obj.constructor 是 [Function: Object]
     */

    let t = new obj.constructor();
    hash.set(obj, t);
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        t[key] = this.deepClone(obj[key], hash);
      }
    }
    return t;
  },



  /**
  * [时间格式化]
  * @param {time} (Date || String) [需要格式化的时间值]
  * @param {fmt} String [格式]
  * @returns {String}
  * 调用：let time = formatDate(new Date(),'yyyy/MM/dd hh:mm')
  */
  formatDate(time, fmt) {
    if (time === undefined || '') {
      return
    }
    const date = new Date(time)
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (const k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        const str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : this.padLeftZero(str))
      }
    }
    return fmt
  },
  padLeftZero(str) {
    return ('00' + str).substr(str.length)
  }



}