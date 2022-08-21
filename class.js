// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let successful = []

let unSuccessful = []

let taxes = Number

let taxesMax = {}

let taxesMin = {}

// Реальные данные 2021*

let bank = [

    {

        name: 'Apple',

        budget: 1000000,

        tax: 28,

        expensesPerYear: [

            {
                title: 'Salaries',
                total: 125000
            },

            {
                title: 'Utilites',
                total: 18000,
            },

            {
                title: 'Rent',
                total: 258000
            }

        ]

    },

    {

        name: 'Microsoft',

        budget: 988000,

        tax: 21,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 148000

            },

            {

                title: 'Utilites',

                total: 124000,

            },

            {

                title: 'Rent',

                total: 314000

            }

        ]

    },

    {

        name: 'HP',

        budget: 609000,

        tax: 14,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 414000

            },

            {

                title: 'Utilites',

                total: 19000,

            },

            {

                title: 'Rent',

                total: 114400

            }

        ]

    },

    {

        name: 'Xiomi',

        budget: 889500,

        tax: 17,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 318000

            },

            {

                title: 'Utilites',

                total: 14000,

            },

            {

                title: 'Rent',

                total: 169000

            }

        ]

    },

    {

        name: 'Samsung',

        budget: 889500,

        tax: 12,

        expensesPerYear: [

            {

                title: 'Salaries',

                total: 650400

            },

            {

                title: 'Utilites',

                total: 29000,

            },

            {

                title: 'Rent',

                total: 212000

            }

        ]

    },

]

// 1. Высчитать месячные траты, создав ключ expensesPerMonth в объектах*
// 2. Высчитать отношение трат в месяц к месячному бюджету в процентах, создав ключ procent в объектах. Например компания в месяц зарабатывает 100,000, а тратит 25,000, значит ее ключ procent = 25%*
// 3. Сохранить successful и unsuccessful и добавить туда фирмы, вычитав налог tax*
// 4. Сохранить в переменной taxes общее количество налогов со всех компаний. Например все платят по 20,000 в месяц. В итоге taxes = 100,000*
// 5. Сохранить в переменных taxesMax и taxesMin те, компанию которая больше и меньше всех платит налоги*
// 6. Добавить ключ totalMoney в каждой компании. Эта переменная показывает сколько в итоге осталось денег в компании после вычета всех налогов и трат*
// * Писать весь код в функции setup()*
// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*


let i = []

const setup = () => {

    let allTax = []

    for (let item of bank) {

        // Задание 1 

        item.expensesPerMonth = 0

        let a = item.expensesPerYear.reduce((a, b) => {
            return a + b.total
        }, 0)

        item.expensesPerMonth = a / 12

        // Задание 2

        let b = item.budget / 12

        item.procent = (item.expensesPerMonth / b) * 100

        // Задание 3 

        let c = b - item.expensesPerMonth
        let d = c - (b * item.tax / 100)

        if (d >= 0) {
            successful.push(item)
        } else (
            unSuccessful.push(item)
        )

        // Задание 4

        item.taxes = Math.round((item.budget * item.tax / 100) / 12)
        i.push(item.taxes)
        // Задание 5

        item.taxPerMonth = Math.round(item.expensesPerMonth - (item.expensesPerMonth * item.tax / 100))

        allTax.push(item.taxPerMonth)

        // Задание 6

        item.totalMoney = d

    }

    let getMin = Math.min(...allTax)
    let getMax = Math.max(...allTax)

    taxesMax = bank.find(item => item.taxPerMonth === getMax)
    taxesMin = bank.find(item => item.taxPerMonth === getMin)


    console.log('taxesMin ->', taxesMin);
    console.log('taxesMax ->', taxesMax);
}


console.log(bank);
console.log('Successful ->', successful);
console.log('unSuccessful ->', unSuccessful);
console.log('taxes ->', taxes);

setup()