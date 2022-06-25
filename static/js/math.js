// Alphabet
function letterA(){
  var my_sound = document.getElementById('A');
  my_sound.play();
}
function letterB(){
  var my_sound = document.getElementById('B');
  my_sound.play();
}

function letterC(){
  var my_sound = document.getElementById('C');
  my_sound.play();
}
function letterD(){
  var my_sound = document.getElementById('D');
  my_sound.play();
}
function letterE(){
  var my_sound = document.getElementById('E');
  my_sound.play();
}
function letterF(){
  var my_sound = document.getElementById('F');
   my_sound.play();
}
function letterM(){
  var my_sound = document.getElementById('M');
  my_sound.play();
}
function letterY(){
  var my_sound = document.getElementById('Y');
  my_sound.play();
}




// Letter sounds
function soundA(){
  var my_sound = document.getElementById('sA');
  my_sound.play();
}
function soundB(){
  var my_sound = document.getElementById('sB');
  my_sound.play();
}

function soundC(){
  var my_sound = document.getElementById('sC');
  my_sound.play();
}
function soundD(){
  var my_sound = document.getElementById('sD');
  my_sound.play();
}
function soundE(){
  var my_sound = document.getElementById('sE');
  my_sound.play();
}
function soundF(){
  var my_sound = document.getElementById('sF');
  my_sound.play();
}
function soundY(){
  var my_sound = document.getElementById('sY');
  my_sound.play();
}






function One(){
  var my_sound = document.getElementById('1');
  my_sound.play();
}
$(document).ready(function(){
 $(".nums", this).click(function(){       
  $(".d-non", this).slideToggle();       
     });

     $(".shapes", this).click(function(){       
      $("#myquare", this).slideToggle();       
    });
 });
function two(){
  var my_sound = document.getElementById('2');
  my_sound.play();
}
function three(){
  var my_sound = document.getElementById('3');
  my_sound.play();
}
function four(){
  var my_sound = document.getElementById('4');
  my_sound.play();
}
function five(){
  var my_sound = document.getElementById('5');
  my_sound.play();
}
function six(){
  var my_sound = document.getElementById('6');
  my_sound.play();
}
function seven(){
  var my_sound = document.getElementById('7');
  my_sound.play();
}
function eight(){
  var my_sound = document.getElementById('8');
  my_sound.play();
}
function nine(){
  var my_sound = document.getElementById('9');
  my_sound.play();
}
function ten(){
  var my_sound = document.getElementById('10');
  my_sound.play();
}
// functionality for  shapes
function circle(){
  var my_sound = document.getElementById('circle');
  my_sound.play();
}
function heart(){
  var my_sound = document.getElementById('heart');
  my_sound.play();
}
function oval(){
  var my_sound = document.getElementById('oval');
  my_sound.play();
}
function pentagon(){
  var my_sound = document.getElementById('pentagon');
  my_sound.play();
}
function rectangle(){
  var my_sound = document.getElementById('rectangle');
  my_sound.play();
}
function rhombus(){
  var my_sound = document.getElementById('rhombus');
  my_sound.play();
}
function square(){
  var my_sound = document.getElementById('square');
  my_sound.play();
}

function star(){
  var my_sound = document.getElementById('star');
  my_sound.play();
}
function triangle(){
  var my_sound = document.getElementById('triangle');
  my_sound.play();
}



// 3d shapes
function cone(){
  var cone = document.getElementById('cone');
  cone.play();
}

function cylinder(){
  var cylinder = document.getElementById('cylinder');
  cylinder.play();
}

function cube(){
  var cube = document.getElementById('cube');
  cube.play();
}

function sphere(){
  var sphere = document.getElementById('sphere');
  sphere.play();
}

//  animate addition results
$(function () {
  $("#Add").click(function () { 
    $('.sum').show(2000, function(){
      $('.sum1').animate({
        width:"left"
      });

      
      $('.sum2').animate({
        width:"left"
      });
      $('.sum3').animate({
        width:"left"
      });
      $('.sum4').animate({
        width:"left"
      });
      
      
      
      
    });
   
  });
  
  
});

//  animate subtraction results
$(function () {
  $("#subtractt").click(function () { 
    $('.sub').show(2000, function(){
      $('.sub1').animate({
        width:"left"
      });

      
      // $('.sum2').animate({
      //   width:"left"
      // });
      // $('.sum3').animate({
      //   width:"left"
      // });
      // $('.sum4').animate({
      //   width:"left"
      // });
      
      
      
      
    });
   
  });
  
  
});
  
  





function bor(){
  var bor = document.getElementById('bor');
  bor.play();
}

function scanner(){
  var scanner = document.getElementById('scanner');
  scanner.play();
}

function pen(){
  var pen = document.getElementById('pen');
  pen.play();
}

function head(){
  var head = document.getElementById('head');
  head.play();
}

function web(){
  var web = document.getElementById('web');
  web.play();
}

function printer(){
  var printer = document.getElementById('printer');
  printer.play();
}

function speak(){
  var speak = document.getElementById('speak');
  speak.play();
}

function ups(){
  var ups = document.getElementById('ups');
  ups.play();
}

function cpu(){
  var cpu = document.getElementById('cpu');
  cpu.play();
}

function mouse(){
  var mouse = document.getElementById('mouse');
  mouse.play();
}

function mon(){
  var mon = document.getElementById('mon');
  mon.play();
}

function key(){
  var key = document.getElementById('key');
  key.play();
}


function playmond(){
  var mond = document.getElementById('mond');
  mond.play();
}


function playtus(){
  var tus = document.getElementById('tus');
  tus.play();
}


function playwed(){
  var wed = document.getElementById('wed');
  wed.play();
}


function playthur(){
  var thur = document.getElementById('thur');
  thur.play();
}


function playfrid(){
  var frid = document.getElementById('frid');
  frid.play();
}


function playsat(){
  var sat = document.getElementById('sat');
  sat.play();
}


function playsund(){
  var sund = document.getElementById('sund');
  sund.play();
}