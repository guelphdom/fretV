



var labels1= []
var labels3= []
var labels4= []
var labels5 = []
var labels6 = [],labelExpense=[],labelExpenseX=[]
let labels99=[]
var passLabel2X=[]
var labels13=[]
var   passLabel=[]
var passLabel1=[]
var  passLabel2=[]
var  passLabel3=[]
var labelStat=[]

var colorPalette = ['#00D8B6','#008FFB',  '#FEB019', '#FF4560', '#775DD0']

let colors1 = ['#49A9EA', '#36CAAB'];
var options = {
    series: [{
    name: 'Series 1',
    data: [80, 50, 30, 40, 100, 20],
  }],
    chart: {
    height: 350,
    type: 'radar',
  },
  title: {
    text: 'Fin Stats'
  },
  xaxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June']
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart7"), options);
  chart.render();


var options = {
    series: [{
    name: 'Income',
    type: 'column',
    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
  }, {
    name: 'Cashflow',
    type: 'column',
    data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
  }, {
    name: 'Revenue',
    type: 'line',
    data: [20, 29, 37, 36, 44, 45, 50, 58]
  }],
    chart: {
    height: 350,
    type: 'line',
    stacked: false
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [1, 1, 4]
  },
  title: {
    text: '(2022 - 2023)',
    align: 'left',
    offsetX: 110
  },
  xaxis: {
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  },
  yaxis: [
    {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#008FFB'
      },
      labels: {
        style: {
          colors: '#008FFB',
        }
      },
      title: {
        text: "Income (thousand crores)",
        style: {
          color: '#008FFB',
        }
      },
      tooltip: {
        enabled: true
      }
    },
    {
      seriesName: 'Income',
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#00E396'
      },
      labels: {
        style: {
          colors: '#00E396',
        }
      },
      title: {
        text: "Operating Cashflow (thousand crores)",
        style: {
          color: '#00E396',
        }
      },
    },
    {
      seriesName: 'Revenue',
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#FEB019'
      },
      labels: {
        style: {
          colors: '#FEB019',
        },
      },
      title: {
        text: "Revenue (thousand crores)",
        style: {
          color: '#FEB019',
        }
      }
    },
  ],
  tooltip: {
    fixed: {
      enabled: true,
      position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
      offsetY: 30,
      offsetX: 60
    },
  },
  legend: {
    horizontalAlign: 'left',
    offsetX: 40
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart05"), options);
  chart.render();
//registration stats

var options = {
    series: [
    {
      name: "2022",
      data: [28, 29, 33, 36, 32, 32, 33]
    },
    {
      name: "2023",
      data: [12, 11, 14, 18, 17, 13, 13]
    }
  ],
    chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Registration Stats',
    align: 'left'
  },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title: {
      text: 'Month'
    }
  },
  yaxis: {
    title: {
      text: 'Student Registration'
    },
    min: 5,
    max: 40
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart04"), options);
  chart.render();



$.ajax({
   
    dataType: 'json',
    type: 'POST',
    url: "/feesChart",
    success: function(data) {
    console.log(data)
     for (var i = 0;i<data.length;i++){
        labels3.push(data[i].amount)
        labels13.push(data[i].month)
   
   
     }


     var options = {
        series: [{
        data: [
          [1327359600000,30.95],
          [1327446000000,31.34],
          [1327532400000,31.18],
          [1327618800000,31.05],
          [1327878000000,31.00],
          [1327964400000,30.95],
          [1328050800000,31.24],
          [1328137200000,31.29],
          [1328223600000,31.85],
          [1328482800000,31.86],
          [1328569200000,32.28],
          [1328655600000,32.10],
          [1328742000000,32.65],
          [1328828400000,32.21],
          [1329087600000,32.35],
          [1329174000000,32.44],
          [1329260400000,32.46],
          [1329346800000,32.86],
          [1329433200000,32.75],
          [1329778800000,32.54],
          [1329865200000,32.33],
          [1329951600000,32.97],
          [1330038000000,33.41],
          [1330297200000,33.27],
          [1330383600000,33.27],
          [1330470000000,32.89],
          [1330556400000,33.10],
          [1330642800000,33.73],
          [1330902000000,33.22],
          [1330988400000,31.99],
          [1331074800000,32.41],
          [1331161200000,33.05],
          [1331247600000,33.64],
          [1331506800000,33.56],
          [1331593200000,34.22],
          [1331679600000,33.77],
          [1331766000000,34.17],
          [1331852400000,33.82],
          [1332111600000,34.51],
          [1332198000000,33.16],
          [1332284400000,33.56],
          [1332370800000,33.71],
          [1332457200000,33.81],
          [1332712800000,34.40],
          [1332799200000,34.63],
          [1332885600000,34.46],
          [1332972000000,34.48],
          [1333058400000,34.31],
          [1333317600000,34.70],
          [1333404000000,34.31],
          [1333490400000,33.46],
          [1333576800000,33.59],
          [1333922400000,33.22],
          [1334008800000,32.61],
          [1334095200000,33.01],
          [1334181600000,33.55],
          [1334268000000,33.18],
          [1334527200000,32.84],
          [1334613600000,33.84],
          [1334700000000,33.39],
          [1334786400000,32.91],
          [1334872800000,33.06],
          [1335132000000,32.62],
          [1335218400000,32.40],
          [1335304800000,33.13],
          [1335391200000,33.26],
          [1335477600000,33.58],
          [1335736800000,33.55],
          [1335823200000,33.77],
          [1335909600000,33.76],
          [1335996000000,33.32],
          [1336082400000,32.61],
          [1336341600000,32.52],
          [1336428000000,32.67],
          [1336514400000,32.52],
          [1336600800000,31.92],
          [1336687200000,32.20],
          [1336946400000,32.23],
          [1337032800000,32.33],
          [1337119200000,32.36],
          [1337205600000,32.01],
          [1337292000000,31.31],
          [1337551200000,32.01],
          [1337637600000,32.01],
          [1337724000000,32.18],
          [1337810400000,31.54],
          [1337896800000,31.60],
          [1338242400000,32.05],
          [1338328800000,31.29],
          [1338415200000,31.05],
          [1338501600000,29.82],
          [1338760800000,30.31],
          [1338847200000,30.70],
          [1338933600000,31.69],
          [1339020000000,31.32],
          [1339106400000,31.65],
          [1339365600000,31.13],
          [1339452000000,31.77],
          [1339538400000,31.79],
          [1339624800000,31.67],
          [1339711200000,32.39],
          [1339970400000,32.63],
          [1340056800000,32.89],
          [1340143200000,31.99],
          [1340229600000,31.23],
          [1340316000000,31.57],
          [1340575200000,30.84],
          [1340661600000,31.07],
          [1340748000000,31.41],
          [1340834400000,31.17],
          [1340920800000,32.37],
          [1341180000000,32.19],
          [1341266400000,32.51],
          [1341439200000,32.53],
          [1341525600000,31.37],
          [1341784800000,30.43],
          [1341871200000,30.44],
          [1341957600000,30.20],
          [1342044000000,30.14],
          [1342130400000,30.65],
          [1342389600000,30.40],
          [1342476000000,30.65],
          [1342562400000,31.43],
          [1342648800000,31.89],
          [1342735200000,31.38],
          [1342994400000,30.64],
          [1343080800000,30.02],
          [1343167200000,30.33],
          [1343253600000,30.95],
          [1343340000000,31.89],
          [1343599200000,31.01],
          [1343685600000,30.88],
          [1343772000000,30.69],
          [1343858400000,30.58],
          [1343944800000,32.02],
          [1344204000000,32.14],
          [1344290400000,32.37],
          [1344376800000,32.51],
          [1344463200000,32.65],
          [1344549600000,32.64],
          [1344808800000,32.27],
          [1344895200000,32.10],
          [1344981600000,32.91],
          [1345068000000,33.65],
          [1345154400000,33.80],
          [1345413600000,33.92],
          [1345500000000,33.75],
          [1345586400000,33.84],
          [1345672800000,33.50],
          [1345759200000,32.26],
          [1346018400000,32.32],
          [1346104800000,32.06],
          [1346191200000,31.96],
          [1346277600000,31.46],
          [1346364000000,31.27],
          [1346709600000,31.43],
          [1346796000000,32.26],
          [1346882400000,32.79],
          [1346968800000,32.46],
          [1347228000000,32.13],
          [1347314400000,32.43],
          [1347400800000,32.42],
          [1347487200000,32.81],
          [1347573600000,33.34],
          [1347832800000,33.41],
          [1347919200000,32.57],
          [1348005600000,33.12],
          [1348092000000,34.53],
          [1348178400000,33.83],
          [1348437600000,33.41],
          [1348524000000,32.90],
          [1348610400000,32.53],
          [1348696800000,32.80],
          [1348783200000,32.44],
          [1349042400000,32.62],
          [1349128800000,32.57],
          [1349215200000,32.60],
          [1349301600000,32.68],
          [1349388000000,32.47],
          [1349647200000,32.23],
          [1349733600000,31.68],
          [1349820000000,31.51],
          [1349906400000,31.78],
          [1349992800000,31.94],
          [1350252000000,32.33],
          [1350338400000,33.24],
          [1350424800000,33.44],
          [1350511200000,33.48],
          [1350597600000,33.24],
          [1350856800000,33.49],
          [1350943200000,33.31],
          [1351029600000,33.36],
          [1351116000000,33.40],
          [1351202400000,34.01],
          [1351638000000,34.02],
          [1351724400000,34.36],
          [1351810800000,34.39],
          [1352070000000,34.24],
          [1352156400000,34.39],
          [1352242800000,33.47],
          [1352329200000,32.98],
          [1352415600000,32.90],
          [1352674800000,32.70],
          [1352761200000,32.54],
          [1352847600000,32.23],
          [1352934000000,32.64],
          [1353020400000,32.65],
          [1353279600000,32.92],
          [1353366000000,32.64],
          [1353452400000,32.84],
          [1353625200000,33.40],
          [1353884400000,33.30],
          [1353970800000,33.18],
          [1354057200000,33.88],
          [1354143600000,34.09],
          [1354230000000,34.61],
          [1354489200000,34.70],
          [1354575600000,35.30],
          [1354662000000,35.40],
          [1354748400000,35.14],
          [1354834800000,35.48],
          [1355094000000,35.75],
          [1355180400000,35.54],
          [1355266800000,35.96],
          [1355353200000,35.53],
          [1355439600000,37.56],
          [1355698800000,37.42],
          [1355785200000,37.49],
          [1355871600000,38.09],
          [1355958000000,37.87],
          [1356044400000,37.71],
          [1356303600000,37.53],
          [1356476400000,37.55],
          [1356562800000,37.30],
          [1356649200000,36.90],
          [1356908400000,37.68],
          [1357081200000,38.34],
          [1357167600000,37.75],
          [1357254000000,38.13],
          [1357513200000,37.94],
          [1357599600000,38.14],
          [1357686000000,38.66],
          [1357772400000,38.62],
          [1357858800000,38.09],
          [1358118000000,38.16],
          [1358204400000,38.15],
          [1358290800000,37.88],
          [1358377200000,37.73],
          [1358463600000,37.98],
          [1358809200000,37.95],
          [1358895600000,38.25],
          [1358982000000,38.10],
          [1359068400000,38.32],
          [1359327600000,38.24],
          [1359414000000,38.52],
          [1359500400000,37.94],
          [1359586800000,37.83],
          [1359673200000,38.34],
          [1359932400000,38.10],
          [1360018800000,38.51],
          [1360105200000,38.40],
          [1360191600000,38.07],
          [1360278000000,39.12],
          [1360537200000,38.64],
          [1360623600000,38.89],
          [1360710000000,38.81],
          [1360796400000,38.61],
          [1360882800000,38.63],
          [1361228400000,38.99],
          [1361314800000,38.77],
          [1361401200000,38.34],
          [1361487600000,38.55],
          [1361746800000,38.11],
          [1361833200000,38.59],
          [1361919600000,39.60],
        ]
      }],
        chart: {
        id: 'area-datetime',
        type: 'area',
        height: 350,
        zoom: {
          autoScaleYaxis: true
        }
      },
      annotations: {
        yaxis: [{
          y: 30,
          borderColor: '#999',
          label: {
            show: true,
            text: 'Support',
            style: {
              color: "#fff",
              background: '#00E396'
            }
          }
        }],
        xaxis: [{
          x: new Date('14 Nov 2012').getTime(),
          borderColor: '#999',
          yAxisIndex: 0,
          label: {
            show: true,
            text: 'Rally',
            style: {
              color: "#fff",
              background: '#775DD0'
            }
          }
        }]
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
        style: 'hollow',
      },
      xaxis: {
        type: 'datetime',
        min: new Date('01 Mar 2012').getTime(),
        tickAmount: 6,
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      },
      };

      var chart = new ApexCharts(document.querySelector("#chart-timeline"), options);
      chart.render();
    
    
      var resetCssClasses = function(activeEl) {
      var els = document.querySelectorAll('button')
      Array.prototype.forEach.call(els, function(el) {
        el.classList.remove('active')
      })
    
      activeEl.target.classList.add('active')
    }
    
    document
      .querySelector('#one_month')
      .addEventListener('click', function(e) {
        resetCssClasses(e)
    
        chart.zoomX(
          new Date('28 Jan 2013').getTime(),
          new Date('27 Feb 2013').getTime()
        )
      })
    
    document
      .querySelector('#six_months')
      .addEventListener('click', function(e) {
        resetCssClasses(e)
    
        chart.zoomX(
          new Date('27 Sep 2012').getTime(),
          new Date('27 Feb 2013').getTime()
        )
      })
    
    document
      .querySelector('#one_year')
      .addEventListener('click', function(e) {
        resetCssClasses(e)
        chart.zoomX(
          new Date('27 Feb 2012').getTime(),
          new Date('27 Feb 2013').getTime()
        )
      })
    
    document.querySelector('#ytd').addEventListener('click', function(e) {
      resetCssClasses(e)
    
      chart.zoomX(
        new Date('01 Jan 2013').getTime(),
        new Date('27 Feb 2013').getTime()
      )
    })
    
    document.querySelector('#all').addEventListener('click', function(e) {
      resetCssClasses(e)
    
      chart.zoomX(
        new Date('23 Jan 2012').getTime(),
        new Date('27 Feb 2013').getTime()
      )
    })
    
    }
})

$.ajax({
       
    dataType: 'json',
    type: 'POST',

    url: "/classChart",
    success: function(data) {
console.log(data,'data')
let labels1 =[]
let labels2=[]
for (var i = 0;i<data.length;i++){
        labels2.push(data[i].class1)
        labels1.push(data[i].classNo)
     }
var options = {
    series: labels1,
    chart: {
    width: 380,
    type: 'polarArea'
  },
  labels: labels2,
  fill: {
    opacity: 1
  },
  stroke: {
    width: 1,
    colors: undefined
  },
  yaxis: {
    show: false
  },
  legend: {
    position: 'bottom'
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0
      },
      spokes: {
        strokeWidth: 0
      },
    }
  },
  theme: {
    monochrome: {
      enabled: true,
      shadeTo: 'light',
      shadeIntensity: 0.6
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();




    }
})


$.ajax({
       
    dataType: 'json',
    type: 'POST',

    url: "/dashChartXX3",
    success: function(data) {
console.log(data,'data')
let labels1 =[]
let labels2=[]
for (var i = 0;i<data.length;i++){
        labels2.push(data[i].class1)
        labels1.push(data[i].percentage)
     }
    let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];

//contractQty
const  element = document.getElementById('myChart00');

const height = parseInt(KTUtil.css(element, 'height'));

const labelColor = KTUtil.getCssVariableValue('--bs-gray-900');
const borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color'); 

const options = {
    series: [{
        name: 'Avg Mark',
        data: labels1
    }],
    chart: {
        fontFamily: 'inherit',
        type: 'bar',
        height: height,
        toolbar: {
            show: false
        }              
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: ['28%'],
            borderRadius: 5,                     
            dataLabels: {
                position: "top" // top, center, bottom
            },
            startingShape: 'flat'
        },
    },
    legend: {
        show: false
    },
    dataLabels: {
        enabled: true, 
        offsetY: -28,                                             
        style: {
            fontSize: '13px',
            colors: [labelColor]
        }                         
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories:labels2,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },
        labels: {
            style: {
                colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                fontSize: '13px'
            }                    
        },
        crosshairs: {
            fill: {         
                gradient: {         
                    opacityFrom: 0,
                    opacityTo: 0
                }
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                fontSize: '13px'
            },
            formatter: function (val) {
                return  parseInt(val)
            }
        }
    },
    fill: {
        opacity: 1
    },
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        hover: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'none',
                value: 0
            }
        }
    },
    tooltip: {
        style: {
            fontSize: '12px'
        },
        y: {
            formatter: function (val) {
                return  val 
            }
        }
    },
    colors: [KTUtil.getCssVariableValue('--bs-primary'), KTUtil.getCssVariableValue('--bs-light-primary')],
    grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
            lines: {
                show: true
            }
        }
    }
};


