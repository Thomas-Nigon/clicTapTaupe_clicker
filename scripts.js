let counterGold = 0;

//DECLARATION DES ITEMS
let item1 = {
    damage: 2,
    basePrice: 100,
    multiplicator: 0.3,
    itemCount: 0,
    calcPrice: function () {
       return this.price = this.basePrice * (this.multiplicator * this.itemCount) + this.basePrice;
    }
};
let item2 = {
    damage: 3,
    basePrice: 500,
    multiplicator: 0.3,
    itemCount: 0,
    calcPrice: function () {
        return this.price = this.basePrice * (this.multiplicator * this.itemCount) + this.basePrice;
    }
};
let item3 = {
    damage: 4,
    basePrice: 1000,
    multiplicator: 0.3,
    itemCount: 0,
    calcPrice: function () {
        return this.price = this.basePrice * (this.multiplicator * this.itemCount) + this.basePrice;
    }
};
let item4 = {
    damage: 1,
    basePrice: 10,
    multiplicator: 0.3,
    itemCount: 1,
    calcPrice: function () {
        this.price = this.basePrice * (this.multiplicator * this.itemCount) + this.basePrice;
    }
};
let item5 = {
    damage: 1,
    basePrice: 1000,
    multiplicator: 0.3,
    itemCount: 0,
    calcPrice: function () {
        return this.price = this.basePrice * (this.multiplicator * this.itemCount) + this.basePrice;
    }
};
let item6 = {
    damage: 1,
    basePrice: 1000,
    multiplicator: 0.3,
    itemCount: 0,
    calcPrice: function () {
       return  this.price = this.basePrice * (this.multiplicator * this.itemCount) + this.basePrice;
    }
};


// FUNCTION OPEN AND CLOSE MENU MOBILE
const menuBtn = document.getElementById('menuButton')
const rightMenu = document.querySelector('.rightMenu')
let open = false;

