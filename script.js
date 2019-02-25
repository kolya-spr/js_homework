console.log("Log from homework");
let money = +prompt("Ваш бюджет на месяц?");
console.log("Бюджет на месяц = " +
    money + ". Type of var is " + typeof (money));
let time = prompt("Введите дату в формате YYYY-MM-DD");
console.log("Дата :" + time);
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: {},
    savings: false
}

let expense_name_1 = prompt("Введите обязательную статью расходов в этом месяце");
let expense_value_1 = +prompt("Во сколько это обойдется?");

let expense_name_2 = prompt("Введите обязательную статью расходов в этом месяце");
let expense_value_2 = +prompt("Во сколько это обойдется?");

appData.expenses = {
    expense_value_1,
    expense_value_2
}

alert("Бюджет на один день: " + appData.budget / 30);

console.log(appData);

