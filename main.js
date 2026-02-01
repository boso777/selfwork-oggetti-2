// Crea un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:

// mostrare tutti i contatti dell’agenda
// mostrare un singolo contatto
// eliminare un contatto dall’agenda
// aggiungere un nuovo contatto
// modificare un contatto esistente  

// ogni contatto avra nome e numero di telefono quindi sarà un oggetto con delle proprietà


let agenda = {

   contacts: [
      {nome: 'Nicola', telefono: 3331111111}, // 0
      {nome: 'Lorenzo', telefono: 3332222222}, // 1
      {nome: 'Paola', telefono: 3333333333}, // 2
      {nome: 'Jenny', telefono: 3334444444} // 3
  ],
  


//mostra tutti i contatti ciclando un console.log su ogni oggetto

  showAllContacts: function(){
    this.contacts.forEach((contact) => {console.log(contact)});
  },


  //metodo per cercare un contatto attraverso nome o numero di telefono altrimenti restituisce errore, cerca all'interno di ogni oggetto dell'array contatti se la chiave nome o telefono corrispondono a contact_to_find e in seguito se trova una corrispondenza, salva il l'oggetto nella variabile contact_finded, se il risultato è diverso da undefined viene stampato, altriemnti se non trova nulla quindi il risultato sarà undefined, stampa messaggio di errore
  
  showContact : function(contact_to_find){

   let contact_finded = this.contacts.find((contact) => contact.nome === contact_to_find || contact.telefono === contact_to_find);
  
   if(contact_finded != undefined)
    {console.log(contact_finded);
    }else{
      console.log(`Contatto non presente in rubrica!`);
    }    
  },

  //metodo per aggiungere un contatto con il metodo push, il contatto deve essere un oggetto

  addContact: function(new_name, new_number){

    this.contacts.push({nome: new_name, telefono: new_number});

    
  },

  //metodo per rimuovere un contatto inserendo il nome o il numero di telefono, cerca l'indice dell'oggetto con il metodo findindex(che cerca nelle chiavi di ogni oggetto nome o telefono il valore corrispondente a quello indicato) e in seguito con splice rimuove l'oggetto con quell'indice se index e maggiore o uguale a 0, se finindex non trova nulla restituisce undefined cioè -1 e di conseguenza la condizione alla fine del codice restituisce errore;

  eraseContact: function(contact_to_remove){

    
    let index = this.contacts.findIndex((contact) => contact.nome === contact_to_remove || contact.telefono === contact_to_remove);
  
    if (index >= 0){
    this.contacts.splice(index, 1)
  }else{
    console.log('il contatto da te inserito non è presente in rubrica');
    
  }
  

  
  },


  //metodo che modifica i dati dentro un oggetto contenuto nell'array contacts, inizia importando i dati per : indicare l'oggetto da modifcare ( che viene puntato attraverso nome o numero di telefono) , il nuovo nome da inserire, il nuovo numero di telefono.
  //in seguito con contact_finded trova l'ogetto che all'interno ha una delle due chiavi nome o telefono con valore corrispondente a original_contact per poi sostituirle con mod_name o mod_number, solo se inseriti, altrimenti rimangono invariati (contact_finded.nome = mod_name || contact_finded.name).

  modifyContact: function(original_contact, mod_name, mod_number){

    let contact_finded = this.contacts.find((contact) => contact.nome === original_contact || contact.telefono === original_contact);
    
    if(contact_finded != undefined)
      {contact_finded.nome = mod_name || contact_finded.nome;
        contact_finded.telefono = mod_number || contact_finded.telefono;
  }else{
    console.log('il contatto da te selezionato non esiste');
  }



}

}



agenda.showAllContacts();

agenda.showContact('Nicola');

agenda.eraseContact(`Jenny`);

agenda.addContact(`Mario`,33333);

agenda.showAllContacts();

agenda.modifyContact(`Mario`, `Luca`);

agenda.showAllContacts();
