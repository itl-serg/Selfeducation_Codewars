// Задача 1 (8kyu)
// Вывести массив неповторяющихся подряд букв

// var uniqueInOrder = function (iterable) {
//     let result = [];

//     for (let i = 0; i < iterable.length; i++) {
//         if (iterable[i] !== iterable[i + 1]) {
//             result.push(iterable[i]);
//         }
//     }
//     console.log(result);
// };

// uniqueInOrder("AAAABBBCCDAABBB");

// Задача 2
// Трибоначи

// function tribonacci(signature, n) {
//     if (n <= 3) {
//         return signature.slice(0, n);
//     } else {
//         const s = tribonacci(signature, n - 1);
//         return [...s, s[s.length - 1] + s[s.length - 2] + s[s.length - 3]];
//     }
// }

// Задача 3
// найти сумму двух наименьших чисел массива

// function sumTwoSmallestNumbers(numbers) {
//     let result = numbers.sort((a, b) => a - b); // сортируем от меньшего к большему
//     return result[0] + result[1];
// }

// sumTwoSmallestNumbers([15, 28, 4, 2, 43]);

// Задача 4
// Вывести время в формате return 'HH:MM:SS' принимаем данные в секундах

// function humanReadable(seconds) {
//     if (seconds === 0) {
//         return "00:00:00";
//     }

//     if (seconds < 0 || seconds > 359999) {
//         return null;
//     }

//     let resultSeconds = 0;
//     let resultMinutes = 0;
//     let resultHours = 0;

//     resultSeconds = Math.floor(seconds % 60);
//     seconds = seconds / 60;

//     resultMinutes = Math.floor(seconds % 60);
//     seconds = seconds / 60;

//     resultHours = Math.floor(seconds);

//     if (resultHours < 10) {
//         resultHours = "0" + resultHours;
//     }
//     if (resultMinutes < 10) {
//         resultMinutes = "0" + resultMinutes;
//     }
//     if (resultSeconds < 10) {
//         resultSeconds = "0" + resultSeconds;
//     }

// console.log(`${resultHours}:${resultMinutes}:${resultSeconds}`);
// }
// humanReadable(3600);

// Задача 5
// Напишите функцию, которая принимает строку круглых скобок и определяет, допустим ли порядок скобок. Функция должна возвращать истину, если строка действительна, и ложь, если она недействительна.

// function validParentheses(parens) {
//     let result = 0;
//     for (let i = 0; i < parens.length && result >= 0; i++) {
//         result += parens[i] == "(" ? 1 : -1;
//     }

//     console.log(result == 0);
// }
// validParentheses();

// Задача 6
// Напишите функцию, которая принимает строку фигурных скобок и определяет, допустим ли порядок фигурных скобок. Он должен возвращать "true" , если строка действительна, и "false" , если она недействительна. Это Ката похоже на Ката с правильными круглыми скобками, но содержит новые символы: квадратные скобки[] и фигурные скобки { }. Все входные строки будут непустыми и будут состоять только из скобок, скобок и фигурных скобок: () [] {}.Что считается действительным? Строка фигурных скобок считается действительной, если все фигурные скобки совпадают с правильной фигурной скобкой.

// function validBraces(braces) {
//     let stack = [];
//     let map = {
//         "(": ")",
//         "{": "}",
//         "[": "]",
//     };

//     for (let s of braces) {
//         if (s === "(" || s === "{" || s === "[") {
//             stack.push(s);
//         } else {
//             let last = stack.pop();
//             if (s !== map[last]) {
//                 console.log(false);
//             }
//         }
//     }
//     if (stack.length !== 0) {
//         console.log(false);
//     }
//     console.log(true);
// }
// validBraces("([}]{)");

// Задача 7 (7kyu)
//Проверьте, есть ли в строке одинаковое количество символов «x» и «o». Метод должен возвращать логическое значение и не учитывать регистр. Строка может содержать любой символ.

// function XO(str) {
//     let result = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "x" || str[i] === "X") {
//             result = result + 1;
//         }
//         if (str[i] === "o" || str[i] === "O") {
//             result = result - 1;
//         }
//         console.log(result);
//     }
//     if (result < 0 || result > 0) {
//         return false;
//     } else {
//         return true;
//     }
// }

// XO("xoOoom");

// Задача 8 (7kyu)
//Создайте программу, которая фильтрует список строк и возвращает список только с именами ваших друзей.Если в имени ровно 4 буквы, можете быть уверены, что это должен быть ваш друг! В противном случае можете быть уверены, что он не ...

// function friend(friends) {
//     let result = [];
//     friends.map(function (name) {
//         if (name.length === 4) {
//             result.push(name);
//         }
//     });
//     console.log(result);
// }
// friend(["Ryan", "Kieran", "Jason", "Yous"]);
// Пример: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"].

// Задача 9 (7kyu)
// Простой, учитывая строку слов, возвращает длину самого короткого слова (слов).Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

