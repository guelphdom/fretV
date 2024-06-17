    
      
   
$.ajax({
       
    dataType: 'json',
    type: 'POST',
 
    url: "/dashChart1",
    success: function(data) {
      console.log(data,'data')
      let labels1=[]
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
        name: 'Avg Mark %',
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
    url: "/dashChart4",
    success: function(data) {
      console.log(data,'data')
      let labels1=[]
      let labels2=[]
for (var i = 0;i<data.length;i++){
        labels2.push(data[i].class1)
        labels1.push(data[i].percentage)
     }
    let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];

//contractQty
const  element = document.getElementById('myChart04');

const height = parseInt(KTUtil.css(element, 'height'));

const labelColor = KTUtil.getCssVariableValue('--bs-gray-900');
const borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color'); 

const options = {
    series: [{
        name: 'Avg Mark %',
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
    url: "/dashChart05",
    
    success: function(data) {
    console.log(data)
    let labels1 =[]
let labelsX = []
     for (var i = 0;i<data.length;i++){
        labels1.push(data[i].percentage)
        labelsX.push(data[i].month)
   
   
     }

  
console.log(labelsX,'labelsX')

var element = document.getElementById("myChart05");
var height = parseInt(KTUtil.css(element, 'height'));       
var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');
var baseColor = KTUtil.getCssVariableValue('--bs-gray-800');
var lightColor = KTUtil.getCssVariableValue('--bs-light-info');

var options = {
    series: [{
        name: 'Avg Mark %',
        data: labels1
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
                return labelsX[val] 
            }
        },
        y: {
            formatter: function (val) {
                return  val 
          
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
    url: "/dashChart06",
    
    success: function(data) {
    console.log(data)
    let labels1 =[]
let labelsX = []
     for (var i = 0;i<data.length;i++){
        labels1.push(data[i].percentage)
        labelsX.push(data[i].month)
   
   
     }

  
console.log(labelsX,'labelsX')

var element = document.getElementById("myChart06");
var height = parseInt(KTUtil.css(element, 'height'));       
var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');
var baseColor = KTUtil.getCssVariableValue('--bs-gray-800');
var lightColor = KTUtil.getCssVariableValue('--bs-light-info');

var options = {
    series: [{
        name: 'Avg Mark %',
        data: labels1
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
                return labelsX[val] 
            }
        },
        y: {
            formatter: function (val) {
                return  val 
          
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
    url: "/dashChart7",
    success: function(data) {
      console.log(data,'data')
      let labels1=[]
      let labels2=[]
for (var i = 0;i<data.length;i++){
        labels2.push(data[i].topic)
        labels1.push(data[i].percentage)
     }
    let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];

//contractQty
const  element = document.getElementById('myChart07');

const height = parseInt(KTUtil.css(element, 'height'));

const labelColor = KTUtil.getCssVariableValue('--bs-gray-900');
const borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color'); 

const options = {
    series: [{
        name: 'Avg Mark %',
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






























      var button9 = document.getElementById('myChart6tab').addEventListener('click', function(){
 

    
      
        let term = document.getElementById('term00').value
        let type = 'Class Assignments'
              
            
             
        
          
              const labels1= []
              const labels2= []
           
              let labelsX=[]
              
            
            
              let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];
              
              //contractQty
             const  element = document.getElementById('myChart01');
          
              const height = parseInt(KTUtil.css(element, 'height'));
            
              const labelColor = KTUtil.getCssVariableValue('--bs-gray-900');
              const borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color'); 
           
              const options = {
                  series:[],
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
           chart.render()
          
              // Set timeout to properly get the parent elements width
             /*setTimeout(function() {
                        chart.render(); 
                       
              }, 400); */
              
              
              
              
              $.ajax({
                 
                  dataType: 'json',
                  type: 'POST',
                  data:{term:term,type:type},
                  url: "/dashChartP1",
                  success: function(data) {
              console.log(data,'data')
              let labels3=[]
              let labels4=[]
              for (var i = 0;i<data.length;i++){
                labels3.push({"x":data[i].class1,"y":data[i].percentage})
                  // labels3.push(data[i].qty)
                   }
              
                   console.log(labels3,'labels')
                   chart.updateSeries([{
                      name: 'Avg Mark %',
                      data: labels3,
                      
                  
                    }])
          
              
              
                  }
              
                  })
              })  
              
      
      
      
      
      
      
      
      
      
      
      
              var button9 = document.getElementById('myChart7tab').addEventListener('click', function(){
       
      
          
            
                  let term = document.getElementById('term00').value
                  let type = 'Final Exam'
                        
                      
                       
                  
                    
                        const labels1= []
                        const labels2= []
                     
                        let labelsX=[]
                        
                      
                      
                        let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];
                        
                        //contractQty
                       const  element = document.getElementById('myChart02');
                    
                        const height = parseInt(KTUtil.css(element, 'height'));
                      
                        const labelColor = KTUtil.getCssVariableValue('--bs-gray-900');
                        const borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color'); 
                     
                        const options = {
                            series:[],
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
                     chart.render()
                    
                        // Set timeout to properly get the parent elements width
                       /*setTimeout(function() {
                                  chart.render(); 
                                 
                        }, 400); */
                        
                        
                        
                        
                        $.ajax({
                           
                            dataType: 'json',
                            type: 'POST',
                            data:{term:term,type:type},
                            url: "/dashChartP1",
                            success: function(data) {
                        console.log(data,'data')
                        let labels3=[]
                        let labels4=[]
                        for (var i = 0;i<data.length;i++){
                          labels3.push({"x":data[i].class1,"y":data[i].percentage})
                            // labels3.push(data[i].qty)
                             }
                        
                             console.log(labels3,'labels')
                             chart.updateSeries([{
                                name: 'Avg Mark %',
                                data: labels3,
                                
                            
                              }])
                    
                        
                        
                            }
                        
                            })
                        })  
                        
                  
      
      
      
      
      


      
      
      
                        function ClickX2(name){
    

      
    
              
                            let term = document.getElementById('term04').value
                            
                        
                            const labels1= []
                            const labels2= []
                         
                            let labelsX=[]
                            
                          
                          
                            let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];
                            
                            //contractQty
                           const  element = document.getElementById('myChart04');
                        
                            const height = parseInt(KTUtil.css(element, 'height'));
                          
                            const labelColor = KTUtil.getCssVariableValue('--bs-gray-900');
                            const borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color'); 
                         
                            const options = {
                                series:[],
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
                         chart.render()
                        
                            // Set timeout to properly get the parent elements width
                           /*setTimeout(function() {
                                      chart.render(); 
                                     
                            }, 400); */
                            
                            
                            
                            
                            $.ajax({
                               
                                dataType: 'json',
                                type: 'POST',
                                data:{name:name,term:term},
                                url: "/dashChartP4",
                                success: function(data) {
                            console.log(data,'data')
                            let labels3=[]
                            let labels4=[]
                            for (var i = 0;i<data.length;i++){
                                labels3.push({"x":data[i].class1,"y":data[i].percentage})
                                // labels3.push(data[i].qty)
                                 }
                            
                                 console.log(labels3,'labels')
                                 chart.updateSeries([{
                                    name: 'Avg Mark %',
                                    data: labels3,
                                    
                                
                                  }])
                        
                            
                            
                                }
                            
                                })
                        }
                        
                        
                        
                    
                    
                    
                    
                    
        
        
        

var button05 = document.getElementById('button05').addEventListener('click', function(){

    let labels3=[]
    let labels4 = []
    let labels5 = []
   
    let term = document.getElementById('term05').value
    let class1 = document.getElementById('class05').value

    console.log(term,class1,'kkkkk')
    //let productName = document.getElementById('productName3').value
          /*
    
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
    */
      
    let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];
    
    //contractQty
    var element = document.getElementById("myChart05");
    var height = parseInt(KTUtil.css(element, 'height'));       
    var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');
    var baseColor = KTUtil.getCssVariableValue('--bs-gray-800');
    var lightColor = KTUtil.getCssVariableValue('--bs-light-info');
    
    var options = {
        series: [],
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
                    return labels5[val] 
                }
            },
            y: {
                formatter: function (val) {
                    return  val 
              
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
    
    
    const chart = new ApexCharts(element, options);
    chart.render()
    
    // Set timeout to properly get the parent elements width
    $.ajax({
             
        dataType: 'json',
        type: 'POST',
        data:{ term:term,class1:class1},
        url: "/dashChartP05",
        success: function(data) {
    console.log(data,'data')
    
    
    for (var i = 0;i<data.length;i++){
        labels3.push({"x":data[i].month ,"y":data[i].percentage})
        labels4.push(data[i].percentage)
        labels5.push(data[i].month)
               // labels3.push(data[i].qty)
         }
    
         console.log(labels3,'labels')
         chart.updateSeries([{
            name: 'Avg Mark %',
            data: labels4, 
            
        
          }])
    
         
    
      }
    
     
    
        })
    })  
    




















    

var button6 = document.getElementById('button06').addEventListener('click', function(){

    let labels3=[]
    let labels4 = []
    let labels5 = []
   
    let term = document.getElementById('term06').value
    let subject = document.getElementById('subjectCode06').value
    //let productName = document.getElementById('productName3').value
          /*
    
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
    */
      
    let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];
    
    //contractQty
    var element = document.getElementById("myChart06");
    var height = parseInt(KTUtil.css(element, 'height'));       
    var borderColor = KTUtil.getCssVariableValue('--bs-border-dashed-color');
    var baseColor = KTUtil.getCssVariableValue('--bs-gray-800');
    var lightColor = KTUtil.getCssVariableValue('--bs-light-info');
    
    var options = {
        series: [],
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
                    return labels5[val] 
                }
            },
            y: {
                formatter: function (val) {
                    return  val 
              
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
    
    
    const chart = new ApexCharts(element, options);
    chart.render()
    
    // Set timeout to properly get the parent elements width
    $.ajax({
             
        dataType: 'json',
        type: 'POST',
        data:{ term:term,subject:subject},
        url: "/dashChartP06",
        success: function(data) {
    console.log(data,'data')
    
    
    for (var i = 0;i<data.length;i++){
        labels3.push({"x":data[i].month ,"y":data[i].percentage})
        labels4.push(data[i].percentage)
        labels5.push(data[i].month)
               // labels3.push(data[i].qty)
         }
    
         console.log(labels3,'labels')
         chart.updateSeries([{
            name: 'Avg Mark %',
            data: labels4, 
            
        
          }])
    
         
    
      }
    
     
    
        })
    })  
    









