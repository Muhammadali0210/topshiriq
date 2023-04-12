const itemContent = document.querySelector('.item');
const contentBtn1 = document.querySelector('.block-btnjs-1');
const contentBtn2 = document.querySelector('.block-btnjs-2');
const contentBtn3 = document.querySelector('.block-btnjs-3');
const contentBtn4 = document.querySelector('.block-btnjs-4');
const contentBtn5 = document.querySelector('.block-btnjs-5');
const contentBtn6 = document.querySelector('.block-btnjs-6');

const itemJs1 = document.querySelector('.item-js1');
const itemJs2 = document.querySelector('.item-js2');
const itemJs3 = document.querySelector('.item-js3');
const itemJs4 = document.querySelector('.item-js4');
const itemJs5 = document.querySelector('.item-js5');
const itemJs6 = document.querySelector('.item-js6');



contentBtn1.addEventListener('click', () => {
    contentBtn1.classList.toggle('active');
    contentBtn2.classList.remove('active');
    contentBtn3.classList.remove('active');
    contentBtn4.classList.remove('active');
    contentBtn5.classList.remove('active');
    contentBtn6.classList.remove('active');

    itemJs1.classList.toggle('active');
    itemJs2.classList.remove('active');
    itemJs3.classList.remove('active');
    itemJs4.classList.remove('active');
    itemJs5.classList.remove('active');
    itemJs6.classList.remove('active');
});

contentBtn2.addEventListener('click', () => {
    contentBtn2.classList.toggle('active');
    contentBtn1.classList.remove('active');
    contentBtn3.classList.remove('active');
    contentBtn4.classList.remove('active');
    contentBtn5.classList.remove('active');
    contentBtn6.classList.remove('active');

    itemJs2.classList.toggle('active');
    itemJs1.classList.remove('active');
    itemJs3.classList.remove('active');
    itemJs4.classList.remove('active');
    itemJs5.classList.remove('active');
    itemJs6.classList.remove('active');
});

contentBtn3.addEventListener('click', () => {
    contentBtn3.classList.toggle('active');
    contentBtn2.classList.remove('active');
    contentBtn1.classList.remove('active');
    contentBtn4.classList.remove('active');
    contentBtn5.classList.remove('active');
    contentBtn6.classList.remove('active');


    itemJs3.classList.toggle('active');
    itemJs2.classList.remove('active');
    itemJs1.classList.remove('active');
    itemJs4.classList.remove('active');
    itemJs5.classList.remove('active');
    itemJs6.classList.remove('active');
});

contentBtn4.addEventListener('click', () => {
    contentBtn4.classList.toggle('active');
    contentBtn2.classList.remove('active');
    contentBtn3.classList.remove('active');
    contentBtn1.classList.remove('active');
    contentBtn5.classList.remove('active');
    contentBtn6.classList.remove('active');

    itemJs4.classList.toggle('active');
    itemJs2.classList.remove('active');
    itemJs3.classList.remove('active');
    itemJs1.classList.remove('active');
    itemJs5.classList.remove('active');
    itemJs6.classList.remove('active');
});

contentBtn5.addEventListener('click', () => {
    contentBtn5.classList.toggle('active');
    contentBtn2.classList.remove('active');
    contentBtn3.classList.remove('active');
    contentBtn4.classList.remove('active');
    contentBtn1.classList.remove('active');
    contentBtn6.classList.remove('active');


    itemJs5.classList.toggle('active');
    itemJs2.classList.remove('active');
    itemJs3.classList.remove('active');
    itemJs4.classList.remove('active');
    itemJs1.classList.remove('active');
    itemJs6.classList.remove('active');
});

contentBtn6.addEventListener('click', () => {
    contentBtn6.classList.toggle('active');
    contentBtn2.classList.remove('active');
    contentBtn3.classList.remove('active');
    contentBtn4.classList.remove('active');
    contentBtn1.classList.remove('active');
    contentBtn5.classList.remove('active');


    itemJs6.classList.toggle('active');
    itemJs2.classList.remove('active');
    itemJs3.classList.remove('active');
    itemJs4.classList.remove('active');
    itemJs1.classList.remove('active');
    itemJs5.classList.remove('active');
});

const ichkiBlock = document.querySelector('.acar-1-1-wrap');
const ichkiAcaBtn = document.querySelector('.aca-btn');