// function findShort(s) {
//     let arr = s.split(" ");
//     let result = [];

//     arr.map(function (word) {
//         result.push(word.length);
//     });

//     let min = Math.min(...result);
//     console.log(min);
// }

// findShort(
//     "BTC Bitcoin MadeSafeCoin Mine Monero ProofOfWork Classic Lisk Bitcoin LiteCoin ProofOfWork BTC Ripple Steem Dash"
// );

// Задача 10 (7kyu)
// Ваша задача - написать функцию maskify, которая заменяет все символы, кроме последних четырех, на '#'.
// function maskify(cc) {
//     let arr = [];
//     if (cc.length >= 4) {
//         for (let i = 0; i < cc.length; i++) {
//             arr.push(cc[i]);
//             if (i < cc.length - 4) {
//                 arr.splice(i, arr.length, "#");
//             }
//         }
//     } else {
//         return cc;
//     }
//     let result = arr.join("");
//     console.log(result);
// }

// maskify("4556364607935616");
// Output = '############5616'

// Задача 11
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Output = camelize("background-color") == 'backgroundColor';

// function camelize(str) {
//     let arr = str.split("-");

//     for (let i = 1; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//     let result = arr.join("");

//     console.log(result);
// }

// camelize("my-short-string");

// Задача 12 (6kyu)
// В этом ката вы должны, учитывая строку, заменить каждую букву ее позицией в алфавите. Если что-то в тексте не является буквой, игнорируйте это и не возвращайте.

// function alphabetPosition(text) {
//     let letter = "abcdefghijklmnopqrstuvwxyz";
//     let arr = [];

//     text = text.toLowerCase(); //преобразовываем все буквы в нижний регистр

//     for (let i = 0; i < text.length; i++) {
//         let index = letter.indexOf(text[i]);
//         if (index === -1) {
//             continue;
//         } else {
//             arr.push(index + 1);
//         }
//     }

//     text = arr.join(" ");

//     console.log(text);
// }
// alphabetPosition("The sunset sets at twelve o' clock.");

// Задача 13 (8kyu)
// Рассмотрим массив / список овец, где некоторые овцы могут отсутствовать на своем месте. Нам нужна функция, которая считает количество овец в массиве (true означает наличие).
// let array1 = [
//     true,
//     true,
//     true,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     true,
//     false,
//     true,
//     false,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     false,
//     true,
//     true,
// ];

// function countSheeps(arrayOfSheep) {
//     let result = 0;
//     for (let i = 0; i < arrayOfSheep.length; i++) {
//         if (arrayOfSheep[i] == true) {
//             result++;
//         }
//     }
//     console.log(result);
// }
// countSheeps(array1);

// Задача 14 (7kyu)
// На этот раз ни рассказа, ни теории. В приведенных ниже примерах показано, как написать функцию накопителя:

// function accum(s) {
//     let str = s.toLowerCase();
//     let arr = str.split("");

//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         let newStr = arr[i].toUpperCase();
//         for (let j = 0; j < i; j++) {
//             newStr += arr[i];
//         }
//         result.push(newStr);
//     }

//     console.log(result.join("-"));
// }

// accum("ZpglnRxqenU");

// Задача 15 (8kyu)
// Кодирование в функции pickIt, функция принимает 1 параметр: arr, это числовой массив, нам нужно пройти arr, используя цикл for, если элемент нечетное число, отправьте его в массив нечетный, если это четное число, отправьте его в массив четный.

// let arr1 = [8, 1, 5, 4, 6, 1, 1];
// function pickIt(arr) {
//     var odd = [],
//         even = [];

//     for (let i = 0; i < arr.length; i++) {
//         arr[i] % 2 ? odd.push(arr[i]) : even.push(arr[i]);
//     }

//     console.log(odd, even);
// }

// pickIt(arr1);

// Задача 16 (7kyu)
// В этом ката вы создадите функцию, которая принимает список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.

// function filter_list(l) {
//     // Return a new array with the strings filtered out

//     let num = [];
//     let str = [];

//     l.map((item) => (item.constructor.name == "Number" ? num.push(item) : str.push(item)));

//     console.log(num);
// }

// filter_list([1, 2, "aasf", "1", "123", 123]);

// Задача 17 (8kyu)
// Завершите решение так, чтобы оно перевернуло переданную в него строку
// function solution(str) {
//     return str.split("").reverse().join("");
// }

// solution("hello");

// Задача 18 (7kyu)
// В этом ката вас просят возвести в квадрат каждую цифру числа и соединить их.Например, если мы запустим 9119 через функцию, выйдет 811181, потому что 92 - это 81, а 12 - 1. Примечание: функция принимает целое число и возвращает целое число.

// function squareDigits(num) {
//     num = num.toString();
//     let arr = num.split("");
//     for (let i = 0; i < num.length; i++) {
//         arr[i] = num[i] * num[i];
//     }
//     arr = arr.join("");

//     return +arr;
// }

// squareDigits(3212);

