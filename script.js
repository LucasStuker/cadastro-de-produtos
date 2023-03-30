var produto = new Produto()

class Produto{
    constructor( ){
        this.id = 1;
        this.arrayProdutos =[];
    }
    Adicionar(){
        let produto = this.LerDados()
        console.log(produto)
        if (this.Validar(produto)== true){
            this.Salvar(produto)
        }
    }
    LerDados (){
        let produto ={}

        produto.id = this.id
        produto.nomeProduto = document.getElementById('pdnome')
        produto.precoProduto = document.getElementById('pdpreco')
        return produto
         }
    Validar(produto) {
        let msg = '';
        
        if (produto.nomeProduto == ''){
            msg += 'Por favor, insira corretamente o nome do produto \n'
            }
        if (produto.nomePreco == ''){
            msg += 'Por favor, insira corretamente o preco do produto \n'
               }
        if (msg != '') {
            alert(msg)
            return false
            } 
            return true
    }
    Salvar(produto){
        this.arrayProdutos.push(produto)
        this.id++;
    }
    }



