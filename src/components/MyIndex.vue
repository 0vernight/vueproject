<script setup lang="ts">
// import MyIndex from './MyIndex.vue'
// import DocumentationIcon from './icons/IconDocumentation.vue'
// import ToolingIcon from './icons/IconTooling.vue'
// import EcosystemIcon from './icons/IconEcosystem.vue'
import CustomInput from './CustomInput.vue'
import HomeView from './HomeView.vue'

import {
  computed,
  defineComponent,
  onMounted,
  onServerPrefetch,
  reactive,
  ref,
  useAttrs,
  watch
} from 'vue'
import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue'

// import SupportIcon from './icons/IconSupport.vue'
//就是prop里的擦书需要在引用该组件时提供的参数
//需要使用驼峰命名,传入时注意使用
// 第一种方式
// const props = defineProps(['foo'])
// 第二种方式
// defineProps({
//   title: String,
//   likes: Number
// })
// 静态 vs. 动态 Prop   相应地，还有使用 v-bind 或缩写 : 来进行动态绑定的 props
defineProps({
  msg: {
    type: [String, Number],
    required: true,
    default: 'myIndex default for this!'
  },
  myObj: {
    type: Object,
    required: false
  },
  setup: () => {
    return {
      msg: String
    }
  }
})

defineComponent({
  name: 'MyIndex',
  components: {
    //myindex,
  },
  setup: () => {
    const msg = ref('this is my home down home !')
    const html1 = `<span style="color:red">this shuld be red</span>`

    return {
      msg,
      html1
    }
  }
})
const pm = ref('pm')
// const msg = ref('this is my home down home !');

const author = reactive({
  name: 'john doe',
  books: ['vue2', 'vue3', 'vue4', 'eg:others']
})
const publishedmsg = computed(() => {
  return author.books.length > 0 ? 'yes' : 'no'
})
const isActive = ref(true)
const hasError = ref(true)
const classObject = reactive({
  active: true,
  'text-danger': false
})
const awesome = ref(true)
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
function say(message) {
  alert(message)
  this.msg = message
  console.log(this.msg)
}
function warn(message, event) {
  // 这里可以访问原生事件,有时我们需要在内联事件处理器中访问原生 DOM 事件$event
  console.log(event)
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
const text = ref(0)
const message = ref('')
window.onload = () => {
  let html2 = `<span style="color:red">this shuld be red</span>`
  console.log('this is myindex msg' + html2)

  const state = reactive({ count: 0 })

  console.log(state)
}
const data = ref(null)

onServerPrefetch(async () => {
  // 组件作为初始请求的一部分被渲染
  // 在服务器上预抓取数据，因为它比在客户端上更快。
  //   data.value = await fetchOnServer(/* ... */)
})
const refel = ref(null)
onMounted(async () => {
  console.log('mounted hasbeen onladed!')
  if (!data.value) {
    // 如果数据在挂载时为空值，这意味着该组件
    // 是在客户端动态渲染的。将转而执行
    // 另一个客户端侧的抓取请求
    // data.value = await fetchOnClient(/* ... */)
  }
  if (refel.value) {
    ;(refel.value as any).focus()
  }
})
//侦听
const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

// 可以直接侦听一个 ref
watch(
  question,
  async (newQuestion, oldQuestion) => {
    console.log('oldqusntion=' + oldQuestion)
    if (newQuestion.indexOf('?') > -1) {
      answer.value = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        answer.value = (await res.json()).answer
      } catch (error) {
        answer.value = 'Error! Could not reach the API. ' + error
      }
    }
  },
  { immediate: true, deep: true }
)
// 调用给父组件的emits事件,触发与监听事件
const emit = defineEmits(['someEvent', 'callback', 'callduty'])
emit('someEvent', 'callback', 'callduty')

const searchText = ref('input some search text in here !')
const attrs = useAttrs()
</script>

<template>
  <div class="greetings">
    <h3 @click="$emit('someEvent', 20)" class="green">{{ msg }} {{ attrs }}</h3>
    <h3>
      <p id="idpm" :class="pm" name="p">myindex may be you will doing great and best i gees !</p>
      <!-- You’ve successfully created a project with
            <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
            <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. -->
    </h3>
    <!-- <div >{{html1}}</div> -->
    <!-- <div v-html="html1"></div> -->
    <p>Has published books:</p>
    <span>{{ author.books.length > 0 ? 'Yes' : 'no' }}</span>
    <br />
    <span>{{ publishedmsg }}</span>
    <div :class="{ active: isActive }">active is true always</div>

    <div class="static" :class="{ active: isActive, 'text-danger': hasError }">
      danger views by blue color
    </div>
    <div :class="classObject"></div>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <button @click="awesome = !awesome">Toggle</button>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>

    <ul>
      <li v-for="(value, key, index) in author.books" :key="key">
        {{ index }}. {{ key }}: {{ value }}
      </li>
    </ul>
    <li v-for="(value, key) in myObject" :key="key">{{ key }}: {{ value }}</li>
    <li v-for="(value, key, index) in myObject" :key="key">{{ index }}. {{ key }}: {{ value }}</li>
    <span v-for="n in 10" :key="n">{{ n }}</span
    ><br />
    <button @click="say('hello')">Say hello</button>
    <button @click="say('bye')">Say bye</button>
    <button @click="(event) => warn('Form cannot be submitted yet.', event)">Say bye</button>
    <button @keyup.enter="say('bye')">Say bye just only enter</button>
    <button @keyup.enter.ctrl="say('bye')">Say bye ctrl+enter</button><br />

    <input v-model="text" />
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />

    <p>
      Ask a yes/no question:
      <input v-model="question" placeholder="happy yes?" />
    </p>
    <p>{{ answer }}</p>

    <input ref="refel" placeholder="refel" />
  </div>

  <div>
    <CustomInput v-model:model-value="searchText" aria-placeholder="searchText">
      <template v-slot:header="{ count }">
        <span>Fallthrough attribute: {{ $attrs }} {{ (this.state = count) }}</span>
      </template>
      <template v-slot:footer>
        <span>{{ this.state }}</span>
      </template>
    </CustomInput>
  </div>

  <template>
    <HomeView modelValue=" in myindex view ">my HomeView in here </HomeView>
  </template>
  <div>
    <div>
      <!-- <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="100" height="100" /> -->
    </div>
  </div>
</template>



<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.active {
  background-color: aquamarine;
}
.text-danger {
  color: blue;
}
.pm {
  color: rgb(136, 169, 198);
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

function fetchOnServer(): any {
  throw new Error('Function not implemented.')
}

function fetchOnClient(): any {
  throw new Error('Function not implemented.')
}

function fetchOnClient(): any {
  throw new Error('Function not implemented.')
}
