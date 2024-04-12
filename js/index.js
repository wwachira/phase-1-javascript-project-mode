functionnaireOpposite(item) {
    item.style.display = "inline-block"
}

document.getElementById('dough').addEventListener("click", function() {
    dn.forEach(functionnaireOpposite)
    sweet.forEach(functionnaire)
    cake.forEach(functionnaire)
    pizza.forEach(functionnaire)
})

document.getElementById('sweetbutton').addEventListener("click", function() {
    sweet.forEach(functionnaireOpposite)
    dn.forEach(functionnaire)
    cake.forEach(functionnaire)
    pizza.forEach(functionnaire)
})

document.getElementById('pizzabutton').addEventListener("click", function() {
    pizza.forEach(functionnaireOpposite)
    sweet.forEach(functionnaire)
    cake.forEach(functionnaire)
    dn.forEach(functionnaire)
})

document.getElementById('cakebutton').addEventListener("click", function() {
    cake.forEach(functionnaireOpposite)
    sweet.forEach(functionnaire)
    dn.forEach(functionnaire)
    pizza.forEach(functionnaire)
})

document.getElementById('All').addEventListener("click", function() {
    sweet.forEach(functionnaireOpposite)
    dn.forEach(functionnaireOpposite)
    pizza.forEach(functionnaireOpposite)
    cake.forEach(functionnaireOpposite)
})