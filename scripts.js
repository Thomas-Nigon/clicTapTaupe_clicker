// FUNCTION OPEN AND CLOSE MENU MOBILE
const menuBtn = document.getElementById('menuButton')
const rightMenu = document.querySelector('.rightMenu')
let open = false
function openMenu() {
    console.log('entering open menu')
    if (open == true) {
        console.log('open is true')
        rightMenu.classList.remove('openMenu')
        rightMenu.classList.add('closedMenu')
        menuBtn.classList.remove('openBtn')
        menuBtn.classList.add('closedBtn')
        open = false
    } else {
        console.log('open is false')
        rightMenu.classList.remove('closedMenu')
        rightMenu.classList.add('openMenu')
        menuBtn.classList.remove('closedBtn')
        menuBtn.classList.add('openBtn')
        open = true
    }
}
menuBtn.addEventListener('click', openMenu)
// animation du bouton Help


const trueRules = document.querySelector("#help")
const sectRules = document.querySelector(".rules")

trueRules.addEventListener("click", function () {
    sectRules.classList.remove("rules");
    sectRules.classList.add("rulesActif");
});


const closeCroix = document.querySelector(".croix")

closeCroix.addEventListener("click", function () {

    sectRules.classList.remove("rulesActif")
    sectRules.classList.add("rules")
    console.log("hello");
})


// fin du bouton help

//PICKAXE ANIMATION

const stone = document.querySelector('.pickAndRoc');
const pickaxe = document.querySelector('.pickaxe');
const explose = document.querySelector('.explose');
let counterGold = 0;

function incrementGoldClick() {
    counterGold++;
    document.querySelector('#userGold').innerHTML = counterGold;
}

function pickaxeAnimation() {
    pickaxe.classList.add('active')
    explose.classList.remove('hidden')
    // console.log("j'ai clicker le caillou !")
    setTimeout(function () {
        pickaxe.classList.remove('active');
        explose.classList.add('hidden');
    }, 100);
    incrementGoldClick();
}
stone.addEventListener('click', pickaxeAnimation)
//FIN PICKAXE ANIMATION

const userGold = document.getElementById('userGold')
const item4 = document.querySelector('.div4')
const item5 = document.querySelector('.div5')
const item6 = document.querySelector('.div6')


let gold = 0
function addition(nb) {
    setInterval(() => {
    gold = gold + nb;
    document.querySelector('#userGold').innerHTML = gold;
}, 1000)
}