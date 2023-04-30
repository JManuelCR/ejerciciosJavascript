/**
     4.- Necesito conocer el promedio grupal de cada materia impartida en el bootcamp
        html -> 9
        css -> 10
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

const getGroupSubjectsAverage = kodersList => {
    let allScores = [];
    let htmlAverage = [];
    let cssAverage = [];
    let jsAverage = [];
    let bootstrapAverage = [];
    let globalScores = [];

    kodersList.forEach(scores => {
        allScores.push(scores.scores)
    });
    allScores.forEach(subject => {
        htmlAverage.push(subject.html)
        cssAverage.push(subject.css)
        jsAverage.push(subject.js)
        bootstrapAverage.push(subject.bootstrap)
    })
    let globalHtml = htmlAverage.reduce((sum, score) => sum +score)/htmlAverage.length
    let globalCss = cssAverage.reduce((sum, score) => sum +score)/cssAverage.length
    let globalJs = jsAverage.reduce((sum, score) => sum +score)/jsAverage.length
    let globalBootstrap = bootstrapAverage.reduce((sum, score) => sum +score)/bootstrapAverage.length

    globalScores.push(globalHtml)
    globalScores.push(globalCss)
    globalScores.push(globalJs)
    globalScores.push(globalBootstrap)
    return globalScores;
}

let prueba1= getGroupSubjectsAverage(koders);
console.log(prueba1);