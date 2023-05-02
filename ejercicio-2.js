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

/**
 2.- Necesito una lista con los nombres y promedios generales de todos los koders
 */

    
 /*
  Con el array koders que contiene objetos, devolver las propiedades name y calcular el promedio de las materia dentro de propiedad scores
*/

const getNameAndAverage = (kodersList) =>  {
    let kodersAndAverage = [];
    for(let i = 0; i < kodersList.length; i++){
        let name = kodersList[i].name; 
        let scoresLength = Object.keys(kodersList[i].scores).length  
        let koderAverage = (kodersList[i].scores.html + kodersList[i].scores.css + kodersList[i].scores.js + kodersList[i].scores.bootstrap) / scoresLength
        kodersAndAverage.push(`El koder ${name} tiene un promedio de ${koderAverage}`) 
    }
    return kodersAndAverage
}

let prueba1 = getNameAndAverage(koders);
console.log(prueba1);


//otra solucion empleando reduce
const getAverageAndName = kodersList =>{
    let koderAndAverageList = [];
    for(let i = 0; i < kodersList.length; i++) {
        let name = "";
        let subjetScores = Object.values(kodersList[i].scores);
        let average = 0;
        name = kodersList[i].name;
        average = subjetScores.reduce((sum, score) => sum + score)/ subjetScores.length;
        koderAndAverageList.push(`El koder ${name} tiene un promedio de ${average}`)         
    }  
    return koderAndAverageList;   
}

let prueba2 = getAverageAndName(koders);
console.log(prueba2);

