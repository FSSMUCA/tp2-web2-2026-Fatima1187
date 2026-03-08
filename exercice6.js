let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

let vars = [nom, age, ville, score, actif]
let noms = ["nom","age","ville","score","actif"]

for (let i = 0; i < vars.length; i++) {
console.log(noms[i]+" ?? \"valeur par défaut\" -> "+(vars[i] ?? "valeur par défaut"))
}

console.log("---")

for (let i = 0; i < vars.length; i++) {
console.log(noms[i]+" || \"valeur par défaut\" -> "+(vars[i] || "valeur par défaut"))
}

console.log("---")

for (let i = 0; i < vars.length; i++) {

let a = vars[i] ?? "valeur par défaut"
let b = vars[i] || "valeur par défaut"

if (a === b) {
console.log(noms[i]+" : ?? et || -> même résultat")
} else {
console.log(noms[i]+" : ?? et || -> résultat différent")
}

}