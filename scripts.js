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
});


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
    document.querySelector('#userGold').innerHTML = counterGold + gold;
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
stone.addEventListener('click', pickaxeAnimation,)
//FIN PICKAXE ANIMATION

const userGold = document.getElementById('userGold')
const item4 = document.querySelector('.div4')
const item5 = document.querySelector('.div5')
const item6 = document.querySelector('.div6')


let gold = 0
function addition(nb) {
    setInterval(() => {
    gold = gold + nb;
    document.querySelector('#userGold').innerHTML = counterGold + gold;
}, 1000)
}

// bouton bonus
const Bonus1 = document.querySelector(".div4")
const Bonus2 = document.querySelector(".div5")
const Bonus3 = document.querySelector(".div6")
const Bonus4 = document.querySelector(".div7")
const Bonus5 = document.querySelector(".div8")
const Bonus6 = document.querySelector(".div9")

let bonusTableau = [
    { name: "firstBonus", price: 20, balise: Bonus1 },
    { name: "secondBonus", price: 25, balise: Bonus2 },
    { name: "thirdBonus", price: 30, balise: Bonus3 },
    { name: "fourthBonus", price: 40, balise: Bonus4 },
    { name: "fifthBonus", price: 45, balise: Bonus5 },
    { name: "sixBonus", price: 50, balise: Bonus6 },
];

// BONUSDISPO
function bonusDispo() {
    for (let i = 0; i < bonusTableau.length; i++) {

        if (bonusTableau[i].price <= itemTableau[0].userGold) {
            bonusTableau[i].balise.classList.add("achatBonusPossible")
        }
    }
}

// FIN BONUS DISPO


const Item1 = document.querySelector(".div1");
const Item2 = document.querySelector(".div2");
const Item3 = document.querySelector(".div3");

let itemTableau = [
    { name: "user", dammage : 1, userGold : 0},
    { name: "firstItem", price: 10, dammage : 2, balise: Item1, },
    { name: "secondItem", price: 13, dammage : 4, balise: Item2 },
    { name: "thirdItem", price: 16, dammage : 6,balise: Item3 },
];

// ITEM DISPO
function itemDispo() {
    for (let i = 0; i < itemTableau.length; i++) {
        if (itemTableau[i].price <= itemTableau[0].userGold) {
            itemTableau[i].balise.classList.add("achatItemPossible")
        }
    }
}

// FIN ITEM ET BONUS DISPO

// // bouton cliquable

// function switchpickAxe1(){
//     itemTableau[0].dammage = itemTableau[1].dammage
// }

// Item1.addEventListener("click",switchpickAxe1)

// function switchpickAxe2(){
//     itemTableau[0].dammage = itemTableau[2].dammage
// }

// Item2.addEventListener("click",switchpickAxe2)


// function switchpickAxe3(){
//     itemTableau[0].dammage = itemTableau[3].dammage
// }

// Item3.addEventListener("click",switchpickAxe3)