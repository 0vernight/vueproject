import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
//import axios from 'https://unpkg.com/axios/dist/axios.min.js'

// this.Vue.prototype.axios = axios

createApp(App).mount('#app')

// App.components()

window.onload = () => {
  let el = document.getElementsByClassName('green')
  el.value = 'tiaozhuan'
  console.log('myconsole=' + el)
  let pc = document.getElementsByClassName('.pm')
  let pi = document.getElementById('idpm')
  console.log('class =' + pc)
  console.log('id =' + pi)
  //pc.style ="red";
  pi.style.color = 'white'
  pi.style.backgroundColor = 'green'
  // let p = document.createElement("p");
  // p.textContent="哈哈哈哈";
  // p.insertBefore(el);

  let i = 0
  let timer = setInterval(() => {
    ++i
    if (i < 3) {
      console.log('interval=' + i)
    } else {
      clearInterval(timer)
    }
  }, 1000)
}
// const promise =new Promise((resolve, reject) => {

//     if (promise.then.resolve) {
//         resolve();
//     } else {
//         reject();

//     }
// })
// console(promise.then.arguments)
// function a(){
//       return new Promise(function(res,rej){
//         $.ajax({
//             url: '',
//             method: 'POST',
//             datatype: 'json',
//             success: data => {
//                 res(data);
//             },
//             error: err => {
//                 rej(err);
//             }
//         })
//       });
//     }
// function b(data){
//       console.log(data,"data");
//       return new Promise(function(res,rej){
//         $.ajax({
//             url:"b接口",
//             type: "POST",
//             async:true,
//             data:JSON.stringify(data),
//             dataType:"json",
//             success:function(data){
//               console.log(data,"b");
//               res();
//             }
//           })
//       });
// }
// function c(data) {
//     console.log(data);
//     return new Promise((resolve, reject) => {
//         axios.get();
//     })
// }
// $("#btn").click(function(){
//       a().then(function (data){
//         b(data);
//       }).then(function(){
//       })
// })
