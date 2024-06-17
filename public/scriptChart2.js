


$.ajax({
   
    dataType: 'json',
    type: 'POST',
    url: "/teacher/dashChartS1",
    
    success: function(data) {
    console.log(data)
    let labels1 =[]
let labelsX = []
     for (var i = 0;i<data.length;i++){
        labels1.push(data[i].mark)
        labelsX.push(data[i].month)
   
   
     }

  
console.log(labelsX,'labelsX')

var element = document.getElementById("myChart0");
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
    url: "/teacher/dashChart2",

    success: function(data) {
    console.log(data)
    let labels1 =[]
    let labels2=[]

     for (var i = 0;i<data.length;i++){
        labels1.push(data[i].percentage)
        labels2.push(data[i].month)
   
   
     }

  


var element = document.getElementById("myChart1");
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
                return labels2[val] 
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




var buttonX = document.getElementById('button3').addEventListener('click', function(){

    let labels3=[]
    let labels4 = []
    let labels5 = []
    let subjectCode = document.getElementById('subjectCode').value
    let student = document.getElementById('student').value
    let term = document.getElementById('term').value
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
    var element = document.getElementById("myChart0");
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
        data:{subjectCode:subjectCode, student:student, term:term},
        url: "/teacher/dashChartS01",
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
    


    
var button2 = document.getElementById('button4').addEventListener('click', function(){

    let labels3=[]
    let labels4 = []
    let labels5 = []
    let subjectCode = document.getElementById('subjectCode2').value
    let class1 = document.getElementById('class2').value
    let term = document.getElementById('term2').value
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
    var element = document.getElementById("myChart1");
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
        data:{subjectCode:subjectCode,class1:class1,  term:term},
        url: "/teacher/dashChartS02",
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
    



    ///last chart

          
$.ajax({
       
    dataType: 'json',
    type: 'POST',
    url: "/teacher/dashChart3",
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
const  element = document.getElementById('myChartX5');

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


////click



function Click(subjectCode){
    

      
    
    let class3  = document.getElementById('class3').value
    let term3 = document.getElementById('term3').value
    

    const labels1= []
    const labels2= []
 
    let labelsX=[]
    
  
  
    let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];
    
    //contractQty
   const  element = document.getElementById('myChartX5');

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
        data:{subjectCode:subjectCode,class1:class3,term:term3},
        url: "/teacher/dashChartP3",
        success: function(data) {
    console.log(data,'data')
    let labels3=[]
    let labels4=[]
    for (var i = 0;i<data.length;i++){
        labels3.push({"x":data[i].topic,"y":data[i].percentage})
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







var button03 = document.getElementById('button03').addEventListener('click', function(){
 

    /*  var id = document.getElementsByClassName('h-400px min-h-auto')[0].id;
      var uid = 	document.getElementById('uid').value
      
      var name = id+uid
      document.getElementById(id).id = name*/
      
      let subjectCode = document.getElementById('subjectCode03').value
      let term = document.getElementById('term03').value
      let studentId= document.getElementById('student03').value

console.log(subjectCode,term,studentId,'button03')
      let labels4=[]
      const labels1= []
      const labels2= []
   

      
    
    
          let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];
      
      //contractQty
     const  element = document.getElementById('myChart03');
  
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
          data:{subjectCode:subjectCode, term:term, studentId:studentId},
          url: "/teacher/dashChartS03",
          success: function(data) {
      console.log(data,'data')
      let labels3=[]
   
      for (var i = 0;i<data.length;i++){
          labels3.push({"x":data[i].topic ,"y":data[i].percentage})
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
      
          
   




      
var button04 = document.getElementById('button04').addEventListener('click', function(){
 

    /*  var id = document.getElementsByClassName('h-400px min-h-auto')[0].id;
      var uid = 	document.getElementById('uid').value
      
      var name = id+uid
      document.getElementById(id).id = name*/
      
      let subjectCode = document.getElementById('subjectCode04').value
      let term = document.getElementById('term04').value
      let topic= document.getElementById('topic04').value
      let class1= document.getElementById('class04').value

console.log(subjectCode,term,class1,'not')
      let labels4=[]
      const labels1= []
      const labels2= []
   

      
    
    
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
          data:{subjectCode:subjectCode, term:term, class1:class1,topic:topic},
          url: "/teacher/dashChartS04",
          success: function(data) {
      console.log(data,'data')
      let labels3=[]
   
      for (var i = 0;i<data.length;i++){
          labels3.push({"x":data[i].fullname ,"y":data[i].percentage})
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
      
          
   


      function Click(subjectCode){
    

      
    
        let class1  = document.getElementById('class05').value
        let term = document.getElementById('term05').value
        
    
        const labels1= []
        const labels2= []
     
        let labelsX=[]
        
      
      
        let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];
        
        //contractQty
       const  element = document.getElementById('myChartS5');
    
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
            data:{subjectCode:subjectCode,class1:class1,term:term},
            url: "/teacher/dashChartS06",
            success: function(data) {
        console.log(data,'data')
        let labels3=[]
        let labels4=[]
        for (var i = 0;i<data.length;i++){
            labels3.push({"x":data[i].fullname,"y":data[i].percentage})
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
    
    
    

    function Click2(subjectCode){
    

      
    
        let class1  = document.getElementById('class06').value
        let term = document.getElementById('term06').value
        
    
        const labels1= []
        const labels2= []
     
        let labelsX=[]
        
      
      
        let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];
        
        //contractQty
       const  element = document.getElementById('myChartS6');
    
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
            data:{subjectCode:subjectCode,class1:class1,term:term},
            url: "/teacher/dashChartS07",
            success: function(data) {
        console.log(data,'data')
        let labels3=[]
        let labels4=[]
        for (var i = 0;i<data.length;i++){
            labels3.push({"x":data[i].topic,"y":data[i].percentage})
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
    
    
    





    var button07 = document.getElementById('button07').addEventListener('click', function(){
 

        /*  var id = document.getElementsByClassName('h-400px min-h-auto')[0].id;
          var uid = 	document.getElementById('uid').value
          
          var name = id+uid
          document.getElementById(id).id = name*/
          
          let subjectCode = document.getElementById('subjectCode07').value
          let term = document.getElementById('term07').value
          let studentId= document.getElementById('student07').value
    
    console.log(subjectCode,term,studentId,'not')
          let labels4=[]
          const labels1= []
          const labels2= []
       
    
          
        
        
              let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];
          
          //contractQty
         const  element = document.getElementById('myChart07');
      
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
              data:{subjectCode:subjectCode, term:term, studentId:studentId},
              url: "/teacher/dashChartS08",
              success: function(data) {
          console.log(data,'data')
          let labels3=[]
       
          for (var i = 0;i<data.length;i++){
              labels3.push({"x":data[i].type ,"y":data[i].percentage})
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
          
              
       
    
    
    
    























                
var button08 = document.getElementById('button08').addEventListener('click', function(){
 

    /*  var id = document.getElementsByClassName('h-400px min-h-auto')[0].id;
      var uid = 	document.getElementById('uid').value
      
      var name = id+uid
      document.getElementById(id).id = name*/
      
      let subjectCode = document.getElementById('subjectCode08').value
      let term = document.getElementById('term08').value

      let class1= document.getElementById('class08').value

console.log(subjectCode,term,class1,'not')
      let labels4=[]
      const labels1= []
      const labels2= []
   

      
    
    
          let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];
      
      //contractQty
     const  element = document.getElementById('myChart08');
  
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
          data:{subjectCode:subjectCode, term:term, class1:class1},
          url: "/teacher/dashChartS09",
          success: function(data) {
      console.log(data,'data')
      let labels3=[]
   
      for (var i = 0;i<data.length;i++){
          labels3.push({"x":data[i].topic ,"y":data[i].percentage})
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
      
          
   //ajax

   

$.ajax({
       
    dataType: 'json',
    type: 'POST',

    url: "/teacher/dashChartA1",
    success: function(data) {
console.log(data,'data')
let labels1 =[]
let labels2=[]
for (var i = 0;i<data.length;i++){
        labels2.push(data[i].topic)
        labels1.push(data[i].percentage)
     }
    let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];

//contractQty
const  element = document.getElementById('myChart03');

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

    url: "/teacher/dashChartA2",
    success: function(data) {
console.log(data,'data')
let labels1 =[]
let labels2=[]
for (var i = 0;i<data.length;i++){
        labels2.push(data[i].fullname)
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
    url: "/teacher/dashChartA3",
    success: function(data) {
      console.log(data,'data')
      let labels1=[]
      let labels2=[]
for (var i = 0;i<data.length;i++){
        labels2.push(data[i].fullname)
        labels1.push(data[i].percentage)
     }
    let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];

//contractQty
const  element = document.getElementById('myChartS5');

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
    url: "/teacher/dashChartA4",
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
const  element = document.getElementById('myChartS6');

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

    url: "/teacher/dashChartA5",
    success: function(data) {
console.log(data,'data')
let labels1 =[]
let labels2=[]
for (var i = 0;i<data.length;i++){
        labels2.push(data[i].type)
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












$.ajax({
       
    dataType: 'json',
    type: 'POST',

    url: "/teacher/dashChartA6",
    success: function(data) {
console.log(data,'data')
let labels1 =[]
let labels2=[]
for (var i = 0;i<data.length;i++){
        labels2.push(data[i].topic)
        labels1.push(data[i].percentage)
     }
    let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF','#FFA07A','#FFFF00'];

//contractQty
const  element = document.getElementById('myChart08');

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

















