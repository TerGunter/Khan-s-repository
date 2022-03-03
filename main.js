/**
 * ? Plan
 *  -push/pop
 *  -shift/unshift
 *  -slice/splice
 *  -join/split/reverse
 *
 * ! pop/push/shift/unshift/ splice/reverse/sort
 * - modifies an original array
 */

// const friends = [
//     "Peter","Harry",[1,2,3,"hello"]
// ];
// console.log(friends);
// friends.push({});
// console.log(friends);
// friends.push([123,21],null,true,"str");
// console.log(friends);

// let newArray = ["Ted", "Alex"];
// friends.push(newArray);
// console.log(friends);

// console.log(friends[friends.length-1]);
// let last = friends[friends.length-1];
// console.log(last[last.length-1]);

// console.log(friends);
// friends.pop();
// console.log(friends);
// console.log(deleted);

// let fruits = ["apple", "banana", "peach","orange","watermelon"];

// console.log(fruits);
// let res = fruits.slice(0,2);
// res.push(fruits[3]);

// console.log(res);

// friends.unshift(1,2,3,4);
// console.log(friends);

// let str =  "codingiseasy";
// let w = str.split('');

// console.log(w);
// for(let i = 1;i<w.length;i = i + 2){
//     let str2 = (w[i].toUpperCase());
//     console.log(str2);
// }

// let str =  "codingiseasy";
// let w = str.split('');

// console.log(w);
// for(let i = 1;i<str.length;i=i+2){
//     w.splice(i,1,w[i].toUpperCase());
// }
// console.log(w);

// let arr1 = [11, 7, 4];
// let arr2 = [22, 0, 8];
// let arr3 = [];
// for(let i=0;i<arr1.length;i++){
//     arr3.push(arr1[i]*arr2[i]);
// }
// console.log(arr3);

// let arr1 = ['Makers','Java','Full'];
// let arr2 = ['KG', 'Script', 'Stack'];
// let arr3 = [];

// for (let i=0;i<arr1.length;i++){
//     arr3.push(arr1[i]+arr2[i]);
// }
// console.log(arr3);

// let num = 5;
// switch (num) {
//     case 1:
//         console.log("зима");
//         break;
//     case 2:
//         console.log("весна");
//         break;
//     case 3:
//         console.log("лето");
//         break;
//     case 4:
//         console.log("осень");
//         break;
//     default:
//         console.log("Введите число от 1 до 4");
// }
// let arr = [1,2,9,4,5];
// let a,b,c;
// for (let i=0;i<arr.length;i++){
//    for (let j=0;j<arr.length-i-1;j++){
//        if(arr[j]<arr[j+1]){
//            tmp = arr[j];
//            arr[j]=arr[j+1];
//            arr[j+1]=tmp;
//        }
//    }
// }
// console.log(arr);

// # loop to access each array element
// for i in range(len(array)):

//   # loop to compare array elements
//   for j in range(0, len(array) - i - 1):

//     # compare two adjacent elements
//     # change > to < to sort in descending order
//     if array[j] > array[j + 1]:

//       # swapping elements if elements
//       # are not in the intended order
//       temp = array[j]
//       array[j] = array[j+1]
//       array[j+1] = temp

// let arr = [1,2,3,4,5];
// let newArr = [];

// for(let i =arr.length-1;i>=0;i--){
//     newArr.push(arr[i]);
// }
// console.log(newArr);
// let arr = [3,2,3,1,5,6];

// arr.splice(1,1);
// arr.splice(arr.length-2,1);

// console.log(arr);

// let arr = [{price: 33}, {price: 22}, {price: 55}, {price: 23}];
// let arr = [{price: 33}, {price: 22}, {price: 55}, {price: 23}];
// let num = [];
// for (let i = 0;i<arr.length;i++){
//     num.push(arr[i].price);
// }
// num.sort((a, b) => a - b);
// for(let j = 0;j<arr.length;j++){
//     arr[j].price = num[j];

// }
// for(let t =0;t<arr.length;t++){
// }
//     console.log(arr);

// let arr = [1, 2, 3, 5, 4, 5];

// arr.splice(0,arr.length-3);
// console.log(arr);

// function checkTask(arr, target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[0]+arr[i]===target){
//             console.log(0,i)
//         }
//     }
// }
// let arr = [10,20,40,50,60,70];
// let target = 50;
// checkTask(arr,target);

// function checkTask(arr, target){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]===target){
//                 arr.splice(0,arr.length,i,j);
//                 console.log(arr);

//             }
//         }
//     }

// }
// let arr =[206,30,40,50,60,30,20];
// let target = 50;
// checkTask(arr,target);

// function checkTask(arr1, arr2){

// }
// let arr1 = [1, 2, 3];
// let arr2 = [2, 30, 1];
// let check = 0;
// for (let i=0;i<arr1.length;i++){
//     for(let j = 0;j<arr2.length;j++){
//         if(arr1[i]===arr2[j]){
//             arr2.splice(arr2[j],1);
//             console.log(arr2);
//         }

//     }
// }
// console.log(arr1);

// let arr1 = [1, 2, 3];
// let arr2 = [2, 30, 1];

