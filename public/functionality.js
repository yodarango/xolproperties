let menuButton = document.querySelector(".burger-menu");
let closeMenu = document.querySelector('.close-password-window');

//open and close the global manu
menuButton.addEventListener('click', () =>
{
let globalMenu = document.querySelector('.global-menu');
globalMenu.style.display = 'block';
menuButton.style.display ='none';
closeMenu.style.display ='block';

//close the global menu 
closeMenu.addEventListener('click', () =>
{
    globalMenu.style.display = 'none';
    closeMenu.style.display ='none';
    menuButton.style.display = 'block';
})
//referesh the navigated window on load
let globalMenuDiv = document.querySelectorAll('#global-menu-a', '#global-menu-b', '#global-menu-c', '#global-menu-d', '#global-menu-e');

globalMenuDiv.forEach.addEventListener('click', () =>
{
location.reload();
})
});

//naviagation for the services page
let description = (x) =>
{
let picA = document.querySelector('#service-pica');
let picB = document.querySelector('#service-picb');
let curBall = document.querySelector("#" + x);
let otherBalls = document.querySelectorAll('.ball');
let changeTextA = document.querySelector('#rental-cleaning-sections-texta');
let changeTextB = document.querySelector('#rental-cleaning-sections-textb');
let changeTextC = document.querySelector('#rental-cleaning-sections-textc');
let changeTextD = document.querySelector('#rental-cleaning-sections-textd');
let changeTextE = document.querySelector('#rental-cleaning-sections-texte');
let changeTextF = document.querySelector('#rental-cleaning-sections-textf');
let changeTextG = document.querySelector('#rental-cleaning-sections-textg');

if((window.innerWidth <= 600 || window.innerWidth >= 900) && x === 'rental-cleaning-sections-a')
{ 
picA.style.cssText = 'background: url(images/2.jpg); background-position:center; background-size: cover;';
curBall.style.cssText = 'background: rgb(46, 45, 45); color: white;';
otherBalls[1].style.cssText = 'background: white; color: rgb(46, 45, 45)';
otherBalls[2].style.cssText = 'background: white; color: rgb(46, 45, 45)';
changeTextA.style.cssText = 'display: block;';
changeTextB.style.cssText = 'display: none;';
changeTextC.style.cssText = 'display: none;';
}
else if((window.innerWidth <= 600 || window.innerWidth >= 900)  && x === 'rental-cleaning-sections-b')
{ 
picA.style.cssText = 'background: url(images/4.jpg); background-position:center; background-size: cover;';
curBall.style.cssText = 'background: rgb(46, 45, 45); color: white;';
otherBalls[0].style.cssText = 'background: white; color: rgb(46, 45, 45)';
otherBalls[2].style.cssText = 'background: white; color: rgb(46, 45, 45)';
changeTextA.style.cssText = 'display: none;';
changeTextB.style.cssText = 'display: block;';
changeTextC.style.cssText = 'display: none;';
}
else if((window.innerWidth <= 600 || window.innerWidth >= 900) && x === 'rental-cleaning-sections-c')
{ 
picA.style.cssText = 'background: url(images/5.jpg); background-position:center; background-size: cover;';
curBall.style.cssText = 'background: rgb(46, 45, 45); color: white;';
otherBalls[0].style.cssText = 'background: white; color: rgb(46, 45, 45)';
otherBalls[1].style.cssText = 'background: white; color: rgb(46, 45, 45)';
changeTextA.style.cssText = 'display: none;';
changeTextB.style.cssText = 'display: none;';
changeTextC.style.cssText = 'display: block;';
}
else if((window.innerWidth <= 600 || window.innerWidth >= 900)  && x === 'rental-cleaning-sections-d')
{ 
picB.style.cssText = 'background: url(images/3.jpg); background-position:center; background-size: cover;';
curBall.style.cssText = 'background: rgb(46, 45, 45); color: white;';
otherBalls[4].style.cssText = 'background: white; color: rgb(46, 45, 45)';
otherBalls[5].style.cssText = 'background: white; color: rgb(46, 45, 45)';
otherBalls[6].style.cssText = 'background: white; color: rgb(46, 45, 45)';
changeTextD.style.cssText = 'display: block;';
changeTextE.style.cssText = 'display: none;';
changeTextF.style.cssText = 'display: none;';
changeTextG.style.cssText = 'display: none;';
}
else if((window.innerWidth <= 600 || window.innerWidth >= 900)  && x === 'rental-cleaning-sections-e')
{ 
picB.style.cssText = 'background: url(images/green.jpg); background-position:center; background-size: cover;';
curBall.style.cssText = 'background: rgb(46, 45, 45); color: white;';
otherBalls[3].style.cssText = 'background: white; color: rgb(46, 45, 45)';
otherBalls[5].style.cssText = 'background: white; color: rgb(46, 45, 45)';
otherBalls[6].style.cssText = 'background: white; color: rgb(46, 45, 45)';
changeTextD.style.cssText = 'display: none;';
changeTextE.style.cssText = 'display: block;';
changeTextF.style.cssText = 'display: none;';
changeTextG.style.cssText = 'display: none;';
}
else if((window.innerWidth <= 600 || window.innerWidth >= 900)  && x === 'rental-cleaning-sections-f')
{ 
    picB.style.cssText = 'background: url(images/7.jpg); background-position:center; background-size: cover;';
    curBall.style.cssText = 'background: rgb(46, 45, 45); color: white;';
    otherBalls[3].style.cssText = 'background: white; color: rgb(46, 45, 45)';
    otherBalls[4].style.cssText = 'background: white; color: rgb(46, 45, 45)';
    otherBalls[6].style.cssText = 'background: white; color: rgb(46, 45, 45)';
    changeTextD.style.cssText = 'display: none;';
    changeTextE.style.cssText = 'display: none;';
    changeTextF.style.cssText = 'display: block;';
    changeTextG.style.cssText = 'display: none;';
}
else if((window.innerWidth <= 600 || window.innerWidth >= 900) && x === 'rental-cleaning-sections-g')
{ 
    picB.style.cssText = 'background: url(images/6.jpg); background-position:center; background-size: cover;';
    curBall.style.cssText = 'background: rgb(46, 45, 45); color: white;';
    otherBalls[3].style.cssText = 'background: white; color: rgb(46, 45, 45)';
    otherBalls[4].style.cssText = 'background: white; color: rgb(46, 45, 45)';
    otherBalls[5].style.cssText = 'background: white; color: rgb(46, 45, 45)';
    changeTextD.style.cssText = 'display: none;';
    changeTextE.style.cssText = 'display: none;';
    changeTextF.style.cssText = 'display: none;';
    changeTextG.style.cssText = 'display: block;';
}

////Ipad and above resolution 

if((window.innerWidth >= 601 && window.innerWidth <= 859) && x === 'rental-cleaning-sections-a')
{ 
    curBall.style.cssText = 'background: rgb(46, 45, 45); color: white;';
    otherBalls[1].style.cssText = 'background: white; color: rgb(46, 45, 45)';
    otherBalls[2].style.cssText = 'background: white; color: rgb(46, 45, 45)';
    changeTextA.style.cssText = 'display: block; background: background: url(/images/2.jpg); background-position:center; background-size: cover;';
    changeTextB.style.cssText = 'display: none;';
    changeTextC.style.cssText = 'display: none;';
    }
    else if((window.innerWidth >= 601 && window.innerWidth < 900) && x === 'rental-cleaning-sections-b')
    { 
        curBall.style.cssText = 'background: rgb(46, 45, 45); color: white;';
        otherBalls[0].style.cssText = 'background: white; color: rgb(46, 45, 45)';
        otherBalls[2].style.cssText = 'background: white; color: rgb(46, 45, 45)';
        changeTextA.style.cssText = 'display: none;';
        changeTextB.style.cssText = 'display: block; background: url(/images/4.jpg); background-position:center; background-size: cover;';
        changeTextC.style.cssText = 'display: none;';
    }
    else if((window.innerWidth >= 601 && window.innerWidth < 900) && x === 'rental-cleaning-sections-c')
    { 
        curBall.style.cssText = 'background: rgb(46, 45, 45); color: white;';
        otherBalls[0].style.cssText = 'background: white; color: rgb(46, 45, 45)';
        otherBalls[1].style.cssText = 'background: white; color: rgb(46, 45, 45)';
        changeTextA.style.cssText = 'display: none;';
        changeTextB.style.cssText = 'display: none;)';
        changeTextC.style.cssText = 'display: block; background: url(/images/5.jpg); background-position:center; background-size: cover;';
    }
    else if((window.innerWidth >= 601 && window.innerWidth < 900) && x === 'rental-cleaning-sections-d')
    { 
    curBall.style.cssText = 'background: rgb(46, 45, 45); color: white;';
    otherBalls[4].style.cssText = 'background: white; color: rgb(46, 45, 45)';
    otherBalls[5].style.cssText = 'background: white; color: rgb(46, 45, 45)';
    otherBalls[6].style.cssText = 'background: white; color: rgb(46, 45, 45)';
    changeTextD.style.cssText = 'display: block; background: url(images/3.jpg); background-position:center; background-size: cover;';
    changeTextE.style.cssText = 'display: none;';
    changeTextF.style.cssText = 'display: none;';
    changeTextG.style.cssText = 'display: none;';
    }
    else if((window.innerWidth >= 601 && window.innerWidth < 900) && x === 'rental-cleaning-sections-e')
    { 
    curBall.style.cssText = 'background: rgb(46, 45, 45); color: white;';
    otherBalls[3].style.cssText = 'background: white; color: rgb(46, 45, 45)';
    otherBalls[5].style.cssText = 'background: white; color: rgb(46, 45, 45)';
    otherBalls[6].style.cssText = 'background: white; color: rgb(46, 45, 45)';
    changeTextD.style.cssText = 'display: none;';
    changeTextE.style.cssText = 'display: block; background: url(images/green.jpg); background-position:center; background-size: cover;';
    changeTextF.style.cssText = 'display: none;';
    changeTextG.style.cssText = 'display: none;';
    }
    else if((window.innerWidth >= 601 && window.innerWidth < 900) && x === 'rental-cleaning-sections-f')
    { 
        curBall.style.cssText = 'background: rgb(46, 45, 45); color: white;';
        otherBalls[3].style.cssText = 'background: white; color: rgb(46, 45, 45)';
        otherBalls[4].style.cssText = 'background: white; color: rgb(46, 45, 45)';
        otherBalls[6].style.cssText = 'background: white; color: rgb(46, 45, 45)';
        changeTextD.style.cssText = 'display: none;';
        changeTextE.style.cssText = 'display: none;';
        changeTextF.style.cssText = 'display: block; background: url(images/7.jpg); background-position:center; background-size: cover;';
        changeTextG.style.cssText = 'display: none;';
    }
    else if((window.innerWidth >= 601 && window.innerWidth < 900) && x === 'rental-cleaning-sections-g')
    { 
        curBall.style.cssText = 'background: rgb(46, 45, 45); color: white;';
        otherBalls[3].style.cssText = 'background: white; color: rgb(46, 45, 45)';
        otherBalls[4].style.cssText = 'background: white; color: rgb(46, 45, 45)';
        otherBalls[5].style.cssText = 'background: white; color: rgb(46, 45, 45)';
        changeTextD.style.cssText = 'display: none;';
        changeTextE.style.cssText = 'display: none;';
        changeTextF.style.cssText = 'display: none;';
        changeTextG.style.cssText = 'display: block; background: url(images/6.jpg); background-position:center; background-size: cover;';
    }
}

const formSubmit = document.querySelector('form');

formSubmit.addEventListener('click', ()=>
{   
    console.log('cliked')
})