   

function buttonLate(id){


$.ajax({
dataType: 'json',
data: {
code:id

},
type: 'POST',
url: "/teacher/late/"+id,
success: function(data) {

console.log(data,'data')

document.getElementById(id).textContent = 'Late'
}
})



}










function buttonAbsent(id){
    

$.ajax({
dataType: 'json',
data: {
code:id

},
type: 'POST',
url: "/teacher/absent/"+id,
success: function(data) {

console.log(data,'data')

document.getElementById(id).textContent = 'Absent'
}
})



}







function buttonPresent(id){
    

    $.ajax({
    dataType: 'json',
    data: {
    code:id
    
    },
    type: 'POST',
    url: "/teacher/absent/"+id,
    success: function(data) {
    
    console.log(data,'data')
    
    document.getElementById(id).textContent = 'Present'
    }
    })
    
    
    
    }