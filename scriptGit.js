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
            quotes.style.cssText = 'color:#fff;text-shadow:2px 2px 6px #000;position:absolute;bottom:20px;width:60%;text-align:center;left: 0;right:0;margin:0 auto;background: #242424;opacity: .7;';
        }
    }
    });
    document.getElementsByClassName("t-Button")[0].addEventListener("click", function(){document.getElementsByClassName("quotes")[0].remove();});
    document.querySelector('.t-Region-body').classList.add("animate__animated"); //animate__bounceInUp
    document.querySelector('.t-Region-body').classList.add("animate__bounceInDown");
    document.querySelectorAll('.row')[1].classList.add("animate__animated");
    document.querySelectorAll('.row')[1].classList.add("animate__bounceInUp");
 //document.body.style.background = 'url(https://wallpaper.dog/large/20461782.jpg) no-repeat center/100%';
    document.body.style.background = 'url(https://picsum.photos/1920/1080.jpg) no-repeat center/100%';
    document.querySelector('.t-Button').style.backgroundColor = 'tomato';
    document.querySelector('h1').style.fontFamily = 'fangsong';
    document.querySelector('.class2').style.borderStyle = 'none';
    document.querySelector('.row').style.opacity = '0.9';
    document.querySelector('.t-Region-body').querySelector('h1').innerText = 'МОЙ КОШЕЛЬ';
    document.querySelector('.t-Region-body').querySelector('h1').style.color = '#fff';
    document.querySelector('.t-Region-body').querySelector('h1').style.textShadow = '2px 2px 6px #fff';
    document.querySelector('.t-Form-fieldContainer').remove();
    document.querySelector('.t-Header-branding').style.backgroundColor = '#333d46';

