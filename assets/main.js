var main_slug = 'soccer-legends';
function showList(file){
    if(document.getElementById('listgame')){
        fetch("/"+file,{
            headers: {
                'Content-Type': 'application/json',
              },
        }).then(response => response.json())
        .then(data => {
            let html = "";
            var listGame = [];
            var listCheck = [];
            data.forEach(item => {
            var tmp = {};
            tmp.title = item.title;
            tmp.domain = item.domain;
            tmp.img = item.img;
            tmp.slug = item.slug;
            tmp.cat = item.cat;
            if(item.ext){
                tmp.ext = item.ext;
            }
            if(listCheck.indexOf(item.slug) == -1){
                listCheck.push(item.slug);
                listGame.push(tmp);
            }
            });
            listGame.sort(function (a, b){
                if (a.title.toUpperCase() < b.title.toUpperCase()) {
                    return -1;
                }
                if (a.title.toUpperCase() > b.title.toUpperCase()) {
                    return 1;
                }
                return 0;
            });
            listGame.forEach((item) =>{
                var img = item.img;
                var slug = "/game/"+item.slug+".html";
                if(item.slug == main_slug){
                    slug = '/';
                }
                const htmlItem = `<a href="${slug}" target="_self" title="${item.title}" class="tile-card">
                            <figure class="image is-16by9">
                                <img
                                    loading="lazy"
                                    src="${img}"
                                    alt="${item.title}"
                                />
                            </figure>
                            <div class="content">
                                <div class="name"><span>${item.title}</span></div>
                            </div>
                        </a>`;
                
                html += htmlItem;
            });
            const e = document.createElement('div');
            e.className  = "grid is-4-tablet is-4-desktop is-6-widescreen is-6-fullhd is-7-ultrawide";
            e.innerHTML = html;  
            document.getElementById('listgame').appendChild(e);
        })
    }

}
var listGameAll;

fetch(fileSearch,{
headers: {
    'Content-Type': 'application/json',
    },
}).then(response => response.json())
.then(data => {
    listGameAll = data;
});

function liveSearch(){
    var x = document.getElementById("searchInput").value;
    console.log(x);
    let html = "";
    for (var j=0; j<listGameAll.length; j++) {
        if (listGameAll[j].title.toUpperCase().indexOf(x.toUpperCase()) >= 0) {
            var item = listGameAll[j];
            var img = item.img;
            var slug = "/game/"+item.slug+".html";
            const htmlItem = `<a href="${slug}" target="_self" title="${item.title}" class="tile-card">
                <figure class="image is-16by9">
                    <img
                        loading="lazy"
                        src="${img}"
                        alt="${item.title}"
                    />
                </figure>
                <div class="content">
                    <div class="name"><span>${item.title}</span></div>
                </div>
            </a>`;

            html += htmlItem;
        }
    }
    // const e = document.createElement('div');
    // e.className  = "grid is-4-tablet is-4-desktop is-6-widescreen is-6-fullhd is-7-ultrawide";
    // e.innerHTML = html;  
    // console.log(document.querySelector('.gird'));
    document.querySelector('#listgame div').innerHTML = html;
    // return -1;
}
function addMenu(){
    const newgame = document.createElement('div');
        newgame.className  = "navbar-item is-mouseable";
        newgame.innerHTML = `<div class="navbar-link">
            <a class="button navbar-control" href="/settings.html" title="Settings">
                Settings
            </a>
        </div>`;  
    document.getElementsByClassName('navbar-start')[0].appendChild(newgame);
    const e = document.createElement('div');
        e.className  = "navbar-item is-mouseable";
        e.innerHTML = `<div class="navbar-link">
            <a class="button navbar-control" href="/news.html" title="News">
            News
            </a>
        </div>`;  
    document.getElementsByClassName('navbar-start')[0].appendChild(e);
    
}

 
window.addEventListener('load', function() {
    
    // addMenu();
    // addLoginBtn();
    checkStore();
    // loadGA();
})
function showMenu(){
    
    const e = document.getElementById('navbar');
    const menumb = document.getElementsByClassName('navbar-menu')[0];
    if(!e.classList.contains("is-active")){
        console.log(1);
        e.classList.add('is-active');
        menumb.style.display = "block";
    } else {
        e.classList.remove('is-active');
        menumb.style.display = "none";
    }
}
function loadGA(){
    var  r = document.createElement("script");
	r.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-3HQGV5BC38"), r.setAttribute("type", "text/javascript"), r.setAttribute("crossOrigin", "anonymous"),  r.onload = function (){
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-3HQGV5BC38');
        var ads = document.createElement('script');
        ads.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7889675448259925"), ads.setAttribute("type", "text/javascript"), ads.setAttribute("crossOrigin", "anonymous"), document.head.appendChild(ads);
    },document.head.appendChild(r);
}
//
function checkStore(){
    var title = localStorage.getItem('title');
    if(title){
        document.title = title;
    }
    var icon = localStorage.getItem('icon');
    if(icon){

        setIcoLink(icon);
    }
    
}
function setIcoLink(linkIcon){
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = linkIcon;
}
//
var btn = document.getElementsByClassName("navbar-burger")[0];
btn.addEventListener("click", showMenu);

