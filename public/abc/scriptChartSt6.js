$.ajax({
   
    dataType: 'json',
    type: 'POST',
	
    url: "/hostel/loadHostelAllo",
    success: function(data) {
    console.log(data)


    
   for(var i = 0;i<data.length;i++){
    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
 
    var td2 = tr.appendChild(document.createElement('td'));
	var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));

    var link= tr.appendChild(document.createElement('td'));
    //td5.appendChild(document.createElement('a'));
    td1.id =data[i]._id

td2.classList.add('text-end', 'pe-0')

td3.classList.add('text-end', 'pe-0')
td4.classList.add('text-end', 'pe-0')
td5.classList.add('text-end', 'pe-1')
td6.classList.add('text-end', 'pe-0')
link.classList.add('text-end','pe-0')
link.setAttribute("href", "/hostel/alloSubRoomDelete/"+data[i]._id)
link.className = "text-end";

/*let link = document.createTextNode("Delete")

td5.appendChild(link);*/


td1.innerHTML = data[i].studentName;
td2.innerHTML = data[i].studentId;
td3.innerHTML = data[i].gender;
td4.innerHTML = data[i].room;
td5.innerHTML = data[i].class1;
td6.innerHTML = data[i].hostel;

   
   
    let link2 = "/hostel/alloSubRoomDelete/"+data[i]._id

    //td5.innerHTML = "Delete"
    var linkText = 'Delete'
   // link.appendChild(linkText);
link.href="/hostel/alloSubRoomDelete/"+data[i]._id
    //td5.innerText = 'Delete'
    link.innerHTML='<a href="'+link2+'">'+linkText+'</a>'

    console.log(link,'33tt')
  

 

  document.getElementById("kt_ecommerce_report_sales_table").appendChild(tr)
  //document.getElementById("kt_ecommerce_report_sales_table").appendChild(link)
    //document.getElementById("kt_ecommerce_report_sales_table").appendChild(td5)
    //document.body.prepend(td5)
   }





var table = document.getElementById('kt_ecommerce_report_sales_table')
var cells = table.getElementsByClassName("text-end pe-1")
for(var i = 0; i< cells.length; i++){
cells[i].onclick = function(){
console.log(i,'this')
if(this.hasAttribute('data-clicked')){
    
    return;
}

this.setAttribute('data-clicked', 'yes')
this.setAttribute('data-text', this.innerHTML)

var input = document.createElement('input');
input.setAttribute('type', 'text')
input.value = this.innerHTML
input.style.width = this.offsetWidth - (this.clientLeft * 2) + 'px';
input.style.height = this.offsetHeight - (this.clientTop * 2) + "px";
input.style.border = '0px';
input.style.fontFamily ="inherit";
input.style.fontSize ="inherit";
input.style.textAlign = "inherit";
input.style.backgroundColor = 'LightGoldenRodYellow';

input.onblur = function(){

    var td = input.parentElement;
        console.log(td.id,'td')
    var orig_text = input.parentElement.getAttribute('data-text');
    var current_text = this.value;

     let reg = /\d+\.*\d*/g;

let result = current_text.match(reg)
let currentMark = Number(result)




let resultX = orig_text.match(reg)
let originalMark = Number(resultX)

console.log(currentMark,originalMark,'mark')

/*if(originalMark < currentMark){*/



    if(orig_text != current_text ){
        //there are changes
        //save into db using ajax
        console.log(current_text,'current_text')
$.ajax({
  dataType: 'json',
            data: {
                code: current_text,
                
            },
            type: 'POST',
            url: "/records/alloSub/update/"+td1.id,


  success: function(data) {
 
/* if(data.stockUpdate == 'yes'){
 alert('Stock cant be updated')

 console.log(td.id,'id2')
        td.removeAttribute('data-clicked')
        td.removeAttribute('data-text')
        td.innerHTML = orig_text
        td.style.cssText = 'padding: 5px';
}
else{*/
console.log(td.id,'id2')
console.log(td,'coalition')
        td.removeAttribute('data-clicked')
        td.removeAttribute('data-text')
        td.innerHTML = current_text
        //cells[5].textContent =  data.percentage
        td.style.cssText = 'padding: 5px';
/*}*/
    
  
    }


});
        console.log(td.id,'id2')
        td.removeAttribute('data-clicked')
        td.removeAttribute('data-text')
        td.innerHTML = current_text

        td.style.cssText = 'padding: 5px';
        
        console.log(orig_text + 'is change to ' + current_text)
    
    } else{
        td.removeAttribute('data-clicked')
        td.removeAttribute('data-text')
        td.innerHTML = orig_text
        td.style.cssText = 'padding: 5px';
        console.log('No changes made')
    
    }

/* }else{


alert('error')

   td.removeAttribute('data-clicked')
        td.removeAttribute('data-text')
        td.innerHTML = orig_text
        td.style.cssText = 'padding: 5px';
        console.log('No changes made')

}*/
}

this.innerHTML = ''
this.style.cssText = 'padding: 0px';
this.append(input);
this.firstElementChild.select();

}
}





	}

	})





















