// ==UserScript==*
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Sergey
// @match        http://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        GM_xmlhttpRequest
// @require      https://raw.githubusercontent.com/xmaddev/loginNew/main/scriptGit.js
// ==/UserScript==

(function() {
    'use strict'
        // START PLACE FOR FREEDOM OF YOU MIND
/*     var getTypeRow = (el,type) => {
        var res = '';
        document.querySelectorAll(el).forEach((e) => {
            if (e.innerText == type) res = e.parentElement
        });
        return res;
    }
    var rowClone = getTypeRow("[headers='SYSFID']",'361').cloneNode(true);
    document.querySelectorAll('.t-Report-report>tbody>tr')[0].insertAdjacentHTML( 'afterend', rowClone); */
    // END FOR FREEDOM OF YOUR MIND
    //YT change link button
    document.getElementById('B115197341225796797').insertAdjacentHTML( 'afterend', '<div class="video-yt-slider"><p>VIDEO YT</p><input class="video-yt" style="display:none;width: 100%;text-align:center" type="text" placeholder="Paste YouTube Link" disabled value="_KPiQ1t0aiI"></div>' );
    document.querySelector('.video-yt-slider').addEventListener('click',(e) => {document.querySelector('.video-yt-slider>p+input.video-yt').style.cssText += 'display:block;';});
    document.querySelector('.video-yt-slider>p+input').addEventListener('input',(e) => {sessionStorage.setItem('linkYT', new URL(e.target.value).searchParams.get("v"));location.reload();});
    // change video background YT
    //var linkYT = sessionStorage.getItem('linkYT');
    var linkYT = document.querySelector('.video-yt-slider>p+input').value;
    unsafeWindow.backgroundYT = function (link) {return sessionStorage.setItem('linkYT', link);}
    //delete Inregistrare sau Modificare
    for (var i=0; i<4; i++){document.querySelector('.video-yt-slider').nextSibling.remove()}
    //inject link in head dinamically
    var headHTML = document.getElementsByTagName('head')[0].innerHTML;
    headHTML+= '<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">';
    headHTML+= '<style type="text/css">  body {overflow-x: hidden;}.video-container {width: 100vw;height: 100vh;overflow: hidden;position: absolute;}iframe {position: absolute;top: -10%;width: 100vw;height: 117vh;pointer-events: none;} .t-Region-body h1:after {content: "";position: absolute;width: 100%;height: 4px;display: block;background: tomato;animation: lineanim 2s infinite alternate;left:50%;transform:translateX(-50%)}@keyframes lineanim {from {width: 0%;} to {width: 100%;}}.t-Login-body p {cursor: pointer;margin: 2px 0;background: #221e1d;text-align: center;margin-bottom: 1,2rem;padding: 4px;color:#fff;}</style>';
    document.getElementsByTagName('head')[0].innerHTML = headHTML;
    //chack class exist
    function hasClass( target, className ) {
        return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
    }
    //add quotes
    GM_xmlhttpRequest({
        method: "GET",
        url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&jsonp=parseQuote&lang=ru",
        onload: response => {
            const obj = JSON.parse(response.responseText);
            //check existese class
            var bodyClasses = document.querySelector('html').className;
            var myClass = new RegExp("page-2");
            var trueOrFalse = myClass.test( bodyClasses );
            //add css
            if(trueOrFalse)
            {
                const quotes = document.createElement("h1");
                quotes.classList.add("quotes");
                quotes.classList.add("animate__animated");
                quotes.classList.add("animate__zoomIn");
                quotes.innerText = obj.quoteText;
                document.body.appendChild(quotes);
                quotes.style.cssText = 'text-shadow:2px 2px 6px #000;position:absolute;bottom:20px;width:60%;left: 0;right:0;margin:0 auto;background: #242424;opacity: .7;font-size: 1.6vw;color: transparent;-webkit-text-stroke: 1px rgb(255, 255, 255);text-align: center;letter-spacing: 4px;text-shadow: rgb(0 0 0) 4px 2px;';
            }
        }
    });
    document.body.insertAdjacentHTML( 'afterbegin', '<div class="video-container"><iframe src="https://www.youtube.com/embed/'+linkYT+'?vq=hd2160&mute=1&modestbranding=0&autoplay=1&autohide=1&rel=0&showinfo=0&controls=0&disablekb=1&enablejsapi=1&iv_load_policy=3&loop=1&playlist='+linkYT+'"></iframe></div>' );// URL WOLF OF WALL STREET : Ax7e2Hw-JNA , 4k vlDzYIIOYmM
    document.getElementsByClassName("t-Button")[0].addEventListener("click", function(){document.getElementsByClassName("quotes")[0].remove();});
    document.querySelector('.t-Region-body').classList.add("animate__animated"); //animate__bounceInUp
    document.querySelector('.t-Region-body').classList.add("animate__bounceInDown");
    document.querySelectorAll('.row')[1].classList.add("animate__animated");
    document.querySelectorAll('.row')[1].classList.add("animate__bounceInUp");
    //document.body.style.background = 'url(https://wallpaper.dog/large/20461782.jpg) no-repeat center/100%';
    //document.body.style.background = 'url(https://picsum.photos/1920/1080.jpg) no-repeat center/cover';
    document.body.style.background = 'url(https://picsum.photos/1920/1080.jpg) no-repeat center/cover';
    document.querySelector('.t-Button').style.backgroundColor = 'tomato';
    document.querySelector('h1').style.fontFamily = 'fangsong';
    document.querySelector('.class2').style.borderStyle = 'none';
    document.querySelector('.row').style.opacity = '0.9';
    document.querySelector('.t-Region-body').querySelector('h1').innerText = 'МОЙ КОШЕЛЬ';
    document.querySelector('.t-Region-body').querySelector('h1').style.cssText = 'color: transparent;-webkit-text-stroke: 1px #fff;text-align: center;letter-spacing: 7px;text-shadow: 4px 2px #000;';
    document.querySelector('.t-Form-fieldContainer').remove();
    document.querySelector('.t-Header-branding').style.backgroundColor = '#333d46';
})();