const chart = new ApexCharts(element, options);
console.log(ApexCharts,'apex')  

// Set timeout to properly get the parent elements width
setTimeout(function() {
          chart.render(); 
         
}, 400); 




}
})















$.ajax({
   
    dataType: 'json',
    type: 'POST',
    url: "/incomeChart",
    success: function(data) {
    console.log(data)
     for (var i = 0;i<data.length;i++){
        labels1.push(data[i].firstTermIncome)
        labels1.push(data[i].firstTermExpense)
        labels1.push(data[i].secondTermIncome)
        labels1.push(data[i].secondTermExpense)
        labels1.push(data[i].thirdTermIncome)
        labels1.push(data[i].thirdTermExpense)
       
   
     }

     let labels2 =  ['1st Term Income', 'Expenses', '2nd Term Income', 'Expenses', '3rd Term Income', 'Expenses'];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];

//contractQty
var element = document.getElementById("myChart");
var height = parseInt(KTUtil.css(element, 'height'));
var labelColor = KTUtil.getCssVariableValue('--bs-gray-900');
var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color'); 

var options = {
    series: [{
        name: 'Net Profit',
        data: labels1
    }],
    chart: {
        fontFamily: 'inherit',
        type: 'bar',
        height: height,
        toolbar: {
            show: false
        }              
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: ['28%'],
            borderRadius: 5,                     
            dataLabels: {
                position: "top" // top, center, bottom
            },
            startingShape: 'flat'
        },
    },
    legend: {
        show: false
    },
    dataLabels: {
        enabled: true, 
        offsetY: -28,                                             
        style: {
            fontSize: '13px',
            colors: [labelColor]
        }                         
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories:labels2,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },
        labels: {
            style: {
                colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                fontSize: '13px'
            }                    
        },
        crosshairs: {
            fill: {         
                gradient: {         
                    opacityFrom: 0,
                    opacityTo: 0
                }
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                fontSize: '13px'
            },
            formatter: function (val) {
                return "$" + parseInt(val)
            }
        }
    },
    fill: {
        opacity: 1
    },
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        hover: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'none',
                value: 0
            }
        }
    },
    tooltip: {
        style: {
            fontSize: '12px'
        },
        y: {
            formatter: function (val) {
                return "$" + val + " thousands"
            }
        }
    },
    colors: [KTUtil.getCssVariableValue('--bs-primary'), KTUtil.getCssVariableValue('--bs-light-primary')],
    grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
            lines: {
                show: true
            }
        }
    }
};