itemJs1.addEventListener('click', () => {
    ichkiBlock.classList.toggle('active');
    ichkiAcaBtn.classList.toggle('active');
});

// navbar uchun js

const navLink1 = document.querySelector('.link-nav.link-navjs1');
const navLink2 = document.querySelector('.link-nav.link-navjs2');
const navLink3 = document.querySelector('.link-nav.link-navjs3');
const navLink4 = document.querySelector('.link-nav.link-navjs4');
const navLink5 = document.querySelector('.link-nav.link-navjs5');
const navLink6 = document.querySelector('.link-nav.link-navjs6');
const navLink7 = document.querySelector('.link-nav.link-navjs7');

const navContent1 = document.querySelector('.navbar-container1');
const navContent2 = document.querySelector('.navbar-container2');
const navContent3 = document.querySelector('.navbar-container3');
const navContent4 = document.querySelector('.navbar-container4');
const navContent5 = document.querySelector('.navbar-container5');
const navContent6 = document.querySelector('.navbar-container6');
const navContent7 = document.querySelector('.navbar-container7');


navLink1.addEventListener('mouseover', () => {
    navContent1.classList.toggle('active');
});
navLink1.addEventListener('mouseout', () => {
    // navContent1.classList.remove('active');
});
// ===========================================
navLink2.addEventListener('mouseover', () => {
    navContent2.classList.toggle('active');
});
navLink2.addEventListener('mouseout', () => {
    navContent2.classList.remove('active');
});
// ===========================================
navLink3.addEventListener('mouseover', () => {
    navContent3.classList.toggle('active');
});
navLink3.addEventListener('mouseout', () => {
    navContent3.classList.remove('active');
});
// ===========================================
navLink4.addEventListener('mouseover', () => {
    navContent4.classList.toggle('active');
});
navLink4.addEventListener('mouseout', () => {
    navContent4.classList.remove('active');
});
// ===========================================
navLink5.addEventListener('mouseover', () => {
    navContent5.classList.toggle('active');
});
navLink5.addEventListener('mouseout', () => {
    navContent5.classList.remove('active');
});
// ===========================================
navLink6.addEventListener('mouseover', () => {
    navContent6.classList.toggle('active');
});
navLink6.addEventListener('mouseout', () => {
    navContent6.classList.remove('active');
});
// ===========================================
navLink7.addEventListener('mouseover', () => {
    navContent7.classList.toggle('active');
});
navLink7.addEventListener('mouseout', () => {
    navContent7.classList.remove('active');
});


// hamburger js

const hamburger = document.querySelector('.hamburger');
const exitHamburger = document.querySelector('.exit-x');
const hamburgerContent = document.querySelector('.hamburger-content');
const section = document.querySelector('.mobilne-wrap');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    hamburgerContent.classList.toggle('active');
    section.style.position = fixed;
});

exitHamburger.addEventListener('click', () => {
    hamburger.classList.remove('active');
    hamburgerContent.classList.remove('active');
    section.style.position = relative;
    exitHamburger.style.position = relative;
    exitHamburger.style.left = 0;
    alert(exitHamburger.style.position);
});


// mobilne text acardion

const textOpenBtn = document.querySelector('.malumot-open-btn');
const BtnShow1 = document.querySelector('.malumot-open-btn .btn-show1');
const BtnShow2 = document.querySelector('.malumot-open-btn .btn-show2');
const malumotText = document.querySelector('.malumot-text');
const malumotTextAfter = document.querySelector('.malumot-text::after');

BtnShow1.addEventListener('click', () => {
    // alert('ishladi')
    malumotText.classList.toggle('active');
    // malumotTextAfter.style.height = "0px";
    // alert('sal');
    BtnShow1.style.display = "none";
    BtnShow2.style.display = "block";
});

BtnShow2.addEventListener('click', () => {
    // alert('ishladi')
    malumotText.classList.remove('active');
    // malumotTextAfter.style.height = "15px";
    BtnShow1.style.display = "block";
    // alert('sal')
    BtnShow2.style.display = "none";
});


// pastk rayon va metrolarni linklarini chiqarish

