// gmessage.ts
import './message.css'
export default {
  install(appOrVue) {
    const isVue3 = typeof appOrVue === 'object' && 'config' in appOrVue
    const app = isVue3 ? appOrVue : null
    const Vue = isVue3 ? appOrVue.config.globalProperties : appOrVue

    const $gmessage = (options) => {
      const { type = 'success', message, duration = 2000 } = options
      const style = document.createElement('style')
      document.head.appendChild(style)
      const messageElement = document.createElement('div')
      messageElement.className = `fade-in massage-container ${type}`
      messageElement.innerHTML = message
      document.body.appendChild(messageElement)
      setTimeout(() => {
        messageElement.classList.remove('fade-in')
        messageElement.classList.add('fade-out')
        setTimeout(() => {
          document.body.removeChild(messageElement)
        }, 500);
      }, duration)
    }

    if (isVue3) {
      app.config.globalProperties.$gmessage = $gmessage
    } else {
      Vue.prototype.$gmessage = $gmessage
    }
  }
}