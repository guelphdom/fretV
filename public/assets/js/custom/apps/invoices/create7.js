let p = 2



"use strict"; 
var KTAppInvoicesCreate = function ()
 { 
     var e, t = function ()
      { 
          var t = [].slice.call(e.querySelectorAll('[data-kt-element="items"] [data-kt-element="item"]')),
     
           a = 0, n = wNumb({ decimals: 2, thousand: "," });      
           t.map((function (e) { 
               var t = e.querySelector('[data-kt-element="quantity"]'), l = e.querySelector('[data-kt-element="price"]'),
              
                r = n.from(l.value); console.log(r,'33')
                r = !r || r < 0 ? 0 : r; var i = parseInt(t.value);    i = !i || i < 0 ? 1 : i, l.value = n.to(r),
                 t.value = i, e.querySelector('[data-kt-element="total"]').innerText = n.to(r * i ), a += r * i  })),
                  e.querySelector('[data-kt-element="sub-total"]').innerText = n.to(a),
                   e.querySelector('[data-kt-element="grand-total"]').innerText = n.to(a) },
                    a = function () { 
                        if (0 === e.querySelectorAll('[data-kt-element="items"] [data-kt-element="item"]').length) 
                    { 
                        /*var t = e.querySelector('[data-kt-element="empty-template"] tr').cloneNode(!0); 
                        e.querySelector('[data-kt-element="items"] tbody').appendChild(t)*/
                     } else
                      KTUtil.remove(e.querySelector('[data-kt-element="items"] [data-kt-element="empty"]')) }; 
                      return {
                           init: function (n) 
                           { 
    (e = document.querySelector("#kt_invoice_form")).querySelector('[data-kt-element="items"] [data-kt-element="add-item"]').addEventListener("click",
     (function (n) 
     { n.preventDefault();
        


       
        var l = e.querySelector('[data-kt-element="item-template"] tr').cloneNode(!0);
               
        var yt = e.querySelectorAll(' [data-kt-element="item"]').length;

        let c = 0
        let v = c + yt + 1
       if( v ==2){
         v = v + 1
         yt = yt + 1
       }
        document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"] ').id= 'price'+v

        document.querySelector('[data-kt-element="item-template"]   [data-kt-element="quantity"] ').id= 'quantity'+v
   
        document.querySelector('  [data-kt-element="item-template"]   [data-kt-element="title"] ').id= 'code'+v

        document.querySelector('  [data-kt-element="item-template"]   [data-kt-element="xid"] ').id= 'xid'+v

        document.querySelector('  [data-kt-element="item-template"]   [data-kt-element="description"] ').id= 'description'+v
        document.querySelector('  [data-kt-element="item-template"]   [data-kt-element="total"] ').id= 'total'+v

console.log(v - 1,v,'vv')

   document.getElementById(`code${v}`).value=''
   document.getElementById(`description${v}`).value=''


        //console.log(l,'lllllll',yt)
       
        
      e.querySelector('[data-kt-element="items"] tbody').appendChild(l), a(), t() })),console.log( e.querySelector('[data-kt-element="items"] tbody')),
       KTUtil.on(e, '[data-kt-element="items"] [data-kt-element="remove-item"]', "click",
        (function (e) { e.preventDefault(), KTUtil.remove(this.closest('[data-kt-element="item"]')), 
        a(), t() })), KTUtil.on(e, '[data-kt-element="items"] [data-kt-element="quantity"], [data-kt-element="items"] [data-kt-element="price"]', "change", 
        (function (e) { 
            e.preventDefault(), t() })),
             $(e.querySelector('[name="invoice_date"]')).flatpickr({ enableTime: !1, dateFormat: "d, M Y" }),
              $(e.querySelector('[name="invoice_due_date"]')).flatpickr({ enableTime: !1, dateFormat: "d, M Y" }),
               t() } } }(); KTUtil.onDOMContentLoaded((function () { KTAppInvoicesCreate.init() }));



               $('body').on('click','#code1', function (e) {

                console.log('8888888888')


                
                $('.form-control').autocomplete({
                    source: function(req,res){
                
                      $.ajax({
                        url:"/clerk/autocompleteXN/",
                        dataType:"jsonp",
                        type:"GET",
                        data:req,
                        success: function(data){
                          res(data)
                        
                
                        },
                        error: function(err){
                          console.log(err.status);
                        }
                      });
                    },
                
                    minLength:2,
                    select: function(event,ui){
                
                  $.ajax({
                                dataType: 'json',
                                data: {
                                    code: ui.item.label,
                                    
                                },
                                type: 'POST',
                                url: "/clerk/autoXN",
                                success: function(data) {
                               
                                let price = document.getElementById('price').value
                                let quantity =  document.getElementById('quantity').value
                                let total = price * quantity

                                let price1 = data.price
                                let quantity1 =  document.getElementById('quantity1').value
                                let total1 = price1 * quantity1

                                let grandTotal = total1 + total
console.log(total,total1,'grandTotal')
                                
                                 $("#code1").val(data.code)
                                 $("#description1").val(data.item)
                               $("#price1").val(data.price)  
                               /*  document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]').innerText= data.price
                                 document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]').textContent= data.price
                                 console.log(document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]' ),'555555')*/
//$("#price2").val(data.price)   
                              
                                //$("#xid").val(data._id)
                                console.log(data._id,'dataId')
                          
                                document.querySelector(' [id="total1"]').innerText  = data.price
                                document.querySelector('[data-kt-element="grand-total"]').innerText  = grandTotal
                                document.querySelector('[data-kt-element="sub-total"]').innerText  = grandTotal
                              
                            
                                 
                          
                                }
                               
                            });
                 
                
                
                
                  
                    }
                
                
                
                    });
                
                      
            
            
                      `
                      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
                  <script src="https://code.jquery.com/jquery-1.12.3.min.js"   integrity="sha256-aaODHAgvwQW1bFOGXMeX+pC4PZIPsvn2h1sArYOhgXQ="   crossorigin="anonymous"></script>
                   <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
                    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
                    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
                    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>  
                      <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>`
            })

            







            $('body').on('click','#code2', function (e) {

                console.log('code2222222')


                
                $('.form-control').autocomplete({
                    source: function(req,res){
                
                      $.ajax({
                        url:"/clerk/autocompleteXN/",
                        dataType:"jsonp",
                        type:"GET",
                        data:req,
                        success: function(data){
                          res(data)
                        
                
                        },
                        error: function(err){
                          console.log(err.status);
                        }
                      });
                    },
                
                    minLength:2,
                    select: function(event,ui){
                
                  $.ajax({
                                dataType: 'json',
                                data: {
                                    code: ui.item.label,
                                    
                                },
                                type: 'POST',
                                url: "/clerk/autoXN",
                                success: function(data) {
                               
                                console.log(data[0],'ant')

                                
                                  $("#code2").val(data.code)
                                  $("#description2").val(data.item)
                               $("#price2").val(data.price)  

                               let price = document.getElementById('price').value
                               let quantity =  document.getElementById('quantity').value
                               let total = price * quantity

                            

                               let price1 = document.getElementById('price1').value
                               let quantity1 =  document.getElementById('quantity1').value
                               let total1 = price1 * quantity1

                            


                               let price2 = data.price
                               let quantity2 =  data.quantity
                               let total2 = data.price * data.qty
                                console.log(total,total1,total2,'grandTotal')
                               let grandTotal = total1 + total + total2
                          
                               /*  document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]').innerText= data.price
                                 document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]').textContent= data.price
                                 console.log(document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]' ),'555555')*/
//$("#price2").val(data.price)   
console.log(data._id,'riya riya')
                          
document.querySelector(' [id="total2"]').innerText  = data.price
document.querySelector(' [id="description2"]').textContent = data.item
document.querySelector(' [id="description2"]').innerText = data.item
document.getElementById("description2").value = data.item

document.querySelector('[data-kt-element="grand-total"]').innerText  = grandTotal
document.querySelector('[data-kt-element="sub-total"]').innerText  = grandTotal
                            
                                 
                          
                                }
                               
                            });
                 
                
                
                
                  
                    }
                
                
                
                    });
                
                      
            
            
                      `
                      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
                  <script src="https://code.jquery.com/jquery-1.12.3.min.js"   integrity="sha256-aaODHAgvwQW1bFOGXMeX+pC4PZIPsvn2h1sArYOhgXQ="   crossorigin="anonymous"></script>
                   <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
                    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
                    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
                    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>  
                      <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>`
            })

            












            $('body').on('click','#code3', function (e) {

                console.log('1000000000000')


                
                $('.form-control').autocomplete({
                    source: function(req,res){
                
                      $.ajax({
                        url:"/clerk/autocompleteXN/",
                        dataType:"jsonp",
                        type:"GET",
                        data:req,
                        success: function(data){
                          res(data)
                        
                
                        },
                        error: function(err){
                          console.log(err.status);
                        }
                      });
                    },
                
                    minLength:2,
                    select: function(event,ui){
                
                  $.ajax({
                                dataType: 'json',
                                data: {
                                    code: ui.item.label,
                                    
                                },
                                type: 'POST',
                                url: "/clerk/autoXN",
                                success: function(data) {
                               
                                  let price = document.getElementById('price').value
                                  let quantity =  document.getElementById('quantity').value
                                  let total = price * quantity

                                  let price1 = document.getElementById('price1').value
                                  let quantity1 =  document.getElementById('quantity1').value
                                  let total1 = price1 * quantity1

                            
  
                                  let price3 = data.price
                                  let quantity3 =  data.price
                                  let total3 = price3 * quantity3
                                  let grandTotal = total1 + total + total3
                              $("#code3").val(data.code)
                              $("#description3").val(data.item)
                              $("#price3").val(data.price)  
                               /*  document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]').innerText= data.price
                                 document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]').textContent= data.price
                                 console.log(document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]' ),'555555')*/
//$("#price2").val(data.price)   
document.querySelector(' [id="total3"]').innerText  = data.price
$("#description3").val(data.item)


document.querySelector('[data-kt-element="grand-total"]').innerText  = grandTotal
document.querySelector('[data-kt-element="sub-total"]').innerText  = grandTotal
                            
                                 
                          
                                }
                               
                            });
                 
                
                
                
                  
                    }
                
                
                
                    });
                
                      
            
            
                      `
                      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
                  <script src="https://code.jquery.com/jquery-1.12.3.min.js"   integrity="sha256-aaODHAgvwQW1bFOGXMeX+pC4PZIPsvn2h1sArYOhgXQ="   crossorigin="anonymous"></script>
                   <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
                    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
                    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
                    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>  
                      <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>`
            })

            










               var itemInput = document.querySelector('input[type="text"]')
               itemInput.addEventListener('input',AC)
           
                        console.log(333,'dccc')
           
                        function AC()
                {
           
           
                     $('#item1').autocomplete({
                        source: function(req,res){
                    
                          $.ajax({
                            url:"/clerk/autocompleteXN/",
                            dataType:"jsonp",
                            type:"GET",
                            data:req,
                            success: function(data){
                              res(data)
                            
                    
                            },
                            error: function(err){
                              console.log(err.status);
                            }
                          });
                        },
                    
                        minLength:1,
                        select: function(event,ui){
                    
                      $.ajax({
                                    dataType: 'json',
                                    data: {
                                        code: ui.item.label,
                                        
                                    },
                                    type: 'POST',
                                    url: "/clerk/autoXN",
                                    success: function(data) {
                                   
                                    
                                    
                                     $("#item1").val(data.item)
                                     $("#price1").val(data.price)
                                     document.querySelector('[data-kt-element="total"]').innerText  = data.price
                                    $("#xid").val(data._id)
                                  
                                
                                     
                              
                                    }
                                   
                                });
                     
                    
                    
                    
                      
                        }
                    
                    
                    
                        });
                    
                          
                
                
                          `
                          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
                      <script src="https://code.jquery.com/jquery-1.12.3.min.js"   integrity="sha256-aaODHAgvwQW1bFOGXMeX+pC4PZIPsvn2h1sArYOhgXQ="   crossorigin="anonymous"></script>
                       <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
                        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
                        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
                        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>  
                          <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>`
                
                }
                

                $('body').on('click','#code4', function (e) {

                    console.log('444444444')


                    
                    $('.form-control').autocomplete({
                        source: function(req,res){
                    
                          $.ajax({
                            url:"/clerk/autocompleteXN/",
                            dataType:"jsonp",
                            type:"GET",
                            data:req,
                            success: function(data){
                              res(data)
                            
                    
                            },
                            error: function(err){
                              console.log(err.status);
                            }
                          });
                        },
                    
                        minLength:2,
                        select: function(event,ui){
                    
                      $.ajax({
                                    dataType: 'json',
                                    data: {
                                        code: ui.item.label,
                                        
                                    },
                                    type: 'POST',
                                    url: "/clerk/autoXN",
                                    success: function(data) {
                                   
                                      let price = document.getElementById('price').value
                                      let quantity =  document.getElementById('quantity').value
                                      let total = price * quantity
    
                                      let price1 = document.getElementById('price1').value
                                      let quantity1 =  document.getElementById('quantity1').value
                                      let total1 = price1 * quantity1
    
                                    
      

                                      let price3 = document.getElementById('price3').value
                                      let quantity3 =  document.getElementById('quantity3').value
                                      let total3 = price3 * quantity3


                                      let price4 = data.price
                                      let quantity4 =  data.qty
                                      let total4 = price4 * quantity4
                                      let grandTotal = total1 + total + total3 + total4
                                    
                                   //  $("#title2").val(data.title)
                                   $("#price4").val(data.price)  
                                   $("#code4").val(data.code)
                                   $("#description4").val(data.item)
                                     document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]').innerText= data.price
                                     console.log(document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]' ),'555555')
//$("#price2").val(data.price)   
                                       $("#total4").textContent=data.price
                                    //$("#xid").val(data._id)
                                    document.querySelector(' [id="total4"]').innerText  = data.price


                                    
document.querySelector('[data-kt-element="grand-total"]').innerText  = grandTotal
document.querySelector('[data-kt-element="sub-total"]').innerText  = grandTotal
                                  
                                
                                     
                              
                                    }
                                   
                                });
                     
                    
                    
                    
                      
                        }
                    
                    
                    
                        });
                    
                          
                
                
                          `
                          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
                      <script src="https://code.jquery.com/jquery-1.12.3.min.js"   integrity="sha256-aaODHAgvwQW1bFOGXMeX+pC4PZIPsvn2h1sArYOhgXQ="   crossorigin="anonymous"></script>
                       <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
                        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
                        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
                        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>  
                          <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>`
                })

                




                $('body').on('click','#code5', function (e) {

                    console.log('555555555555')


                    
                    $('.form-control').autocomplete({
                        source: function(req,res){
                    
                          $.ajax({
                            url:"/clerk/autocompleteXN/",
                            dataType:"jsonp",
                            type:"GET",
                            data:req,
                            success: function(data){
                              res(data)
                            
                    
                            },
                            error: function(err){
                              console.log(err.status);
                            }
                          });
                        },
                    
                        minLength:2,
                        select: function(event,ui){
                    
                      $.ajax({
                                    dataType: 'json',
                                    data: {
                                        code: ui.item.label,
                                        
                                    },
                                    type: 'POST',
                                    url: "/clerk/autoXN",
                                    success: function(data) {
                                   
                                    
                                      let price = document.getElementById('price').value
                                      let quantity =  document.getElementById('quantity').value
                                      let total = price * quantity
    
                                      let price1 = document.getElementById('price1').value
                                      let quantity1 =  document.getElementById('quantity1').value
                                      let total1 = price1 * quantity1
    
                                      
      

                                      let price3 = document.getElementById('price3').value
                                      let quantity3 =  document.getElementById('quantity3').value
                                      let total3 = price3 * quantity3


                                      let price4 = document.getElementById('price4').value
                                      let quantity4 =  document.getElementById('quantity4').value
                                      let total4 = price4 * quantity4

                                      let price5 = data.price
                                      let quantity5 =  data.qty
                                      let total5 = price5 * quantity5
                                      let grandTotal = total1 + total  + total3 + total4 + total5
                                    
                                      $("#code5").val(data.code)
                                      $("#description5").val(data.item)
                                     $("#price5").val(data.price)
                                       $("#total2").textContent=data.price
                                    $("#xid").val(data._id)
                                    document.querySelector(' [id="total5"]').innerText  = data.price
                                  
                                                                    
document.querySelector('[data-kt-element="grand-total"]').innerText  = grandTotal
document.querySelector('[data-kt-element="sub-total"]').innerText  = grandTotal
                                     
                              
                                    }
                                   
                                });
                     
                    
                    
                    
                      
                        }
                    
                    
                    
                        });
                    
                          
                
                
                          `
                          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
                      <script src="https://code.jquery.com/jquery-1.12.3.min.js"   integrity="sha256-aaODHAgvwQW1bFOGXMeX+pC4PZIPsvn2h1sArYOhgXQ="   crossorigin="anonymous"></script>
                       <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
                        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
                        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
                        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>  
                          <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>`
                })





                
                $('body').on('click','#code6', function (e) {

                  console.log('6666666666666')


                  
                  $('.form-control').autocomplete({
                      source: function(req,res){
                  
                        $.ajax({
                          url:"/clerk/autocompleteXN/",
                          dataType:"jsonp",
                          type:"GET",
                          data:req,
                          success: function(data){
                            res(data)
                          
                  
                          },
                          error: function(err){
                            console.log(err.status);
                          }
                        });
                      },
                  
                      minLength:2,
                      select: function(event,ui){
                  
                    $.ajax({
                                  dataType: 'json',
                                  data: {
                                      code: ui.item.label,
                                      
                                  },
                                  type: 'POST',
                                  url: "/clerk/autoXN",
                                  success: function(data) {
                                 
                                    
                                    let price = document.getElementById('price').value
                                    let quantity =  document.getElementById('quantity').value
                                    let total = price * quantity
  
                                    let price1 = document.getElementById('price1').value
                                    let quantity1 =  document.getElementById('quantity1').value
                                    let total1 = price1 * quantity1
  
                                   
    

                                    let price3 = document.getElementById('price3').value
                                    let quantity3 =  document.getElementById('quantity3').value
                                    let total3 = price3 * quantity3


                                    let price4 = document.getElementById('price4').value
                                    let quantity4 =  document.getElementById('quantity4').value
                                    let total4 = price4 * quantity4


                                    let price5 = document.getElementById('price5').value
                                    let quantity5 =  document.getElementById('quantity5').value
                                    let total5 = price5 * quantity5

                                    let price6 = data.price
                                    let quantity6 =   data.qty
                                    let total6 = price6 * quantity6
                                    let grandTotal = total1 + total +  total3 + total4 + total5 + total6
                                  
                                  
                                    $("#code6").val(data.code)
                                    $("#description6").val(data.item)
                                   $("#price6").val(data.price)
                                     $("#total6").textContent=data.price
                                  $("#xid").val(data._id)
                                  document.querySelector(' [id="total6"]').innerText  = data.price
                                
                              
                                                                                                       
document.querySelector('[data-kt-element="grand-total"]').innerText  = grandTotal
document.querySelector('[data-kt-element="sub-total"]').innerText  = grandTotal
                            
                                  }
                                 
                              });
                   
                  
                  
                  
                    
                      }
                  
                  
                  
                      });
                  
                        
              
              
                        `
                        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
                    <script src="https://code.jquery.com/jquery-1.12.3.min.js"   integrity="sha256-aaODHAgvwQW1bFOGXMeX+pC4PZIPsvn2h1sArYOhgXQ="   crossorigin="anonymous"></script>
                     <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
                      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
                      <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
                      <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                      <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                      <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>  
                        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                      <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                      <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>`
              })

              
                

              
              $('body').on('click','#code7', function (e) {

                console.log('7777777777')


                
                $('.form-control').autocomplete({
                    source: function(req,res){
                
                      $.ajax({
                        url:"/clerk/autocompleteXN/",
                        dataType:"jsonp",
                        type:"GET",
                        data:req,
                        success: function(data){
                          res(data)
                        
                
                        },
                        error: function(err){
                          console.log(err.status);
                        }
                      });
                    },
                
                    minLength:2,
                    select: function(event,ui){
                
                  $.ajax({
                                dataType: 'json',
                                data: {
                                    code: ui.item.label,
                                    
                                },
                                type: 'POST',
                                url: "/clerk/autoXN",
                                success: function(data) {
                               
                                
                                  let price = document.getElementById('price').value
                                  let quantity =  document.getElementById('quantity').value
                                  let total = price * quantity

                                  let price1 = document.getElementById('price1').value
                                  let quantity1 =  document.getElementById('quantity1').value
                                  let total1 = price1 * quantity1

  

                                  let price3 = document.getElementById('price3').value
                                  let quantity3 =  document.getElementById('quantity3').value
                                  let total3 = price3 * quantity3


                                  let price4 = document.getElementById('price4').value
                                  let quantity4 =  document.getElementById('quantity4').value
                                  let total4 = price4 * quantity4


                                  let price5 = document.getElementById('price5').value
                                  let quantity5 =  document.getElementById('quantity5').value
                                  let total5 = price5 * quantity5


                                  let price6 = document.getElementById('price6').value
                                  let quantity6 =  document.getElementById('quantity6').value
                                  let total6 = price6 * quantity6

                                  let price7 = data.price
                                  let quantity7 =   data.qty
                                  let total7 = price7 * quantity7 
                                  let grandTotal = total1 + total +  total3 + total4 + total5 + total6 + total7
                                
                                  $("#code7").val(data.code)
                                  $("#description7").val(data.item)
                                 $("#price7").val(data.price)
                                   $("#total7").textContent=data.price
                                $("#xid").val(data._id)
                                document.querySelector(' [id="total7"]').innerText  = data.price
                              
                                                                                                                           
document.querySelector('[data-kt-element="grand-total"]').innerText  = grandTotal
document.querySelector('[data-kt-element="sub-total"]').innerText  = grandTotal
                                 
                          
                                }
                               
                            });
                 
                
                
                
                  
                    }
                
                
                
                    });
                
                      
            
            
                      `
                      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
                  <script src="https://code.jquery.com/jquery-1.12.3.min.js"   integrity="sha256-aaODHAgvwQW1bFOGXMeX+pC4PZIPsvn2h1sArYOhgXQ="   crossorigin="anonymous"></script>
                   <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
                    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
                    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
                    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>  
                      <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>`
            })

            















            
            $('body').on('click','#code8', function (e) {

              console.log('555555555555')


              
              $('.form-control').autocomplete({
                  source: function(req,res){
              
                    $.ajax({
                      url:"/clerk/autocompleteXN/",
                      dataType:"jsonp",
                      type:"GET",
                      data:req,
                      success: function(data){
                        res(data)
                      
              
                      },
                      error: function(err){
                        console.log(err.status);
                      }
                    });
                  },
              
                  minLength:2,
                  select: function(event,ui){
              
                $.ajax({
                              dataType: 'json',
                              data: {
                                  code: ui.item.label,
                                  
                              },
                              type: 'POST',
                              url: "/clerk/autoXN",
                              success: function(data) {
                             
                              
                              
                                
                                let price = document.getElementById('price').value
                                let quantity =  document.getElementById('quantity').value
                                let total = price * quantity

                                let price1 = document.getElementById('price1').value
                                let quantity1 =  document.getElementById('quantity1').value
                                let total1 = price1 * quantity1

                           


                                let price3 = document.getElementById('price3').value
                                let quantity3 =  document.getElementById('quantity3').value
                                let total3 = price3 * quantity3


                                let price4 = document.getElementById('price4').value
                                let quantity4 =  document.getElementById('quantity4').value
                                let total4 = price4 * quantity4


                                let price5 = document.getElementById('price5').value
                                let quantity5 =  document.getElementById('quantity5').value
                                let total5 = price5 * quantity5


                                let price6 = document.getElementById('price6').value
                                let quantity6 =  document.getElementById('quantity6').value
                                let total6 = price6 * quantity6

                                let price7 = document.getElementById('price7').value
                                let quantity7 =  document.getElementById('quantity7').value
                                let total7 = price7 * quantity7

                                let price8 = data.price
                                let quantity8 =   data.qty
                                let total8 = price8 * quantity8 
                                let grandTotal = total1 + total +  total3 + total4 + total5 + total6 + total7 + total8
                                $("#code8").val(data.code)
                                $("#description8").val(data.item)
                               $("#price8").val(data.price)
                                 $("#total8").textContent=data.price
                              $("#xid").val(data._id)
                              document.querySelector(' [id="total8"]').innerText  = data.price
                            
                                               
                                                                                                                           
document.querySelector('[data-kt-element="grand-total"]').innerText  = grandTotal
document.querySelector('[data-kt-element="sub-total"]').innerText  = grandTotal
                               
                        
                              }
                             
                          });
               
              
              
              
                
                  }
              
              
              
                  });
              
                    
          
          
                    `
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
                <script src="https://code.jquery.com/jquery-1.12.3.min.js"   integrity="sha256-aaODHAgvwQW1bFOGXMeX+pC4PZIPsvn2h1sArYOhgXQ="   crossorigin="anonymous"></script>
                 <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
                  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
                  <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
                  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>  
                    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>`
          })

          












          
          $('body').on('click','#code9', function (e) {

            console.log('999999999')


            
            $('.form-control').autocomplete({
                source: function(req,res){
            
                  $.ajax({
                    url:"/clerk/autocompleteXN/",
                    dataType:"jsonp",
                    type:"GET",
                    data:req,
                    success: function(data){
                      res(data)
                    
            
                    },
                    error: function(err){
                      console.log(err.status);
                    }
                  });
                },
            
                minLength:2,
                select: function(event,ui){
            
              $.ajax({
                            dataType: 'json',
                            data: {
                                code: ui.item.label,
                                
                            },
                            type: 'POST',
                            url: "/clerk/autoXN",
                            success: function(data) {
                           
                            
                              let price = document.getElementById('price').value
                              let quantity =  document.getElementById('quantity').value
                              let total = price * quantity

                              let price1 = document.getElementById('price1').value
                              let quantity1 =  document.getElementById('quantity1').value
                              let total1 = price1 * quantity1

                             


                              let price3 = document.getElementById('price3').value
                              let quantity3 =  document.getElementById('quantity3').value
                              let total3 = price3 * quantity3


                              let price4 = document.getElementById('price4').value
                              let quantity4 =  document.getElementById('quantity4').value
                              let total4 = price4 * quantity4


                              let price5 = document.getElementById('price5').value
                              let quantity5 =  document.getElementById('quantity5').value
                              let total5 = price5 * quantity5


                              let price6 = document.getElementById('price6').value
                              let quantity6 =  document.getElementById('quantity6').value
                              let total6 = price6 * quantity6

                              let price7 = document.getElementById('price7').value
                              let quantity7 =  document.getElementById('quantity7').value
                              let total7 = price7 * quantity7


                              let price8 = document.getElementById('price8').value
                              let quantity8 =  document.getElementById('quantity8').value
                              let total8 = price8 * quantity8

                              let price9 = data.price
                              let quantity9 =   data.qty
                              let total9 = price9 * quantity9 
                              let grandTotal = total1 + total +  total3 + total4 + total5 + total6 + total7 + total8 + total9
                            
                              $("#code9").val(data.code)
                              $("#description9").val(data.item)
                             $("#price9").val(data.price)
                               $("#total9").textContent=data.price
                            $("#xid").val(data._id)
                            document.querySelector(' [id="total9"]').innerText  = data.price

                                                                                                                                          
document.querySelector('[data-kt-element="grand-total"]').innerText  = grandTotal
document.querySelector('[data-kt-element="sub-total"]').innerText  = grandTotal
                          
                        
                             
                      
                            }
                           
                        });
             
            
            
            
              
                }
            
            
            
                });
            
                  
        
        
                  `
                  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
              <script src="https://code.jquery.com/jquery-1.12.3.min.js"   integrity="sha256-aaODHAgvwQW1bFOGXMeX+pC4PZIPsvn2h1sArYOhgXQ="   crossorigin="anonymous"></script>
               <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
                <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
                <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
                <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>  
                  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
                <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>`
        })

        





















        
        $('body').on('click','#code10', function (e) {

          console.log('555555555555')


          
          $('.form-control').autocomplete({
              source: function(req,res){
          
                $.ajax({
                  url:"/clerk/autocompleteXN/",
                  dataType:"jsonp",
                  type:"GET",
                  data:req,
                  success: function(data){
                    res(data)
                  
          
                  },
                  error: function(err){
                    console.log(err.status);
                  }
                });
              },
          
              minLength:2,
              select: function(event,ui){
          
            $.ajax({
                          dataType: 'json',
                          data: {
                              code: ui.item.label,
                              
                          },
                          type: 'POST',
                          url: "/clerk/autoXN",
                          success: function(data) {
                         
                          
                            
                           
                            
                            let price = document.getElementById('price').value
                            let quantity =  document.getElementById('quantity').value
                            let total = price * quantity

                            let price1 = document.getElementById('price1').value
                            let quantity1 =  document.getElementById('quantity1').value
                            let total1 = price1 * quantity1

                        


                            let price3 = document.getElementById('price3').value
                            let quantity3 =  document.getElementById('quantity3').value
                            let total3 = price3 * quantity3


                            let price4 = document.getElementById('price4').value
                            let quantity4 =  document.getElementById('quantity4').value
                            let total4 = price4 * quantity4


                            let price5 = document.getElementById('price5').value
                            let quantity5 =  document.getElementById('quantity5').value
                            let total5 = price5 * quantity5


                            let price6 = document.getElementById('price6').value
                            let quantity6 =  document.getElementById('quantity6').value
                            let total6 = price6 * quantity6

                            let price7 = document.getElementById('price7').value
                            let quantity7 =  document.getElementById('quantity7').value
                            let total7 = price7 * quantity7


                            let price8 = document.getElementById('price8').value
                            let quantity8 =  document.getElementById('quantity8').value
                            let total8 = price8 * quantity8

                            let price9 = document.getElementById('price9').value
                            let quantity9 =  document.getElementById('quantity9').value
                            let total9 = price9 * quantity9

                            let price10 = data.price
                            let quantity10 =   data.qty
                            let total10 = price10 * quantity10
                            let grandTotal = total1 + total +  total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10
                          
                            $("#code10").val(data.code)
                            $("#description10").val(data.item)
                           $("#price10").val(data.price)
                             $("#total10").textContent=data.price
                          $("#xid").val(data._id)
                          document.querySelector(' [id="total10"]').innerText  = data.price
                        

                          document.querySelector('[data-kt-element="grand-total"]').innerText  = grandTotal
document.querySelector('[data-kt-element="sub-total"]').innerText  = grandTotal
                      
                           
                    
                          }
                         
                      });
           
          
          
          
            
              }
          
          
          
              });
          
                
      
      
                `
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
            <script src="https://code.jquery.com/jquery-1.12.3.min.js"   integrity="sha256-aaODHAgvwQW1bFOGXMeX+pC4PZIPsvn2h1sArYOhgXQ="   crossorigin="anonymous"></script>
             <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
              <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
              <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
              <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
              <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
              <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>  
                <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
              <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
              <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>`
      })

      