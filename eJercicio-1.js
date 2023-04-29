let mentors = [
    ["Naomi", "López"],
    ["Israel", "Salinas"],
    ["Charles", "Silva"],
    ["Rose", "Ortega"],
  ];
  let koders = [
    {
      name: "Verónica Cruz",
      scores: {
        html: 10,
        css: 9.2,
        js: 9.7,
        bootstrap: 8,
      },
      isGraduated: true,
    },
    {
      name: "Miguel Aceves",
      scores: {
        html: 8.7,
        css: 10,
        js: 8.3,
        bootstrap: 9.8,
      },
      isGraduated: false,
    },
    {
      name: "Antonio Cano",
      scores: {
        html: 9.2,
        css: 10,
        js: 10,
        bootstrap: 6.5,
      },
      isGraduated: false,
    },
  ];

/*
  1.- Necesito una lista que contenga los nombres completos de los mentores ordenados alfabéticamente  
  
  ***********************************************************
  
  Análisis....
  ¿Qué necesito hacer?
    - Crear una lista
    - Saber que es una lista
    - Meter los nombres completos y ordenados alfabéticamente

      - Lista
        Una lista es un arreglo indexado de valores, en otras palabras una lista es un Array

      -¿Cómo creo una lista en JavaScript?
        Necesito asignar a una variable el tipo array o lista
          let lista = []; -> esto ya es un array de nombre lista

      -¿Cómo meto los items o elementos del array en el nuevo array de manera ordenada?
          Primero ordeno todos los elementos del array alfabéticamente y luego los metó en el nuevo array

  *****-----------------------------------------
  Listas " PARA (o listas TO) " /////"TO DO list" ////

    Cada lsita para representa una tarea o funcion y la elaboración de estas listas me ayuda a identidentificar cuantas funsiones necesito para resolver el problema.


    "Para" regresar los nombres de la LISTA de mentores un una lista odernada de manera alfabética necesitamos, ORDENAR los nombres en la forma solicitada y METERLOS en el nuevo array

    Lo anterior lo puedo descomponer de la siguiente forma
    
   "Para" regresar los nombres de la LISTA de mentores un una lista odernada de manera alfabética necesitamos, ORDENAR los nombres en la forma solicitada y METERLOS en el nuevo array

   "Para" ordenar los elementos de la lista de mentores aplicaria el metodo sort() que me devuelve la lista ordenada

  "Para" meter los elementos ordenados en la lista de lementos ordenados aplicaria el metodo push(), que adjunta un nuevo elemento al final del array.

*/
const getFullNames = (mentorsArray) =>{
  let fullName = [];
  for(let i = 0; i < mentorsArray.length; i++){
    let name = mentorsArray[i][0];
    let lastName = mentorsArray[i][1];
    fullName.push(`${name} ${lastName}`)
  }  
  return fullName.sort();
}
let pruebe1 = getFullNames(mentors);
console.log(pruebe1);
// mentorsArray[0] = ["Naomi", "López"] -> esta variable tiene un tipo array
// ["Naomi", "López"][0] = "Naomi" -> esta variable es de tipo string
// mentorsArray[0][0] = ["Naomi", "López"][0] = "Naomi"



