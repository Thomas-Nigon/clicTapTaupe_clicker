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
const coinGold = document.querySelector(".coingold")
// GOLD ANIMATION

  function onAnimation() {
    console.log("coucou");
    coinGold.classList.remove('hidden')
    coinGold.classList.add('on')
  setTimeout(function () {
    coinGold.classList.remove('on');
    coinGold.classList.add('hidden');
  }, 1000);
  }

// FIN GOLD ANIMATION

// GOLD COUNTERS

function incrementGoldClick() {
    counterGold++;
    document.querySelector('#userGold').innerHTML = counterGold;
    document.querySelector('#goldBonus').innerHTML = counterGold;
}

// FIN


function pickaxeAnimation() {
    pickaxe.classList.add('active')
    explose.classList.remove('hidden')
    setTimeout(function () {
        pickaxe.classList.remove('active');
        explose.classList.add('hidden');
    }, 100);
    incrementGoldClick();
    onAnimation();
}
stone.addEventListener('click', pickaxeAnimation)
//FIN PICKAXE ANIMATION

const userGold = document.getElementById('userGold')
const item4 = document.querySelector('.div4')
const item5 = document.querySelector('.div5')
const item6 = document.querySelector('.div6')
let i = 0
let gold = i
function addition() {
    gold = gold + 1;
    document.querySelector('#userGold').innerHTML = gold;
}
function automatisation() {
    setInterval(addition, 1000)
}
item4.addEventListener('click', automatisation)