// for (let i=0;i<arr1.length;i++){
//     for(let j = 0;j<arr2.length;j++){
//         if(arr1[i]===arr2[j]){
//             arr2.splice(j,1);

//         }

//     }
// }

// for (let t = 0;t<arr2.length;t++){
//     arr1.push(arr2[t]);
// }
// console.log(arr1);

// let firstWorld = "son";
// let secondWord = "noa";

// let w1 = firstWorld.split('');
// let w2 = secondWord.split('');

// w1.sort();
// w2.sort();
// let one = w1.join('');
// let two = w2.join('');
// if(one===two){
//     console.log("true");
// }else{
//     console.log("false");
// }

// let bobsFollowers = ['George', 'Ringo', 'John', 'Paul'];
// let tinasFollowers = ['George', 'Yoko', 'Ringo'];
// let commonFollowers = [];
// bobsFollowers.push(tinasFollowers);

// for (let i=0;i<bobsFollowers.length;i++){
//     for(let j = 0;j<tinasFollowers.length;j++){
//         if(bobsFollowers[i]===tinasFollowers[j]){
//             commonFollowers.push(bobsFollowers[i]);
//         }

//     }
// }
// console.log(commonFollowers);
// let start = 4;
// let len = 4;
// for(let i = start;i<start+len;i++){
//     console.log(i);
// }
// let arr = [];
// function checkTask(start, len){
//     for(let i = start;i<start+len;i++){
//         arr.push(i);
// }
// console.log(arr);
// }
// start = -6;
// len = 4;
// checkTask(start,len);

// function Hello(name){
//     if(name){
//     console.log('Hi',name);
//     }else {
//         console.log('Hi guess');
//     }
// }
// Hello();

// function tr(num1, num2){
//     console.log(num1+num2);
// }
// tr(2,22);

// function checkTask(num){
//     let str = num.toString();
//     let arr = str.split('');
//     let sum = 0;
//     for(let i = 0;i<arr.length;i++){
//         sum+=parseInt(arr[i]);
//     }
//     return(sum);
// }
// console.log(checkTask(456));

// function checkTask(arr,bool){
//     let len = [];
//     if(bool===true){
//         for(let i = 0;i<arr.length;i++){
//             len.push(arr[i].length);
//         }
//         len.sort();
//         return len[0];
//     }else if(bool===false){
//         for(let i = 0;i<arr.length;i++){
//             len.push(arr[i].length);
//         }
//         len.sort();
//         len.reverse();
//         return len[0];
//     }
// }
// function checkTask(arr, bool){
//     let len = [];
//     if(bool===true){
//         for(let i = 0;i<arr.length;i++){
//             len.push(arr[i].length);
//         }
//         len.sort((a, b) => a - b);
//         len.reverse();
//         for(let i = 0;i<arr.length;i++){
//             if(len[0]===arr[i].length){
//                 return arr[i];
//             }
//         }
//     }else if(bool===false){
//         for(let i = 0;i<arr.length;i++){
//             len.push(arr[i].length);
//         }
//         len.sort((a, b) => a - b);
//         for(let i = 0;i<arr.length;i++){
//             if(len[0]===arr[i].length){
//                 return arr[i];
//             }
//         }
//     }
// }
// let arr = ['Финляндия', 'Япония', 'Лаос', 'Испания', 'Мексика'];

// console.log(checkTask(arr, true));

// function checkTask(str, char){
//     let arr = str.split('');
//     let count = 0;
//     for (let i = 0;i<arr.length;i++){
//         if(char===arr[i]){
//             count += 1;
//         }
//     }
//     return count;
// }
// let str = 'hello';

// console.log(checkTask(str, 'l'));

// function checkTask(num){
//     let fact = 1;
//     for(let i = 1;i<num+1;i++){
//         fact *=i;
//     }
//     return fact;
// }
// console.log(checkTask(6));

// function checkTask(x, y){
//     let arr = [];
//     for(let i = x;i<y+1;i++){
//         arr.push(i);
//     }
//     return arr;
// }

// console.log(checkTask(1,5));

// function checkTask(str){
//     let checked = [];
//     checked = str.split('');
//     checked.reverse();
//     let str2 = checked.join('');
//     if(str===str2){
//         return true;
//     }else{
//         return false;
//     }

// }

// console.log(checkTask('довод'));

// function checkTask(str){
//     let wovels = ['a','e','u','i','o'];
//     let strCheck = [];
//     strCheck = str.split('');
//     console.log(strCheck);
//     for(let i = 0;i<wovels.length;i++){
//         for(let j = 0;j<strCheck.length;j++){
//             if(wovels[i]===strCheck[j]){
//                 strCheck.splice(j,1);
//             }
//         }
//     }
//     let joinedstr = strCheck.join('');
//     return joinedstr.toUpperCase();

// }
// console.log(checkTask('hello'));

// function checkTask(num1, num2){
//     let arr = [];
//     for(let i =num1;i<num2;i++){
//         if(i%2===0){
//             arr.push(i.toString());
//         }
//     }
//     return arr;
// }
// console.log(checkTask('2000', '3001'));

