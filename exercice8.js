let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

let nomCorrige = nom.trim()
if (nomCorrige === "") nomCorrige = "Inconnu"

let ageNum = parseInt(age)
let ageValide = !(Number.isNaN(ageNum) || ageNum <= 0)

let emailValide = email.includes("@") && email.indexOf(".", email.indexOf("@")) !== -1

let score = parseInt(scoreJeu)
if (Number.isNaN(score)) score = 0

let admin = (estAdmin === "true")

let connexion = derniereConnexion ?? "Jamais connecté"

let nbConn = Number(nombreConnexions)
let texteConn = nbConn === 0 ? "Aucune connexion" : nbConn

console.log("===== RAPPORT UTILISATEUR =====")
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)')
console.log("age              : " + ageNum + (ageValide ? " (valide)" : " (invalide)"))
console.log('email            : "' + email + '" (' + (emailValide ? "valide" : "invalide : pas de point après @") + ')')
console.log('scoreJeu         : ' + score + ' (extrait depuis "' + scoreJeu + '")')
console.log("estAdmin         : " + admin + ' (attention : Boolean("false") = true)')
console.log('derniereConnexion: "' + connexion + '" (valeur par défaut via ??)')
console.log('nombreConnexions : "' + texteConn + '"')
console.log("================================")