/*Mail*/
//crea una lista di indirizzi, che possono accedere
const emailsList = ['martymcfly@characters.domain', 'docbrown@characters.domain', 'georgemcfly@characters.domain', 'bifftannen@characters.domain']
//chiedi a user la sua mail
const userMail = prompt('Inserisci la tua email:');
//controlla se e nella lista
for (let i=0; i <= emailsList.length; i++){
    const thisEmail = emailsList[i];
  //se si stampa un messaggio in base all'esito
  //altrimenti stampa esito negativo
  if (userMail != thisEmail){
    console.log(userMail);
    document.querySelector('h1').innerHTML = 'Indirizzo mail non valido!';
  }else{
    console.log(userMail);
    document.querySelector('h1').innerHTML = 'Grande Giove!';
  }
}
 


/*Gioco dei dadi*/
//creare una variabile per pc con num casuale
  //mathrandom
//creare una variabile per user con num casuale
  //mathrandom
//se user ha n maggiore stampa messaggio 'hai vinto'
 //if
//altrimenti stampa messaggio 'ha vinto il computer'
 //else