//foctions de la premier methode
let sm;
function somme(a,b){
    return a+b
}
sm = somme(44,2)
console.log(sm)
//fuctions expressions
const some=function (a,b){
    return a + b
}
console.log(some(10,6))
// arrow function
const somm= (a,b)=>{
    return a + b
} 
console.log(somm(33,6))
// arrow function methode 2
const greet= (nom)=>{
    return "bonjour"
}
console.log(greet("feyd")) 

let nomcomplet=(nom,prenom) => {
    let fullnam=nom+""+prenom;
      return fullnam
}
console.log(nomcomplet("meriem","feyd"))
//les expressions lempdas
const jours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi"];
jours.map((item) => {
    if (item === "jeudi"){
        item = item + "*"  + "jour ferie"
    }

    return  console.log(item)
})
console.log(jours)
// exercice
const stagiaire =[
    {nom: "elfakiri",prenom: "mariam",age:18},
    {nom: "kadiri",prenom: "najat",age:20},
    {nom: "saadi",prenom: "hiba", age:58}
]
let nomstagiaire
nomstagiaire = stagiaire.map((info)=> {
   fullname =info['nom']+" " +info['age']
   return fullname
})

console.log(stagiaire)
console.log(nomstagiaire)

































//les fonctions fleche * fihom flech
//local * makat3rfx bra l fonction
// forEtch * catbokli lina 3la liste
//arrow * kanhaydo fuction o kandiro (=>) 
//les fonctions de la deuxieme methode fonction anonime mafihache smya
//nsayfto parametre cankatboha fa ligne lifihe fleche wasste smiya dyal l fonction 
//map * ki retourne une nouvelle iste
//... * kathayd les acolade o kadir ola haja bohdha
//const * bax ta9dar t modifier
// (indice + 1) * bax ybda mn 1
//array hiya liste li khdamine 3liha
// item * hiya liste kolha