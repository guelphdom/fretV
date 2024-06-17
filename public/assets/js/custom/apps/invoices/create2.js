let p = 2


function loadItems(){


/*
for(var i=0;i<2;i++){

  console.log(i)
       var l = document.querySelector('[data-kt-element="item-template"] tr').cloneNode(!0); 

              
      // var yt = document.querySelectorAll(' [data-kt-element="item"]').length;

       let c = 0
       //let v = c + yt
       v =i + 1
       console.log(v,'777')
       document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"] ').id= 'price'+i

       document.querySelector('  [data-kt-element="item-template"]   [data-kt-element="item"] ').id= 'item'+i

     document.querySelector('[data-kt-element="items"] tbody').appendChild(l)
    }
      */
  
  }    


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
      let v = c + yt
      console.log(v,'777')
      document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"] ').id= 'price'+v

      document.querySelector('  [data-kt-element="item-template"]   [data-kt-element="item"] ').id= 'item'+v
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



               $('body').on('click','#item1', function (e) {

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
                               
                                
                                
                                 $("#item1").val(data.item)
                               $("#price1").val(data.price)  
                               /*  document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]').innerText= data.price
                                 document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]').textContent= data.price
                                 console.log(document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]' ),'555555')*/
//$("#price2").val(data.price)   
                                   $("#total2").textContent=data.price
                                //$("#xid").val(data._id)
                                console.log(data._id,'dataId')
                              
                            
                                 
                          
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

            







            $('body').on('click','#item2', function (e) {

                console.log('999999999999')


                
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
                               
                                
                                
                                 $("#item2").val(data.item)
                               $("#price2").val(data.price)  
                               /*  document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]').innerText= data.price
                                 document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]').textContent= data.price
                                 console.log(document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]' ),'555555')*/
//$("#price2").val(data.price)   
                                   $("#total2").textContent=data.price
                                //$("#xid").val(data._id)
                                console.log(data._id,'dataId')
                              
                            
                                 
                          
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

            












            $('body').on('click','#item3', function (e) {

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
                               
                                
                                
                                 $("#item3").val(data.item)
                               $("#price3").val(data.price)  
                               /*  document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]').innerText= data.price
                                 document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]').textContent= data.price
                                 console.log(document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]' ),'555555')*/
//$("#price2").val(data.price)   
                                   $("#total2").textContent=data.price
                                //$("#xid").val(data._id)
                                console.log(data._id,'dataId')
                              
                            
                                 
                          
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
                                       $("#total2").textContent=data.price
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
                

                $('body').on('click','#item4', function (e) {

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
                                   
                                    
                                    
                                   //  $("#title2").val(data.title)
                                   $("#price4").val(data.price)  
                                   $("#item4").val(data.item) 
                                     document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]').innerText= data.price
                                     console.log(document.querySelector('[data-kt-element="item-template"]   [data-kt-element="price"]' ),'555555')
//$("#price2").val(data.price)   
                                       $("#total4").textContent=data.price
                                    //$("#xid").val(data._id)
                                    console.log(data._id,'dataId')
                                  
                                
                                     
                              
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

                




                $('body').on('click','#item5', function (e) {

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
                                   
                                    
                                    
                                     $("#item5").val(data.item)
                                     $("#price5").val(data.price)
                                       $("#total2").textContent=data.price
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
                })

                