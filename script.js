console.log("Log from homework");

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

console.log("Бюджет на месяц = " +
    money + ". Type of var is " + typeof (money));
console.log("Дата :" + time);
let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
}

function chooseExpenses() {
    let i = 0;
    do {
        let expenseName = prompt("Введите обязательную статью расходов в этом месяце", ''),
            expenseValue = prompt("Во сколько это обойдется?", '');

        if (typeof (expenseName) === 'string' && (typeof (expenseName) != null) &&
            (expenseName != '') && (expenseValue != '') && (typeof (expenseValue) != null) &&
            expenseValue.length < 50) {
            console.log("done");
            appData.expenses[expenseName] = expenseValue;
            i++;
        }
    } while (i < 2);
}

chooseExpenses();

// for (let i = 0; i < 2; i++) {
//     let expenseName = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         expenseValue = prompt("Во сколько это обойдется?", '');

//     if (typeof(expenseName) === 'string' && (typeof(expenseName) != null)
//         && (expenseName != '') && (expenseValue != '') && (typeof(expenseValue) != null)
//         && expenseValue.length < 50) {
//         console.log("done");
//         appData.expenses[expenseName] = expenseValue;
//     } else {
//         i--;
//     }
// }

// let i = 0;
// while (i < 2) {
//     let expenseName = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         expenseValue = prompt("Во сколько это обойдется?", '');

//     if (typeof(expenseName) === 'string' && (typeof(expenseName) != null)
//         && (expenseName != '') && (expenseValue != '') && (typeof(expenseValue) != null)
//         && expenseValue.length < 50) {
//         console.log("done");
//         appData.expenses[expenseName] = expenseValue;
//         i++;
//     }
// }




appData.moneyPerDay = (appData.budget / 30).toFixed();

alert("Бюджет на один день: " + appData.moneyPerDay);

console.log(appData);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень дохода");
} else {
    console.log("Произошла ошибка");
}

function checkSavings() {
    if (appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();