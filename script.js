var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.lados);      // 4
console.log(quadrado.area(5));    // 25
console.log(quadrado.perimetro(5)); // 20

var pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor",
  apresentar: function() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
  },
};
console.log(pessoa.nome);          // João
console.log(pessoa.idade);        // 30
console.log(pessoa.profissao);    // Desenvolvedor
console.log(pessoa.apresentar()); // Olá, meu nome é João, tenho 30 anos e sou Desenvolvedor.

Math.PI; // 3.141592653589793
Math.sqrt(16); // 4
Math.pow(2, 3); // 8
Math.random(); // Gera um número aleatório entre 0 e 1
Math.floor(Math.random() * 10); // Gera um número aleatório entre 0 e 9
Math.ceil(Math.random() * 10); // Gera um número aleatório entre 1 e 10
Math.abs(-5); // 5
Math.max(1, 2, 3); // 3
Math.min(1, 2, 3); // 1
Math.round(4.7); // 5
Math.round(4.4); // 4
Math.sin(Math.PI / 2); // 1
Math.cos(0); // 1
Math.tan(Math.PI / 4); // 1
Math.log(10); // 2.302585092994046
Math.exp(2); // 7.38905609893065
Math.log10(100); // 2
Math.log2(8); // 3
Math.log1p(1); // 0.6931471805599453
Math.hypot(3, 4); // 5

console.log(Math.PI); // 3.141592653589793
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8
console.log(Math.random()); // Gera um número aleatório entre 0 e 1
console.log(Math.floor(Math.random() * 10)); // Gera um número aleatório entre 0 e 9
console.log(Math.ceil(Math.random() * 10)); // Gera um número aleatório entre 1 e 10
console.log(Math.abs(-5)); // 5
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0)); // 1
console.log(Math.tan(Math.PI / 4)); // 1
console.log(Math.log(10)); // 2.302585092994046
console.log(Math.exp(2)); // 7.38905609893065
console.log(Math.log10(100)); // 2
console.log(Math.log2(8)); // 3
console.log(Math.log1p(1)); // 0.6931471805599453
console.log(Math.hypot(3, 4)); // 5

var nome = "João";
nome.length; // 4
nome.toUpperCase(); // "JOÃO"
nome.toLowerCase(); // "joão"

console.log(nome.length); // 4
console.log(nome.toUpperCase()); // "JOÃO"
console.log(nome.toLowerCase()); // "joão"

for (var i = 0; i <= 100; i = i + 5) {
  console.log(i);
}
// 0
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copas = [1959, 1962, 1970, 1994, 2002];
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i = 0; i < copas.length; i++) {
  console.log(`O Brasil ganhou a copa de ${copas[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta); // Melância

const data = {
  ano: 2023,
  mes: 'Outubro',
  dia: 10
}
console.log(data.ano); // 2023