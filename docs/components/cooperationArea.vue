<template>
    <div>
        <div class="pie"></div>
        <div class="bar"></div>
    </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted } from 'vue';

onMounted(() => {
    let pie = document.querySelector('.pie')

    let pieChart = echarts.init(pie)

    //饼图
    let pieOption = {
        title: {
            text: '种植面积',
            textStyle: {
                fontSize: 30
            },
            left: 'center',
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: "8%",
            orient: 'vertical',
            left: 'center'
        },
        series: [
            {
                type: 'pie',
                top: '5%',
                radius: '50%',
                avoidLabelOverlap: false,
                data: [
                    { value: 165, name: `户太八号165亩` },
                    { value: 105, name: `阳光玫瑰105亩` },
                    { value: 30, name: `夏黑30亩` },
                ],
                label: {
                    normal: {
                        show: true,
                        formatter: '{b}: {d}%' // 显示名称和百分比
                    }
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        left: 'center'
                    }
                },
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
            }
        ]
    }
    pieChart.setOption(pieOption);


    //柱状图
    let bar = document.querySelector('.bar')
    let barChart = echarts.init(bar)


    let barOption = {
        title: {
            text: '往年收入',
            textStyle: {
                fontSize: 30
            },
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['总收入', '利润'],
            top: '8%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '总收入',
                type: 'bar',
                data: [
                    '153.5',
                    '185.3',
                    '245.8',
                    '306.7',
                    '358.1',
                    '423.8',
                    '568.2',
                    '753.1',
                ],
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        formatter: '{c} 万' // 显示名称和百分比
                    }
                },
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
            },
            {
                name: '利润',
                type: 'bar',
                data: [
                    '102.3',
                    '123.5',
                    '165.8',
                    '204.5',
                    '238.7',
                    '282.5',
                    '378.8',
                    '502.1',
                ],
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        formatter: '{c} 万' // 显示名称和百分比
                    }
                },
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
            }
        ]
    };
    barChart.setOption(barOption);
})

</script>

<style>
.pie,
.bar {
    height: 50vh;
}
</style>