// function checkTask(){
//     var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let password = [];
//     let arr = char.split('');
//     for(let i = 0; i<6;i++){
//         password.push(arr[Math.floor(Math.random() * char.length)]);

//     }
//     for(let j = 0; j<2;j++){
//         password.push(Math.floor(Math.random() * 10));

//     }
//     let str = password.join('');
//     return str;
// }
// console.log(checkTask());

// function checkTask(str){
//     let time = 10;
//     if(str.length===time){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(checkTask('nsnsns'));

// function checkTask(arr1, arr2){
//     let rafaelPoint = 0;
//     let novakPoint = 0;
//     for(let i = 0;i<arr1.length;i++){
//         if(arr1[i]>arr2[i]){
//             rafaelPoint+=1;
//         }else{
//             novakPoint +=1;
//         }
//     }
//     if(rafaelPoint>novakPoint){
//         return 'рафаель';
//     }else{
//         return 'новак';
//     }
// }

// let rafael =  [1, 0, 3];
// let novak = [2, 2, 1];
// console.log(checkTask(rafael, novak));

// let str = '';
// for(let i = 0;i<5;i++){
//     for(let j = 0;j<10;j++){
//         if(i===0 || i===4){
//             str += '#';
//         }else{
//             if(j===0 || j===9){
//                 str += '*';
//             }else{
//                 str += ' ';
//             }
//         }
//     }
//     str += '\n';
// }
// console.log(str);

// let str = '';
// for(let i = 0;i<5;i++){
//     for(let j = 0;j<5;j++){
//         if(i===0){
//             str +='*';
//         }
//     }
//     str += '\n';
// }
// console.log(str);

// let num = +prompt('Введите число');
// if(num%2===0){
//     console.log(`Число ${num} четное`);
//   }else{
//     console.log(`Число ${num} нечетное`);
//   }

// for(let i=2;i<20;i++){
//     if(i%2===0){
//       console.log(i);
//     }
//   }

// let arr = ['js', 'css', 'jq'];
// let str = arr.shift();
// console.log(str);

// let num = +prompt();
// let one = 'однозначное';
// let two = 'двухзначное';
// let three = 'трехзначное';
// let four = 'четырехзначное';
// let five = 'пятизначное';
// let pos = 'положительное';
// let neg = 'отрицательное';

// let str = num.toString();
// if(str.length===1 && num>0){
//     console.log(`Число ${num} ${one} ${pos}`);
// }else if(str.length===2 && num>0){
//     console.log(`Число ${num} ${two} ${pos}`);
// }else if(str.length===3 && num>0){
//     console.log(`Число ${num} ${three} ${pos}`);
// }else if(str.length===4 && num>0){
//     console.log(`Число ${num} ${four} ${pos}`);
// }else if(str.length===5 && num>0){
//     console.log(`Число ${num} ${five} ${pos}`);
// }
// else if(str.length-1===1 && num<0){
//     console.log(`Число ${num} ${one} ${neg}`);
// }else if(str.length-1===2 && num<0){
//     console.log(`Число ${num} ${two} ${neg}`);
// }else if(str.length-1===3 && num<0){
//     console.log(`Число ${num} ${three} ${neg}`);
// }else if(str.length-1===4 && num<0){
//     console.log(`Число ${num} ${four} ${neg}`);
// }else if(str.length-1===5 && num<0){
//     console.log(`Число ${num} ${five} ${neg}`);
// }

// let arr = ["Apple", "Orange", "Banana", "Pineapple", "Cherry"];
// let len = [];
// for(let i = 0;i<arr.length;i++){
//     len.push(arr[i].length);
// }
// len.sort((a, b) => a - b);
// len.reverse();
// for(let i = 0;i<arr.length;i++){
//     if(len[0]===arr[i].length){
//         console.log(arr[i]);

//     }
// }
// arr.sort();
// arr.reverse();
// console.log(arr);

// let num =  [1, 2, 3, 4, 5];
// let sum = 0;
// for(let i = 0;i<num.length+1;i++){
//     sum+=i;
// }
// console.log(sum);

// let arr = [1, 2, 3, 4, 5];

// let newarr = arr.splice(1,3);
// console.log(newarr);

// let n = 7;
// let str = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//         str += "*";
//     }
// string += "\n";
// }
// console.log(str);

// let arr = ["Life", "is", "hard"];
// arr.splice(2,1,"good");
// console.log(arr);

// let arr = ["один","два","три","четыре"];
// let str = arr.splice(0,1);
// arr.push(str[0]);
// console.log(arr);
// !=========================================================================================
// function counter(){
//     let count = 0;
//     return function (){
//         count++;
//         return count
//     }
// }
// let first = counter();
// first();
// first();
// first();
// console.log(first());

// let second = counter();
// second();
// second();
// console.log(second());

// function func(num){
//     if(num===1){
//         return 1;
//     }
//     return num+func(num-1);
// }
// let num = +prompt('Enter a number');
// console.log(func(num));

// function feb(num){
//     if(num>1){
//         return feb(num-1) + feb(num-2);
//     }else{
//         return num;
//     }
// }
// let num = prompt();
// console.log(feb(num));