var chart = new ApexCharts(element, options);  

// Set timeout to properly get the parent elements width
setTimeout(function() {
    chart.render();   
}, 200); 






    
    }
   
});
















$.ajax({
   
    dataType: 'json',
    type: 'POST',
    url: "/incomeChart99",
    success: function(data) {
    console.log(data.length)
    console.log('count',data[0].count)
    
     for (var i = 0;i<data.length;i++){
     if(data[0].count == 0){
    labels99.push(data[i].year1)
    }else if(data[0].count == 1){
        labels99.push(data[i].year1)
        labels99.push(data[i].year2)
    }else if(data[0].count == 2){
        labels99.push(data[i].year1)
        labels99.push(data[i].year2)
        labels99.push(data[i].year3)
    }

       
  
       
   
     }
     let labels2 =[]
     let labels3 =[]
if(data[0].count == 0){
   let admissionYear = data[0].startYear
   let labels2 =[]
    for(var i =0;i<1;i++){
     labels3.push(admissionYear + i)
    }
  
}

if(data[0].count == 1){
    let admissionYear = data[0].startYear
   
     for(var i =0;i<2;i++){
      labels3.push(admissionYear + i)
     }
    
 }

 console.log('labels3',labels3)
     //let labels2 =  [ ];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];

//contractQty
var element = document.getElementById("myChart99");
var height = parseInt(KTUtil.css(element, 'height'));
var labelColor = KTUtil.getCssVariableValue('--bs-gray-900');
var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color'); 

var options = {
    series: [{
        name: 'Students',
        data: labels99
    }],
    chart: {
        fontFamily: 'inherit',
        type: 'bar',
        height: height,
        toolbar: {
            show: false
        }              
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: ['28%'],
            borderRadius: 5,                     
            dataLabels: {
                position: "top" // top, center, bottom
            },
            startingShape: 'flat'
        },
    },
    legend: {
        show: false
    },
    dataLabels: {
        enabled: true, 
        offsetY: -28,                                             
        style: {
            fontSize: '13px',
            colors: [labelColor]
        }                         
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories:labels3,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },
        labels: {
            style: {
                colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                fontSize: '13px'
            }                    
        },
        crosshairs: {
            fill: {         
                gradient: {         
                    opacityFrom: 0,
                    opacityTo: 0
                }
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                fontSize: '13px'
            },
            formatter: function (val) {
                return  parseInt(val)
            }
        }
    },
    fill: {
        opacity: 1
    },
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        hover: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'none',
                value: 0
            }
        }
    },
    tooltip: {
        style: {
            fontSize: '12px'
        },
        y: {
            formatter: function (val) {
                return  val 
            }
        }
    },
    colors: [KTUtil.getCssVariableValue('--bs-primary'), KTUtil.getCssVariableValue('--bs-light-primary')],
    grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
            lines: {
                show: true
            }
        }
    }
};