// Задача 19 (7kyu)
//Завершите метод findNextSquare, который находит СЛЕДУЮЩИЙ!!! целочисленный полный квадрат после переданного в качестве параметра. Напомним, что полный квадрат - это целое число n такое, что sqrt (n) также является целым числом.Если параметр сам по себе не является точным квадратом, должен быть возвращен -1. Вы можете предположить, что параметр неотрицательный.

// function findNextSquare(sq) {
//     let x = Math.sqrt(sq);

//     if (Number.isInteger(x)) {
//         x = (x + 1) * (x + 1);
//     } else {
//         x = -1;
//     }
//     console.log(x);
// }

// findNextSquare(121);

// Задача 20 (8kyu)
// Напишите функцию RemoveExclamationMarks, которая удаляет все восклицательные знаки из заданной строки.
// вариант решения return s.split("!").join("");

// function removeExclamationMarks(s) {
//     let arr = s.split("");

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == "!") {
//             arr[i] = "";
//         }
//     }

//     arr = arr.join("");
//     console.log(arr);
// }
// removeExclamationMarks("Hello World!");

// Задача 21
// Задача на собес у Леши. Есть строка"aabbbc" вывести строку "2a3b1c"
// 1 вариант for
// 2 вариант while

// let str = "aabbbc";
// let i = 0;

// let result = "";

// function findLettersString(string) {
//     while (i < string.length) {
//         for (var count = 1; string[i] === string[i + count]; count++) {}

//         result += count + string[i];
//         i += count;
//     }

//     console.log(result);
// }

// findLettersString(str);

// Задача 22 (7kyu)
// Ваша задача - создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента и возвращать его с цифрами в порядке убывания. По сути, переставьте цифры, чтобы получить максимально возможное число.

// Примеры:
// Вход: 42145 Выход: 54421
// Вход: 145263 Выход: 654321
// Ввод: 123456789 Выход: 987654321

// function descendingOrder(n) {
//     let str = n.toString();
//     let arr = [];
//     let result;

//     for (let i = 0; i < str.length; i++) {
//         arr[i] = str[i];
//     }

//     arr.sort();
//     arr.reverse();

//     result = arr.join("");
//     result = Number(result);

//     console.log(result);
// }
// descendingOrder(42145);

// Задача 23 (7kyu)
// Возвращает число (количество) гласных в заданной строке.
// Мы будем рассматривать a, e, i, o, u как гласные для этой каты (но не y).
// Входная строка будет состоять только из строчных букв и / или пробелов.

// function getCount(str) {
//     var vowelsCount = 0;
//     let strArray = str.split("");
//     let arrVowels = ["a", "e", "i", "o", "u"];

//     for (let i = 0; i < strArray.length; i++) {
//         for (let j = 0; j < arrVowels.length; j++) {
//             if (arrVowels[j].toUpperCase() == strArray[i].toUpperCase()) {
//                 vowelsCount += 1;
//             }
//         }
//     }

//     console.log(vowelsCount);
// }
// getCount("abracadabra");

// Задача 24 (8kyu)
// Вы получаете массив чисел, возвращаете сумму всех положительных.
// Пример [1, -4,7,12] => 1 + 7 + 12 = 20
// Примечание: если суммировать нечего, сумма по умолчанию равна 0.
// function positiveSum(arr) {
//     let result = 0;

//     arr.map((item) => {
//         item > 0 ? (result += item) : result;
//     });
//     console.log(result);
// }

// positiveSum([1, -2, 3, 4, 5]);

// Задача 25 (8kyu)

// Первый век охватывает период с 1 года по 100 год включительно, второй век - с 101 года по 200 год включительно и т. Д.
// Задача: Учитывая год, верните век, в котором он находится.

// function century(year) {
//     let result;
//     if (year % 100 > 0) {
//         result = year / 100 + 1;
//     } else {
//         result = year / 100;
//     }
//     result = Math.trunc(result);
//     console.log(result);
// }

// century(89);

// Задача 26 (7kyu)
// Даны два целых числа a и b, которые могут быть положительными или отрицательными, найти сумму всех целых чисел между ними и включая их и вернуть ее. Если два числа равны, верните a или b.

// function getSum(a, b) {
//     if (a == b) {
//         console.log(a);
//     }
//     if (a < b) {
//         console.log(a + getSum(a + 1, b));
//     }
//     if (a > b) {
//         console.log(a + getSum(a - 1, b));
//     }
// }
// getSum(-4, 2);

// Задача 27 (6kyu)
// Нарциссическое число - это положительное число, которое представляет собой сумму собственных цифр, каждая из которых возведена в степень числа цифр в заданном основании. В этом Ката мы ограничимся десятичной системой счисления (основание 10).
//     Например, возьмите 153(3 цифры), что является нарцистическим:
// 1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153
//  и 1652 (4 цифры), что не соответствует:
//     1 ^ 4 + 6 ^ 4 + 5 ^ 4 + 2 ^ 4 = 1 + 1296 + 625 + 16 = 1938
// Соревнование:
// Ваш код должен возвращать истину или ложь (а не «истину» и «ложь») в зависимости от того, является ли данное число нарциссическим числом с основанием 10. Это может быть истина или ложь на вашем языке, например PHP.
// Проверка ошибок текстовых строк или других недопустимых входных данных не требуется, в функцию будут переданы только действительные положительные ненулевые целые числа.

// function narcissistic(value) {
//     let arr = value.toString().split("");
//     let x = value.toString().length;
//     let result = 0;

//     for (let i = 0; i < x; i++) {
//         result += Math.pow(arr[i], x);
//     }
//     if (result === value) {
//         console.log("true");
//     } else {
//         console.log("false");
//     }
//     console.log(result);
// }
// narcissistic(371);

// Задача 28 (6kyu)
// Напишите функцию persistence, которая принимает положительный параметр num и возвращает его мультипликативную постоянство, то есть количество раз, которое вы должны умножить цифры в num, пока не дойдете до единственной цифры.
// 39 -> 3 (потому что 3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4 и 4 имеет только одну цифру)
// 999 -> 4 (потому что 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12 и, наконец, 1 * 2 = 2)
// 4 -> 0 (поскольку 4 уже является однозначным числом)

// function persistence(num) {
//     let arr = num.toString().split("");
//     let result = 1;

//     if (arr.length === 1) {
//         return 0;
//     }

//     for (let i = 0; i < arr.length; i++) {
//         result *= parseFloat(arr[i]);
//     }

//     return 1 + persistence(parseFloat(result));
// }

// persistence(999);

// Задача 29 (7kyu)
// По городу ходит автобус, который забирает и высаживает несколько человек на каждой автобусной остановке.
// Вам предоставляется список (или массив) целочисленных пар. Элементы каждой пары представляют количество людей, садящихся в автобус (первый элемент) и количество людей, выходящих из автобуса (второй элемент) на автобусной остановке.
// Ваша задача - вернуть количество людей, которые все еще находятся в автобусе после последней автобусной остановки (после последнего массива). Несмотря на то, что это последняя остановка автобуса, автобус не пуст и некоторые люди все еще находятся в автобусе, и они, вероятно, там спят: D
// Взгляните на тестовые примеры.
// Имейте в виду, что тестовые примеры гарантируют, что количество людей в автобусе всегда> = 0. Таким образом, возвращаемое целое число не может быть отрицательным.
// Второе значение в первом массиве целых чисел равно 0, так как автобус пуст на первой автобусной остановке.

// использовать for

// var number = function (busStops) {
//     let total = 0;

//     for (let i = 0; i < busStops.length; i++) {
//         let getOn = busStops[i][0];
//         let getOff = busStops[i][1];

//         total += getOn;
//         total -= getOff;
//     }

//     console.log(total);
// };

// использовать reduce

// var number = function (busStops) {
//     return busStops.reduce((acc, cur) => {
//         return acc + (cur[0] - cur[1]);
//     }, 0);
// };

// использовать for of
// var number = function (busStops) {
//     let result = 0;

//     for (let key of busStops) {
//         result += key[0] - key[1];
//     }

//     console.log(result);
// };

// зачения для busStops
// number([
//     [3, 0],
//     [9, 1],
//     [4, 10],
//     [12, 2],
//     [6, 1],
//     [7, 10],
// ]);

// Задача 30 (6kyu)
// Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9), который возвращает строку этих чисел в форме номера телефона.

// Пример
// createPhoneNumber ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => возвращает «(123) 456-7890»
// Возвращенный формат должен быть правильным для выполнения этой задачи.
// Не забывайте пробел после закрывающих скобок!

// вариант 1
// function createPhoneNumber(numbers) {
//     numbers.unshift("(");
//     numbers.splice(4, 0, ")", " ");
//     numbers.splice(9, 0, "-");
//     console.log(numbers.join(""));
// }

// вариант 2
// function createPhoneNumber(numbers) {
//     let formatTel = "(xxx) xxx-xxxx";

//     for (let i = 0; i < numbers.length; i++) {
//         formatTel = formatTel.replace("x", numbers[i]);
//     }
//     console.log(formatTel);
// }

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

// Задача 31 (6kyu)
// Напишите функцию, которая будет возвращать количество отдельных нечувствительных к регистру буквенных символов и числовых цифр, которые встречаются во входной строке более одного раза. Предполагается, что входная строка содержит только буквы (как в верхнем, так и в нижнем регистре) и числовые цифры.

// function duplicateCount(text) {
//     text = text.toLowerCase();

//     let arr = text.split("");
//     arr.sort();

//     let newArr = [];
//     if (arr.length != 0) {
//         arr.map(function (item, index) {
//             for (let i = 0; i < index; i++) {
//                 if (arr[index] == arr[i]) {
//                     newArr.push(arr[index]);
//                 }
//             }
//         });
//     } else {
//         return 0;
//     }

//     for (let i = 0; i <= newArr.length * 2; i++) {
//         for (let j = 0; j < newArr.length; j++) {
//             if (newArr[j] == newArr[j - 1]) {
//                 newArr.splice(j, 1);
//             }
//         }
//     }
//     let result = newArr.length;

//     console.log(result);
// }

// duplicateCount("Indivisibilities"); //2
// duplicateCount("abcdefghijABCDEabcdABCaba"); //5
// duplicateCount("aabBcde"); //2
// duplicateCount("rejection"); //1

// Задача 32 (8kyu)
// Напишите программу, которая находит сумму всех чисел от 1 до num. Число всегда будет положительным целым числом больше 0.

// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// var summation = function (num) {
//     let result = 0;
//     for (let i = 0; i <= num; i++) {
//         result += i;
//     }
//     console.log(result);
// };

// summation(8);

// Задача 33 (7kyu)
// Учитывая список целых чисел, определите, является ли сумма его элементов нечетной или четной.
// Дайте свой ответ в виде строки, соответствующей «нечетному» или «четному».
// Если входной массив пуст, считайте его: [0] (массив с нулем).

// function oddOrEven(array) {
//     let result = 0;
//     for (let i = 0; i < array.length; i++) {
//         result += array[i];
//     }
//     result % 2 ? console.log("odd") : console.log("even");
// }

// oddOrEven([-1023, -1, 3]);

// Задача 34 (6kyu)
// Некоторые игроки играют в игру: они стоят в кругу, и у каждого игрока есть карточка с номером на ней. Они кладут карту перед грудью. То есть каждый игрок может видеть номера других игроков, но не может видеть свои собственные.

// На каждом ходу каждый игрок складывает числа, которые он видит, и записывает их на новую карту. Например:
// Есть 3 игрока: A, B и C
// Исходные числа A, B, C - 1,0,4.
// Посмотрим следующие 4 хода:
// Player:  A  B  C
// turn 0:  1  0  4
// turn 1:  4  5  1  // A:0+4; B:1+4; C:1+0
// turn 2:  6  5  9  // A:5+1; B:4+1; C:4+5
// turn 3: 14 15 11  // A:5+9; B:6+9; C:6+5
// turn 4: 26 25 29  // A:15+11; B:14+11; C:14+15
// Хм ... Ваша задача приближается: теперь предположим, что вы не знаете исходные числа. Вам даны окончательные числа (массив) и витки (положительное целое число), можете ли вы получить исходные числа?
// Примеры
// Для finalNumbers = [26,25,29] и поворота = 4. Результат должен быть [1,0,4].
// Процесс проверки можно отнести к приведенному выше примеру.
// Для finalNumbers = [1248,1226,1204,1182] и поворота = 3. Результат должен быть [12,34,56,78].
// Процесс проверки:
// Игрок: A B C D
// поворот 0: 12 34 56 78
// поворот 1: 168 146 124 102
// поворот 2: 372 394 416 438
// поворот 3: 1248 1226 1204 1182
// Примечание
// Все данные действительны.
// Порядок номеров должен быть правильным.

// function originalNumbers(finalNumbers, turns) {
//     if (turns === 0) {
//         return finalNumbers;
//     }
//     let index = 0;
//     const length = finalNumbers.length;
//     let arr = finalNumbers;
//     while (index < turns) {
//         let newArr = [];
//         const total = arr.reduce((prev, cur) => prev + cur);
//         for (let i = 0; i < arr.length; i++) {
//             newArr[i] = (total - (length - 1) * arr[i]) / (length - 1);
//         }
//         arr = newArr;
//         index++;
//     }
//     return arr;
// }

// originalNumbers([26, 25, 29], 4); //[1,0,4]
// originalNumbers([1248, 1226, 1204, 1182], 3); //[12,34,56,78]
// originalNumbers([796, 824, 790, 776], 3); //[30, 2, 36, 50]

// Задача 35 (6kyu)

// Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке равен «(», если этот символ появляется только один раз в исходной строке, или «)», если этот символ встречается более одного раза в исходной строке. нить. Игнорируйте использование заглавных букв при определении дубликата символа.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// function duplicateEncode(word) {
//     let letters = word.toLowerCase().split("");
//     let counts = letters.reduce((ct, ltr) => ((ct[ltr] = (ct[ltr] || 0) + 1), ct), {});
//     let result = letters.map((letter) => (counts[letter] === 1 ? "(" : ")")).join("");

//     console.log(result);
// }

// duplicateEncode("Success"); // )())());

// Задача 36 (8kyu)
// В этом простом задании вам дается число, и вы должны сделать его отрицательным. Но, может быть, число уже отрицательное?

// function makeNegative(num) {
//     if (num > 0) {
//         num = "-" + num;
//         return +num;
//     } else {
//         return num;
//     }
// }

// makeNegative(42); // -42;

// Задача 37 (7kyu)

// Дан массив целых чисел. Найдите минимальную сумму, полученную при суммировании каждого произведения двух целых чисел.

// function minSum(arr) {
//     arr.sort((a, b) => a - b);

//     let newArr = arr.map((a) => a);
//     newArr.reverse((a, b) => a - b);
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i] * newArr[i];
//     }
//     return result / 2;
// }

