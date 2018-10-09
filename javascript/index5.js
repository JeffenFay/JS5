//Fonction permettant le calcul et renvoi du résultat
function calculus(primeNumber, secNumber){
  //Math.trunc() prend la partie entière du nombre décimal qui a été converti du texte aux nombres via parseFloat()
  primeNumber = Math.trunc(parseFloat(primeNumber));
  secNumber = parseFloat(secNumber);
  //Multiplication
  product = primeNumber*secNumber;
  //renvoi du résultat de la multiplication
  return product;
}
//Contrôle des données et affichage via la fonction Calculus()
function displayResult(){
  // On récupère les éléments saisis dans le formulaire
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  // Déclaration de constantes définissant la Regex pour [le nom et le prénom] et la ville à part
  const regexFirstScnd =  /^[-+]?[0-9]+(\.[0-9]+)?([eE][-+]?[0-9]+)?$/;
  // Condition gérant les erreurs de saisie
  if(!regexFirstScnd.test(firstNumber)||firstNumber==null){
    //PAS BON : Premier nombre
    alert("Erreur de saisie : Peu importe ce que vous avez mis mais "+firstNumber+", c'est pas bon !");
  }else if((!regexFirstScnd.test(secondNumber)||secondNumber==null)){
    //PAS BON : Deuxième nombre
    alert("Erreur de saisie : Peu importe ce que vous avez mis mais "+secondNumber+", c'est pas bon !");
  }else{
    //TOUT BON !
    var resultat = calculus(firstNumber,secondNumber);
    alert("Et le résultat est : "+resultat);
  }
};
