// Crea un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:

// mostrare tutti i contatti dell’agenda
// mostrare un singolo contatto
// eliminare un contatto dall’agenda
// aggiungere un nuovo contatto
// modificare un contatto esistente  

// ogni contatto avra nome e numero di telefono quindi sarà un oggetto con delle proprietà


let agenda = {

   contacts: [
      {nome: 'Nicola', telefono: '3331111111'}, // 0
      {nome: 'Lorenzo', telefono: '3332222222'}, // 1
      {nome: 'Paola', telefono: '3333333333'}, // 2
      {nome: 'Jenny', telefono: '3334444444'} // 3
  ],


  showAllContacts: function(){
    this.contacts.forEach((contact) => {console.log(contact)});
  },

  showContact : function(contact, name){


    
  }
  



}



agenda.showAllContacts();

agenda.showContact(`Nicola`);


console.log(agenda);
