const openAcardion1 = document.querySelector('.open-btn1');
const openAcardion2 = document.querySelector('.open-btn2');
const openAcardion3 = document.querySelector('.open-btn3');
const openAcardionBtn1 = document.querySelector('.open-btn1 .fa-solid');
const openAcardionBtn2 = document.querySelector('.open-btn2 .fa-solid');
const openAcardionBtn3 = document.querySelector('.open-btn3 .fa-solid');
const acardionWrap1 = document.querySelector('.link-wrap1');
const acardionWrap2 = document.querySelector('.link-wrap2');
const acardionWrap3 = document.querySelector('.link-wrap3');

openAcardion1.addEventListener('click', () => {
    acardionWrap1.classList.toggle('active');
    openAcardionBtn1.classList.toggle('active');
})
openAcardion2.addEventListener('click', () => {
    acardionWrap2.classList.toggle('active');
    openAcardionBtn2.classList.toggle('active');
})
openAcardion3.addEventListener('click', () => {
    acardionWrap3.classList.toggle('active');
    openAcardionBtn3.classList.toggle('active');
})

// mobilne wrapper

// tepadagi 3 ta battin tugma uchun 

const calcBtn1 = document.querySelector('.type-btn-wrap .type-btn1');
const calcBtn2 = document.querySelector('.type-btn-wrap .type-btn2');
const kupitWrap = document.querySelector('.kupit-wrap');
const snyatWrap = document.querySelector('.snyat-wrap');

calcBtn1.addEventListener('click', () => {
    calcBtn1.classList.toggle('active');
    calcBtn2.classList.remove('active');
    kupitWrap.classList.toggle('active');
    snyatWrap.classList.remove('active');
})

calcBtn2.addEventListener('click', () => {
    calcBtn2.classList.toggle('active');
    calcBtn1.classList.remove('active');
    snyatWrap.classList.toggle('active');
    kupitWrap.classList.remove('active');
})
// alert('salom')


// hidden wrap

const formCheck = document.querySelector('.all-forms .input-block input');
const hiddenWrap = document.querySelector('.hidden-wrap');

formCheck.addEventListener('click', () => {
    hiddenWrap.classList.toggle('active');
    // alert('ch')
})

// ====================
const formButton = document.querySelectorAll('.buttons-wrap .button');
// console.log(formButton);
for(let i = 0; i < formButton.length; i++){
    formButton[i].addEventListener('click', () => {
        formButton[i].classList.toggle('active');
    });
}


// =======================

// ====================
const formToButton = document.querySelectorAll('.to-button-wrap .button');
// console.log(formButton);
for(let i = 0; i < formToButton.length; i++){
    formToButton[i].addEventListener('click', () => {
        formToButton[i].classList.toggle('active');
    });
}


// =======================
const formButton1 = document.querySelector('.btn-wrap3 .button.btn1');
const formButton2 = document.querySelector('.btn-wrap3 .button.btn2');
const formButton3 = document.querySelector('.btn-wrap3 .button.btn3');

const allForm = document.querySelector('.all-forms');

formButton1.addEventListener('click', () => {
    formButton1.classList.toggle('active');
    formButton2.classList.remove('active');
    formButton3.classList.remove('active');
    allForm.classList.remove('active');
    // hiddenWrap.classList.toggle('active');
})

formButton2.addEventListener('click', () => {   
    formButton2.classList.toggle('active');
    formButton1.classList.remove('active');
    formButton3.classList.remove('active');
    allForm.classList.toggle('active');
})

formButton3.addEventListener('click', () => {
    formButton3.classList.toggle('active');
    formButton2.classList.remove('active');
    formButton1.classList.remove('active');
    allForm.classList.remove('active');
    // hiddenWrap.classList.toggle('active');
})


const form2OpenBtn = document.querySelector('.new-open-btn-wrap');
const form2Block = document.querySelector('.kalc2-wrapoer');

form2OpenBtn.addEventListener('click' , () => {
    form2Block.classList.toggle('active');
});




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