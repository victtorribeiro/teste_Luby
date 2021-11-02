/*1) Crie uma função chamada sort que ordene o array abaixo do menor para o maior e retorne um novo array ordenado.
var array_to_sort = [9,3,2,19,3,4,10,34,-99,99] 
Não utilize a função sort nativa do ordenamento de arrays*/
const sort = function (array_to_sort) {
    for (i = 0; i < array_to_sort.length; i++) {
        if (i < (array_to_sort.length - 1)) {
            count = i + 1
        }
        for (j = 0; j < array_to_sort.length; j++) {
            if (array_to_sort[j] > array_to_sort[count]) {
                var aux = array_to_sort[j]
                array_to_sort[j] = array_to_sort[count]
                array_to_sort[count] = aux
            }
        }
    }
    return (array_to_sort)
}

var array_to_sort = [9, 3, 2, 19, 3, 4, 10, 34, -99, 99]
console.log(sort(array_to_sort))

//2) Crie uma função que calcule qualquer o fatoria de um número natural e retorne o resultado 
function fatorial(numero) {

    var fatorial_num = numero
    for (i = numero - 1; i > 1; i--) {
        fatorial_num *= i
    }
    return (fatorial_num)
}

console.log(fatorial(8))

//3) Crie uma função que calcule a sequencia de Fibonacci
const fibonacci = function (n) {
    var a = 0, b = 1;
    for (var i = 2; i <= n; i++) {
        var f = a;
        a = b;
        b += f;
    }
    return b;
}
console.log(fibonacci(50))

