let counterGold = 0;
let autoGold = 0;
let myGold = counterGold + autoGold;

let user = {
    name: "toto",
    golds: counterGold + autoGold,
    tool: 1,
    machines: 0,
}

// user.golds = ;

const userGold = document.getElementById('userGold');
const Item1 = document.querySelector(".div1");
const Item2 = document.querySelector(".div2");
const Item3 = document.querySelector(".div3");
const Bonus1 = document.querySelector(".div4")
const Bonus2 = document.querySelector(".div5")
const Bonus3 = document.querySelector(".div6")
const Bonus4 = document.querySelector(".div7")
const Bonus5 = document.querySelector(".div8")
const Bonus6 = document.querySelector(".div9")



//DECLARATION DES ITEMS

let item1 = {
    damage: 2,
    price: 10,
    basePrice: 10,
    balise: Item1,
    multiplicator: 1,
    itemCount: 0,
};
let item2 = {
    damage: 3,
    basePrice: 10,
    price: 10,
    balise: Item2,
    multiplicator: 1,
    itemCount: 0,
};
let item3 = {
    damage: 4,
    basePrice: 10,
    price: 10,
    balise: Item3,
    multiplicator: 1,
    itemCount: 0,
};
let item4 = {
    damage: 1,
    basePrice: 10,
    price: 10,
    balise: Bonus1,
    multiplicator: 2,
    itemCount: 1,
};

let item5 = {
    damage: 1,
    basePrice: 10,
    price: 9,
    balise: Bonus2,
    multiplicator: 2,
    itemCount: 0,
};
let item6 = {
    damage: 1,
    basePrice: 10,
    price: 10,
    balise: Bonus3,
    multiplicator: 2,
    itemCount: 0,
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


// GOLD COUNTERS
function incrementGoldClick() {
    user.golds += user.tool;
    // user.golds = counterGold + autoGold;
    userGold.innerHTML = user.golds; 
}

function decrementationGold (a, b, item) {
    if (a >= b){
    user.golds = a - b ;
    userGold.innerHTML = user.golds;
    calcPrice(item);
    }
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
    bonusDispo(); 
}
setInterval(refreshUserGold, 10)
stone.addEventListener('click', pickaxeAnimation,)

// FUNCTION AUTOCLICK
function addition(nb) {
    setInterval(() => {
    user.golds += nb;
    userGold.innerHTML = user.golds;
}, 1000)
}

// UPGRADE PRICE
function calcPrice (item) {
    return item.price = item.price * item.multiplicator
}


itemList = [item1, item2, item3, item4, item5, item6]

// BONUSDISPO
function bonusDispo() {
    for (let i = 0; i < itemList.length; i++) {
        if (itemList[i].price <= user.golds) {
            itemList[i].balise.classList.add("achatBonusPossible")
        } else{
            itemList[i].balise.classList.remove("achatBonusPossible")
    }
}
}
const achat = document.querySelectorAll('button');

function switchPickAxe(item) {
    console.log('enter function switchPickAxe')
    user.tool = item.damage
    console.log('degats pioche:', user.tool)
}
achat.forEach((button, index) => button.addEventListener('click', () => {
       switch (button.name) {
        case 'item1':
            console.log('jai clické bt1');
            switchPickAxe(item1)
            console.log(user.golds)
            decrementationGold(user.golds, item1.price, item1)
            console.log(user.golds)
            const textItem1 = document.getElementById('item1')
            textItem1.innerHTML = item1.price

            break;
        case 'item2':
            console.log('jai clické bt2');
            switchPickAxe(item2)
            decrementationGold(user.golds, item2.price, item2)
            const textItem2 = document.getElementById('item2')
            textItem2.innerHTML = item2.price
            break;
        case 'item3':
            switchPickAxe(item3)
            decrementationGold(user.golds, item3.price, item3)
            const textItem3 = document.getElementById('item3')
            textItem3.innerHTML = item3.price
            console.log('jai clické bt3');
            break;
        case 'item4':
            console.log(item4.price)
            console.log('auto click')
            addition(1)
            decrementationGold(user.golds, item4.price, item4)
            const textItem4 = document.getElementById('item4')
            textItem4.innerHTML = item4.price
            console.log(item4.price)
            
            break; 
        case 'item5':
            console.log('auto click')
            addition(5)
            decrementationGold(user.golds, item5.price, item5)
            const textItem5 = document.getElementById('item5')
            textItem5.innerHTML = item5.price
            break; 
        case 'item6':
            console.log('auto click')
            addition(10)
            decrementationGold(user.golds, item6.price, item6)
            const textItem6 = document.getElementById('item6')
            textItem6.innerHTML = item6.price
            break; 
        }

    }       
))