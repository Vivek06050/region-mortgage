const passwordField = document.getElementById('password');
const Id = document.getElementById('online-id');
const showButton = document.querySelector('.show-password');
const loginButton = document.getElementById('loginButton');
const loginText = document.querySelector('.login-text');
const spinner = document.querySelector('.spinner');
const form=document.querySelector('.Hero');
const Enroll=document.querySelector('.Enroll');
const Welcome=document.querySelector('.Welcome');
const footer=document.querySelector('.footer');
const logo2=document.querySelector('.logo2');
const house=document.querySelector('.image-side');
const logoImg=document.querySelector('.logo-img');
const login=document.querySelector('#loginButton');


let f1=false,f2=false;
passwordField.addEventListener('focus', () => {
    showButton.classList.remove('hidden');
});

Id.addEventListener('input', (e) => {
    if (e.target.value) f2=true;
    else f2=false;
    if(f2&&f1){ login.classList.add('login-btn');
    login.classList.remove('login');
}
    else{
        login.classList.add('login');
        login.classList.remove('login-btn');
    }
    
})


passwordField.addEventListener('input', (e) => {
    if (e.target.value) f1=true;
    else f1=false;
    if(f1&&f2){ login.classList.add('login-btn');
    login.classList.remove('login');
}
    else{
        login.classList.add('login');
        login.classList.remove('login-btn');
    }
    
})


passwordField.addEventListener('input', (e) => {
    if (e.target.value) {
showButton.classList.remove('hidden');
passwordField.classList.remove('increase-placeholder');

} else {
showButton.classList.add('hidden');
passwordField.classList.add('increase-placeholder'); 
}
});

showButton.addEventListener('click', function () {
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Show' : 'Hide';
});


loginButton.addEventListener('click', function (e) {
    if(!(f1&&f2)) return;
    loginText.classList.add('login-text-trans');
    spinner.classList.add('visible');
    setTimeout(() => {
        spinner.classList.remove('visible');
        adddropdown();
    }, 1000);
   
});

function adddropdown(){
    form.classList.add('dropdown');
    Enroll.classList.add('dropdown');
    Welcome.classList.add('dropdown');
    footer.classList.add('dropdown');
    logo2.classList.add('left-trans');
    setTimeout(() => {
        fn1();
    }, 2000);

}



function fn1(){
    house.classList.add('crop-image');
    logoImg.classList.add('image-rotate');
    setTimeout(() => {
       fn2();
       
    }, 3000);
}

function fn2(){
    house.classList.add('scaleImg2');
    setTimeout(() => {
        logoImg.classList.add('reverseimage-rotate');
        fn3();
     }, 2000);
}

function fn3(){
    setTimeout(() => {
        house.classList.remove('crop-image');
        house.classList.remove('scaleImg2');
        form.classList.add('reversedropdown');
        Enroll.classList.add('reverseEnroll');
        Welcome.classList.add('reversedropdown');
        footer.classList.add('reversedropdown');
        loginText.classList.add('reverse-login-text-trans');
        logo2.classList.add('reverseleft-trans');
        fn4();
     }, 3000);
}

function fn4(){
    document.getElementById('password').value='';
    document.getElementById('online-id').value='';
    login.classList.add('login');
    login.classList.remove('login-btn');
    f1=false;f2=false;

    setTimeout(() => {
        
        form.classList.remove('reversedropdown');
        Enroll.classList.remove('reverseEnroll');
        Welcome.classList.remove('reversedropdown');
        footer.classList.remove('reversedropdown');
        loginText.classList.remove('reverse-login-text-trans');
        logo2.classList.remove('reverseleft-trans');
        logoImg.classList.remove('reverseimage-rotate');
        logoImg.classList.remove('image-rotate');
        form.classList.remove('dropdown');
    Enroll.classList.remove('dropdown');
    Welcome.classList.remove('dropdown');
    footer.classList.remove('dropdown');
    logo2.classList.remove('left-trans');
    loginText.classList.remove('login-text-trans');
    }, 2000);
}
