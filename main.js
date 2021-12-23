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
//     numbers.unshift("(").splice(4, 0, ")", " ").splice(9, 0, "-");
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
