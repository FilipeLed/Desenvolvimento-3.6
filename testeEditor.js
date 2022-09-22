const textEditor = require('./Editor');

// algumas ações para adicionar ao array de observadores
function Observer01(data){ 
  let observer = data 
  console.log(observer)
} 

function Observer02(data){ 
  let observer = data 
  console.log(observer)
}

function Observer03(data){ 
  let observer = data 
  console.log(observer)
}

//Texto a ser modificado
const input = `Amor é fogo que arde sem se ver;
É ferida que dói e não se sente;
É um contentamento descontente
É dor que desatina sem doer;
É um não querer mais que bem querer;
É solitário andar por entre a gente;
É nunca contentar-se de contente;
É cuidar que se ganha em se perder;
É querer estar preso por vontade;
É servir a quem vence, o vencedor;
É ter com quem nos mata lealdade.
Mas como causar pode seu favor
Nos corações humanos amizade,
Se tão contrário a si é o mesmo amor?`;
  
  
let texto1 = new textEditor(input);

//inscrevendo as funções
texto1.subscribe(Observer01)
texto1.subscribe(Observer02)
texto1.subscribe(Observer03)

//inserir linha ao texto
texto1.insertLine(8,"____X_____X______X______X__");

//Cancelando a assinatura das funções
texto1.unsubscribe(Observer02)
texto1.unsubscribe(Observer03)

//remover linha ao texto
texto1.removeLine(8);



