document.getElementById('ekran').classList.remove('ekran');
function countFirst(){
  let counter = 1;
  setInterval(function(){
   var count = parseInt(counter = parseInt(counter+=10));
   document.getElementById('simulacija3').innerText = count;
   if(parseInt(count)>89){
     count = 1;
     counter = 1;
   }

 }, 1000);
 }
 countFirst();
 countThird();


 //////////////////////////////////////////////////////////////////////----GLAVNA----//////////////////////////////////
 function countThird(){
  let counter2 = parseInt(document.getElementById('glavna').innerText);
  setInterval(function(){
   var count2 = parseInt(counter2 = parseInt(++counter2));
   document.getElementById('glavna').innerText = count2;
  
    if(counter2 >1499){
      counter2 = 0;
      count2 = 0;
    }
 }, 2500);
 //startkeydown
window.addEventListener("onkeydown", keyDown,true);
window.addEventListener("keydown", keyDown);
 function keyDown() {
  var e = window.event;
  if(e.keyCode == 49) {
          console.log('s');
          let prv = parseInt(document.getElementById('glavna').innerText);
          document.getElementById('ekranSuma').innerText = parseInt(prv) + "den";
          counter2 = 0;
          count2 = 0;
          document.getElementById('ekran').classList.add('ekran');//kopce 1 dodava ekran#1!
        
  }
  if(e.keyCode == 27){
    document.getElementById('ekran').classList.remove('ekran');//kopce 4 birse ekran#1!
    document.getElementById('ekranSuma').innerText = "";
    document.getElementById('APARATJackpot').innerText = "";

  }
  if(e.keyCode == 81){
    document.getElementById('APARATJackpot').innerText = "APARAT 1";//q
  }
  if(e.keyCode == 87){
    document.getElementById('APARATJackpot').innerText = "APARAT 2";//w
  }
  if(e.keyCode == 69){
    document.getElementById('APARATJackpot').innerText = "APARAT 3";//e
  }
  if(e.keyCode == 82){
    document.getElementById('APARATJackpot').innerText = "APARAT 4";//r
  }
  if(e.keyCode == 84){
    document.getElementById('APARATJackpot').innerText = "APARAT 5";//t
  }
  if(e.keyCode == 89){
    document.getElementById('APARATJackpot').innerText = "APARAT 6";//y
  }
  if(e.keyCode == 85){
    document.getElementById('APARATJackpot').innerText = "APARAT 7";//u
  }
  if(e.keyCode == 73){
    document.getElementById('APARATJackpot').innerText = "APARAT 8";//i
  }
  if(e.keyCode == 79){
    document.getElementById('APARATJackpot').innerText = "APARAT 9";//o
  }
  if(e.keyCode == 80){
    document.getElementById('APARATJackpot').innerText = "APARAT 10";//p
  }
}//endkeydown
}//KOPCE ZA DA SE NAPRAVI RESET NA PRV JACKPOT!! I DA SE PRIKAZE NA EKRAN NEGOVATA SUMA//////////////////////////////////

 function countFourth(){
  let counter3 = parseInt(document.getElementById('simulacija').innerText);
  setInterval(function(){
    
   var count3 = parseInt(counter3 = parseInt(++counter3));
   document.getElementById('simulacija').innerText = count3;
  
    if(parseInt(count3)>8){
      count3 = 0;
      counter3 = 0;
    }
 }, 4000);
 }
 countFourth();
//prv jackpot/////////////////////////////////////////////////////////////////////////////////////////////////////////

