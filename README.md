# vue-global-message
### Install
`npm install react-global-message`

  or
   
`yarn add react-global-message`

### Configure in the entrance file
```js
// vue2
import Vue from 'vue'
import { Gmessage } from 'vue-global-message'
import 'vue-glob-message/dist/message.css'
Vue.use(Gmessage)

// vue3
import { createApp } from 'vue'
import 'vue-glob-message/dist/message.css'
import { Gmessage } from 'vue-global-message'
const app = createApp(App)
app.use(Gmessage)
```
### Use in other components
```tsx

// vue2
<template>
  <button type="button" @click="successMsg">success</button>
  <button type="button" @click="errorMsg">error</button>
</template>
<script>
  methods: {
    successMsg() {
      this.$gmessage({
        type: 'success',
        message: 'success message',
      })
    },
    errorMsg() {
      this.$gmessage({
        type: 'error',
        message: 'error message',
        duration: 3000
      })
    }
  }
</script>

// vue3

<script>
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const successMsg = () => {
  proxy.$gmessage({
    type: 'success',
    message: 'success message',
  })
}
const errorMsg = () => {
  proxy.$gmessage({
    type: 'error',
    message: 'error message',
    duration: 3000
  })
}
</>

<template>
  <button type="button" @click="successMsg">success</button>
  <button type="button" @click="errorMsg">error</button>
</template>
```