var chart = new ApexCharts(element, options);  

// Set timeout to properly get the parent elements width
setTimeout(function() {
    chart.render();   
}, 200); 






    
    }
   
});






















//MonthlyexpesnseChart


$.ajax({
   
    dataType: 'json',
    type: 'POST',
    url: "/expenseChart",
    success: function(data) {
    console.log(data)
     for (var i = 0;i<data.length;i++){
        labelExpense.push(data[i].amount)
        labelExpenseX.push(data[i].month)
   
   
     }

  


var element = document.getElementById("myChartX");
var height = parseInt(KTUtil.css(element, 'height'));       
var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');
var baseColor = KTUtil.getCssVariableValue('--bs-gray-800');
var lightColor = KTUtil.getCssVariableValue('--bs-light-info');

var options = {
    series: [{
        name: 'Amount',
        data: labelExpense
    }],
    chart: {
        fontFamily: 'inherit',
        type: 'area',
        height: height,
        toolbar: {
            show: false
        }
    },             
    legend: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        type: 'solid',
        opacity: 0
    },
    stroke: {
        curve: 'smooth',
        show: true,
        width: 2,
        colors: [baseColor]
    },
    xaxis: {   
                      
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },
        labels: {
            show: false
        },
        crosshairs: {
            position: 'front',
            stroke: {
                color: baseColor,
                width: 1,
                dashArray: 3
            }
        },
        tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
                fontSize: '12px'
            }
        }
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        hover: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'none',
                value: 0
            }
        }
    },
    tooltip: {
        style: {
            fontSize: '12px'
        },
        x: {
            formatter: function (val) {
                val--
                return labelExpenseX[val] 
            }
        },
        y: {
            formatter: function (val) {
                return "$" + val 
          
            }
        }
    },
    colors: [lightColor],
    grid: {                 
        strokeDashArray: 4,
        padding: {
            top: 0,
            right: -20,
            bottom: -20,
            left: -20
        },
        yaxis: {
            lines: {
                show: true
            }
        }
    },
    markers: {
        strokeColor: baseColor,
        strokeWidth: 2
    }
}; 

