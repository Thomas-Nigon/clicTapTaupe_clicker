<<<<<<< HEAD
// FUNCTION OPEN AND CLOSE MENU MOBILE
const menuBtn = document.getElementById('menuButton')
const rightMenu = document.querySelector('.rightMenu')
let open = false
function openMenu(){
    console.log('entering open menu')
if (open == true){
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

=======
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
>>>>>>> 5aaf2298b675bb526330fd84290cdc7e9a81cd2f
