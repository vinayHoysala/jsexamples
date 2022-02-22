let from = 1;
let to = 100;

for (let x = from; x <= to; x++) {
    let num = x;
    let isPrime = true;
    if (num == 1)
        isPrime = false;
    else {

        for (var i = 2; i <= parseInt(num / 2); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }

    }
    if(isPrime)
        console.log(num);
}