// function checkTask(number){
//     if(number===1) {
//         return 1;
//     }
//     else{
//         console.log(number);
//         return checkTask(number-1);
//     }
// }
// console.log(checkTask(5));

// function checkTask(arr){    //todo ask_______________________________________________
//     if(arr.length===1){
//         return arr[0];
//     }else{
//         console.log(arr[arr.length-1]);
//         arr.pop();
//         return checkTask(arr);
//     }
// }
// let arr = ["hello", 25, true, {}]
// console.log(checkTask(arr));

// function checkTask(arr, i=arr.length-1){
//     if(i===0){
//         return arr[i];
//     }else{
//         console.log(arr[i]);
//         return checkTask(arr, i=i-1);
//     }
// }
// let arr = ["hello", 25, true, {}]
// console.log(checkTask(arr));

// function checkTask(arr, i=0){
//     if(i===arr.length-1){
//         return arr[i];
//     }else{
//         console.log(arr[i]);
//         return checkTask(arr, i+1);
//     }
// }
// let arr = ["hello", 25, true, {}]
// console.log(checkTask(arr));

// function checkTask(num){
//     if(num===1){
//         return 1;
//     }else{
//         return num*checkTask(num-1);
//     }
// }

// console.log(checkTask(5));

// function closure(name){
//     return function() {
//         console.log('Hello', name)
//     }
// }
// closure('Makers')();

// function checkTask(a){
//     return function(b){
//         return a+b;
//     }
// }
// console.log(checkTask(3)(4));

// function checkTask(num){
//     if(num===1){ return num  ;
//     }else{ console.log(num)
//         return checkTask(num-1)
//     }
// }
// console.log(checkTask(5))

// let arr = ['hello', 25, true, {}]
// let arr1 = []
// function checkTask(){
//     if(arr.length!==0){console.log(arr1 = arr.shift())
//     return checkTask();
//     }
// }
// checkTask()

// let checkTask = (str) => {
//   let split = str.split("");
//   // console.log(split);
//   split.reverse();
//   let joined = split.join("");
//   console.log(joined);
// };
// checkTask("JavaScript");

// const checkTask = (arr) => {
//   let arr2 = 1;
//   for (let i = 0; i <= arr.length; i++) {
//     arr2 += arr[i] * 5;
//     if (arr2 % 2 === 0) {
//       arr2.split("");
//       console.log(arr2);
//     }
//   }
// };
// checkTask([1, 2, 3, 4, 5, 6]);

// function checkTask(str){
//   let ptrn = /([01]\d|2[0-3]):([0-5]|[0-9])/
//     console.log(ptrn.test(str))
// }
// checkTask('25.00')

// function checkTask(str){
//     let ptrn = /(\w).(com|ru)/
//       console.log(ptrn.test(str))
//   }
//   checkTask('google.com')

// function checkTask(str) {
//     console.log(str.replace(/\b(\w+)\b(?:\s+\1\b)+/g, "$1"));
//   }
//   checkTask("dsf xxx xxx xxx sd");

// function checkTask(radius){
//     let l = Math.floor(2*3.14*radius)
//     let s = Math.floor(3.14*radius*radius)
//     console.log([l,s])
//   }
//   checkTask('31', '78')

// function checkTask(result){
//     result>23&&result<40 ? console.log('Hello') : console.log('Goodbye')
// }
// checkTask('21')

// function checkTask(season){
//     switch (season) {
//        case 1:
//             console.log("зима");
//             break;
//         case 2:
//            console.log("весна");
//             break;
//        case 3:
//             console.log("лето");
//            break;
//         case 4:
//             console.log("осень");
//             break;
//         default:
//            console.log("Неправильное число")
//    }}
//    checkTask()

// function checkTask(){
//     for(let i=1;i<101;i++){
//     if(i%2===0){
//        console.log(i);
//      }
//   }
// }

// function checkTask(word) {
//   let one = word.split("");
//   one.reverse();
//   let two = one.join("");
//   if (one === two) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// checkTask("rotor");

// function getPassword() {
//   let charset1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let charset2 = "abcdefghijklmnopqrstuvwxyz";
//   let charset3 = "123456789";

//   let pass = '';
//   for (let i = 0; i < 2; i++) {
//     pass += charset1.charAt(Math.floor(Math.random() * charset1.length));
//   }
//   for (let i = 0; i < 3; i++) {
//     pass += charset2.charAt(Math.floor(Math.random() * charset2.length));
//   }
//   for (let i = 0; i < 3; i++) {
//     pass += charset3.charAt(Math.floor(Math.random() * charset3.length));
//   }
//   return pass;
// }
// console.log(getPassword());

// function checkTask(a,b){
//     let arr = []
//     for(let i = a; i<=b; i++){
//         let strArr = String(i).split('')
//         if(strArr.every(num => num%2===0)){
//             arr.push(i)
//         }
//     }
//     return arr
// }

// console.log(checkTask(2000, 3001))
// ?ВЛоженный цикл
// ! Сначала отработает первый цикл for, затем три раза отработает второй цикл(цикл в цикле отработает до конца, затем сноав включается родительский цикл), затем снова отработает первый цикл, который снова запустит второй цикл три раза(пока второй цикл не закончит свой цикл до конца)
// for (let i = 0; i < 5; i++) {
//   console.log("first loop");
//   for (let j = 0; j < 3; j++) {
//     console.log("second loop");
//   }
// }

