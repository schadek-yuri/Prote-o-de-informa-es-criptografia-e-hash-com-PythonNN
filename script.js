function calcula_hash(palavra) {
    let resultado = 0;

    for (const letra of palavra) {
        resultado += letra.codePointAt(0);
    }

    return resultado;
}

function compararHashes() {
    const palavra1 = document
        .getElementById("palavra1").value.trim();

    const palavra2 = document
        .getElementById("palavra2").value.trim();

    const resultado = document.getElementById("resultado");

    if (palavra1.length < 2 || palavra2.length < 2) {
        resultado.textContent =
            "Digite duas palavras com pelo menos duas letras.";
        return;
    }

    const hash1 = calcula_hash(palavra1);
    const hash2 = calcula_hash(palavra2);

    if (palavra1 === palavra2) {
        resultado.textContent =
            `As palavras são iguais. Hash: ${hash1}. ` +
            "Digite palavras diferentes.";
        return;
    }

    resultado.innerHTML = "";

    const linha1 = document.createElement("p");
    linha1.textContent = `Palavra 1: ${palavra1} | Hash: ${hash1}`;

    const linha2 = document.createElement("p");
    linha2.textContent = `Palavra 2: ${palavra2} | Hash: ${hash2}`;

    const mensagem = document.createElement("h3");

    if (hash1 === hash2) {
        mensagem.textContent =
            "🎉 Colisão encontrada! As palavras têm o mesmo hash.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent =
            "Os valores são diferentes. Tente outras palavras!";
        mensagem.style.color = "red";
    }

    resultado.append(linha1, linha2, mensagem);
}
3. README.md
markdown

# 🔐 Desafio de Hash com JavaScript

## Sobre o projeto

Este projeto foi desenvolvido para estudar funções de hash
e entender como duas palavras diferentes podem gerar o mesmo
valor.

## Objetivo

Encontrar duas palavras diferentes, com pelo menos duas letras,
que produzam o mesmo resultado usando a função `calcula_hash`.

## Como funciona?

A função soma os valores numéricos dos caracteres de uma palavra.
Como a soma não depende da ordem das letras, palavras diferentes
podem produzir o mesmo resultado.

### Exemplo

- Palavra 1: amor
- Palavra 2: roma
- Hash das duas palavras: 439

Isso é chamado de **colisão de hash**.

## Como executar

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` no navegador.
3. Digite duas palavras diferentes.
4. Clique em "Calcular Hash".
5. Confira os valores e veja se ocorreu uma colisão.

## Tecnologias

- HTML5
- CSS3
- JavaScript

## Importante

Esta função é apenas didática. Ela não é segura para armazenar
senhas ou proteger informações reais.

O desafio original utiliza Python; esta versão demonstra
o mesmo conceito no navegador com JavaScript.

## Licença

Este projeto está disponível sob a licença MIT.
Consulte o arquivo LICENSE.
