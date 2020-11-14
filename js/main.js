// Quando la pagina ha terminato di caricarsi
$(document).ready(function() {

  const cats = [{
      name: 'Adam',
      age: 0.3,
      color: '#00FFFF',
      gender: 'male'
    },
    {
      name: 'Emily',
      age: 0.8,
      color: '#F700FF',
      gender: 'female'
    },
    {
      name: 'Willoby',
      age: 1.3,
      color: '#FF6600',
      gender: 'male'
    },
    {
      name: 'Poppy',
      age : 0.2,
      color: '#00FF00',
      gender: 'female'
    },
  ]

  let catsEl = document.getElementById("cats");
  let cont = 0;
  //ciclo l'array e inserisco sull'HTML
  cats.forEach((element) => {

    //creo la classe cat
    let cat = document.createElement("div");
    cat.classList.add("col-lg-12");
    catsEl.appendChild(cat);
    //creo la classe cat color per l'assegnamento del colore tramite numerazione
    let catColor = document.createElement("span");
    catColor.classList.add(cont);
    cat.appendChild(catColor);
    catColor.innerHTML += '<i class="fas fa-2x fa-cat"></i>';
    catColor.style.color = element.color;
    //creo la classe per il nome
    let catName = document.createElement("span");
    cat.appendChild(catName);
    catName.innerHTML += element.name;
    cont++;
  });

  //separo in due l'array in base al genere

  const femaleCats = cats.filter((el) => {
    if(el.gender == "female"){

      let newel = el;
      return newel;

    }
  });
  const maleCats = cats.filter((el) => {
    if(el.gender == "male"){

      let newel = el;
      return newel;

    }
  });

  let catsSeparetedEl = document.getElementById("catsSep");


  //creo la classe female
  let catFemale = document.createElement("div");
  catFemale.classList.add("col-6");
  catsSeparetedEl.appendChild(catFemale);

  femaleCats.forEach((element) => {

    //creo la classe cat
    let cat = document.createElement("div");
    catFemale.appendChild(cat);
    //creo la classe cat color per l'assegnamento del colore tramite numerazione
    let catColor = document.createElement("span");
    catColor.classList.add(cont);
    cat.appendChild(catColor);
    catColor.innerHTML += '<i class="fas fa-2x fa-cat"></i>';
    catColor.style.color = element.color;
    //creo la classe per il nome
    let catName = document.createElement("span");
    cat.appendChild(catName);
    catName.innerHTML += element.name;
    //creo la classe per l'assegnazione del sesso
    let catGender = document.createElement("span");
    cat.appendChild(catGender);
    catGender.innerHTML += '<i class="fas fa-2x fa-venus"></i>';
    catGender.style.color = "pink";
    catGender.style.opacity = element.age;
    cont++;
  });
  //creo la classe male
  let catMale = document.createElement("div");
  catMale.classList.add("col-6");
  catsSeparetedEl.appendChild(catMale);

  maleCats.forEach((element, index) => {

    //creo la classe cat
    let cat = document.createElement("div");
    catMale.appendChild(cat);
    //creo la classe cat color per l'assegnamento del colore tramite numerazione
    let catColor = document.createElement("span");
    catColor.classList.add(cont);
    cat.appendChild(catColor);
    catColor.innerHTML += '<i class="fas fa-2x fa-cat"></i>';
    catColor.style.color = element.color;
    //creo la classe per il nome
    let catName = document.createElement("span");
    cat.appendChild(catName);
    catName.innerHTML += element.name;
    //creo la classe per l'assegnazione del sesso
    let catGender = document.createElement("span");
    cat.appendChild(catGender);
    catGender.innerHTML += '<i class="fas fa-2x fa-mars"></i>';
    catGender.style.color = "blue";
    catGender.style.opacity = element.age;
    cont++;
  });
  // combino i due array di oggetti in uno unico
  const catCombined = [...femaleCats, ...maleCats];

  let catsCombEl = document.getElementById("catsComb");

  //ciclo l'array e inserisco nuovamente tutto sull'HTML
  catCombined.forEach((element) => {

    //creo la classe cat
    let cat = document.createElement("div");
    cat.classList.add("col-lg-12");
    catsCombEl.appendChild(cat);
    //creo la classe cat color per l'assegnamento del colore tramite numerazione
    let catColor = document.createElement("span");
    catColor.classList.add(cont);
    cat.appendChild(catColor);
    catColor.innerHTML += '<i class="fas fa-2x fa-cat"></i>';
    catColor.style.color = element.color;
    //creo la classe per il nome
    let catName = document.createElement("span");
    cat.appendChild(catName);
    catName.innerHTML += element.name;
    //creo la classe per l'assegnazione del sesso
    let catGender = document.createElement("span");
    cat.appendChild(catGender);
    if(element.gender == "male"){
      catGender.innerHTML += '<i class="fas fa-2x fa-mars"></i>';
      catGender.style.color = "blue";
      catGender.style.opacity = element.age;
    } else{
      catGender.innerHTML += '<i class="fas fa-2x fa-venus"></i>';
      catGender.style.color = "pink";
      catGender.style.opacity = element.age;
    }
    cont++;
  });



});