//! TASK15 функции и области видимости
// function checkTask(rafael, novak) {
//   let r = 0;
//   let n = 0;
//   for (let i = 0; i < 3; i++) {
//     if (rafael[i] > novak[i]) {
//       r++;
//     } else {
//       n++;
//     }
//   }
//   return rafael > novak ? console.log("рафаэл") : console.log("новак");
// }
// checkTask([1, 0, 3], [2, 2, 1]);

// !Пример
// let arr = [12, 3, 4, [3, 3, 2], [3, [3]]];
// console.log(arr);
// console.log(arr.flat(6));// todo можно использоавть infinity, если мы не знаем количество элементо массива

// !TASK 11 замыкание и рекурсия
// ? мы вытаскиваем каждый элемент из массива по одному и сравниваем его с значением 'number'
// function checkTask(arr){
//     if(arr.length===0) return 0
//     let total = 0
//     let first = arr.shift()
//     if(Array.isArray(first)){
//         total += checkTask(first)
//     }else if(typeof first === "number"){
//         total += (first **2)
//     }
//     return total + checkTask(arr)
// }
// console.log(checkTask([[1,2],3]))

// ! TASK 12
// function checkTask(arr){
//     if(arr.length===0) return 0
//     let total = 0
//     let first = arr.shift()
//     if(Array.isArray(first)){
//         total += checkTask(first)
//     }else if(typeof first === "number"){
//         total += 1
//     }
//     return total + checkTask(arr)
// }
// console.log(checkTask([[[5], 3], 0, 2, ['test'], [], [4, [5, 6]]]))

//! TASK 13
// return name2 => name1 === name2//todo  решение с помощью тернарного оператора
// function checkTask(name1) {
//   return function (name2) {
//     if (name1 === name2) {
//       return true;
//     } else {
//       return false;
//     }
//   };

//   }
// !TASK 14
// function checkTask(a, b) {
//   if (a + 1 === b) return [];
//   return [a + 1, ...checkTask(a + 1, b)]; //todo (...) [три точки] = это Спрэд оператор, который нужен для того, чтобы распаковывать массив
// }
// console.log(checkTask(5, 10));
// !TASK 15
// function checkTask(a, b){
//     if(b===0) return 1
//     return a * checkTask(a, b-1) //todo при первом вызове функции он не умножает 2 на 2, он превращает вызов функции в двойку после первого круга
// }
// !TASK 13 стрелочные функции
// const checkTask = {
//     name: 'Bob',
//     age: 22,
//     job: 'teacher',
//     show: function(){
//         for(let key in this){
//             if(key !=='show'){
//                 console.log(key+': ' + this[key])//todo key - это ключ, key в квадратных скобках вытаскивает значение ключа
//             }
//         }
//     }
// }

// !TASK 14 стрелочные функции
// const checkTask = {
//   floor: 1,
//   printFloor: function () {
//     console.log(this.floor);
//   },
//   upOneFloor: function () {
//     if (this.floor < 16) {
//       this.floor++;
//     } else {
//       console.log("Error!");
//     }
//   },
//   downOneFloor: function () {
//     if (this.floor > 1) {
//       this.floor--;
//     } else {
//       console.log("Error!");
//     }
//   },
//   toFloor: function (num) {
//     if (num > 16 || num < 1) return console.log("Error!");
//     if (num > this.floor) {
//       while (num !== this.floor) {
//         this.upOneFloor();
//         this.printFloor();
//       }
//     } else {
//       while (num !== this.floor) {
//         this.downOneFloor();
//         this.printFloor;
//       }
//     }
//   },
// };
// checkTask.toFloor(13); //todo вызов функции по ключу и указать значение в скобках

// !Решение таска выше от Бегимай
// let elevator = {
//   currentFloor: 1,
//   maxFloor: 16,
//   minFloor: 1,
//   printFloor() {
//     console.log(this.currentFloor);
//   },
//   upOneFloor() {
//     if (this.currentFloor < this.maxFloor) {
//       this.currentFloor++;
//       this.printFloor();
//     } else {
//       console.log("This is max floor");
//     }
//   },
//   downOneFloor() {
//     if (this.currentFloor > this.minFloor) {
//       this.currentFloor--;
//       this.printFloor();
//     } else {
//       console.log("This is min floor");
//     }
//   },
//   toFloor(num) {
//     if (num <= this.maxFloor && num >= this.minFloor) {
//       while (this.currentFloor !== num) {
//         if (num > this.currentFloor) {
//           this.upOneFloor();
//         } else if (num < this.currentFloor) {
//           this.downOneFloor();
//         }
//       }
//     } else {
//       console.log("We have only 16 floors");
//     }
//   },
// };
// elevator.printFloor();
// elevator.toFloor(5);
// elevator.toFloor(2);

// function checkTask(str) {
//   let ptrn = /(\w).(com|ru)/;
//   console.log(ptrn.test(str));
// }
// checkTask("google.com");

