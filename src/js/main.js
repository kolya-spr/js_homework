let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dateValue = document.querySelector('.day-value'),
    expensesBtn = document.getElementsByTagName('button')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optinalExpensesBtn = document.getElementsByClassName('optionalexpenses-btn')[0],
    optinalExpensesItem = document.getElementsByClassName('optionalexpenses-item'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    countBtn = document.getElementsByClassName('count-budget-btn')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    incomeItem = document.querySelector('.choose-income'),
    incomeValue = document.getElementsByClassName('income-value')[0],
    checkSavings = document.getElementById('savings'),
    chooseSum = document.getElementsByClassName('choose-sum')[0],
    choosePercent = document.getElementsByClassName('choose-percent')[0],
    monthSavingValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingValue = document.getElementsByClassName('yearsavings-value')[0];

let money, time;

startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dateValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("Все верно");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 2;
        }
    }
    expensesValue.textContent = sum;
});

optinalExpensesBtn.addEventListener('click', function () {
    for (let i = 1; i < optinalExpensesItem.length; i++) {
        let opt = optinalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень дохода";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 / percent;

        monthSavingValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
        percent = +choosePercent.value;
    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 / percent;

    monthSavingValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingValue.textContent = appData.yearIncome.toFixed(1);    }
});

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
            if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("Все верно");
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень дохода");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую", "");
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что то еще?", ''));
        appData.income.sort();
    }
};