import { db } from '../firebase/persistencia.js';
import { collection, getDocs, query } from 'firebase/firestore';

const botaoMostrarLista = document.getElementById('mostrar-alunos');

botaoMostrarLista.addEventListener('click', async () => {
    try {
        // Cria uma referência à coleção 'alunos'
        const alunosRef = collection(db, "alunos");

        // Cria uma query para esta coleção
        const q = query(alunosRef);

        // Executa a query e obtém os documentos
        const querySnapshot = await getDocs(q);

        // Seleciona o elemento onde a lista de alunos será exibida
        const listaAlunos = document.getElementById("lista-alunos");

        // Limpa o conteúdo anterior da lista
        listaAlunos.innerHTML = '';

        // Itera sobre cada documento retornado pela query
        querySnapshot.forEach((doc) => {
            const aluno = doc.data();
            const div = document.createElement("div");
            div.innerHTML = `<strong>Nome:</strong> ${aluno.nome} <br>
                            <strong>Nota 1:</strong> ${aluno.nota1} <br>
                            <strong>Nota 2:</strong> ${aluno.nota2} <br>
                            <strong>Nota 3:</strong> ${aluno.nota3} <br>
                            <strong>Média dos Exercícios:</strong> ${aluno.mediaExercicios} <br>
                            <strong>Média Final:</strong> ${aluno.mediaFinal} <br><br>`;
            listaAlunos.appendChild(div);
        });
    } catch (error) {
        console.error("Erro ao recuperar os dados: ", error);
    }
});