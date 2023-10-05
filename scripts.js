let user = {
    name: "toto",
    golds: 0,
    tool: 1,
    machines: 0,
}
let goldMax = 0;
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
const achat = document.querySelectorAll('button');
const soldOut = document.querySelector(".soldOut");
const pickaxe1 = document.getElementById("pickaxe1");
const pickaxe2 = document.getElementById("pickaxe2");
const pickaxe3 = document.getElementById("pickaxe3");
const sold1 = document.getElementById("sold1");
const sold2 = document.getElementById("sold2");
const sold3 = document.getElementById("sold3");



//DECLARATION DES ITEMS

let item1 = {
    pickaxe: pickaxe1,
    damage: 2,
    autoDamage: 0,
    price: 100,
    basePrice: 100,
    balise: Item1,
    multiplicator: 1,
    itemCount: 0,
    sold: sold1,
};
let item2 = {
    pickaxe: pickaxe2,
    damage: 3,
    basePrice: 500,
    price: 500,
    balise: Item2,
    multiplicator: 1,
    itemCount: 0,
    sold: sold2,
};
let item3 = {
    pickaxe: pickaxe3,
    damage: 4,
    basePrice: 1000,
    price: 1000,
    balise: Item3,
    multiplicator: 1,
    itemCount: 0,
    sold: sold3,
};
let item4 = {
    damage: 1,
    basePrice: 50,
    price: 50,
    balise: Bonus1,
    multiplicator: 2,
    itemCount: 1,
};

let item5 = {
    damage: 5,
    basePrice: 500,
    price: 500,
    balise: Bonus2,
    multiplicator: 2,
    itemCount: 0,
};
let item6 = {
    damage: 10,
    basePrice: 1000,
    price: 1000,
    balise: Bonus3,
    multiplicator: 2,
    itemCount: 0,
};


// FUNCTION OPEN AND CLOSE MENU MOBILE
const menuBtn = document.getElementById('menuButton')
const rightMenu = document.querySelector('.rightMenu')
let open = false;

function openMenu() {
    if (open === true) {
        rightMenu.classList.remove('openMenu')
        rightMenu.classList.add('closedMenu')
        menuBtn.classList.remove('openBtn')
        menuBtn.classList.add('closedBtn')
        open = false
    } else {
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
    userGold.innerHTML = user.golds; 
    goldMax += user.tool;
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
    DPM++;
    counterClick();
}
function refreshUserGold() {
    bonusDispo();
    totalGold();
}
setInterval(refreshUserGold, 10)
stone.addEventListener('click', pickaxeAnimation,)

// FUNCTION AUTOCLICK
function addition(nb) {
    setInterval(() => {
    user.golds += nb;
    goldMax += nb;
    userGold.innerHTML = user.golds ;
}, 1000)
}

function additionOk (golds, price,itemDamage){
    if (golds >= price){
        addition(itemDamage)
    }
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
function soldOutPickaxe (sold, pickaxe){
    pickaxe.classList.add("hidden")
    sold.classList.remove("hidden")
}

function switchPickAxeOk (golds, price, balise, item, pickaxe, sold){
    if (golds >= price){
        balise.disabled = true;
        balise.style.backgroundColor = "#E1A624"
        soldOutPickaxe(sold, pickaxe)
        switchPickAxe(item)
}
}

function switchPickAxe(item) {
    user.tool = item.damage
}
achat.forEach((button, index) => button.addEventListener('click', () => {
       switch (button.name) {
        case 'item1':
            switchPickAxeOk(user.golds, item1.price, item1.balise, item1, item1.pickaxe, item1.sold)
            decrementationGold(user.golds, item1.price, item1)            
            const textItem1 = document.getElementById('item1')
            textItem1.innerHTML = item1.price
            break;
        case 'item2':
            switchPickAxeOk(user.golds, item2.price, item2.balise, item2, item2.pickaxe, item2.sold)
            decrementationGold(user.golds, item2.price, item2)
            const textItem2 = document.getElementById('item2')
            textItem2.innerHTML = item2.price
            break;
        case 'item3':
            switchPickAxeOk(user.golds, item3.price, item3.balise, item3, item3.pickaxe, item3.sold)
            decrementationGold(user.golds, item3.price, item3)
            const textItem3 = document.getElementById('item3')
            textItem3.innerHTML = item3.price            
            break;
        case 'item4':
            additionOk(user.golds, item4.price, item4.damage)
            decrementationGold(user.golds, item4.price, item4)
            const textItem4 = document.getElementById('item4')
            textItem4.innerHTML = item4.price            
            break; 
        case 'item5':
            additionOk(user.golds, item5.price, item5.damage)
            decrementationGold(user.golds, item5.price, item5)
            const textItem5 = document.getElementById('item5')
            textItem5.innerHTML = item5.price
            break; 
        case 'item6':
            additionOk(user.golds, item6.price, item6.damage)
            decrementationGold(user.golds, item6.price, item6)
            const textItem6 = document.getElementById('item6')
            textItem6.innerHTML = item6.price
            break; 
        }

    }       
))

// TOTAL CLICS
let DPM = 0;
const DPA = document.querySelector(".clickTotal")
function counterClick(){
DPA.innerHTML = `Total clics : ${DPM}` ;
}


//  GOLD MAX
const toutGold = document.querySelector(".goldTotaux");
function totalGold(){
  toutGold.innerHTML =  `Total Golds : ${goldMax}`;
}


// CHRONO
const timer = document.querySelector(".chrono");
let second = 0;
let minute = 0;
timer.innerHTML = second;

setInterval(Chronomètre,1000);
function Chronomètre(){

   if (second < 60 ){
      second++;
      timer.innerHTML = `${minute} min ${second}s`;
  }
  else{
      minute++
      second = 0;
      timer.innerHTML = `${minute} min${second}s`
  }
};