// function checkTask(a, b) {
//   console.log(a + b);
//   return;
// }
// checkTask(2, 4);
// !Реверс слова рекурсией
// function reverse(str) {
//   if (str.length == 0) return "";
//   return reverse(str.substr(1)) + str.charAt(0);
// }
// console.log(reverse("slovo"));

// !Задачи на закрепление
// !Task 6
// function checkTask() {
//   function first(num) {
//     return num + 1;
//   }
//   function first1(num) {
//     return num - 1;
//   }
//   function first2(num) {
//     return num * 2;
//   }
//   function first3(num) {
//     return num / 2;
//   }
//   return [first, first1, first2, first3];
// }
// console.log(checkTask()[0](6));
// console.log(checkTask()[1](6));
// console.log(checkTask()[2](6));
// console.log(checkTask()[3](6));

// !Методы массивов Tasks
// ! 1
// function checkTask(arr){
//     arr = arr.filter(item=>item>0)
//     console.log(arr)
// }
// checkTask([2, 3, 5, 9, 8, -11, 6, 7, 47, 53, -1, -3, 17])
// ! 2
// let sum = 0
// function checkTask(arr){
//     arr.forEach((item) => {
//         sum+=item
//     })
//         console.log(sum)
// }
// checkTask([10, 25, 25, 15, 5, 10])
// ! 3
// function checkTask(arr){
//     let newArr = arr.reduce((a, b) => a + b)
//    console.log(newArr)
//    }
//    checkTask([175, 50, 25])
// ! 4
// function checkTask(arr) {
//     max = arr[0];
//    arr.forEach(function(e) {
//      if (e > max) max = e;
//    });
//    console.log(max);
//    return max;
//  }
//  checkTask([4,15,-4,27,12,8])
// ! 5 от Бегимай
//todo #5  Посчитать количество каждых цветов в массиве.
// Вывод должен быть ввиде ключ-значение
// const apples = [
//     "green",
//     "green",
//     "red",
//     "red",
//     "yellow",
//     "red",
//     "yellow",
//     "green",
//     "green",
//   ];

//   let res = apples.reduce((acc, item) => {
//     if (acc[item] === undefined) {
//       acc[item] = 0;
//     }
//     acc[item]++;
//     return acc;
//   }, {});
//   console.log(res);

//   let max = 0;
//   let maxItem = "";
//   for (let elem in res) {
//     //   console.log(res[elem]);
//     if (res[elem] > max) {
//       max = res[elem];
//       maxItem = elem;
//     }
//   }
//   console.log(max);
//   console.log(maxItem);

//   // {green: 3, red: 3, yellow: 2} Вывод
// ! 5 От Майкла
// function checkTask(arr) {
//   const counts = {};
//   arr.forEach((elem) => {
//     counts[elem] = (counts[elem] || 0) + 1;
//   });
//   // console.log(counts)

//   let max = 0;
//   let maxItem = "";
//   for (let elem in counts) {
//     // console.log(counts[elem])
//     if (counts[elem] > max) {
//       max = counts[elem];
//       maxItem = elem;
//     }
//   }
//   // console.log(max)
//   console.log(maxItem);
// }
// checkTask([4, 5, 5, 5, 3, 19, 5, 2, 3, 1, 3, 4, 4]);
// ! 6
// function checkTask(arr) {
//   let arr1 = [];
//   arr.forEach((item) => {
//     arr1.push(item ** 2);
//   });

//   return arr1;
// }
// console.log(checkTask([1, 2, 3]));
// ! 7
// function checkTask(arr){
//     let checkNums = arr.every((item) => {
//      return item > 0
//    })
//    console.log(checkNums)
//    }
//    checkTask([4, 5, 8, 9]);

// ! 8
// function checkTask(arr){
//     let newArr = arr.filter((item)=>{
//         return item.length>5
//     })
//     console.log(newArr)
// }
// checkTask(['июнь', 'октябрь', 'май', 'ноябрь', 'март'])

// ! 9
// function checkTask(arr){
//     let result = arr.reduce(function(sum, elem) {
//   if (elem < 0) {
//       return sum + elem;
//   } else {
//       return elem;
//   }
// });
// console.log(result)
// }
// checkTask([1, 2, 3, 0, 4, 5, 6])