// minSum([5, 4, 2, 3]); // 22;

// Задача 38 (7kyu)

// Несколько человек стоят в ряд, разделенные на две команды.
// Первый человек входит в команду 1, второй - в команду 2, третий - в команду 1 и так далее.
// Учитывая массив положительных целых чисел (веса людей), верните новый массив / кортеж из двух целых чисел, где первое - это общий вес команды 1, а второе - общий вес команды 2
// Примеры ввода >> вывода
// rowWeights ([13, ​​27, 49]) ==> return (62, 27)
// Объяснение:
// // Первый элемент 62 - это общий вес команды 1, а второй элемент 27 - это общий вес команды 2.
// Примеры ввода >> вывода
// owWeights ([50, 60, 70, 80]) ==> return (120, 140)
// Объяснение:
// Первый элемент 120 - это общий вес команды 1, а второй элемент 140 - это общий вес команды 2.

// function rowWeights(array) {
//     let newArr = [0, 0];

//     for (let i = 0; i < array.length; i++) {
//         if (i % 2) {
//             newArr[1] += array[i];
//         } else {
//             newArr[0] += array[i];
//         }
//     }
//     console.log(newArr);
// }

// rowWeights([13, 27, 49]); // [62, 27];

// Задача 39 (6kyu)
// Панграмма - это предложение, которое хотя бы один раз содержит каждую букву алфавита. Например, предложение «The quick brown fox jumps over the lazy dog» - это панграм, потому что в нем хотя бы один раз используются буквы A – Z (регистр не имеет значения).
// Учитывая строку, определите, является ли она панграммой. Верните True, если это так, и False, если нет. Не обращайте внимания на цифры и знаки препинания.

