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