export default class Categorias{
    constructor(){
        this.categorias = [];
    }

    adicionarCategoria(novaCaegoria){
        console.log(this.categorias);
        this.categorias.push(novaCaegoria);
    }
}