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





// desactivation des bouton quand pas asser de gold

const goldActuel = 1500;

// bouton bonus
const Bonus1 = document.querySelector(".div4")
const Bonus2 = document.querySelector(".div5")
const Bonus3 = document.querySelector(".div6")
const Bonus4 = document.querySelector(".div7")
const Bonus5 = document.querySelector(".div8")
const Bonus6 = document.querySelector(".div9")

let bonusTableau = [
    { name: "firstBonus", price: 500, balise: Bonus1 },
    { name: "secondBonus", price: 1000, balise: Bonus2 },
    { name: "thirdBonus", price: 1200, balise: Bonus3 },
    { name: "fourthBonus", price: 1700, balise: Bonus4 },
    { name: "fifthBonus", price: 2000, balise: Bonus5 },
    { name: "sixBonus", price: 2500, balise: Bonus6 },
];

for (let i = 0; i < bonusTableau.length; i++) {

    if (bonusTableau[i].price > goldActuel) {
        console.log(bonusTableau[i]);
        bonusTableau[i].balise.classList.add("boutonUnclick")
    }
}

// fin bouton Bonus

// bouton Item

const Item1 = document.querySelector(".div1");
const Item2 = document.querySelector(".div2");
const Item3 = document.querySelector(".div3");

let itemTableau = [
    { name: "firstItem", price: 200, balise: Item1, isBought: false },
    { name: "secondItem", price: 1000, balise: Item2 },
    { name: "thirdItem", price: 3000, balise: Item3 },
];

for (let i = 0; i < itemTableau.length; i++) {
    if (itemTableau[i].price > goldActuel) {
        itemTableau[i].balise.classList.add("boutonUnclick")
    }
    Item1.addEventListener("click", function () {
        if (itemTableau[i].price < goldActuel) {
            itemTableau[i].classList.add("achatPossible")
        }
    })

}

// rendre le bouton gris

// for (let i = 0; i < itemTableau.length; i++) {
//     Item1.addEventListener("click", function () {
//         if (itemTableau[i].price < goldActuel) {
//             itemTableau[i].classList.add("achatPossible")
//         }
//     })

// }
// fin Bouton Item

