
export function countDigits(num) {
    let count = 0;
    do {
        num = parseInt(num / 10);
        count++;
    } while (num != 0);
    return count;
}

export function makeTwice(num) {
    let count = countDigits(num);
    switch (count) {
        case 1:
            return num * 10 + num;
        case 2:
            return num * 100 + num;
    }
}


function timeConvertion(seconds) {
    return parseInt(seconds / 3600);
}
//console.log(timeConvertion(18500));


function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;;
}

function isEven(num) {
    return num % 2 == 0;
}

function areaOfCircle(radius) {
    return radius * radius * 3.142;;
}

export default isEven;


/*
let result = add(5, 6);
console.log(result);

console.log(add(100, 600));

console.log(isEven(100));

*/