// function isPangram(string) {
//     let arrLetter = "abcdefghijklmnopqrstuvwxyz".split("");
//     let arrString = string.toLowerCase().split("");
//     let result = 0;

//     if (arrString.length < arrLetter.length) {
//         return false;
//     } else {
//         for (let i = 0; i < arrLetter.length; i++) {
//             for (let j in arrString) {
//                 if (arrLetter[i] == arrString[j]) {
//                     result = result + 1;
//                     break;
//                 }
//             }
//         }
//         return result == 26 ? true : false;
//     }
// }

// isPangram("The quick brown fox jumps over the lazy dog.");

// Задача 40 (7kyu)
// Возьмем 2 строки s1 и s2, содержащие только буквы от a до z. Вернуть новую отсортированную строку, как можно более длинную, содержащую отдельные буквы - каждая взятая только один раз - исходящая из s1 или s2.

// Примеры:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// самый длинный (a, b) -> «abcdefklmopqwxy»

// a = "abcdefghijklmnopqrstuvwxyz"
// самый длинный (а, а) -> "abcdefghijklmnopqrstuvwxyz"

// function longest(s1, s2) {
//     let newStr = s1 + s2;
//     let arr = newStr.split("").sort();

//     for (let i = 1; i < newStr.length; i++) {
//         for (let j in newStr) {
//             arr[j] == arr[j - 1] ? arr.splice(j, 1) : false;
//         }
//     }

