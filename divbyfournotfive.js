let low = 10;
let high = 100;

for (var i = low; i <= high; i++) {
    if (i % 4 == 0 && i % 5 != 0)
        console.log(i);
}