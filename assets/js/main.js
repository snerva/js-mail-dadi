/*Mail*/
//crea una lista di indirizzi, che possono accedere
// const emailsList = ['martymcfly@characters.domain', 'docbrown@characters.domain', 'georgemcfly@characters.domain', 'bifftannen@characters.domain']
// //chiedi a user la sua mail
// const userMail = prompt('Inserisci la tua email:');
// //controlla se e nella lista
// for (let i=0; i <= emailsList.length; i++){
//     const thisEmail = emailsList[i];
//   //se si stampa un messaggio in base all'esito
//   //altrimenti stampa esito negativo
//   if (userMail != thisEmail){
//     console.log(userMail);
//     document.querySelector('h1').innerHTML = 'Indirizzo mail non valido!';
//   }else{
//     console.log(userMail);
//     document.querySelector('h1').innerHTML = 'Grande Giove!';
//   }
// }
 


/*Gioco dei dadi*/
//creare una variabile per pc con num casuale
  //mathrandom
 const pcNumber = Math.floor(Math.random() *7);
 console.log(pcNumber);
//creare una variabile per user con num casuale
  //mathrandom
  const userNumber = Math.floor(Math.random() *7);
  console.log(userNumber);
//se user ha n maggiore stampa messaggio 'hai vinto'
 //if
 if (pcNumber < userNumber){
    console.log('hai vinto');
   //altrimenti stampa messaggio 'ha vinto il computer'
 //else
 }else{
    console.log('ha vinto il computer');
 }
