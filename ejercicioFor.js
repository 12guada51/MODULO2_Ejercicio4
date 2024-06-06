/*
1. Crea un programa que imprima en consola los números impares 
del 1 al 50.
*/
alert("EJERCICIO 1. Números impares del 1 al 50, ver resultado en Consola.")
console.log("EJERCICIO 1. Los números impares del 1 al 50 son: ")
for (var a = 1; a <= 50; a ++) 
{
    if (a % 2 !== 0)
    {
        console.log(a)
    }
}

/*
2. Crea un programa que pregunte al usuario un número. Usando 
el archivo de arreglo de Pokémons, mostrar solo los nombres de 
los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta 
el número introducido por el usuario. 
*/

var digito = parseInt(prompt("EJERCICIO 2: POKÉMONS. Ingresa un número, de preferencia mayor a 5. Ver resultado en Consola."));
function myarray(arr) {
    let arreglo = [];
    for (let i = 0; i < arr.length; i = i + 5)
        {
        arreglo.push(arr[i]);
        }
    return arreglo.slice(0, digito)
}
console.log(myarray([
'bulbasaur',
'ivysaur',
'venusaur',
'charmander',
'charmeleon',
'charizard',
'squirtle',
'wartortle',
'blastoise',
'caterpie',
'metapod',
'butterfree',
'weedle',
'kakuna',
'beedrill',
'pidgey',
'pidgeotto',
'pidgeot',
'rattata',
'raticate',
'spearow',
'fearow',
'ekans',
'arbok',
'pikachu',
'raichu',
'sandshrew',
'sandslash',
'nidoran-f',
'nidorina',
'nidoqueen',
'nidoran-m',
'nidorino',
'nidoking',
'clefairy',
'clefable',
'vulpix',
'ninetales',
'jigglypuff',
'wigglytuff',
'zubat',
'golbat',
'oddish',
'gloom',
'vileplume',
'paras',
'parasect',
'venonat',
'venomoth',
'diglett',
'dugtrio',
'meowth',
'persian',
'psyduck',
'golduck',
'mankey',
'primeape',
'growlithe',
'arcanine',
'poliwag',
'poliwhirl',
'poliwrath',
'abra',
'kadabra',
'alakazam',
'machop',
'machoke',
'machamp',
'bellsprout',
'weepinbell',
'victreebel',
'tentacool',
'tentacruel',
'geodude',
'graveler',
'golem',
'ponyta',
'rapidash',
'slowpoke',
'slowbro',
'magnemite',
'magneton',
'farfetchd',
'doduo',
'dodrio',
'seel',
'dewgong',
'grimer',
'muk',
'shellder',
'cloyster',
'gastly',
'haunter',
'gengar',
'onix',
'drowzee',
'hypno',
'krabby',
'kingler',
'voltorb'
]));

/*
3. Crea un programa que recorra el arreglo 
[4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los 
elementos que son tipo número.*/

var arregloInicial = [4,"dos",8,"tres",5,9,1,"cero"]
alert("EJERCICIO 3. El arreglo que se nos dió para este ejercicio fue [" + arregloInicial + "]")
alert("Al final de la Consola, se mostrarán aquellos elementos del arreglo mencionado que son SOLO de tipo número")

function soloNumeros(array){
    var enteros = [];
    for (var x = 0; x < array.length; x++) {
      if (typeof(array[x])=="number") { 
         enteros.push(array[x]);
      }; 
    }
   return enteros;
  }  
  
  console.log(soloNumeros(arregloInicial));