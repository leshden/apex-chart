const options = {
  chart: {
    height: 500,
    width: '100%',
    type: 'bar',
    background: '#D0D0D0',
    foreColor: 'black',
  },

  series: [{
    name: 'Погибло',
    data: [1082, 757, 816, 815, 1142, 1271, 1454, 1679, 1568, 1539, 1402, 1349]
  },
  {
    name: 'ДТП',
    data: [9164, 8051, 8463, 8885, 11146, 12006, 13077, 13583, 12794, 12742, 11574, 11846]
  },
  {
    name: 'Ранено',
    data: [12153, 10221, 10857, 10853, 13975, 15172, 16726, 17308, 15592, 15657, 14296, 15046]
  }
],

  xaxis: {
    categories: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
  },

  dataLabels: {
    enabled: false
  },

  title: {
    text: 'Статистика ДТП в РФ за 2021 год',
    align: 'center',
    offsetY: 20
  },

};
const chart = new ApexCharts(document.getElementById('chart'), options);
chart.render();