//     console.log(arr.join(""));
// }

// longest("aretheyhere", "yestheyarehere"); // "aehrsty";

// Задача 41 (7kyu)
// Вам дадут слово. Ваша задача - вернуть средний символ слова. Если длина слова нечетная, вернуть средний символ. Если длина слова четная, вернуть 2 средних символа.

// #Примеры:
// Kata.getMiddle ("test") должен вернуть "es"
// Kata.getMiddle ("тестирование") должен вернуть "t".
// Kata.getMiddle ("средний") должен вернуть "дд"
// Kata.getMiddle ("A") должен вернуть "A"
// Слово (строка) длиной 0 <str <1000 (в javascript вы можете получить чуть больше 1000 в некоторых тестовых случаях из-за ошибки в тестовых примерах). Вам не нужно проверять это. Это сделано только для того, чтобы сообщить вам, что вам не нужно беспокоиться о том, что время ожидания решения истечет.

// #Вывод
// Средний символ (символы) слова, представленного в виде строки.

// function getMiddle(s) {
//     let arr = s.split("");
//     let result = [];

//     arr.length % 2 == 0
//         ? result.push(arr[arr.length / 2 - 1], arr[arr.length / 2])
//         : result.push(arr[arr.length / 2 - 0.5]);

//     console.log(result.join(""));
// }
// getMiddle("middle"); //"dd"

