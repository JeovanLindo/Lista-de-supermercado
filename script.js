const send = document.querySelector("#input-send input")


var items = []

send.addEventListener('click', mercadin)


function mercadin(){
    var NomeDoProduto = document.querySelector("input[type=text]").value
    var ValorDoProduto = document.querySelector("input[type=number]").value
    
    items.push({
        nome: NomeDoProduto,
        valor: ValorDoProduto
    })

    

    var ListaProdutos = document.querySelector("#produtos")
    var Total = document.querySelector("#texto")
    
    var soma = 0
    

    ListaProdutos.innerHTML = ""

    items.map(function(val){

        soma+=parseFloat(val.valor)
        ListaProdutos.innerHTML+=`
        <div id="produto">
            <h4>${val.nome}</h4>
            <p>R$${val.valor}</p>
        </div>
    `
        Total.innerHTML=`
            <h3>TOTAL : </h3>
            <p>R$${soma.toFixed(2)}</p>
        `
    })

       
}

const limpar = document.querySelector("#limpar input[type=button]")

limpar.addEventListener('click', ()=>{

    items=[]


    var ListaProdutos = document.querySelector("#produtos").innerHTML=("")
    var Total = document.querySelector("#texto").innerHTML=`<h3>TOTAL : </h3>
    <p>R$0</p>`
})









