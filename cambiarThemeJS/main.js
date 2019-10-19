const currentTheme=localStorage.getItem('theme');
const button1=document.querySelector('.myButton1');    
const button2=document.querySelector('.myButton2');
const button3=document.querySelector('.myButton3');

if (currentTheme == 'day'){

    changeTheme1();
    
}else if (currentTheme == 'light-night'){

    changeTheme2();

}else if (currentTheme == 'dark-night'){

   changeTheme3();

}
function changeTheme1(){

    document.documentElement.setAttribute('data-theme','day');
    localStorage.setItem('theme','day');    

}
function changeTheme2(){

    document.documentElement.setAttribute('data-theme','light-night');
    localStorage.setItem('theme','light-night');    
}

function changeTheme3(){

    document.documentElement.setAttribute('data-theme','dark-night'); 
    localStorage.setItem('theme','dark-night');
    
}

button1.addEventListener('click',changeTheme1);
button2.addEventListener('click',changeTheme2);
button3.addEventListener('click',changeTheme3);