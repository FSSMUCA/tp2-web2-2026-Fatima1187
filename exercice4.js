let diff = 0

let a,b

a=0; b=""
console.log(a+" == "+JSON.stringify(b)+" -> "+(a==b)+" | "+a+" === "+JSON.stringify(b)+" -> "+(a===b))
if((a==b)!=(a===b)) diff++

a=0; b="0"
console.log(a+" == "+b+" -> "+(a==b)+" | "+a+" === "+b+" -> "+(a===b))
if((a==b)!=(a===b)) diff++

a=0; b=false
console.log(a+" == "+b+" -> "+(a==b)+" | "+a+" === "+b+" -> "+(a===b))
if((a==b)!=(a===b)) diff++

a=""; b=false
console.log(JSON.stringify(a)+" == "+b+" -> "+(a==b)+" | "+JSON.stringify(a)+" === "+b+" -> "+(a===b))
if((a==b)!=(a===b)) diff++

a=null; b=undefined
console.log(a+" == "+b+" -> "+(a==b)+" | "+a+" === "+b+" -> "+(a===b))
if((a==b)!=(a===b)) diff++

a=null; b=false
console.log(a+" == "+b+" -> "+(a==b)+" | "+a+" === "+b+" -> "+(a===b))
if((a==b)!=(a===b)) diff++

a=NaN; b=NaN
console.log("NaN == NaN -> "+(a==b)+" | NaN === NaN -> "+(a===b))
if((a==b)!=(a===b)) diff++

a=1; b="1"
console.log(a+" == "+b+" -> "+(a==b)+" | "+a+" === "+b+" -> "+(a===b))
if((a==b)!=(a===b)) diff++

a=" \t\n "; b=0
console.log('" \\t\\n " == 0 -> '+(a==b)+' | " \\t\\n " === 0 -> '+(a===b))
if((a==b)!=(a===b)) diff++

console.log("---")
console.log(diff+" paire(s) où == et === donnent des résultats différents")