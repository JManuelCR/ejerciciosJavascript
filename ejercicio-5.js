/**
     5.- Necesito saber cúal es el koder con el promedio más alto y cúal el que tiene el promedio más bajo
 */
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

  const getAverageAndName = kodersList =>{
    let koderAndAverageList = [];
    let averages = [];
    let lowestKoder;
    let hightestKoder;
    for(let i = 0; i < kodersList.length; i++) {
        let name = "";
        let subjetScores = Object.values(kodersList[i].scores);
        let average = 0;
        name = kodersList[i].name;
        average = subjetScores.reduce((sum, score) => sum + score)/ subjetScores.length;
        koderAndAverageList.push(` ${name}, ${average}`)  
        averages.push(`${average}`)       
    }  
    let lowestAverege = averages.sort((a,b) => a-b)[0];
    let higthestAverage = averages.sort((a,b) => b-a)[0];
    for(let i = 0; i < koderAndAverageList.length; i++){
      if(koderAndAverageList[i].includes(`${lowestAverege}`)){
       lowestKoder = koderAndAverageList[i]
      }else if(koderAndAverageList[i].includes(`${higthestAverage}`)){
        hightestKoder = koderAndAverageList[i]
      }
    }
    return `El koder con el promedio más bajo: ${lowestKoder}\nEl koder con el promedio más alto: ${hightestKoder}`
  }

let prueba1 = getAverageAndName(koders);
console.log(prueba1)
