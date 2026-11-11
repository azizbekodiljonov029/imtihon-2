// Namuna("div*2") "<div></div><div></div>"
// Namuna("p*1") "<p></p>"
// Namuna("li*3") "<li></li><li></li><li></li>"

function Namuna(str) {
    const [tag, count] = str.split('*');
    let result = '';
    for(let i = 0; i < (count || 1); i++) {
        result += `<${tag}></${tag}>`;   
    }

    return result;
};
console.log(Namuna("div*2"));   
console.log(Namuna("p*1"));
console.log(Namuna("li*3"));

// 101-masala
// namuna(3) 6
//1+2+3=6
// namuna(10) 55
//1+2+3+...+10=55
// namuna(7) 28
//1+2+3+...+7=28

function namuna(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(namuna(6));

// 3-masala
// Namuna(4,{min:0,max:5}) true
// Namuna(4,{min:4,max:5}) true
// Namuna(4,{min:6,max:10}) false
function ret(num, range) {
    for (let key in range) {
        if (key === 'min') {
            var min = range[key];
        }
        if (key === 'max') {
            var max = range[key];
        }
    }
     return num >= min && num <= max;                                                                                                    //num >= min && num <= max
}
console.log(ret(10, { min: 0, max: 10 }));
// 4-masala
// Namuna(1) true
// Namuna(3) false
//3^2=9
// Namuna(6) true
//6^2=36(endswith6)
// Namuna(95) false
//95^2=9025 (doesnotendwith95)
function twoNum(num){
    for(let i = 0; i < 10; i++){
        if(num * num % 10 == num || num * num % 100 == num){
            return true;
        }else{
            return false;
        }
    }
}
console.log(twoNum(9));
console.log(twoNum(69));
console.log(twoNum(3));

// 5-masala
// Namuna([0,0,0,0,0]) [0,1,2,3,4]
// Namuna([1,2,3,4,5]) [1,3,5,7,9]
// Namuna([5,4,3,2,1]) [5,5,5,5,5]

function nums(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0){
            newArr.push(i);
        }else if(arr[i] % 3 === 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(nums([0,0,0,0,0]));
// console.log(nums([1,2,3,4,5]));

// 6-masala
// Namuna(["fanta","cola","water"]) ["water"]
// Namuna(["fanta","cola"]) []
// Namuna(["lemonade","beer","water"]) ["lemonade",
// "beer","water"]

function drinks(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == "water"){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(drinks(["fanta","cola","beer","water"]));

// 7-masala
// Namuna(123) 321
// Namuna("001") 100
// Namuna(999) 999

function reverseNum(num){
    for(let i = 0; i < 10; i++){
        return Number(num.toString().split("").reverse().join(""));
    }
}
console.log(reverseNum(123));
console.log(reverseNum("001"));
console.log(reverseNum(256));

//8-masala
// Namuna(5,9) 7
// Namuna(5,9) 9
// Namuna(5,9) 5
function randomNum(min,max){
    for(let i = 0; i < 10; i++){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
console.log(randomNum(5, 9));
console.log(randomNum(5, 9));   

// 9-masala
// Namuna(153) true
//1^3+5^3+ 3^3=1+125+27=153
// Namuna(370) true
// Namuna(1652) false

function armstrong(num){
    let sum = 0;
    let strNum = num.toString();
    for(let i = 0; i < strNum.length; i++){
        sum += Math.pow(parseInt(strNum[i]), 3);
    }
    return sum === num;
}
console.log(armstrong(153));
console.log(armstrong(370));
console.log(armstrong(1652));
// 10-masala
// Namuna("fvLzpxmgXSDrobbgMVrc") 6
// Namuna("JMZWCneOTFLWYwBWxyFw") 1
function countUppercase(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()){
            count++;
        }
    }
    return count;
}
console.log(countUppercase("fvLzpxmgXSDrobbgMVrc"));
console.log(countUppercase("JMZWCneOTFLWYwBWxyFw"));    