// un oggetto in js viene rappresentato come una lista NON ordinata, di coppie chiave - valore;

let smartphone = {
  marca: "Xiaomi",
  modello: "Redmi 12 lite",
  prezzo: 500,
  contatti: ["Davide", "Giada", "Giancarlo", "Antonio"],

  chiama: function (nome_chiamato) {

    if(this.contatti.includes(nome_chiamato)){
    console.log(`Sto chiamando ${nome_chiamato}`);
    }else{
        console.log(`contatto non presente in rubrica`);
        
    }

  
},

  showContacts: function () {
    smartphone.contatti.forEach((contatto) => console.log(contatto));
  },

  // ti passo un nome
  aggiungi_contatti: function (nome) {
    this.contatti.push(nome);
  },

  rimuovi_contatto: function (nome_rimosso) {
    let index = this.contatti.indexOf(nome_rimosso);

    if (index == -1) {
      console.log(`Il nome ${nome_rimosso} non è presente in rubrica!`);
    } else {
      this.contatti.splice(index, 1);
      console.log(`${nome_rimosso} è stato cancellato!`);
      
    }
  },
};



smartphone.rimuovi_contatto("Giancarlo");

console.log(smartphone);

smartphone.chiama('Giada')