var chart = new ApexCharts(element, options);

// Set timeout to properly get the parent elements width
setTimeout(function() {
    chart.render();   
}, 300);  
}

// Public methods
    
    
   
});





//monthIncome



$.ajax({
   
    dataType: 'json',
    type: 'POST',
    url: "/feesChart",
    success: function(data) {
    console.log(data)
     for (var i = 0;i<data.length;i++){
        labels3.push(data[i].amount)
        labels13.push(data[i].month)
   
   
     }

  
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];

//contractQty
var element = document.getElementById("myChart1");
var height = parseInt(KTUtil.css(element, 'height'));       
var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');
var baseColor = KTUtil.getCssVariableValue('--bs-gray-800');
var lightColor = KTUtil.getCssVariableValue('--bs-light-info');

var options = {
    series: [{
        name: 'Amount',
        data: labels3
    }],
    chart: {
        fontFamily: 'inherit',
        type: 'area',
        height: height,
        toolbar: {
            show: false
        }
    },             
    legend: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        type: 'solid',
        opacity: 0
    },
    stroke: {
        curve: 'smooth',
        show: true,
        width: 2,
        colors: [baseColor]
    },
    xaxis: {   
                      
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },
        labels: {
            show: false
        },
        crosshairs: {
            position: 'front',
            stroke: {
                color: baseColor,
                width: 1,
                dashArray: 3
            }
        },
        tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
                fontSize: '12px'
            }
        }
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        hover: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'none',
                value: 0
            }
        }
    },
    tooltip: {
        style: {
            fontSize: '12px'
        },
        x: {
            formatter: function (val) {
                val--
                return labels13[val] 
            }
        },
        y: {
            formatter: function (val) {
                return "$" + val 
          
            }
        }
    },
    colors: [lightColor],
    grid: {                 
        strokeDashArray: 4,
        padding: {
            top: 0,
            right: -20,
            bottom: -20,
            left: -20
        },
        yaxis: {
            lines: {
                show: true
            }
        }
    },
    markers: {
        strokeColor: baseColor,
        strokeWidth: 2
    }
}; 

