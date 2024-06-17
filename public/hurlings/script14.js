var labels1= []
var labels3= []
var labels4= []
let labels99 = []
var colorPalette = ['#00D8B6','#008FFB',  '#FEB019', '#FF4560', '#775DD0']
$.ajax({
   
    dataType: 'json',
    type: 'POST',
    url: "/hurlings/statChart",
    success: function(data) {
    console.log(data)
     for (var i = 0;i<data.length;i++){
        labels1.push(data[i].students)
        labels1.push(data[i].teachers)
        labels1.push(data[i].depts)
        labels1.push(data[i].class1)

       
   
     }

     let labels2 =  ['Students', 'Teachers', 'Departments', 'Classes'];
var options = {
    chart: {
        height: 350,
        type: 'bar',
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        name: 'Stats',
        data: labels1
    }],
    
    title: {
        text: 'School Stats',
    },
    xaxis: {
        categories:labels2,
        axisBorder: {
            show: false,
        },

    },
    noData: {
      text: 'Loading...'
    }
  }
  
  var chart = new ApexCharts(
    document.querySelector("#chart"),
    options
  );
  
  chart.render();
  
  }
    })





         
$.ajax({
       
    dataType: 'json',
    type: 'POST',
    url: "/hurlings/classChart",
    success: function(data) {
console.log(data,'data')
let labels1 =[]
let labels2=[]
for (var i = 0;i<data.length;i++){
        labels2.push(data[i].class1)
        labels1.push(data[i].classNo)
     }
    
     console.log('numbers',labels1)

   
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

      var chart = new ApexCharts(document.querySelector("#chart2"), options);
      chart.render();
    
    
    }
   
});


/////


         
$.ajax({
       
    dataType: 'json',
    type: 'POST',
    url: "/hurlings/classGenderChartX",
    success: function(data) {
console.log(data,'nafukwa')
let labels1 =[]
let labels2=[]
let labels3 = []
for (var i = 0;i<data.length;i++){
        labels2.push(data[i].class1)
        labels1.push(data[i].male)
        labels3.push(data[i].female)
     }
    

var optionsBar = {
    chart: {
      type: 'bar',
      height: 380,
      width: '100%',
      stacked: true,
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
      }
    },
    colors: colorPalette,
    series: [{
      name: "Boys",
      data: labels1,
    }, {
      name: "Girls",
      data: labels3,
    }],
    labels: labels2,
    xaxis: {
        categories:labels2,
        axisBorder: {
            show: false,
        },

    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: '#78909c'
        }
      }
    },
    title: {
      text: 'Class Analysis',
      align: 'left',
      style: {
        fontSize: '18px'
      }
    }
  
  }
  
  var chartBar = new ApexCharts(document.querySelector('#bar'), optionsBar);
  chartBar.render();

    }
})
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
    url: "/hurlings/statChart",
    success: function(data) {
    console.log(data)
     for (var i = 0;i<data.length;i++){
        labels1.push(data[i].students)
        labels1.push(data[i].teachers)
        labels1.push(data[i].depts)
        labels1.push(data[i].class1)

       
   
     }

     let labels2 =  ['Students', 'Teachers', 'Departments', 'Classes'];


//contractQty
var element = document.getElementById("myChartX9");
var height = parseInt(KTUtil.css(element, 'height'));
var labelColor = KTUtil.getCssVariableValue('--bs-gray-900');
var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color'); 

var options = {
    series: [{
        name: 'Stats',
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
                return parseInt(val) 
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
                return parseInt(val) 
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
    url: "/hurlings/stdStatsChart99",
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
















