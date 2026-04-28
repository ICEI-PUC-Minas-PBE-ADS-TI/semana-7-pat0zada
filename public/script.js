// Pergunta o nome
let nome = prompt("Digite seu nome:");

// Função para validar número
function lerNumero(mensagem) {
    let valor;

    while (true) {
        valor = Number(prompt(mensagem));

        if (!isNaN(valor)) {
            return valor;
        }

        alert("Digite um número válido!");
    }
}

// Pergunta a renda
let renda = lerNumero("Digite sua renda mensal:");

// Pergunta quantidade de despesas (1 a 5)
let qtdDespesas = lerNumero("Quantas despesas deseja informar? (1 a 5)");

if (qtdDespesas < 1) {
    qtdDespesas = 1;
} else if (qtdDespesas > 5) {
    qtdDespesas = 5;
}

// Loop para somar despesas
let totalDespesas = 0;

for (let i = 1; i <= qtdDespesas; i++) {
    let despesa = lerNumero("Digite o valor da despesa " + i + ":");
    totalDespesas += despesa;
}

// Cálculo
let sobra = renda - totalDespesas;
let mensagem = "";

// Condições
if (totalDespesas > renda) {
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    if (sobra >= renda * 0.3) {
        mensagem = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagem = "🙂 Ok: dá para melhorar a sobra.";
    }
}

// Resultado formatado
let resultado = 
"Nome: " + nome + "\n" +
"Renda: R$ " + renda.toFixed(2) + "\n" +
"Despesas: R$ " + totalDespesas.toFixed(2) + "\n" +
"Sobra: R$ " + sobra.toFixed(2) + "\n" +
"Situação: " + mensagem;

// Exibir
alert(resultado);
console.log("===== RESULTADO =====");
console.log(resultado);