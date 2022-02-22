function doSomething(x) {
    x();
}


doSomething(function() {
    console.log('abc called');
});


