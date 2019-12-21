
const templeconst = '/Finalproject/templJSON.json';


  fetch(templeconst)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const temples = jsonObject['temples'];
    for (let i = 0; i < temples.length; i++ ) {
        if (temples[i].name == 'Payson' || temples[i].name == 'San Diego' || temples[i].name == 'Cedar City') {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        h2.textContent = temples[i].name;
        card.appendChild(h2);
        document.querySelector('div.temp').appendChild(card);

        let p = document.createElement('p');
        p.textContent = temples[i].history; 
        card.appendChild(p);
        document.querySelector('div.temp').appendChild(card);

        let image = document.createElement('img');
        image.setAttribute('src', "/Finalproject/images/" + temples[i].photo);
        card.appendChild(image);
        document.querySelector('div.temp').appendChild(card);

    }
}
});

const tempA = '/Finalproject/templJSON.json';

fetch(tempA)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject); 
  const templess = jsonObject['temples'];
  for (let i = 0; i < templess.length; i++ ) {
      if (templess[i].name == 'Dallas' || templess[i].name == 'Hartford' || templess[i].name == 'Tucson' || templess[i].name == 'Manti') {
      let tempB = document.createElement('section');
      let h2 = document.createElement('h2');
      h2.textContent = templess[i].name;
      tempB.appendChild(h2);
      document.querySelector('div.tempA').appendChild(tempB);
      
      let image = document.createElement('img');
      image.setAttribute('src', "/Finalproject/images/" + templess[i].photo);
      tempB.appendChild(image);
      document.querySelector('div.tempA').appendChild(tempB);
      
      let address = document.createElement('h3');
      address.textContent = 'Address: ' + templess[i].address;
      tempB.appendChild(address);
      document.querySelector('div.tempA').appendChild(tempB);

      let pNumber = document.createElement('h3');
      pNumber.textContent = 'Phone Number: ' + templess[i].telephone;
      tempB.appendChild(pNumber);
      document.querySelector('div.tempA').appendChild(tempB);

      let p = document.createElement('p');
      p.textContent = 'A Brief History: ' + templess[i].history; 
      tempB.appendChild(p);
      document.querySelector('div.tempA').appendChild(tempB);

      let servL = document.createElement('ul');

      for(k=0; k<templess[i].services.length; k++) {
          let serv = document.createElement('li');
          serv.textContent = templess[i].services[k];
          servL.appendChild(serv);
      }
      document.querySelector('div.tempA').appendChild(servL);

      let osch = document.createElement('ul');

      for(j=0; j<templess[i].oSchedule.length; j++) {
          let osched = document.createElement('li');
          osched.textContent = templess[i].oSchedule[j];
          osch.appendChild(osched);
      }
      document.querySelector('div.tempA').appendChild(osch);
      
      let ssch = document.createElement('ul');

      for(c=0; c<templess[i].sSchedule.length; c++) {
          let ssched = document.createElement('li');
          ssched.textContent = templess[i].sSchedule[c];
          ssch.appendChild(ssched);
      }
      document.querySelector('div.tempA').appendChild(ssch);

      let clos = document.createElement('ul');

      for(g=0; g<templess[i].closure.length; g++) {
          let closed = document.createElement('li');
          closed.textContent = templess[i].closure[g];
          clos.appendChild(closed);
      }
      document.querySelector('div.tempA').appendChild(clos);


     

  }
}
});