function countVtorFirst(){
  let counterVtor = 1;
  setInterval(function(){
   var countVtor = parseInt(counterVtor = parseInt(counterVtor+=10));
   document.getElementById('simulacijaVtor3').innerText = countVtor;
   if(parseInt(countVtor)>89){
     countVtor = 1;
     counterVtor = 1;
   }
  
 }, 600);
 }
 countVtorFirst();


 //////////////////////////////////--------------GLAVNAVTOR-------------////////////////////////////////////////////////
 function countVtorThird(){
  let counterVtor2 = parseInt(document.getElementById('glavnaVtor').innerText);
  setInterval(function(){
   var countVtor2 = parseInt(counterVtor2 = parseInt(++counterVtor2));
   document.getElementById('glavnaVtor').innerText = countVtor2;
 
    if(counterVtor2 >999){
      counterVtor2 = 0;
      countVtor2 = 0;
    }
 }, 2500);
 window.addEventListener("onkeydown", keyDown,true);
 window.addEventListener("keydown", keyDown);
  function keyDown() {
   var e = window.event;
   if(e.keyCode == 50) {
    console.log('s');
    let prv = parseInt(document.getElementById('glavnaVtor').innerText);
    document.getElementById('ekranSuma').innerText = parseInt(prv) + "den";
    counterVtor2 = 0;
    countVtor2 = 0;
    document.getElementById('ekran').classList.add('ekran');//kopce 1 dodava ekran#1!
    e.keyCode = 0;
}
if(e.keyCode == 27){
document.getElementById('ekran').classList.remove('ekran');//kopce 4 birse ekran#1!
}
}
}//KOPCE ZA DA SE NAPRAVI RESET NA PRV JACKPOT!! I DA SE PRIKAZE NA EKRAN NEGOVATA SUMA//////////////////////////////////
 countVtorThird();
 function countVtorFourth(){
  let counterVtor3 = parseInt(document.getElementById('simulacijaVtor').innerText);
  setInterval(function(){
    
   var countVtor3 = parseInt(counterVtor3 = parseInt(++counterVtor3));
   document.getElementById('simulacijaVtor').innerText = countVtor3;

    if(parseInt(countVtor3)>8){
      countVtor3 = 4;
      counterVtor3 = 4;
    }
 }, 2000);
 }
 countVtorFourth();

//Vtor Jackpot
function countTretFirst(){
  let counterTret = 1;
  setInterval(function(){
   var countTret = parseInt(counter = parseInt(counterTret+=10));
   document.getElementById('simulacijaTret3').innerText = countTret;
   if(parseInt(countTret)>89){
     countTret = 1;
     counterTret = 1;
   }

 }, 600);
 }
 countTretFirst();

 //////////////////////////////////////////////---------------------GLAVNATRET--------------//////////////////////////////////////////
 function countTretThird(){
  let counterTret2 = parseInt(document.getElementById('glavnaTret').innerText);
  setInterval(function(){
   var countTret2 = parseInt(counterTret2 = parseInt(++counterTret2));
   document.getElementById('glavnaTret').innerText = countTret2;

    if(counterTret2 >499){
      counterTret2 = 0;
      countTret2 = 0;
    }
 }, 2500);
 window.addEventListener("onkeydown", keyDown,true);
 window.addEventListener("keydown", keyDown);
  function keyDown() {
   var e = window.event;
   if(e.keyCode == 51) {
    console.log('s');
    let prv = parseInt(document.getElementById('glavnaTret').innerText);
    document.getElementById('ekranSuma').innerText = parseInt(prv) + "den";
    counterTret2 = 0;
    countTret2 = 0;
    document.getElementById('ekran').classList.add('ekran');//kopce 1 dodava ekran#1!


    
    






}
if(e.keyCode == 27){
document.getElementById('ekran').classList.remove('ekran');//kopce 4 birse ekran#1!
}
 }
 }//KOPCE ZA DA SE NAPRAVI RESET NA PRV JACKPOT!! I DA SE PRIKAZE NA EKRAN NEGOVATA SUMA//////////////////////////////////

 countTretThird();
 function countTretFourth(){
  let counterTret3 = parseInt(document.getElementById('simulacijaTret').innerText);
  setInterval(function(){
   var countTret3 = parseInt(counterTret3 = parseInt(++counterTret3));
   document.getElementById('simulacijaTret').innerText = countTret3;
  
    if(parseInt(countTret3)>8){
      countTret3 = 2;
      counterTret3 = 2;
    }
 }, 2000);
 }
 countTretFourth();
 //tretJackpot






 
    

      
    

 jQuery(document).ready(function($){
 
  // Define a blank array for the effect positions. This will be populated based on width of the title.
  var bArray = [];
  // Define a size array, this will be used to vary bubble sizes
  var sArray = [4,6,8,10];

  // Push the header width values to bArray
  for (var i = 0; i < $('.bubbles').width(); i++) {
      bArray.push(i);
  }
   
  // Function to select random array element
  // Used within the setInterval a few times
  function randomValue(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
  }

  // setInterval function used to create new bubble every 350 milliseconds
  setInterval(function(){
       
      // Get a random size, defined as variable so it can be used for both width and height
      var size = randomValue(sArray);
      // New bubble appeneded to div with it's size and left position being set inline
      // Left value is set through getting a random value from bArray
      $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
       
      // Animate each bubble to the top (bottom 100%) and reduce opacity as it moves
      // Callback function used to remove finsihed animations from the page
      $('.individual-bubble').animate({
          'bottom': '100%',
          'opacity' : '-=0.7'
      }, 3000, function(){
          $(this).remove()
      }
      );


  }, 350);

});



