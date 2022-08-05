const alunos = [
	{
		nome: 'Marcos',
		nota: 4,
		turma: '1B',
	},
	{
		nome: 'Thania',
		nota: 7,
		turma: '1B',
	},
	{
		nome: 'Jannet',
		nota: 10,
		turma: '2C',
	},
];


function alunosAprovados(alunos, media){
    let aprovados = [];

    for(let i = 0; i < alunos.length; i++) {

       const {nota, nome} = alunos[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados
}

console.log(alunosAprovados(alunos, 5))