// Задача 42 (6kyu)
// # Найти пропущенную букву
// Напишите метод, который принимает в качестве входных данных массив последовательных (возрастающих) букв и возвращает пропущенную букву в массиве.
// Вы всегда получите действительный массив. И всегда будет отсутствовать ровно одна буква. Длина массива всегда будет не меньше 2.
// В массиве всегда будут буквы только в одном регистре.
// Пример:
// ['a', 'b', 'c', 'd', 'f'] -> 'e' ['O', 'Q', 'R', 'S'] -> 'P'
// ["a", "b", "c", "d", "f"] -> "e"
// ["O", "Q", "R", "S"] -> "P"
// (Используйте английский алфавит из 26 букв!)

// function findMissingLetter(array) {
//     let arrLetter = "abcdefghijklmnopqrstuvwxyz".split("");
//     let arrLetterUp = "ABCDEFGHIJKLMNOPRSTUVWXYZ".split("");

//     let result = [];
//     let num = 0;
//     for (let i = 0; i < arrLetter.length; i++) {
//         if (array[0] == arrLetter[i] || array[0] == arrLetterUp[i]) {
//             num = i;
//             break;
//         }
//     }
//     for (let j = 0; j < array.length; j++) {
//         if (array[num] !== arrLetter[num] || array[num] !== arrLetterUp[num]) {
//             result.push(arrLetter[num + 1]);
//             break;
//         }
//     }
//     array[0] == arrLetter[num] ? (result = result.join("")) : (result = result.join("").toUpperCase());
//     console.log(result);
// }
// findMissingLetter(["a", "b", "c", "d", "f"]); // "e";
// findMissingLetter(["O", "Q", "R", "S"]); // "P";

// Задача 43 (7kyu)
// В цепочках ДНК символы «А» и «Т» дополняют друг друга, как «С» и «G». Ваша функция получает одну сторону ДНК (строка, кроме Haskell); вам нужно вернуть другую дополнительную сторону. Нить ДНК никогда не бывает пустой или ДНК вообще не существует (опять же, кроме Haskell).
// function DNAStrand(dna) {
//     let arr = dna.split("");

//     for (let i in arr) {
//         if (arr[i] === "A") {
//             arr[i] = "T";
//         } else {
//             if (arr[i] === "T") {
//                 arr[i] = "A";
//             }
//         }
//         if (arr[i] === "C") {
//             arr[i] = "G";
//         } else {
//             if (arr[i] === "G") {
//                 arr[i] = "C";
//             }
//         }
//     }
//     let result = arr.join("");
//     console.log(result);
// }
// DNAStrand("ATTGC");

// Задача 44 (8kyu)
// Сможете ли вы найти иголку в стоге сена?
// Напишите функцию findNeedle(), которая принимает массив, полный мусора, но содержащий одну «иглу».
// После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), в котором говорится:
// "найдена игла в положении " плюс индекс, в котором она нашла иглу, поэтому:
// findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]);
// должен вернуть "найдена игла в позиции 5"

// function findNeedle(haystack) {
//     for (let i in haystack) {
//         if (haystack[i] == "needle") {
//             return `found the needle at position ${i}`;
//         }
//     }
// }

// var haystack_1 = ["3", "123124234", undefined, "needle", "world", "hay", 2, "3", true, false];
// findNeedle(haystack_1);

// Задача 45 (6kyu)
// Вам дан массив (который будет иметь длину не менее 3, но может быть очень большим), содержащий целые числа. Массив либо полностью состоит из нечетных целых чисел, либо полностью состоит из четных целых чисел, за исключением одного целого числа N. Напишите метод, который принимает массив в качестве аргумента и возвращает этот «выброс» N.
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// function findOutlier(integers) {
//     let evenArr = [];
//     let oddArr = [];

//     for (let i = 0; i < integers.length; i++) {
//         if (integers[i] % 2) {
//             evenArr.push(integers[i]);
//         } else {
//             oddArr.push(integers[i]);
//         }
//     }
//     if (evenArr.length == 1) {
//         return +evenArr.join("");
//     } else {
//         return +oddArr.join("");
//     }

// }
// findOutlier([2, 6, 8, 10, 3]); // 3
// findOutlier([0, 1, 2]); //1

// Задача 46 (6kyu)
// Ребенок играет с мячом на n-м этаже высотного здания. Высота этого этажа h известна.
// Он бросает мяч из окна. Мяч отскакивает (например) на две трети своей высоты (отскок 0,66).
// Его мать смотрит из окна в 1,5 метрах от земли.
// Сколько раз мать увидит, как мяч проходит перед ее окном (в том числе когда он падает и подпрыгивает?
// Для достоверности эксперимента должны быть соблюдены три условия:
// Плавающий параметр "h" в метрах должен быть больше 0
// Плавающий параметр "bounce" должен быть больше 0 и меньше 1
// Плавающий параметр "окно" должен быть меньше h.
// Если все три условия выше выполнены, вернуть положительное целое число, иначе вернуть -1.
// Примечание:
// Мяч можно увидеть только в том случае, если высота отскакивающего мяча строго больше параметра окна.
// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3
// - h = 3, bounce = 1, window = 1.5, result is -1
// (Condition 2) not fulfilled).

