// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Sergey
// @match        http://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @resource     IMPORTED_CSS https://raw.githubusercontent.com/xmaddev/loginNew/main/style.css
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @require      https://raw.githubusercontent.com/scottschiller/Snowstorm/master/snowstorm.js
// @require      https://biparous-rhythms.000webhostapp.com/js/functions.js
// ==/UserScript==

(function() {
    'use strict'
       //const my_css = GM_getResourceText("IMPORTED_CSS");
   // GM_addStyle(my_css);
    /* ==================== SLIDE MEMES SECTION START =========================*/
    var mainDir = "https://biparous-rhythms.000webhostapp.com";
    var sliderMemes = () => {
        GM_xmlhttpRequest({
        method: "GET",
        url: "https://biparous-rhythms.000webhostapp.com/assets/functions.php?q=getarrayofmemes",
        onload: response => {
            if (response.status === 200) {
                var arrayOfMemes = JSON.parse(response.responseText);
                var allMemes = arrayOfMemes;
                var elem = document.querySelector('.video-yt-slider').getElementsByTagName('img')[0];
                var actualMeme = elem.getAttribute('src').split('/').slice(-1)[0];
                if ((allMemes.indexOf(actualMeme) < allMemes.length - 1) && (allMemes.indexOf(actualMeme) !== -1)){
                    elem.setAttribute('src',mainDir+'/memes/images/'+allMemes[allMemes.indexOf(actualMeme) + 1]);
                }
                else {
                    elem.setAttribute('src',mainDir+'/memes/images/'+allMemes[0]);
                }
            }
        }
     });
    };
    //YT change link button
    document.getElementById('B115197341225796797').insertAdjacentHTML( 'afterend', '<div class="video-yt-slider"><p style="display:none">VIDEO YT</p><input class="video-yt" style="display:none;width: 100%;text-align:center" type="text" placeholder="Paste YouTube Link" disabled value="_KPiQ1t0aiI"></div>' );
    document.querySelector('.video-yt-slider').style.display = 'block';
    var toggle = false;
    document.querySelector('.video-yt-slider').addEventListener('click',(e) => {sliderMemes();toggle = !toggle; if(toggle) document.querySelector('.video-yt-slider>p+input.video-yt').style.cssText += 'display:block;'; else document.querySelector('.video-yt-slider>p+input.video-yt').style.cssText += 'display:none;';});
    document.querySelector('.video-yt-slider>p+input').addEventListener('input',(e) => {sessionStorage.setItem('linkYT', new URL(e.target.value).searchParams.get("v"));location.reload();});
    // change video background YT
    //var linkYT = sessionStorage.getItem('linkYT');
    var linkYT = document.querySelector('.video-yt-slider>p+input').value;
    unsafeWindow.backgroundYT = (link) => {return sessionStorage.setItem('linkYT', link);}
    //delete Inregistrare sau Modificare
    for (var i=0; i<5; i++){document.querySelector('.video-yt-slider').nextSibling.remove();}
    document.querySelector('.video-yt-slider').innerHTML += '<img style="display: block; margin-left: auto;margin-right: auto;width: 50%;width: 232px;" src="https://biparous-rhythms.000webhostapp.com/memes/random_image.php" alt="SAD">';
    //inject link in head dinamically
    document.getElementsByTagName('head')[0].insertAdjacentHTML( 'afterbegin','<style type="text/css">.btn-wrapper-login:hover:before {transition: 1s;left: 0;}.btn-wrapper-login {margin: 0 auto;cursor:pointer;display: flex;color: #fff;text-transform: uppercase;position: relative;height: 30px;width: 100%;align-items: center;justify-content: center;overflow: hidden;}.btn-wrapper-login:before {content: "";display: block;position: absolute;width: 100%;height: 100%;background: #202122;z-index: -1;left: -100%;transition: 1s;}.btn-login { font-family: "Mountains of Christmas";font-size: 22px;display: flex;justify-content: center;align-items: center;width: 100%;border-radius:2px;height: 26px;background: #C21010;}');
    document.getElementById('B115197341225796797').insertAdjacentHTML( 'afterend','<div onclick="apex.submit({request:\'Login\',validate:true});" class="btn-wrapper-login"><div class="btn-login"><span>Login</span></div></div>');
    document.getElementById('B115197341225796797').remove();
    document.getElementsByTagName('head')[0].insertAdjacentHTML( 'afterbegin','<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">');
    document.getElementsByTagName('head')[0].insertAdjacentHTML( 'afterbegin',' <link href="https://fonts.googleapis.com/css?family=Mountains of Christmas" rel="stylesheet">');
    document.getElementsByTagName('head')[0].insertAdjacentHTML( 'afterbegin','<style type="text/css">  body {overflow-x: hidden;}.video-yt-slider{transition:1s;}.video-yt-slider:hover{transform:scale(1.28);}.video-container {width: 100vw;height: 100vh;overflow: hidden;position: absolute;}iframe {position: absolute;top: -10%;width: 100vw;height: 117vh;pointer-events: none;} .t-Region-body h1:after {content: "";display: block;opacity:.7;border-radius:2px;width: 100%;height: 4px;background: linear-gradient(160deg, #C21010 15%, white 20% 35%, #C21010 40% 55%, white 60% 75%, #C21010 80%);animation: lilipop-animated 2s linear infinite;background-size: 25%;}@keyframes lilipop-animated {100% {background-position: 100%;}}.t-Login-body p {cursor: pointer;margin: 2px 0;background: #221e1d;text-align: center;margin-bottom: 1,2rem;padding: 4px;color:#fff;}h1:before {content: "";display: block;width: 36px;height: 36px;top: 3px;left: 42px;position: absolute;background: url(https://biparous-rhythms.000webhostapp.com/shapka-santy.png) center center / 100% no-repeat;}</style>');
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
            //check existese class
            var bodyClasses = document.querySelector('html').className;
            var myClass = new RegExp("page-2");
            var trueOrFalse = myClass.test( bodyClasses );
            //add css
            if(trueOrFalse)
            {
                quotes = document.createElement("h1");
                quotes.classList.add("quotes");
                quotes.classList.add("animate__animated");
                quotes.classList.add("animate__zoomIn");
                quotes.innerText = obj.quoteText;
                //document.body.appendChild(quotes);
                //quotes.style.cssText = 'text-shadow:2px 2px 6px #000;position:absolute;bottom:20px;width:60%;left: 0;right:0;margin:0 auto;background: #242424;opacity: .7;font-size: 1.6vw;color: transparent;-webkit-text-stroke: 1px rgb(255, 255, 255);text-align: center;letter-spacing: 4px;text-shadow: rgb(0 0 0) 4px 2px;';
            }
        }
    });
    //document.body.insertAdjacentHTML( 'afterbegin', '<div class="video-container"><iframe src="https://www.youtube.com/embed/'+linkYT+'?vq=hd2160&mute=1&modestbranding=0&autoplay=1&autohide=1&rel=0&showinfo=0&controls=0&disablekb=1&enablejsapi=1&iv_load_policy=3&loop=1&playlist='+linkYT+'"></iframe></div>' );// URL WOLF OF WALL STREET : Ax7e2Hw-JNA , 4k vlDzYIIOYmM
    document.getElementsByClassName("t-Button")[0].addEventListener("click", function(){document.getElementsByClassName("quotes")[0].remove();});
    for(var el=1;el<document.getElementsByClassName('t-Form-itemWrapper').length;el++)document.getElementsByClassName('t-Form-itemWrapper')[el].style.cssText = 'border: 1px solid tomato;border-radius: 2px;';
    document.querySelector('.t-Region-body').classList.add("animate__animated"); //animate__bounceInUp
    document.querySelector('.t-Region-body').classList.add("animate__bounceInDown");
    document.querySelectorAll('.row')[1].classList.add("animate__animated");
    document.querySelectorAll('.row')[1].classList.add("animate__bounceInUp");
    document.body.style.background = 'url(https://source.unsplash.com/1920x1080/?christmas,xmas,newyear,winter,potter,harrypotter) no-repeat center/100%';
    //document.body.style.background = 'url(https://wallpaper.dog/large/20461782.jpg) no-repeat center/100%';
    //document.body.style.background = 'url(https://picsum.photos/1920/1080.jpg) no-repeat center/cover';
    //document.body.insertAdjacentHTML('afterbegin', '<img style="position:absolute;background:url(https://biparous-rhythms.000webhostapp.com/memes/random_image.php) no-repeat center/100%" width=500 height=500>');
    document.querySelector('.t-Button').style.backgroundColor = 'tomato';
    document.querySelector('h1').style.fontFamily = 'fangsong';
    document.querySelector('.class2').style.borderStyle = 'none';
    document.querySelector('.row').style.opacity = '0.9';
    document.querySelector('.t-Region-body').querySelector('h1').innerText = 'МОЙ КОШЕЛЬ';
    document.querySelectorAll('.t-Region-bodyWrap')[1].style.cssText = 'font-family: "Mountains of Christmas";';
    document.querySelector('.t-Region-body').querySelector('h1').style.cssText = 'color: transparent;-webkit-text-stroke: 1px #fff;text-align: center;letter-spacing: 7px;text-shadow: 4px 2px #000;background: linear-gradient(160deg, red 15%, white 20% 35%, red 40% 55%, white 60% 75%, red 80%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;';
    document.querySelector('.t-Form-fieldContainer').remove();
    document.querySelectorAll('.t-ContentBlock--lightBG .t-ContentBlock-body, .t-Region, .t-Region-header')[2].style.background = "rgba(255,255,255,.1)";
    document.querySelector('.t-Header-branding').style.backgroundColor = '#333d46';

})();
