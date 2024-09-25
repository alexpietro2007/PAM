//objeto
var aluno1 = {
    matricula: 3242432,
    nome: 'Thayna',
    curso: 'JavaScript',
    ativo: true
}

var aluno2 ={
    matricula: 230503,
    nome: 'Alex Pietro',
    curso: 'Java, node, Sql Serve, github, JavaScript',
    ativo: true
}
aluno2.dataNascimento = "30/08/2007"

console.log(aluno2)
console.log(aluno2.dataNascimento)
delete aluno2.dataNascimento

console.log(aluno1.nome)

//Criando atributo
aluno1.dataNascimento = '30/08/1000'
console.log(aluno1.dataNascimento)
console.log(aluno1)

//Deletando atributo
delete aluno1.dataNascimento;
console.log(aluno1)

// Undefined e null
var x;
var y = null;

//Arrays
var frutas = ['Banana', 'Maça', 'Laranja']

