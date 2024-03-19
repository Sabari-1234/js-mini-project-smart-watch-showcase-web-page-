//watch band changing buttons
var watch =document.getElementById('watch')
var b1=document.getElementById('b1')
b1.onclick=function(){
watch.src='./assets/images/3.png'
}
var b2=document.getElementById('b2')
b2.onclick=function(){
watch.src='./assets/images/2.png'
}
var b3=document.getElementById('b3')
b3.onclick=function(){
watch.src='./assets/images/4.png'
}
var b4=document.getElementById('b4')
b4.onclick=function(){
watch.src='./assets/images/5.png'
}

//time
var tm=document.getElementById('time')

setInterval(function(){
    
    tm.innerHTML=''
    var now =new Date()
    
    var hour= now.getHours()
    var minute=now.getMinutes() 
    var seconds=now.getSeconds()
    console.log(hour+':' +minute + ':' + seconds)

    
    tm.innerHTML=hour+':' +minute + ':' + seconds
    
    
},1000)


//heart rate

var gif =document.getElementById('gif')
var rate=document.getElementById('rate')
var b5=document.getElementById('b5')
var b6=document.getElementById('b6')
b5.onclick=function(){
gif.style.display='none'
rate.style.display='none'
tm.style.display='block'
}
b6.onclick=function(){
    gif.style.display='Block'
    rate.style.display='Block'
    tm.style.display='none'
    }


