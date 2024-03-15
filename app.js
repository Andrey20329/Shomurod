const maxImg = document.querySelector('.right-panel img');
const select = document.querySelector('select');
const allLang = ['en', 'ru', 'uz'];

document.querySelectorAll('.left-panel img').forEach(item => item.onmouseenter = (event) => maxImg.src = event.target.src);

select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    document.querySelector('.lng-navactive').innerHTML = langArr['navactive'][hash];
    document.querySelector('.lng-navone').innerHTML = langArr['navone'][hash];
    document.querySelector('.lng-navtwo').innerHTML = langArr['navtwo'][hash];
    document.querySelector('.lng-navthree').innerHTML = langArr['navthree'][hash];
    document.querySelector('.fleft-lng').innerHTML = langArr['fleft'][hash];
    document.querySelector('.lng-site').innerHTML = langArr['site'][hash];
    document.querySelector('.lng-sitetwo').innerHTML = langArr['site'][hash];
    document.querySelector('.lng-sitetwo').innerHTML = langArr['site'][hash];
    document.querySelector('.lng-siteone').innerHTML = langArr['siteone'][hash];
    document.querySelector('.lng-aboutme').innerHTML = langArr['aboutme'][hash];
    document.querySelector('.lng-phd').innerHTML = langArr['phd'][hash];
    
    // document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}

changeLanguage();