//dom interaction
const expense = document.getElementById('expense')
const amount = document.getElementById('amount')
const category = document.getElementById('category')
const expenseForm = document.getElementById('expense-form')

const expenseList = document.getElementById('expense-list')
const filterCategory = document.getElementById('filter-category')
const totalExpenses = document.getElementById('total-expenses')

const tableBody = document.getElementById('expense-table-body')


//event listener
expenseForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    //total amount call
    addTotalExpense()

    //add expense list
    addExpenseList(expense.value, amount.value, category.value)

    //local storage
    storeExpenses(expense.value, amount.value, category.value)

    //reset after user input
    expenseForm.reset()
})

//total amount calculator
let totalAmount = 0

function addTotalExpense(){
    totalAmount += Number(amount.value)
    totalExpenses.innerHTML = `<h3> Total Amount: Ksh ${totalAmount}</h3>`
}

//append list items
function addExpenseList(expenseDescription,expenseAmount, expenseCategory){

    const tr = document.createElement('tr')
    tr.innerHTML = `
        <td>${expenseDescription}</td>
        <td>${expenseAmount}</td>
        <td>${expenseCategory}</td>
        <td><button class='remove-btn'>Remove</button></td>
    `
    tableBody.appendChild(tr)

    tr.querySelector('.remove-btn').addEventListener('click', ()=>{
        tableBody.removeChild(tr)
        totalAmount -= Number(expenseAmount)
        totalExpenses.innerHTML = `<h3>Total Amount: Ksh ${totalAmount}</h3>`
    })
}
//local storage
function storeExpenses(description, amount, category){
    const expenseItem = {description, amount, category}

    let expenseItemList = JSON.parse(localStorage.getItem('expenseItems')) || []
    expenseItemList.push(expenseItem)
    localStorage.setItem('expenseItems', JSON.stringify(expenseItemList))
}
//load also add button
function loadStoreExpenses(){
    const expenseItemList = JSON.parse(localStorage.getItem('expenseItems')) || []

    expenseItemList.forEach(item => {
        const tableBody = document.getElementById('expense-table-body')

        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${item.description}</td>
        <td>${item.amount}</td>
        <td>${item.category}</td>
        <td><button class='remove-btn'>Remove</button></td>
    `
    tableBody.appendChild(tr)

    totalAmount += Number(item.amount)
        totalExpenses.innerHTML = `<h3>Total Amount: Ksh ${totalAmount}</h3>`
    })
}
window.addEventListener('DOMContentLoaded', loadStoreExpenses)