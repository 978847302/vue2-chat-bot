import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.config.errorHandler = (err, vm, info) => {
  console.log('errorHandle', err, vm, info)
  // err，错误对象
  // vm，发生错误的组件实例
  // info，Vue特定的错误信息，例如错误发生的生命周期、错误发生的事件
}

window.onerror = function (msg, url, lineNo, columnNo, error) {
  var string = msg.toLowerCase()
  var substring = 'script error'
  if (string.indexOf(substring) > -1) {
    alert('Script Error: See Browser Console for Detail')
  } else {
    var message = [
      'Message: ' + msg,
      'URL: ' + url,
      'Line: ' + lineNo,
      'Column: ' + columnNo,
      'Error object: ' + JSON.stringify(error)
    ].join(' - ')
    alert(message)
  }
  return false
}

new Vue({
  render: (h) => h(App)
}).$mount('#app')
