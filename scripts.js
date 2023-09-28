const stone = document.querySelector('.roc');
const pickaxe = document.querySelector('.pickaxe');
const explose = document.querySelector('.explose');

function testclick() {
    pickaxe.classList.add('active')
    console.log("j'ai clicker le caillou !")
    
}
stone.addEventListener('click', testclick)


