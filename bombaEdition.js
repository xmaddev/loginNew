//check existese class
var bodyClasses = document.querySelector('html').className.split(' ')[0];
if(bodyClasses == 'page-3')
{
document.getElementsByTagName('head')[0].insertAdjacentHTML( 'afterbegin','<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">');
 // generate UI section for vizualizing actual income
let myIncome = (summ) => {
    document.body.insertAdjacentHTML( 'afterbegin','<span style="z-index:999;font-size: 20px;position: fixed;bottom:20px;right:20px;width:100px;height:40px;background:rgba(0,0,0,.2);display:flex;justify-content: space-around;padding:4px;align-items: center;" class="walletBox animate__animated animate__bounceInUp"><svg class="wallet" version="1.1" xmlns="http://www.w3.org/2000/svg" width="38" height="32" viewBox="0 0 38 32"><title>wallet</title><path fill="currentColor" d="M32.509 7.5c0.276 0 0.5-0.224 0.5-0.5v-1.665c0-0.903-0.735-1.638-1.638-1.638h-2.687l-0.613-1.809c-0.086-0.255-0.36-0.397-0.619-0.318l-14.553 4.424c-0.264 0.081-0.413 0.36-0.333 0.624 0.066 0.216 0.264 0.354 0.479 0.354 0.048 0 0.097-0.007 0.146-0.021l14.089-4.284 1.343 3.965c0.089 0.262 0.375 0.404 0.634 0.313 0.262-0.088 0.402-0.373 0.313-0.634l-0.547-1.615h2.349c0.352 0 0.638 0.286 0.638 0.638v1.666c-0.001 0.276 0.223 0.5 0.499 0.5zM36.5 15c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.351 0 0.5 0.149 0.5 0.5v6c0 0.351-0.149 0.5-0.5 0.5h-8c-0.351 0-0.5-0.149-0.5-0.5v-5c0-0.351 0.149-0.5 0.5-0.5h6c0.276 0 0.5-0.224 0.5-0.5v-6c0-0.911-0.589-1.5-1.5-1.5h-30.5c-1.233 0-2-0.767-2-2s0.767-2 2-2h5.076l-3.026 0.998c-0.262 0.086-0.405 0.369-0.319 0.631 0.069 0.21 0.265 0.343 0.475 0.343 0.052 0 0.104-0.008 0.157-0.025l18.119-5.973c0.262-0.087 0.405-0.369 0.318-0.632-0.086-0.262-0.369-0.405-0.632-0.318l-12.1 3.99c-0.023-0.004-0.044-0.014-0.068-0.014h-8c-1.794 0-3 1.206-3 3v22c0 1.794 1.206 3 3 3h30.5c0.911 0 1.5-0.589 1.5-1.5v-5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v5c0 0.351-0.149 0.5-0.5 0.5h-30.5c-1.233 0-2-0.767-2-2v-19.688c0.513 0.433 1.192 0.688 2 0.688h30.5c0.351 0 0.5 0.149 0.5 0.5v5.5h-5.5c-0.911 0-1.5 0.589-1.5 1.5v5c0 0.911 0.589 1.5 1.5 1.5h8c0.911 0 1.5-0.589 1.5-1.5v-6c0-0.911-0.589-1.5-1.5-1.5zM31 20c0 0.552 0.448 1 1 1s1-0.448 1-1c0-0.552-0.448-1-1-1s-1 0.448-1 1z"></path></svg><span class="summ animate__animated animate__bounceInRight animate__delay-1s">0</span></span>');
    const walletSumm = document.querySelector('.walletBox .summ');
    walletSumm.innerText = summ.toFixed(2);
}
 // get income
 let getIncome = () => {
    // ✅ DD/MM/YYYY
    const date = new Date().toLocaleDateString('en-GB').replace(/\//g,'.');
    var arrOfIndex = [];
    var elem = document.querySelectorAll('[headers=DATA]');
    var arrOfElemByData = [];
    elem.forEach((item,index) => {
        if(item.innerHTML == date){
            arrOfIndex.push(index);
        }
    })
    var summ = 0;
    var bonusRang = document.querySelectorAll('[headers=BONUS_RANG]');
    var bonusNelikv = document.querySelectorAll('[headers=BONUS_NELIKV]');
    var bonusCek = document.querySelectorAll('[headers=BONUS_CEK]');
    var bonusServ = document.querySelectorAll('[headers=BONUS_SERV]');
    var bonusTerm = document.querySelectorAll('[headers=BONUS_TERM]');
    var cadou = document.querySelectorAll('[headers=CADOU]');
    var premia = document.querySelectorAll('[headers=PREMIA]');
    arrOfIndex.forEach((item) => {
       // BONUS_RANG,BONUS_NELIKV,BONUS_CEK,BONUS_SERV,BONUS_TERM,CADOU
       summ += parseFloat(bonusRang[item].innerHTML.replace(',', '.').replace(/-$/g, '0')) + parseFloat(bonusNelikv[item].innerHTML.replace(',', '.').replace(/-$/g, '0')) + parseFloat(bonusCek[item].innerHTML.replace(',', '.').replace(/-$/g, '0')) + parseFloat(bonusServ[item].innerHTML.replace(',', '.').replace(/-$/g, '0')) + parseFloat(bonusTerm[item].innerHTML.replace(',', '.').replace(/-$/g, '0')) + parseFloat(cadou[item].innerHTML.replace(',', '.').replace(/-$/g, '0')) + parseFloat(premia[item].innerHTML.replace(',', '.').replace(/-$/g, '0'));
    })
    myIncome(summ);
 }
getIncome(); // get today income
}
// get season
const getSeason = new Date();
const month = getSeason.getMonth() + 1;
var urlBackgroundParam = '';
if (month == 12 || month == 1 || month == 2) {
    urlBackgroundParam = 'winter,potter,harrypotter';
    console.log(urlBackgroundParam);
}
else if (month == 3 || month == 4 || month == 5) {
    urlBackgroundParam = 'spring,potter,harrypotter';
    console.log(urlBackgroundParam);
}
else if (month == 6 || month == 7 || month == 8) {
    urlBackgroundParam = 'summer,potter,harrypotter';
    console.log(urlBackgroundParam);
}
else if (month == 9 || month == 10 || month == 11) {
    urlBackgroundParam = 'autumn,potter,harrypotter';
    console.log(urlBackgroundParam);
}
if(bodyClasses == 'page-2')
{
// PAGE LOGIN
//inject link in head dinamically
document.getElementsByTagName('head')[0].insertAdjacentHTML( 'afterbegin','<style type="text/css">.btn-wrapper-login:hover:before {transition: 1s;left: 0;}.btn-wrapper-login {margin: 0 auto;cursor:pointer;display: flex;color: #fff;text-transform: uppercase;position: relative;height: 30px;width: 100%;align-items: center;justify-content: center;overflow: hidden;}.btn-wrapper-login:before {content: "";display: block;position: absolute;width: 100%;height: 100%;background: #202122;z-index: -1;left: -100%;transition: 1s;}.btn-login {display: flex;justify-content: center;align-items: center;width: 100%;height: 26px;background: rgb(255 99 71 / 70%);border-radius: 2px;}.heart_wrapper {display:flex;align-items: center;justify-content: center;gap:5px;}.heart_wrapper .text {font-size: 22px;color:#fff;position: relative;}.heart_wrapper .text:before {content:"";display:block;width:100%;height:1px;position:absolute;bottom:0;background: #fff;animation: text-underline 4s 1;}.heart_wrapper .heart {width:36px;height:36px;position: relative;display: flex;align-items: center;justify-content: center;}.heart_wrapper .heart:before{content:"🧡";position:absolute;animation: heartbeat 1s infinite alternate;}@keyframes text-underline {from {width:0%}to {width:100%;}}@keyframes heartbeat {0% {font-size:22px;}100% {font-size:28px;}}');
document.getElementById('B115197341225796797').insertAdjacentHTML( 'afterend','<div onclick="apex.submit({request:\'Login\',validate:true});" class="btn-wrapper-login"><div class="btn-login"><span>Login</span></div></div>');
document.getElementById('B115197341225796797').remove();
document.getElementsByTagName('head')[0].insertAdjacentHTML( 'afterbegin','<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">');
document.getElementsByTagName('head')[0].insertAdjacentHTML( 'afterbegin','<style type="text/css">@import url("https://fonts.googleapis.com/css2?family=Marck+Script&display=swap");body {font-family: "Marck Script" !important;overflow-x: hidden;}.video-container {width: 100vw;height: 100vh;overflow: hidden;position: absolute;}iframe {position: absolute;top: -10%;width: 100vw;height: 117vh;pointer-events: none;} .t-Login-body p {cursor: pointer;margin: 2px 0;background: #221e1d;text-align: center;margin-bottom: 1,2rem;padding: 4px;color:#fff;}</style>');

//chack class exist
var hasClass =( target, className ) => {
  return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}

//add quotes
var quotes, obj;
GM_xmlhttpRequest({
  method: "GET",
  url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&jsonp=parseQuote&lang=ru",
  onload: response => {
      obj = JSON.parse(response.responseText);
      quotes = document.createElement("h1");
      quotes.classList.add("quotes");
      quotes.classList.add("animate__animated");
      quotes.classList.add("animate__zoomIn");
      quotes.innerText = obj.quoteText;
      document.body.appendChild(quotes);
      quotes.style.cssText = 'text-shadow:2px 2px 6px #000;position:absolute;bottom:20px;width:60%;left: 0;right:0;margin:0 auto;font-size: 1.6vw;color: transparent;-webkit-text-stroke: 1px rgb(255, 255, 255);text-align: center;letter-spacing: 4px;text-shadow: rgb(0 0 0) 4px 2px;';
  }
});
//delete Inregistrare sau Modificare
for (var i=0; i<5; i++){document.querySelector('.btn-wrapper-login').nextSibling.remove();}
document.getElementsByClassName("t-Button")[0].addEventListener("click", function(){document.getElementsByClassName("quotes")[0].remove();});
for(var el=1;el<document.getElementsByClassName('t-Form-itemWrapper').length;el++)document.getElementsByClassName('t-Form-itemWrapper')[el].style.cssText = 'border: 1px solid tomato;border-radius: 2px;';
document.querySelectorAll('.t-Region')[1].insertAdjacentHTML('afterend','<div class="heart_wrapper"><div class="text">Created by &lt;Sergey /&gt; with </div><span class="heart"></span></div>');
document.querySelector('.t-Region-body').classList.add("animate__animated"); //animate__bounceInUp
document.querySelector('.t-Region-body').classList.add("animate__bounceInDown");
document.querySelectorAll('.row')[1].classList.add("animate__animated");
document.querySelectorAll('.row')[1].classList.add("animate__bounceInUp");
document.body.style.background = 'url(https://source.unsplash.com/1920x1080/?'+ urlBackgroundParam +') no-repeat center/100%';
document.body.style.backgroundSize = "cover";
document.querySelector('.t-Button').style.backgroundColor = 'tomato';
document.querySelector('h1').style.fontFamily = 'fangsong';
document.querySelector('.class2').style.borderStyle = 'none';
document.querySelector('.row').style.opacity = '0.9';
document.querySelector('.t-Region-body').querySelector('h1').innerText = 'МОЙ КОШЕЛЬ';
document.querySelector('.t-Region-body').querySelector('h1').style.cssText = 'color: transparent;-webkit-text-stroke: 1px #fff;text-align: center;letter-spacing: 7px;text-shadow: 4px 2px #000;';
document.querySelector('.t-Form-fieldContainer').remove();
document.querySelectorAll('.t-ContentBlock--lightBG .t-ContentBlock-body, .t-Region, .t-Region-header')[2].style.background = "rgba(255,255,255,.1)";
document.querySelector('.t-Header-branding').style.backgroundColor = '#333d46';
}