var chart = new ApexCharts(element, options);

// Set timeout to properly get the parent elements width
setTimeout(function() {
    chart.render();   
}, 300);  
}

// Public methods
    
    
   
});






















$.ajax({
   
    dataType: 'json',
    type: 'POST',
    url: "/passChart",
    success: function(data) {
    console.log(data)
     for (var i = 0;i<data.length;i++){
        passLabel2.push(data[i].firstTerm)

        passLabel2.push(data[i].secondTerm)
     
        passLabel2.push(data[i].thirdTerm)
       
   
     }

     let passLabel3 = ['1st Term ',  '2nd Term', '3rd Term '];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];

//contractQty
var element = document.getElementById("myChart5");
var height = parseInt(KTUtil.css(element, 'height'));
var labelColor = KTUtil.getCssVariableValue('--bs-gray-900');
var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color'); 

var options = {
    series: [{
        name: 'Exam Pass Rate',
        data:  passLabel2
    }],
    chart: {
        fontFamily: 'inherit',
        type: 'bar',
        height: height,
        toolbar: {
            show: false
        }              
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: ['28%'],
            borderRadius: 5,                     
            dataLabels: {
                position: "top" // top, center, bottom
            },
            startingShape: 'flat'
        },
    },
    legend: {
        show: false
    },
    dataLabels: {
        enabled: true, 
        offsetY: -28,                                             
        style: {
            fontSize: '13px',
            colors: [labelColor]
        }                         
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories:passLabel3,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },
        labels: {
            style: {
                colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                fontSize: '13px'
            }                    
        },
        crosshairs: {
            fill: {         
                gradient: {         
                    opacityFrom: 0,
                    opacityTo: 0
                }
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                fontSize: '13px'
            },
            formatter: function (val) {
                return  parseInt(val) + "%"
            }
        }
    },
    fill: {
        opacity: 1
    },
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        hover: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'none',
                value: 0
            }
        }
    },
    tooltip: {
        style: {
            fontSize: '12px'
        },
        y: {
            formatter: function (val) {
                return  val + "%"
            }
        }
    },
    colors: [KTUtil.getCssVariableValue('--bs-primary'), KTUtil.getCssVariableValue('--bs-light-primary')],
    grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
            lines: {
                show: true
            }
        }
    }
};

