import './content.css';
let a , indexi , xi, xm , wpm = 0, first , t , r , m,s  ;

let seta = function() {
first = true ;
indexi = 0 ;
t = 0 ;
s = "";
wpm = 0 ;
let contents = document.getElementById('row1') ;
a = contents.children ;

let someel = document.querySelectorAll('.something')[0] ;
if (  someel === undefined ) {
let mainlayout = document.querySelector('.main-layout') ;
let el = document.createElement('h1') ; el.className = "something" ; el.textContent = wpm + " WPM" ;
mainlayout.insertBefore( el , mainlayout.firstChild) ; } else
someel.innerHTML = wpm + " WPM" ;
} ; seta() ;

function startLive() {
xm = setInterval(function(){ t+= 0.1 ;wpm = (s.length*12) / t ;
if(Math.floor(t) == 60 ) { console.log(wpm) ; clearInterval(xi) ; clearInterval(xm) ; let chrem = document.querySelector('.something') ;
chrem.parentNode.removeChild(chrem) ; }
},100) ;
r() ;
}

r = function(){ xi =  setInterval(function(){
document.querySelectorAll('.something')[0].innerHTML = Math.ceil(wpm) + " WPM";
} , 300) ;}

m = document.getElementById('inputfield') ;
let something = (e) => {
if(first) {startLive() ; first = false;}
if(e.keyCode == 32) {
m.value = "";
s += m.value = a[indexi++].textContent ; s +=' '; }
}
m.addEventListener('keydown',something) ;
document.getElementById('reload-btn').addEventListener('click',function(){ console.log("called") ; seta() ;}) ;
