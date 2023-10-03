let item1 = {
    damage: 2,
    basePrice: 100,
    multiplicator: 0.3,
    itemCount: 0,
    calcPrice: function () {
        this.price = this.basePrice * (this.multiplicator * this.itemCount) + this.basePrice;
    }
};
let item2 = {
    damage: 3,
    basePrice: 500,
    multiplicator: 0.3,
    itemCount: 0,
    calcPrice: function () {
        this.price = this.basePrice * (this.multiplicator * this.itemCount) + this.basePrice;
    }
};
let item3 = {
    damage: 4,
    basePrice: 1000,
    multiplicator: 0.3,
    itemCount: 0,
    calcPrice: function () {
        this.price = this.basePrice * (this.multiplicator * this.itemCount) + this.basePrice;
    }
};
let item4 = {
    damage: 1,
    basePrice: 1000,
    multiplicator: 0.3,
    itemCount: 0,
    calcPrice: function () {
        this.price = this.basePrice * (this.multiplicator * this.itemCount) + this.basePrice;
    }
};
let user = {
    name: "toto",
    golds: 0,
    tool: 1,
    machines: 0,
}
const btnCntr = document.getElementById('compteur')
const golds = document.getElementById('clic')
const achat = document.querySelectorAll('button')
const btnReset = document.getElementById('reset')

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

    /*     console.log('achat:',achat); */
    /*     console.log('index:', index) */
    /*     console.log('button.name:', button.name) */
    switch (button.name) {
        case 'item1':
            console.log('jai clické bt1');
            updatePrice(item1)
            switchPickAxe(item1)
            const textItem1 = document.getElementById('item1')
            textItem1.innerHTML = item1.price

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
            console.log('auto click')   

            break; 
    }
}))

/* const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
} */





/* function switchWeap(e) {
    console.log(e)
    console.log('enter function switch weapon')
    user.tool = item.damage
    console.log('degats pioche:', user.tool)
} */
/* achat.forEach((button, index) => button.addEventListener('click', () => {

    console.log(achat);
    console.log('index', index)
    let test = button.name
    console.log('test:',test)
    console.log(typeof (test))
    user.tool = test.damage
    console.log(test.damage)
    console.log(user.tool)

})) */

/* btnP2.addEventListener('click', switchPickAxe)
btnP3.addEventListener('click', switchPickAxe2)
btnP4.addEventListener('click', switchPickAxe3) */
btnCntr.addEventListener('click', compte)
btnReset.addEventListener('click', resetF)


function compte() {
    console.log('enter function compte')
    user.golds = user.golds + (1 * user.tool)
    golds.textContent = user.golds
}

function resetF() {
    console.log('enter function reset')
    user.golds = 0;
    user.machines = 0
    golds.textContent = user.golds
}
function buyAutopickAxe() {
    console.log('enter function buyAutoPickAxe')
    user.machines++
    console.log('nombres de click auto:', user.machines)
}

function autoClick() {
    console.log('enter function autoclick')
    user.golds = (user.golds + (1 * user.machines))
    golds.textContent = user.golds
}
const autoCount = setInterval(autoClick, 1000);
const buyPa = document.getElementById('item4')

buyPa.addEventListener('click', buyAutopickAxe)
