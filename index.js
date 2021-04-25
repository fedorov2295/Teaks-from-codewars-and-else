let date = new Date(2012, 0, 3); 
function getDate(date) {
    let weekDay = date.getDay();
    switch (weekDay){
        case (0):
            return 'ВС'
        case (1):
            return 'ПН'
        case (2):
            return 'ВТ'
        case (3):
            return 'СР'
        case (4):
            return 'ЧТ'
        case (5):
            return 'ПТ'
        case (6):
            return 'СБ'
    }

}

let date1 = new Date(2012, 0, 3); 
function getLocalDay(date) {
    let weekDay = [1,2,3,4,5,6,7];

    return weekDay[date.getDay()+1]
}

let date2 = new Date(2015, 0, 2);
function getDateAgo(date, days) {
    return new Date(date - days*24*60*60*1000)
}

function getSecondsToday() {
    let today = new Date();
    return (today - today.setHours(0,0,0,0))/1000;
}

let company = { 
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
      sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
      internals: [{name: 'Jack', salary: 1300}]
    }
  };

function sumSalaries(departament) {
    if (Array.isArray(departament)) {
        return departament.reduce((prev, current) => prev + current.salary, 0)
    }
    else {
        let sum =0;
        for (let subDep of Object.values(departament)) {
            sum += sumSalaries(subDep)
        }
        return sum;
    }
}

function sumTo(n) {
    let sum = 0;
    for (let i = 0; i<= n; i++) {
        sum += i
    }
    return sum;
}
function sumToRecur(n) {
    if (n==1){
        return n;
    } else {
        return n + sumToRecur(n-1)
    }
}
function sumToMath(n) {
    return ((1+n)*n)/2
}

function factorial(n) {
    if (n==1) {
        return n;
    } else {
        return n*factorial(n-1);
    }
}

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function printList(list) {
    alert(list.value); 

  if (list.next) {
    printList(list.next); 
  }
}

function sumDoubleBrackets(a) {
    return function (b) {
        return a+b
    }
}

function inBetween(a,b) {
    return function (val) {
        return a<=val && b>=val ? true : false
    }
}

function inArray(arr) {
    return function (piece) {
        return arr.includes(piece) ? true : false
    }
}

function printNumbers(from, to) {
    let current = from;

  let timerId = setInterval(function() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}
function printNumbers(from, to) {
    let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}