function openMenu() {
    console.log('entering open menu')
    if (open === true) {
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
menuBtn.addEventListener('click', openMenu);


// ANIMATION DU BOUTON HELP
const trueRules = document.querySelector("#help");
const sectRules = document.querySelector(".rules");

trueRules.addEventListener("click", function () {
    sectRules.classList.remove("rules");
    sectRules.classList.add("rulesActif");
});
const closeCroix = document.querySelector(".croix");

closeCroix.addEventListener("click", function () {
    sectRules.classList.remove("rulesActif")
    sectRules.classList.add("rules")
});


// GOLD ANIMATION
  function onAnimation() {
    coinGold.classList.remove('hidden')
    coinGold.classList.add('on')
  setTimeout(function () {
    coinGold.classList.remove('on');
    coinGold.classList.add('hidden');
  }, 1000);
  }
//PICKAXE ANIMATION
const stone = document.querySelector('.pickAndRoc');
const pickaxe = document.querySelector('.pickaxe');
const explose = document.querySelector('.explose');
const coinGold = document.querySelector(".coingold");

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
function refreshUserGold() {
    counterGold;
    userGold.innerHTML = counterGold + autoGold;
    bonusDispo(); 
}

setInterval(refreshUserGold, 10)

stone.addEventListener('click', pickaxeAnimation,)

// FUNCTION AUTOCLICK
const userGold = document.getElementById('userGold');

let autoGold = 0;
function addition(nb) {
    setInterval(() => {
    autoGold += nb;
    document.querySelector('#userGold').innerHTML = counterGold + autoGold;
}, 1000)
}
  // clique total
  let DPM = 0;
  const DPA = document.querySelector(".clickTotal")

function counterClick(){
DPA.innerHTML = `clique Total : ${DPM}` ;
}
// fin clique total



// tout les gold
setInterval(totalGold,100)
const toutGold = document.querySelector(".goldTotaux");
let allGold =0;
function totalGold()
{
    toutGold.innerHTML =  `Gold Total : ${counterGold + autoGold}`;
}
// fin tout les gold

//gold bonus
const Goldautomatic = document.querySelector(".goldAuto")
setInterval(automaticGold,100);
function automaticGold(){
Goldautomatic.innerHTML = `Gold automatic Total : ${autoGold}`    
}

// fin gold bonus

// Chrono
const timer = document.querySelector(".Chrono");
let second = 0;
let minute = 0;
timer.innerHTML = second;


setInterval(Chronomètre,1000);
function Chronomètre(){

     if (second < 60 ){
        second++;
        timer.innerHTML = `Chrono : ${minute}: ${second}`;
    }
    else{
        minute++
        second = 0;
        timer.innerHTML = `Chrono : ${minute}:${second}`
    }
};


//Fin Chrono



// GOLD COUNTERS
function incrementGoldClick() {
    counterGold += 1;
    userGold.innerHTML = counterGold + autoGold;
    // itemDispo();
    bonusDispo();
    DPM ++;
    counterClick();
    totalGold();
}


// BONUS BUTTON
const Item1 = document.querySelector(".div1");
const Item2 = document.querySelector(".div2");
const Item3 = document.querySelector(".div3");
const Bonus1 = document.querySelector(".div4")
const Bonus2 = document.querySelector(".div5")
const Bonus3 = document.querySelector(".div6")
const Bonus4 = document.querySelector(".div7")
const Bonus5 = document.querySelector(".div8")
const Bonus6 = document.querySelector(".div9")



let bonusTableau = [
    { name: "firstBonus", price: 10, balise: Bonus1 },
    { name: "secondBonus", price: 25, balise: Bonus2 },
    { name: "thirdBonus", price: 30, balise: Bonus3 },
    { name: "fourthBonus", price: 40, balise: Bonus4 },
    { name: "fifthBonus", price: 45, balise: Bonus5 },
    { name: "sixBonus", price: 50, balise: Bonus6 },
    { name: "firstItem", price: 10, dammage : 2, balise: Item1, },
    { name: "secondItem", price: 13, dammage : 4, balise: Item2 },
    { name: "thirdItem", price: 16, dammage : 6, balise: Item3 },
];

// BONUSDISPO
function bonusDispo() {
    for (let i = 0; i < bonusTableau.length; i++) {
        if (bonusTableau[i].price <= (counterGold + autoGold)) {
            bonusTableau[i].balise.classList.add("achatBonusPossible")
        }
    }
}


// ITEM DISPO


// let itemTableau = [
//     { name: "user", dammage : 1, userGold : 0},
    
//     { name: "firstItem", price: 10, dammage : 2, balise: Item1, },
//     { name: "secondItem", price: 13, dammage : 4, balise: Item2 },
//     { name: "thirdItem", price: 16, dammage : 6, balise: Item3 },
// ];

// function itemDispo() {
//     for (let i = 0; i < itemTableau.length; i++) {
//         if (itemTableau[i].price <= counterGold + autoGold) {
//             itemTableau[i].balise.classList.add("achatItemPossible")
//         }
//     }
// }


// SHOP BUTTON

// let user = {
//     name: "toto",
//     golds: 0,
//     tool: 1,
//     machines: 0,
// }

const achat = document.querySelectorAll('button');

function updatePrice(item) {
    console.log('enter function update price')
    item.calcPrice();
    console.log('item price:', item.price)
    item.itemCount = item.itemCount + 1
    console.log('item count:', item.itemCount)
    console.log('new item price:', item.price)
    }
function switchPickAxe(item) {
    console.log('enter function switchPickAxe')
    user.tool = item.damage
    console.log('degats pioche:', user.tool)
}
achat.forEach((button, index) => button.addEventListener('click', () => {
       switch (button.name) {
        case 'item1':
            console.log('jai clické bt1');
            itemDispo()
            updatePrice(item1)
            switchPickAxe(item1)
            const textItem1 = document.getElementById('item1')
            textItem1.innerHTML = toto1.price

            break;
        case 'item2':
            console.log('jai clické bt2');
            updatePrice(item2)
            switchPickAxe(item2)
            const textItem2 = document.getElementById('item2')
            textItem2.innerHTML = item2.price
            break;
        case 'item3':
            updatePrice(item3)
            switchPickAxe(item3)
            const textItem3 = document.getElementById('item3')
            textItem3.innerHTML = item3.price
            console.log('jai clické bt3');
            break;
        case 'item4':
            console.log(item4.price)
            console.log('auto click')
            addition(1)
            const textItem4 = document.getElementById('item4')
            textItem4.innerHTML = item4.price
            console.log(item4.price)
            
            break; 
        case 'item5':
            console.log('auto click')
            updatePrice(item5)
            addition(5)
            const textItem5 = document.getElementById('item5')
            textItem5.innerHTML = item5.price
            break; 
        case 'item6':
            console.log('auto click')
            updatePrice(item6)
            addition(10)
            const textItem6 = document.getElementById('item6')
            textItem6.innerHTML = item6.price
            break; 
        }

    }       
))