/////BUBBLEESSS






 /*******************************************************************
 
 ========= CONFETTI JAVASCRIPT  ========= 
 =========      BY TRELLO       =========
 
 As seen on https://trello.com/10million
 _______________________________________
 
 Copyright © Trello. All rights Reserved.
  _______________________________________
 
 XXX Use for Educational Purposes only XXX
 
 I will not be liable for any damages or legal actions for Using of this material.
 
 *******************************************************************/



 var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, drawCircle2, drawCircle3, i, range, xpos;
 NUM_CONFETTI = 40;
 COLORS = [
   [235, 90, 70],
   [97, 189, 79],
   [242, 214, 0],
   [0, 121, 191],
   [195, 119, 224]
 ];
 PI_2 = 2 * Math.PI;
 canvas = document.getElementById("confeti");
 context = canvas.getContext("2d");
 window.w = 0;
 window.h = 0;
 window.resizeWindow = function() {
   window.w = canvas.width = window.innerWidth;
   return window.h = canvas.height = window.innerHeight
 };
 window.addEventListener("resize", resizeWindow, !1);
 window.onload = function() {
   return setTimeout(resizeWindow, 0)
 };
 range = function(a, b) {
   return (b - a) * Math.random() + a
 };
 drawCircle = function(a, b, c, d) {
   context.beginPath();
   context.moveTo(a, b);
   context.bezierCurveTo(a - 17, b + 14, a + 13, b + 5, a - 5, b + 22);
   context.lineWidth = 2;
   context.strokeStyle = d;
   return context.stroke()
 };
 drawCircle2 = function(a, b, c, d) {
   context.beginPath();
   context.moveTo(a, b);
   context.lineTo(a + 6, b + 9);
   context.lineTo(a + 12, b);
   context.lineTo(a + 6, b - 9);
   context.closePath();
   context.fillStyle = d;
   return context.fill()
 };
 drawCircle3 = function(a, b, c, d) {
   context.beginPath();
   context.moveTo(a, b);
   context.lineTo(a + 5, b + 5);
   context.lineTo(a + 10, b);
   context.lineTo(a + 5, b - 5);
   context.closePath();
   context.fillStyle = d;
   return context.fill()
 };
 xpos = 0.9;
 document.onmousemove = function(a) {
   return xpos = a.pageX / w
 };
 window.requestAnimationFrame = function() {
   return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
     return window.setTimeout(a, 5)
   }
 }();
 Confetti = function() {
   function a() {
     this.style = COLORS[~~range(0, 5)];
     this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
     this.r = ~~range(2, 6);
     this.r2 = 2 * this.r;
     this.replace()
   }
   a.prototype.replace = function() {
     this.opacity = 0;
     this.dop = 0.03 * range(1, 4);
     this.x = range(-this.r2, w - this.r2);
     this.y = range(-20, h - this.r2);
     this.xmax = w - this.r;
     this.ymax = h - this.r;
     this.vx = range(0, 2) + 8 * xpos - 5;
     return this.vy = 0.7 * this.r + range(-1, 1)
   };
   a.prototype.draw = function() {
     var a;
     this.x += this.vx;
     this.y += this.vy;
     this.opacity +=
       this.dop;
     1 < this.opacity && (this.opacity = 1, this.dop *= -1);
     (0 > this.opacity || this.y > this.ymax) && this.replace();
     if (!(0 < (a = this.x) && a < this.xmax)) this.x = (this.x + this.xmax) % this.xmax;
     drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
     drawCircle3(0.5 * ~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
     return drawCircle2(1.5 * ~~this.x, 1.5 * ~~this.y, this.r, this.rgb + "," + this.opacity + ")")
   };
   return a
 }();
 confetti = function() {
   var a, b, c;
   c = [];
   i = a = 1;
   for (b = NUM_CONFETTI; 1 <= b ? a <= b : a >= b; i = 1 <= b ? ++a : --a) c.push(new Confetti);
   return c
 }();
 window.step = function() {
   var a, b, c, d;
   requestAnimationFrame(step);
   context.clearRect(0, 0, w, h);
   d = [];
   b = 0;
   for (c = confetti.length; b < c; b++) a = confetti[b], d.push(a.draw());
   return d
 };
 step();;
   