const metro = [
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Волоколамская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Крестьянская застава",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Новодачная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Волоколамская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Крестьянская застава",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Пушкинская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Воробьевы горы",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Кропоткинская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Академическая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Воронцовская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Крылатское",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Новокузнецкая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Крылатское",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Новокузнецкая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Волоколамская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Волоколамская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Волоколамская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Академическая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Воронцовская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Крылатское",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Новокузнецкая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Новокузнецкая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    

];

const oblast = [
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Волоколамская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Крестьянская застава",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Новодачная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Волоколамская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Крестьянская застава",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Пушкинская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Воробьевы горы",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Кропоткинская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Академическая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Воронцовская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Крылатское",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Новокузнецкая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Крылатское",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Новокузнецкая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Волоколамская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Волоколамская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Волоколамская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Академическая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Воронцовская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Крылатское",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Новокузнецкая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Новокузнецкая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    

];

const yangi = [
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Волоколамская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Крестьянская застава",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Новодачная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Волоколамская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Крестьянская застава",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Пушкинская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Воробьевы горы",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Кропоткинская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Академическая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Воронцовская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Крылатское",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Новокузнецкая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Крылатское",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Новокузнецкая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Волоколамская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Волоколамская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Волоколамская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Академическая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Воронцовская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Крылатское",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Новокузнецкая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Новокузнецкая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    

];
const metroContent = document.querySelector('.rayon-content1');
let metroLen = metro.length;
let text1;
let columnCount = Math.ceil(metroLen / 6) ;
let allInformations = '';

for (let i = 0; i < 6; i++) {
    text1 = "<ul clas='rayon-item'>";

    for (let j = i * columnCount; j < i * columnCount + columnCount; j++) {
        if(j<metroLen){
            text1 += "<li class='rayon-link'><a class='sub-link' href="  + metro[j].link + " >" + metro[j].name + "</a></li>";
        }
    }

    text1 += "</ul>";
    // console.log(text1);
    text1 = `<div class='rayon-item'> ${text1}</div>`;
    allInformations += text1; 
};
metroContent.innerHTML = allInformations;


const rayon = [
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Волоколамская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Крестьянская застава",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Новодачная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Волоколамская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Крестьянская застава",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Пушкинская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Воробьевы горы",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Кропоткинская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Академическая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Воронцовская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Крылатское",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Новокузнецкая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Крылатское",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Новокузнецкая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Волоколамская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Волоколамская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Авиамоторная",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Волоколамская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Академическая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Воронцовская",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Крылатское",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Новокузнецкая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    {
        name:"Новокузнецкая",
        link: "https://www.cian.ru/kupit-kvartiru-moskva-metro-novoperedelkino/"
    },
    

];


const rayonContent = document.querySelector('.rayon-content2');
let rayonLen = rayon.length;
let text2;
let columnCount2 = Math.ceil(rayonLen / 6) ;
let allInformations2 = '';

for (let i = 0; i < 6; i++) {                                                                                                                                                                                                       
    text2 = "<ul clas='rayon-item'>";

    for (let j = i * columnCount2; j < i * columnCount2 + columnCount2; j++) {
        if(j<rayonLen){
            text2 += "<li class='rayon-link'><a class='sub-link' href="  + rayon[j].link + " >" + rayon[j].name + "</a></li>";
        }
    }

    text2 += "</ul>";
    // console.log(text2);
    text2 = `<div class='rayon-item'> ${text2}</div>`;
    allInformations2 += text2; 
};
rayonContent.innerHTML = allInformations2;



//  o'rtadagi ipoteka tugmasi bosilganda boshqa oynalar yo'q bolib "ipoteka-page-section" oynasi ochiladi 

const ipotekaBtn = document.querySelector('.sinov');
const cianSections1 = document.querySelector('.section-off1');
const cianSections2 = document.querySelector('.section-off2');
const cianSections3 = document.querySelector('.section-off3');

const ipotekaPageSection = document.querySelector('.ipoteka-page-section');



if(ipotekaPageSection.clientWidth > 992){
    ipotekaPageSection.style.display = 'none';
    ipotekaBtn.addEventListener('click', ()=>{
        cianSections1.style.display = 'none';
        cianSections2.style.display = 'none';
        cianSections3.style.display = 'none';
        ipotekaPageSection.style.display = 'block';
    })
} else {
    ipotekaPageSection.style.display = 'none';
}


