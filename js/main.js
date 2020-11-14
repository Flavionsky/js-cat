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

  //ciclo l'array e inserisco sull'HTML
  cats.forEach((element) => {

    //creo la classe cat
    let cat = document.createElement("div");
    cat.classList.add("col-lg-12");
    $("#cats").append(cat);
    //creo la classe cat color per l'assegnamento del colore
    let catColor = document.createElement("span");
    cat.append(catColor);
    catColor.innerHTML += '<i class="fas fa-2x fa-cat"></i>';
    catColor.style.color = element.color;
    //creo la classe per il nome
    let catName = document.createElement("span");
    cat.append(catName);
    catName.innerHTML += element.name;
  });

  //separo in due l'array in base al genere

  const femaleCats = cats.filter((el) => el.gender == "female");

  const maleCats = cats.filter((el) => el.gender == "male");


  //creo la classe female
  let catFemale = document.createElement("div");
  catFemale.classList.add("col-6");
  $("#catsSep").append(catFemale);

  femaleCats.forEach((element) => {

    //creo la classe cat
    let cat = document.createElement("div");
    catFemale.append(cat);
    //creo la classe cat color per l'assegnamento del colore
    let catColor = document.createElement("span");
    cat.append(catColor);
    catColor.innerHTML += '<i class="fas fa-2x fa-cat"></i>';
    catColor.style.color = element.color;
    //creo la classe per il nome
    let catName = document.createElement("span");
    cat.append(catName);
    catName.innerHTML += element.name;
    //creo la classe per l'assegnazione del sesso
    let catGender = document.createElement("span");
    cat.append(catGender);
    catGender.innerHTML += '<i class="fas fa-2x fa-venus"></i>';
    catGender.style.color = "pink";
    catGender.style.opacity = element.age;
  });
  //creo la classe male
  let catMale = document.createElement("div");
  catMale.classList.add("col-6");
  $("#catsSep").append(catMale);

  maleCats.forEach((element) => {

    //creo la classe cat
    let cat = document.createElement("div");
    catMale.append(cat);
    //creo la classe cat color per l'assegnamento del colore
    let catColor = document.createElement("span");
    cat.append(catColor);
    catColor.innerHTML += '<i class="fas fa-2x fa-cat"></i>';
    catColor.style.color = element.color;
    //creo la classe per il nome
    let catName = document.createElement("span");
    cat.append(catName);
    catName.innerHTML += element.name;
    //creo la classe per l'assegnazione del sesso
    let catGender = document.createElement("span");
    cat.append(catGender);
    catGender.innerHTML += '<i class="fas fa-2x fa-mars"></i>';
    catGender.style.color = "blue";
    catGender.style.opacity = element.age;
  });
  // combino i due array di oggetti in uno unico
  const catCombined = [...femaleCats, ...maleCats];

  //ciclo l'array e inserisco nuovamente tutto sull'HTML
  catCombined.forEach((element) => {

    //creo la classe cat
    let cat = document.createElement("div");
    cat.classList.add("col-lg-12");
    $("#catsComb").append(cat);
    //creo la classe cat color per l'assegnamento del colore
    let catColor = document.createElement("span");
    cat.append(catColor);
    catColor.innerHTML += '<i class="fas fa-2x fa-cat"></i>';
    catColor.style.color = element.color;
    //creo la classe per il nome
    let catName = document.createElement("span");
    cat.append(catName);
    catName.innerHTML += element.name;
    //creo la classe per l'assegnazione del sesso
    let catGender = document.createElement("span");
    cat.append(catGender);
    if(element.gender == "male"){
      catGender.innerHTML += '<i class="fas fa-2x fa-mars"></i>';
      catGender.style.color = "blue";
      catGender.style.opacity = element.age;
    } else{
      catGender.innerHTML += '<i class="fas fa-2x fa-venus"></i>';
      catGender.style.color = "pink";
      catGender.style.opacity = element.age;
    }
  });
});
