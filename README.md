# Classificação de IMC com JavaScript

Este projeto contém uma função em JavaScript que classifica o Índice de Massa Corporal (IMC) de uma pessoa em diferentes categorias.

### Estrutura de controle:

- **if:** Permite executar um bloco de código se uma condição específica for verdadeira.
  
- **else:** Garante que um bloco de código alternativo seja executado quando a condição do if for falsa.
  
- **else if:** Amplia a lógica, permitindo verificar outras condições após o if ou else if.

### Classificação do IMC:

1. **Condição para "Abaixo do peso" (IMC < 18.5):**
    Se o IMC fornecido como entrada for menor que 18.5, a função retornará a string "Abaixo do peso".

2. **Condição para "Peso ideal" (IMC >= 18.5 e IMC < 25):**
    Se o IMC estiver dentro do intervalo de 18.5 (inclusive) a 25 (exclusivo), a função retornará a string "Peso ideal".
     
3. **Condição para "Sobrepeso" (IMC >= 25 e IMC < 30):**
    Se o IMC estiver dentro do intervalo de 25 (inclusive) a 30 (exclusivo), a função retornará a string "Sobrepeso".
     
4. **Condição para "Obesidade" (IMC >= 30 e IMC < 40):**
    Se o IMC estiver dentro do intervalo de 30 (inclusive) a 40 (exclusivo), a função retornará a string "Obesidade".
     
5. **Condição para "Obesidade mórbida" (IMC >= 40):**
    Se o IMC fornecido como entrada for igual ou maior que 40, a função retornará a string "Obesidade mórbida".

Essas condições são organizadas em uma sequência de blocos if, else if e else que são avaliados sequencialmente. A primeira condição que for verdadeira determinará o resultado retornado pela função. Se nenhuma das condições for verdadeira, o bloco else final será executado, retornando "Obesidade mórbida". Isso garante que cada valor de IMC seja classificado em uma categoria específica de acordo com as diretrizes padrão.

