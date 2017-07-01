/**
 * Created by douhongliang on 2017/7/1.
 */
export default{
  install (Vue, options){
    Vue.prototype.setDocumentTitle = function (title) {
      title = title || '默认titile'
      document.title = title
      if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
        let iframe = document.createElement('iframe')
        iframe.src = '/MP_verify_zxjwxCcP80t475ww.txt'
        iframe.style.display = 'none'
        iframe.onload = function () {
          setTimeout(function () {
            iframe.remove()
          }, 0)
          document.body.appendChild(iframe)
        }
      }
    }
  }
}