// function bouncingBall(h, bounce, window) {
//     let result = 1;
//     let rebound = h * bounce;

//     if (h > 0 && 0 < bounce && bounce < 1 && window < h) {
//         for (rebound; rebound > window; rebound = rebound * bounce) {
//             result = result + 2;
//         }
//         return result;
//     } else {
//         return -1;
//     }
// }

// bouncingBall(30.0, 0.66, 1.5); //15

// Задача 47 (6kyu)
// Учитывая строку слов, вам нужно найти слово с наивысшим баллом.
// Каждая буква слова оценивается в зависимости от ее положения в алфавите: a = 1, b = 2, c = 3 и т. д.
// Вам нужно вернуть слово с наивысшим баллом в виде строки.
// Если два слова оцениваются одинаково, верните слово, которое появляется первым в исходной строке.
// Все буквы будут строчными, и все входные данные будут действительными.

// function high(x) {
//     let arr = x.split(" ");

//     let sumLetter = 0;
//     let result = "";

//     for (let word of arr) {
//         let currentLetter = 0;
//         console.log(word);

//         for (let j of word) {
//             console.log();
//             currentLetter += j.charCodeAt() - 96;
//             console.log(`${j} + ${j.charCodeAt() - 96}`);
//         }
//         console.log(`Total : ${currentLetter}`);
//         console.log(" ");
//         if (currentLetter > sumLetter) {
//             sumLetter = currentLetter;
//             result = word;
//         }
//     }

//     console.log(result);
// }

// high("what time are we climbing up the volcano"); // "volcano"

// Задача 48 (7kyu)
// Крокетный клуб Western Suburbs имеет две категории членства: Senior и Open. Им нужна ваша помощь с формой заявки, в которой потенциальным членам будет указано, в какую категорию они будут помещены.
// Чтобы быть пожилым, член должен быть не моложе 55 лет и иметь гандикап больше 7. В этом крокетном клубе гандикап варьируется от -2 до +26; чем лучше игрок, тем ниже гандикап.
// Вход
// Ввод будет состоять из списка пар. Каждая пара содержит информацию об одном потенциальном члене. Информация состоит из целого числа для возраста человека и целого числа для инвалидности человека.
// Вывод
// Вывод будет состоять из списка строковых значений (в Haskell: Open или Senior), указывающих, должен ли соответствующий элемент быть помещен в категорию Senior или Open.
// Example;
// input = [(18, 20), (45, 2), (61, 12), (37, 6), (21, 21), (78, 9)];
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"];

// function openOrSenior(data) {
//     let result = [];
//     for (let categories of data) {
//         if (categories[0] >= 55 && categories[1] > 7) {
//             categories = result.push("Senior");
//         } else {
//             categories = result.push("Open");
//         }
//     }
//     console.log(result);
// }
// openOrSenior([
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20],
// ]); //     ["Open", "Senior", "Open", "Senior"];

// Задача 49 (7kyu)
// Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке. Все пробелы в строке должны быть сохранены.

// Примеры
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
//     let arr = str.split(" ");
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i].split("").reverse().join(""));
//     }
//     result.join("");

//     console.log(result);
// }

// reverseWords("double spaced words"); // "elbuod  decaps  sdrow"

// Задача 50 (5kyu)
// Завершите функцию scramble(str1, str2), которая возвращает true, если часть символов str1 можно переставить так, чтобы они соответствовали str2, в противном случае возвращает false.

// Примечания:
// Будут использоваться только строчные буквы (a-z). Никакие знаки препинания или цифры не будут включены.
// Необходимо учитывать производительность
// Входные строки s1 и s2 заканчиваются нулем.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// function scramble(str1, str2) {
//     let check = str1.split("");
//     let answer = str2.split("");

//     let result = [];

//     for (let i = 0; i < answer.length; i++) {
//         for (let j = 0; j < check.length; j++) {
//             if (answer[i] === check[j]) {
//                 result.push(answer[i]);
//                 check.splice(j, 1);
//                 break;
//             }
//         }
//     }

//     console.log(result.join("") == str2 ? true : false);
// }

// scramble("rkqodlw", "world"); // true;
// scramble("cedewaraaossoqqyt", "codewars"); // true;
// scramble("katas", "steak"); // false;

// Задача 51 (7kyu)

// Вам дан двумерный массив, состоящий из цвета и его «общей» ассоциации в каждом элементе массива. Функция, которую вы напишете, должна возвращать цвет как «ключ» и ассоциацию как «значение».
// For example:

// var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]

// function colourAssociation(array) {
//     let result = [];
//     array.reduce((obj, elem) => {
//         obj = {};
//         obj[elem[0]] = elem[1];
//         return result.push(obj);
//     }, 0);

//     console.log(result);
// }
// colourAssociation([
//     ["white", "goodness"],
//     ["blue", "tranquility"],
// ]);
// [{ white: "goodness" }, { blue: "tranquility" }]
