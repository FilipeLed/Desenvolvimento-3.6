class Editor {
    constructor(texto) {
        this.texto = texto;
        this.observers = [];
      }
  
  }
  
  class TextEditor extends Editor {
  
    
    numeroLinhas() {
        this.linhasVetor = this.texto.split(/\r\n|\r|\n/);
        this.linhasTamanho = this.linhasVetor.length
        return this.linhasVetor
    }
  
    insertLine(lineNumber,text){
        if (text == "EOF"){
            //pass
        }
        else{
            this.notify("open")
            this.adicionado = this.numeroLinhas()
            this.adicionado.splice(lineNumber, 0, text);
            this.texto = this.adicionado.join('\n')
            this.notify("save")
            console.log(this.texto)
            return this.adicionado.join('\n')
        }
    }
  
    removeLine(lineNumber){
        this.notify("open")
        this.removido = this.numeroLinhas()
        this.removido.splice(lineNumber, 1);
        this.texto = this.removido.join('\n')
        this.notify("save")
        console.log(this.texto)
        return this.removido.join('\n')
    }
  
    subscribe(fn) {
      this.observers.push(fn);
    }
  
    unsubscribe(fnToRemove) {
        this.observers = this.observers.filter( fn => {
            if(fn != fnToRemove)
              return fn
          })
    }
  
    notify(data) {
      this.observers.forEach(observer => observer(data));
    }
  }
module.exports = TextEditor;



