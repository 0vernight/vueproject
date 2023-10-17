<!-- HomeView.vue -->
<script setup>
import { defineComponent, onMounted, ref } from 'vue'
// import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue'

defineProps(['modelValue'])
defineComponent({
  //   name: 'HomeView',
  //   components: {},
  props: {
    tittle: {
      type: String,
      required: false,
      default: ''
    },
    setup() {
      return {}
    }
  }
})
defineEmits(['update:modelValue'])

import * as echarts from 'echarts'

// var ROOT_PATH = 'https://echarts.apache.org/examples'

// var chartDom = document.getElementById('mychart')
// var myChart = echarts.init(chartDom)
// var option = ref('')
const myElchartdom = ref(null)
let myElchart
const myElchartOption = {
  title: {
    text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}
// myChart.showLoading()
myElchartdom.value = document.getElementById('mychart')

onMounted(() => {
  if (myElchartdom.value) {
    myElchart = echarts.init(myElchartdom.value)
    myElchart.setOption(myElchartOption)
  }
  // eslint-disable-next-line no-undef
})

// eslint-disable-next-line no-undef

// $.getJSON(ROOT_PATH.value + '/data/asset/data/les-miserables.json', function (graph) {
//   myElchart.value.hideLoading()
//   graph.nodes.forEach(function (node) {
//     node.label = {
//       show: node.symbolSize > 30
//     }
//   })
//   option.value = {
//     title: {
//       text: 'Les Miserables',
//       subtext: 'Default layout',
//       top: 'bottom',
//       left: 'right'
//     },
//     tooltip: {},
//     legend: [
//       {
//         // selectedMode: 'single',
//         data: graph.categories.map(function (a) {
//           return a.name
//         })
//       }
//     ],
//     animationDuration: 1500,
//     animationEasingUpdate: 'quinticInOut',
//     series: [
//       {
//         name: 'Les Miserables',
//         type: 'graph',
//         layout: 'none',
//         data: graph.nodes,
//         links: graph.links,
//         categories: graph.categories,
//         roam: true,
//         label: {
//           position: 'right',
//           formatter: '{b}'
//         },
//         lineStyle: {
//           color: 'source',
//           curveness: 0.3
//         },
//         emphasis: {
//           focus: 'adjacency',
//           lineStyle: {
//             width: 10
//           }
//         }
//       }
//     ]
//   }
//   myElchart.value.setOption(option)
// })
//option.value && myElchart.value.setOption(option)
</script>

<template>
  <!-- <slot>my slot is empty </slot> -->

  <div class="container">
    <header>
      <slot name="header" :count="123"></slot>
      <template>
        <div class="block text-center">
          <span class="demonstration">Switch when indicator is hovered (default)</span>
        </div>
      </template>
    </header>
    <main>
      <div ref="mychart"></div>
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>


<style>
.pm {
  color: aliceblue;
}
</style>