var chart = new ApexCharts(element, options);  

// Set timeout to properly get the parent elements width
setTimeout(function() {
    chart.render();   
}, 200); 






    
    }
   
});



//Class Rate - passRateX

var buttonX = document.getElementById('myChart6tab').addEventListener('click', function(){
let passLabelX=[]


    $.ajax({
   
        dataType: 'json',
        type: 'POST',
        url: "/passChartX",
        success: function(data) {
 
         for (var i = 0;i<data.length;i++){
            passLabelX.push(data[i].firstTerm)

            passLabelX.push(data[i].secondTerm)
         
            passLabelX.push(data[i].thirdTerm)
           
       
         }
    
         let passLabel1X =  ['1st Term ',  '2nd Term', '3rd Term '];
    let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];
   
    var element = document.getElementById("myChart6");
    var height = parseInt(KTUtil.css(element, 'height'));
    var labelColor = KTUtil.getCssVariableValue('--bs-gray-900');
    var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color'); 
    
    var options = {
        series: [{
            name: 'Class Pass Rate',
            data:  passLabelX
        }],
        chart: {
            fontFamily: 'inherit',
            type: 'bar',
            height: height,
            toolbar: {
                show: false
            }              
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: ['28%'],
                borderRadius: 5,                     
                dataLabels: {
                    position: "top" // top, center, bottom
                },
                startingShape: 'flat'
            },
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: true, 
            offsetY: -28,                                             
            style: {
                fontSize: '13px',
                colors: [labelColor]
            }                         
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories:passLabel1X,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false
            },
            labels: {
                style: {
                    colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                    fontSize: '13px'
                }                    
            },
            crosshairs: {
                fill: {         
                    gradient: {         
                        opacityFrom: 0,
                        opacityTo: 0
                    }
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                    fontSize: '13px'
                },
                formatter: function (val) {
                    return  parseInt(val) + "%"
                }
            }
        },
        fill: {
            opacity: 1
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                    value: 0
                }
            }
        },
        tooltip: {
            style: {
                fontSize: '12px'
            },
            y: {
                formatter: function (val) {
                    return  val + "%"
                }
            }
        },
        colors: [KTUtil.getCssVariableValue('--bs-primary'), KTUtil.getCssVariableValue('--bs-light-primary')],
        grid: {
            borderColor: borderColor,
            strokeDashArray: 4,
            yaxis: {
                lines: {
                    show: true
                }
            }
        }
    };
    
    var chart = new ApexCharts(element, options);  
    
    // Set timeout to properly get the parent elements width
    setTimeout(function() {
        chart.render();   
    }, 200); 
    
    
    
    
    
    
        
        }
       
    });
    



    });











//statChart

$.ajax({
   
    dataType: 'json',
    type: 'POST',
    url: "/statChart",
    success: function(data) {
    console.log(data)
     for (var i = 0;i<data.length;i++){
        labelStat.push(data[i].students)
        labelStat.push(data[i].paid)
        labelStat.push(data[i].unpaid)
   
       
   
     }

     let labelStat1 =  ['Number of Students', 'Fully Paid Students', 'Students In Arrears'];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];

//contractQty
var element = document.getElementById("myChartStat");
var height = parseInt(KTUtil.css(element, 'height'));
var labelColor = KTUtil.getCssVariableValue('--bs-gray-900');
var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color'); 

var options = {
    series: [{
        name: 'Financial Stats',
        data: labelStat
    }],
    chart: {
        fontFamily: 'inherit',
        type: 'bar',
        height: height,
        toolbar: {
            show: false
        }              
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: ['28%'],
            borderRadius: 5,                     
            dataLabels: {
                position: "top" // top, center, bottom
            },
            startingShape: 'flat'
        },
    },
    legend: {
        show: false
    },
    dataLabels: {
        enabled: true, 
        offsetY: -28,                                             
        style: {
            fontSize: '13px',
            colors: [labelColor]
        }                         
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories:labelStat1,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },
        labels: {
            style: {
                colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                fontSize: '13px'
            }                    
        },
        crosshairs: {
            fill: {         
                gradient: {         
                    opacityFrom: 0,
                    opacityTo: 0
                }
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                fontSize: '13px'
            },
            formatter: function (val) {
                return  parseInt(val)
            }
        }
    },
    fill: {
        opacity: 1
    },
    states: {
        normal: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        hover: {
            filter: {
                type: 'none',
                value: 0
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'none',
                value: 0
            }
        }
    },
    tooltip: {
        style: {
            fontSize: '12px'
        },
        y: {
            formatter: function (val) {
                return  val 
            }
        }
    },
    colors: [KTUtil.getCssVariableValue('--bs-primary'), KTUtil.getCssVariableValue('--bs-light-primary')],
    grid: {
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
            lines: {
                show: true
            }
        }
    }
};

