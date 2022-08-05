   var hour=document.querySelector('#hour');
   var minute=document.querySelector('#minute');
   var second=document.querySelector('#second');
   var watch=document.querySelector('#watch');
   var blue=document.querySelector('.blue');
   var black=document.querySelector('.black');
   var pink=document.querySelector('.pink');
   var purple=document.querySelector('.purple');
   var red=document.querySelector('.red');
   var time=document.querySelector('#time');
   var heartbtn=document.querySelector('.heartbtn');
   var timebtn=document.querySelector('.timebtn');
   var heartbeat=document.getElementById('heartbeat');
   var beat=document.getElementById("beat");
   var heart=document.getElementById("heart");
   var date=new Date();
   


  function currentDate(){
    var date=new Date();
   var hour=date.getHours();
   var min=date.getMinutes();
   var sec=date.getSeconds();
      hour=updateTime(hour);
      min=updateTime(min);
      sec=updateTime(sec);
     time.innerHTML= hour + ":" + min + ":" +sec;
     setTimeout(function() {currentDate()}, 1000);
}

function updateTime(c){
    if(c<10){
        return "0"+c;
    }
    else{
        return c;
    }
}
 currentDate();

 
 blue.addEventListener("mouseover",function(){
    watch.src="images/bluewatch.png";
 });

 black.addEventListener("mouseover" ,function(){
    watch.src="images/blackwatch.png";
 });

 pink.addEventListener("mouseover" ,function(){
    watch.src="images/pinkwatch.png";
 });

 purple.addEventListener("mouseover" ,function(){
    watch.src="images/purplewatch.png";
 });

 red.addEventListener("mouseover" ,function(){
    watch.src="images/redwatch.png";
 });

  timebtn.addEventListener("click",function(){
   time.style.display="block";
   heartbeat.style.display="none";
 })
  heartbtn.addEventListener('click',function () {
 time.style.display="none";
  heartbeat.style.display="block";
  });


  function randomNumber(){
    let randomNumber = Math.random();
    randomNumber = randomNumber * 100;
    randomNumber = Math.floor(randomNumber);
    heart.innerHTML = updateRandom(randomNumber);
  }
  function updateRandom(k){
   if(k < 10){
      return "0" + k;
   }
   else{
      return k;
   }
  }
  randomNumber();