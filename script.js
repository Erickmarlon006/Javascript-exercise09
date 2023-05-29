var listaDeNomes = [];
var contadeiro = 0;
var idades = [];
var contadeiro2 = 0;
var nomes = [];
var contadeiro3 = 0;



while(true){
    listaDeNomes[contadeiro] = new Array();

    listaDeNomes[contadeiro]['nome'] = prompt("Insira o nome de uma pessoa que queira dar os dados: ");
    while (listaDeNomes[contadeiro]['nome'].length < 2){
        alert("Insira um nome válido");
        listaDeNomes[contadeiro]['nome'] = prompt("Insira o nome de uma pessoa que queira dar os dados: ")

    }
    listaDeNomes[contadeiro]['data-de-nascimento'] = prompt("Insira a data de nascimento com / ");
    while (listaDeNomes[contadeiro]['data-de-nascimento'].length < 1 || listaDeNomes[contadeiro]['data-de-nascimento'].length > 12 ){
        listaDeNomes[contadeiro]['data-de-nascimento'] = prompt("Insira a data de nascimento com / ");
    }

    var dataNascimento = listaDeNomes[contadeiro]['data-de-nascimento'].split('/').reverse().join('-');
    var idade = new Date() - new Date(dataNascimento);
    var idadeAnos = idade / 31536000000;
    var mês = new Date().getMonth() / (new Date(dataNascimento).getMonth() + 1);
    
    if(mês < 1){
        idadeAnos = idadeAnos - 1;
    }
    listaDeNomes[contadeiro]['idade'] = idadeAnos.toFixed(0);
    idades[contadeiro2] = new Array()
    idades[contadeiro2] = listaDeNomes[contadeiro]['idade'];
    
    nomes[contadeiro3] = new Array();
    nomes[contadeiro3] = listaDeNomes[contadeiro]['nome'];
    
    console.log(listaDeNomes[contadeiro]['nome']);
    console.log(listaDeNomes[contadeiro]['data-de-nascimento']);
    console.log(dataNascimento);
    console.log(listaDeNomes[contadeiro]['idade']);


    if(!confirm("Deseja adicionar mais pessoas a lista? ")){
        break;
    }
    
    contadeiro++;
    contadeiro2++;  
    contadeiro3++;
}
console.log(...idades);
console.log(...nomes);

var maiorIdade = Math.max(...idades);
var menorIdade = Math.min(...idades);

console.log(maiorIdade);
console.log(menorIdade);

var posiçãoMaiorIdade = idades.indexOf(maiorIdade.toString());
var posiçãoMenorIdade = idades.indexOf(menorIdade.toString());

console.log(posiçãoMaiorIdade);
console.log(posiçãoMenorIdade);

var pessoaMaisVelha = nomes[posiçãoMaiorIdade]; 
var pessoaMaisNova = nomes[posiçãoMenorIdade];

console.log(pessoaMaisVelha);
console.log(pessoaMaisNova);
    