function buttonClick()
{


 
    var item = document.sample.title.value;
   
    var itemX3 = document.sample.price.value;
    
    //var hostel=document.sample.hostel.value;
    var itemXX=document.sample.xid.value;
    var itemX =  document.sample.quantity.value;
   var itemX4 = document.sample.businessName.value; 
  var companyEmail =  document.sample.companyEmail.value;
  var companyClerk =  document.sample.companyClerk.value;
    var itemX5=document.sample.clientName.value;
    
    var itemX6=document.sample.clientEmail.value;
    let invoiceDescription ="software"
    var dueDate=document.sample.invoice_due_date.value;
    var date=document.sample.invoice_date.value;


    
	$.ajax({
        dataType: 'json',
        type: 'POST',
        data:{
        companyName:itemX4,itemId:itemXX,item:item,qty:itemX,price:itemX3,companyEmail:companyEmail,companyClerk:companyClerk,  clientName:itemX5,invoiceDescription:invoiceDescription,date:date,dueDate:dueDate,clientEmail:itemX6
    
        },
        url: '/clerk/invoiceQ/',
    success: function(data) {
    console.log(data,'enlighted')
  

    
   /* for(var i = 0;i<data.length;i++){*/
    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
     
    var td2 = tr.appendChild(document.createElement('td'));
	var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
   
    

    var link= tr.appendChild(document.createElement('td'));
    td1.id =data._id
    tr.classList.add('border-bottom border-bottom-dashed')
td1.classList.add( 'pe-7')
td2.classList.add( 'pe-0')
td3.classList.add( 'pe-0')
td4.classList.add('pe-0')

link.classList.add('pe-0')
link.setAttribute("href", "/hostel/alloSubRoomDelete")
link.className = "text-end";




    td1.innerHTML = data.title;
    td2.innerHTML = data.qty;
    td3.innerHTML = data.price;
  

    td4.innerHTML = data.total;
   
  

    let link2 = "/clerk/invoiceDelete/"+data._id

    //td5.innerHTML = "Delete"
    var linkText = 'Delete'
    // link.appendChild(linkText);
    link.href="/clerk/invoiceDelete/"+data._id
    //td5.innerText = 'Delete'
    link.innerHTML='<a href="'+link2+'">'+linkText+'</a>'

    document.getElementById("kt_ecommerce_report_sales_table").appendChild(tr)







var table = document.getElementById('invoice')
var cells = table.getElementsByClassName(" pe-7")
for(var i = 0; i< cells.length; i++){
cells[i].onclick = function(){
console.log(i,'this')
if(this.hasAttribute('data-clicked')){
    
    return;
}

this.setAttribute('data-clicked', 'yes')
this.setAttribute('data-text', this.innerHTML)

var input = document.createElement('input');
input.setAttribute('type', 'text')
input.value = this.innerHTML
input.style.width = this.offsetWidth - (this.clientLeft * 2) + 'px';
input.style.height = this.offsetHeight - (this.clientTop * 2) + "px";
input.style.border = '0px';
input.style.fontFamily ="inherit";
input.style.fontSize ="inherit";
input.style.textAlign = "inherit";
input.style.backgroundColor = 'LightGoldenRodYellow';

input.onblur = function(){

    var td = input.parentElement;
        console.log(td.id,'td')
    var orig_text = input.parentElement.getAttribute('data-text');
    var current_text = this.value;

     let reg = /\d+\.*\d*/g;

let result = current_text.match(reg)
let currentMark = Number(result)




let resultX = orig_text.match(reg)
let originalMark = Number(resultX)

console.log(currentMark,originalMark,'mark')

/*if(originalMark < currentMark){*/



    if(orig_text != current_text ){
        //there are changes
        //save into db using ajax
        console.log(current_text,'current_text')
$.ajax({
  dataType: 'json',
            data: {
                code: current_text,
                
            },
            type: 'POST',
            url: "/records/alloSub/update/"+td1.id,


  success: function(data) {
 
/* if(data.stockUpdate == 'yes'){
 alert('Stock cant be updated')

 console.log(td.id,'id2')
        td.removeAttribute('data-clicked')
        td.removeAttribute('data-text')
        td.innerHTML = orig_text
        td.style.cssText = 'padding: 5px';
}
else{*/
console.log(td.id,'id2')
console.log(td,'coalition')
        td.removeAttribute('data-clicked')
        td.removeAttribute('data-text')
        td.innerHTML = current_text
        //cells[5].textContent =  data.percentage
        td.style.cssText = 'padding: 5px';
/*}*/
    
  
    }


});
        console.log(td.id,'id2')
        td.removeAttribute('data-clicked')
        td.removeAttribute('data-text')
        td.innerHTML = current_text

        td.style.cssText = 'padding: 5px';
        
        console.log(orig_text + 'is change to ' + current_text)
    
    } else{
        td.removeAttribute('data-clicked')
        td.removeAttribute('data-text')
        td.innerHTML = orig_text
        td.style.cssText = 'padding: 5px';
        console.log('No changes made')
    
    }

/* }else{


alert('error')

   td.removeAttribute('data-clicked')
        td.removeAttribute('data-text')
        td.innerHTML = orig_text
        td.style.cssText = 'padding: 5px';
        console.log('No changes made')

}*/
}

this.innerHTML = ''
this.style.cssText = 'padding: 0px';
this.append(input);
this.firstElementChild.select();

}
}





	}

	})
}