var chart = new ApexCharts(element, options);  

// Set timeout to properly get the parent elements width
setTimeout(function() {
    chart.render();   
}, 200); 






    
    }
   
});



















    //myChart5 passrate
    
/*
var button = document.getElementById('myChart5tab').addEventListener('click', function(){
   


    $.ajax({
   
        dataType: 'json',
        type: 'POST',
        url: "/passChart",
        success: function(data) {
       
         for (var i = 0;i<data.length;i++){
            passLabel.push(data[i].firstTerm)

            passLabel.push(data[i].secondTerm)
         
            passLabel.push(data[i].thirdTerm)
           
       
         }
    
         let passLabel1 =  ['1st Term ',  '2nd Term', '3rd Term '];
    
    
   
    var element = document.getElementById("myChart5");
    var height = parseInt(KTUtil.css(element, 'height'));
    var labelColor = KTUtil.getCssVariableValue('--bs-gray-900');
    var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color'); 
    
    var options = {
        series: [{
            name: 'Exam Pass Rate',
            data:  passLabel
        }],
        chart: {
            fontFamily: 'inherit',
            type: 'bar',
            height: height,
            toolbar: {
                show: false
            }              
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: ['28%'],
                borderRadius: 5,                     
                dataLabels: {
                    position: "top" // top, center, bottom
                },
                startingShape: 'flat'
            },
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: true, 
            offsetY: -28,                                             
            style: {
                fontSize: '13px',
                colors: [labelColor]
            }                         
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories:passLabel1,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false
            },
            labels: {
                style: {
                    colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                    fontSize: '13px'
                }                    
            },
            crosshairs: {
                fill: {         
                    gradient: {         
                        opacityFrom: 0,
                        opacityTo: 0
                    }
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                    fontSize: '13px'
                },
                formatter: function (val) {
                    return "$" + parseInt(val)
                }
            }
        },
        fill: {
            opacity: 1
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                    value: 0
                }
            }
        },
        tooltip: {
            style: {
                fontSize: '12px'
            },
            y: {
                formatter: function (val) {
                    return "$" + val + " thousands"
                }
            }
        },
        colors: [KTUtil.getCssVariableValue('--bs-primary'), KTUtil.getCssVariableValue('--bs-light-primary')],
        grid: {
            borderColor: borderColor,
            strokeDashArray: 4,
            yaxis: {
                lines: {
                    show: true
                }
            }
        }
    };
    
    var chart = new ApexCharts(element, options);  
    
    // Set timeout to properly get the parent elements width
    setTimeout(function() {
        chart.render();   
    }, 200); 
    
    
    
    
    
    
        
        }
       
    });
    



    });




*/









































/*
"use strict";

// Class definition
var KTChartsWidget18 = function () {
    // Private methods
    var initChart = function() {
        var element = document.getElementById("myChart");

        if (!element) {
            return;
        }

        
$.ajax({
   
    dataType: 'json',
    type: 'POST',
    url: "/incomeChart",
    success: function(data) {
    console.log(data.length,'length')
     for (var i = 0;i<data.length;i++){
        labels3.push(data[i].firstTermIncome)
        labels3.push(data[i].firstTermExpense)
        labels3.push(data[i].secondTermIncome)
        labels3.push(data[i].secondTermExpense)
        labels3.push(data[i].thirdTermIncome)
        labels3.push(data[i].thirdTermExpense)
       
   
     }

     let labels2 =  ['1st Term ', 'Expenses', '2nd Term', 'Expenses', '3rd Term ', 'Expenses'];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];

console.log(labels3,'data racho')

        
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-900');
        var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');    

        var options = {
            series: [{
                name: 'Net Profit',
                data: labels3
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                }              
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['28%'],
                    borderRadius: 5,                     
                    dataLabels: {
                        position: "top" // top, center, bottom
                    },
                    startingShape: 'flat'
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: true, 
                offsetY: -28,                                             
                style: {
                    fontSize: '13px',
                    colors: [labelColor]
                }                         
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories:labels2,
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                        fontSize: '13px'
                    }                    
                },
                crosshairs: {
                    fill: {         
                        gradient: {         
                            opacityFrom: 0,
                            opacityTo: 0
                        }
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--bs-gray-500'),
                        fontSize: '13px'
                    },
                    formatter: function (val) {
                        return parseInt(val) + "H"
                    }
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [KTUtil.getCssVariableValue('--bs-primary'), KTUtil.getCssVariableValue('--bs-light-primary')],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        var chart = new ApexCharts(element, options);  
        
        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.render();   
        }, 200); 
    }

})
    }
    // Public methods
    return {
        init: function () {
            initChart();
        }        
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget18;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget18.init();
});


*/