// ! 9 От Майкла
//  function checkTask(arr){
//     let narr = arr.slice(0,arr.indexOf(0))
//     let arr1 = narr.reduce((acc, item) =>{
//         return acc+item
//     },0)
//     console.log(arr1)
// }
// checkTask([1, 2, 3, 0, 4, 5, 6] )
// ! 9 От Нардина
// function checkTask(arr){
//     let checkNums = arr.reverse().reduce((a,b)=>{
//         // return b !==0 ? a+b:0 //todo Можно решить так, или как вариант снизу
//         if (item!==0){
//             return acc + item
//         }else {
//             return 0
//         }
//     })
//     return checkNums
// }
// console.log(checkTask(arr));
// ! 10
// function checkTask(arr) {
//     arr.forEach((item) => {
//       if (item.includes("<h1>")) {
//         console.log(`<h1> ${item} </h1>`);
//       } else if (item.includes("p")) {
//         console.log(`<p>${item} </p>`);
//       } else if (item.includes("<div>")) {
//         console.log(`<div>${item} </div>`);
//       }
//     });
//     return;
//   }
//   checkTask(["Это заголовок <h1>", "А это параграф <p>", "А это тег <div>"]);
// ! 11
// function checktask(arr){
//     let newArr = arr.reduce((obj, item)=>{
//         obj[item[0]] = item [1]
//         return obj
//     }, {})
// console.log(newArr)
// }
// checktask([['a', 1], ['b', 2]])
// ! 12
// function checkTask(arr) {
//   let res = arr.reduce((acc, item) => {
//     if (Array.isArray(item)) {
//       item.forEach((elem) => {
//         acc = acc + elem;
//       });
//     } else {
//       return acc + item;
//     }
//     return acc;
//   });
//   console.log(res);
// }
// checkTask([1, 2, [4, 5, 6], [7, 8]]);
// ! 13
// function checkTask(arr) {
//   let mapped = arr.map((item) => {
//     // console.log(item);
//     let newArr = item.toString().split("");
//     // console.log(newArr);
//     let reduce = newArr.reduce((sum, elem) => {
//       return sum + +elem;
//     }, 0);
//     // console.log(reduce);
//     return String.fromCharCode(reduce);
//   });
//   console.log(mapped.join(""));
// }
// checkTask([
//   584131398786538461382741n,
//   444521974525439455955n,
//   71415168525426614834414214n,
//   353238892594759181769n,
//   48955328774167683152n,
//   77672648114592331981342373n,
//   5136831421236n,
//   83269359618185726749n,
//   2554892676446686256n,
//   959958531366848121621517n,
//   4275965243664397923577n,
//   616142753591841179359n,
//   121266483532393851149467n,
//   17949678591875681n,
// ]);
// ! 14
// let sum = 0
// function checkTask(input){
//     let input1 = input.split(' ')
//     input1.map((item, index)=>{
//         for( let i = 0; i<index.length; i++){
//             if(i>1){
//                     sum += index.length
//                 return    sum = sum + i[0]
//             }else{
//                 return i
//             }
//         }
//     })
//         console.log(input1)
// }
// checkTask('Сложный путь у программиста, Только горе - не беда, Если выбрал путь тернистый - То тогда тебе - сюда!')

// !Методы массива. Повторение
// ! 1
// function checkTask(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === "number") {
//         console.log(`${arr[i]} - число`);
//       } else {
//         console.log(`${arr[i]} - не число`);
//       }
//     }
//   }
//   checkTask(["Молоко", -77, 11, "Мед", -88]);
// ! 2
// function checkTask(elem, arr) {
//   if (arr.includes(elem)) {
//     console.log(true, arr.indexOf(elem));
//   } else {
//     console.log(false);
//   }
// }
// checkTask(30, ["Молоко", 20, 40, "дом", 30]);
// ! 3
// function checkTask(arr) {
//   sum = 0;
//   sum1 = 0;
//   sum2 = 0;
//   arr.forEach((item) => {
//     return (sum += item);
//   });
//   console.log(`forEach: ${sum}`);
//   sum1 = arr.reduce((a, b) => (sum1 = a + b));
//   console.log(`reduce: ${sum1}`);
//   arr.map((item) => (sum2 += item));
//   console.log(`map: ${sum2}`);
// }
// checkTask([5, 6, 7, 8, 9]);
// ! 4
// function checkTask(arr) {
//   newArr = arr.filter((item) => {
//     return item.length >= 5;
//   });
//   return newArr;
// }
// console.log(checkTask(["aaa", "aaaqqq", "zzzqq", "zz", "qsaa", "q", "az"]));
// ! 5
// function checkTask(arr) {
//   newArr = arr.filter((item) => {
//     if (Array.isArray(item)) {
//       return item;
//     } else {
//       delete item;
//     }
//   });
//   console.log(newArr);
// }
// checkTask([1, 2, [3, 4], 5, [6, 7]]);
// ! 6
// function checkTask(elem, arr) {
//   newArr = arr.filter((item) => {
//     return item !== elem;
//   });
//   return newArr;
// }
// console.log(checkTask(2, [2, 5, 9, 6]));
// ! 7
// function checkTask(arr) {
//     sum = 0;
//     newArr = arr.reduce((acc, item) => {
//       if (item === 0) {
//         sum = acc;
//       }
//       return acc + item;
//     });
//     return sum;
//   }
//   console.log(checkTask([1, 9, 3, 1, 0, 4, 5, 6]))
// ! 8
// function checkTask(arr) {
//     sum = 0;
//     newArr = arr.reduce(function (acc, item) {
//       if (acc > 10) {
//         console.log(sum);
//         return;
//       } else {
//         sum++;
//         return acc + item;
//       }
//     });
//   }
//   checkTask([3, 1, 4, 2, 4, 5, 6] );
// ! 9
// function checkTask(arr){
//     mapped = arr.map((item)=>{
// return item[0]+item[item.length-1] //todo Если оставить просто return item[0]+[item.length-1] результат будет равен не первой и последней букве,  а первой букве и сумме оставшихся символов(Пример результата: h1, g6, s4)
//     })
//     console.log(mapped)
// }
// checkTask(['hi', 'goodbye', 'smile'] )
// ! 10

