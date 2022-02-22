let emp1 = new Object();

emp1.id = 123;
emp1.name = 'Vinay';
emp1.doWork = function() {
    console.log(this.name + ' is working');
}

console.log(emp1);
emp1.doWork();

let emp2 = new Object();
