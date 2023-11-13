import { db } from '../firebase/persistencia.js';
import { collection, addDoc } from 'firebase/firestore';

const n = document.querySelector("#nome");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const botao = document.getElementById("b1");
const med = document.getElementById("me");
const r = document.getElementById("resp");
const bot2 = document.getElementById("b2")

bot2.addEventListener('click', limpar);
        function limpar(){
            nome.value = "";
            n1.value ="";
            n2.value ="";
            n3.value ="";
            med.value ="";
            r.innerHTML= (`Campos limpos com sucesso!`);
        }


        botao.addEventListener('click', async ()=> {
            let n = nome.value;
            let num1 = Number(n1.value);
            let num2 = Number(n2.value);
            let num3 = Number(n3.value);
            let m = Number(med.value);
            let mf = (num1 + num2 * 2 + num3 * 3 + m)/7;
        
        r.innerHTML=`${n} suas notas são: <br>
        Nota 1: ${num1} <br>
        Nota 2: ${num2} <br>
        Nota 3: ${num3}<br>
        Média de Exercícios: ${m}<br>
        
        Média final: ${mf.toFixed(2)}`

        try {
            await addDoc(collection(db, "alunos"), {
                nome: n,
                nota1: num1,
                nota2: num2,
                nota3: num3,
                mediaExercicios: m,
                mediaFinal: mf.toFixed(2)
            });
            console.log("Dados salvos com sucesso!");
        } catch (error) {
            console.error("Erro ao salvar os dados: ", error);
        }
        }) 