// ! Tasks Дестрктуризация
// ! 1
// function checkTask(fullName){
//     let [firstName, , , titul] = fullName
//     console.log(firstName, titul)
// }
// checkTask(["Julius", "Caesar", "Consul", "of the Roman Republic"] )
// ! 2
// function checkTask(fullName){
//     let [firstName, lastName] = fullName.split(' ')
//     console.log(firstName, lastName)
// }
// checkTask('Albert Einstein')
// ! 3
// function checkTask(fullName){
//     let nn = fullName.split(" ")
//     let [firstName, lastName] = nn
//     let obj = {
//         firstName,
//         lastName,
//     }
//     console.log(obj)
// }
// checkTask('Albert Einstein')
// ! 4
// function checkTask(obj){
//     let {name, surname, age} = obj
//     console.log(name, surname, age)
// }
// checkTask({name: 'Петр', surname: 'Петров', age: '20 лет'})
// ! 5
// function checkTask(obj){
//     let {hello, apple, ...java} = obj
//     console.log(java)
// }
// checkTask({ hello: 'World', apple: 'iPhone', java: 'script' })
// ! 6
// let a = 1
// let b = 2
// function checkTask(a,b){
//     [a,b]=[b,a]
//     console.log(a,b);
// }
// checkTask(a,b)
// ! 7
// function checkTask(arr) {
//   let [, elem2 = "bbb", elem3 = "eee"] = arr;
//   console.log(elem2, elem3);
// }
// checkTask(["первый", "второй", "третий"]);
// ! 8
// function checkTask(obj){
//     let {hobbies: [hobby1, hobby2]} = obj
//     console.log(hobby1,hobby2)
// }
// checkTask( {name: 'Jack', age: '22', hobbies: ['football', 'swimming']})
// ! 9
// function checkTask(obj) {
//     let { name = "Аноним", surname = "Анонимович", age = "? лет" } = obj;
//     console.log([name, surname, age]);
//   }
//   checkTask({ name: "Петр", surname: "Петров" });
// ! 10
// function checkTask(info){
//     let [name, surname, age] = info
//     let obj = {
//         name,
//         surname,
//         age,
//     }
//     console.log(obj)
// }
// checkTask(['Sam', 'Christenson', 22])
// ! 11
// function checkTask(obj){
//     let {name = "Aibek", age = "99"} = obj
//     console.log(name, age)
// }
// checkTask( {name: 'John', age: '22', })
// ! 12
// function checkTask(person) {
//     let name = person.n;
//     let surname = person.s;
//     let age = person.a
//     let {n= "Aibek", s= "Bekov", a= 99} = person
//     console.log(n,s,a);
//   }
// ! 13
// function checkTask(obj){
//     let abc = Object.entries(obj)
//     let [Sam, Kate, Luck] = abc
//     let [a,b] = Sam
//     let [c,d] = Kate
//     let [f,g] = Luck
//         if(b>d&&b>g){
//         console.log(a)
//     }
//     else if(b<d&&d>g){
//         console.log(c)
//     }
//     else if(g>b&&d<g){
//         console.log(f)
//     }
// }
// checkTask({"Sam": 22,"Kate": 28,"Luck": 16} )
// ! 14
// function checkTask(obj) {
//     let {
//       size: { width, height },
//       items: [item1, item2],
//       extra,
//     } = obj;
//     console.log(width);
//     console.log(height);
//     console.log(item1);
//     console.log(item2);
//     console.log(extra);
//   }
//   checkTask({
//     size: { width: 100, height: 200 },
//     items: ["Cake", "Donut"],
//     extra: true,
//   });
// ! 15
// function checkTask(arr){
//     for(let item of arr){
//         let [one,two,three] = item
//         console.log(`первое - ${one}, второе - ${two}, третье - ${three}`)
//     }
// }
// checkTask([[15, 15.1, 15.2], [16,16.1,16.2], [17,17.1,17.2]] )
// ! Extra 1

//! Пример обычной функции, когда мы выводим из массива только четные цифры
// let ar1 = [4, 5, 6, 7, 8];
// let res = ar1.filter(function (item, index) {
//   if (index % 2 === 0) {
//     return true;
//   }
// });
// console.log(res);
// ! Пример её конвертации в стрелочную однострочную функцию
// let ar1 = [4, 5, 6, 7, 8];
// let res1 = ar1.filter((item, index) => index % 2 === 0);
// console.log(res1);

// ! Два важных отличия стрелочной от обычной функции
// ? Стрелочная функция не имеет собственного this, и берет this из глобальной области
// ? Стрелочная функция не имеет собственного arguments, но мы можем воспользоватья синтаксисом снизу, чтобы воспользоваться им
// ! Можно записать arguments через спрэд оператора и названия переменной
// let f1 = (...arg) => {
//! Можно записать стрелочную функцию в переменную и пользоваться ей снова
//   console.log(arg);
//   console.log("work");
// };
// f1(99, 100, 101, 123, 3123);
