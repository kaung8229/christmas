// for first sky section

const overlay = document.querySelector('.overlay');
const click = document.querySelector('.click');
const audio = document.getElementById('audio');

click.addEventListener('click',function(){
    overlay.classList.add('active');

    audio.play();
})



// for cloud and santa animation
const cloud1 = document.getElementById('cloud1');
const cloud2 = document.getElementById('cloud2');
const dbcloud = document.getElementById('cloud3');

const bigcloud = document.querySelector('.bigcloud');

const santa = document.querySelector('.santa');

window.addEventListener('scroll',function(e){
    // console.log('hey');

    cloud1.style.left = `${10 - (this.scrollY / 20)}%`;
    cloud2.style.left = `${50 - (this.scrollY / 10)}%`;
    dbcloud.style.left = `${60 - (this.scrollY / 10)}%`;

    bigcloud.style.bottom = `${-8 + (this.scrollY / 100)}%`;

    santa.style.left = `${20 + (this.scrollY / 25)}%`;
})

// for cloud and santa animation


// for stars

function stars(){
    const skysection = document.querySelector('.skysection');
    const count = 50;

    for(var i = 0; i < count; i++){

        const stars = document.createElement('img');
        stars.src = './sectionone/stars.png';
        stars.className = 'stars';
        stars.style = `--i: ${i}`;

        var x = Math.floor(Math.random() * window.innerWidth);
        var y = Math.floor(Math.random() * window.innerHeight);

        var sizes = Math.random() * 20;

        stars.style.left = x + 'px';
        stars.style.top = y + 'px';

        stars.style.width = 3+sizes+'px';
        stars.style.height = 3+sizes+'px';
        
        skysection.appendChild(stars);

        // console.log(stars);

    }
}

stars();

// for stars
// for first sky section



// for second ground section

var snowman = document.querySelector('.snowman');
var christmastree = document.querySelector('.christmastree');
var textcontent = document.querySelector('.textcontent');

var gifts = document.querySelectorAll('.gift');

window.addEventListener('scroll',function(){

    var getpoint = this.scrollY;
    // console.log(getpoint);

    if(getpoint > 700){
        snowman.style = 'animation-name: snowmanani;';
        christmastree.style = 'animation-name: treeani;';
        textcontent.style = 'animation-name: textani;';

        gifts.forEach(gift=>{
            gift.style = 'animation-name: giftani;';
        })

    }else{
        snowman.style = '';
        christmastree.style = '';
        textcontent.style = '';

        gifts.forEach(gift=>{
            gift.style = '';
        })
    }

})


// for snows

const groundsection = document.querySelector('.groundsection');
const wishpage = document.querySelector('.wishpage');
const foot = document.querySelector('.foot');
const snowcount = 100;

var s = 0;
while(s < snowcount){

    var imgsnow = document.createElement('img');
    var snow = document.createElement('i');

    imgsnow.src = './sectiontwo/snowstars.png';
    imgsnow.className = 'snow';
    snow.className = 'snow circle';

    imgsnow.style = `--i: ${s}`;
    snow.style = `--i: ${s + 49}`;
    // console.log(imgsnow);

    var x = Math.floor((Math.random() * window.innerWidth));
    var y = Math.floor((Math.random() * window.innerHeight));
    
    imgsnow.style.left = x + 'px';
    imgsnow.style.top = (y * 2) + 'px';

    snow.style.left = x + 'px';
    snow.style.top = y + 'px';
    

    let snowsize = Math.random() * 10;

    imgsnow.style.width = 10 + snowsize + 'px';
    imgsnow.style.height = 10 + snowsize + 'px';

    snow.style.width = 1 + snowsize + 'px';
    snow.style.height = 1 + snowsize + 'px';
    
    groundsection.appendChild(imgsnow);
    groundsection.appendChild(snow);

    // wishpage.appendChild(imgsnow);
    foot.appendChild(imgsnow);

    s++;

}

// for snows

// for second ground section




// for third wish section
const wishtext = document.querySelector('.wishtext');
const candy1 = document.querySelector('.candy1');
const candy2 = document.querySelector('.candy2');
const iconanis = document.querySelectorAll('.iconani');


window.addEventListener('scroll',function(){

    var getspoint = this.scrollY;
    // console.log(getspoint);
    // console.log(candy1.style.animationName = 'ehlo');
    if(getspoint > 1600){
        wishtext.style.animationName = 'wishani';

        iconanis.forEach(iconani=>{
            iconani.style.animationName = 'iconaniall';
        })

        candy1.style.animationName = 'candyani1';
        candy2.style.animationName = 'candyani2';
    }else{
        wishtext.style.animationName = '';

        iconanis.forEach(iconani=>{
            iconani.style.animationName = '';
        })

        candy1.style.animationName = '';
        candy2.style.animationName = '';
    }

})

// for third wish section



// for footer

var circlegroup = document.querySelector('.circle-group');
var bigcircle = document.querySelector('.bigcircle');
var footertext = document.querySelector('.footer-text');

var ftrees = document.querySelectorAll('.ftree');
var houses = document.querySelectorAll('.house');

var gifticon = document.querySelector('.gifticon');
var footertree = document.querySelector('.footertree');

window.addEventListener('scroll',function(){

    var getscpoint = this.scrollY;
    // console.log(getscpoint);

    if(getscpoint > 2200){
        circlegroup.style.animationName = 'circlegroupani';
        bigcircle.style.animationName = 'bigcircleani';
        footertext.style.animationName = 'footertextani';

        ftrees.forEach(ftree=>{
            ftree.style.animationName = 'ftreeani';
        })

        houses.forEach(house=>{
            house.style.animationName = 'houseani';
        })

        gifticon.style.animationName = 'gifticonani';
        footertree.style.animationName = 'footertreeani';
    }else{
        circlegroup.style.animationName = '';
        bigcircle.style.animationName = '';
        footertext.style.animationName = '';

        ftrees.forEach(ftree=>{
            ftree.style.animationName = '';
        })

        houses.forEach(house=>{
            house.style.animationName = '';
        })

        gifticon.style.animationName = '';
        footertree.style.animationName = '';
    }
    

})


// for footer


