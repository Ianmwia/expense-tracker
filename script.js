//dom interaction
const expense = document.getElementById('expense')
const amount = document.getElementById('amount')
const category = document.getElementById('category')
const expenseForm = document.getElementById('expense-form')

const expenseList = document.getElementById('expense-list')
const filterCategory = document.getElementById('filter-category')
const totalExpenses = document.getElementById('total-expenses')


//event listener
expenseForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    //total amount call
    addTotalExpense()

    //reset after user input
    expenseForm.reset()
})

//total amount calculator
let totalAmount = 0

function addTotalExpense(){
    totalAmount += Number(amount.value)
    totalExpenses.innerHTML = `<h3> Total Amount: ${totalAmount}</h3>`
}

//append list items
function addExpenseList(){
    const expenseDescription = expense.value
    const expenseAmount = amount.value
    const expenseCategory = category.value

    const expenseItem = document.createElement('div')

    const buttonId = `remove-${Date.now()}`
    
    expenseItem.innerHTML = `<p>${expenseDescription}</p> -- ${expenseAmount} -- ${expenseCategory}
    <button id='${buttonId}'>Remove</button>`

    expenseList.appendChild(expenseItem)

    document.getElementById(buttonId).addEventListener('click', ()=>{
        expenseList.removeChild(expenseItem)
        totalAmount -= Number(expenseAmount)
        totalExpenses.innerHTML = `<h3> Total Amount: ${totalAmount}</h3>`
        })
        
}
//local storage
function storeExpenses(description, amount, category){
    const expenseItem = {description, amount, category}

    let expenseItemList = JSON.parse(localStorage.getItem('expenseItems')) || []
    expenseItemList.push(expenseItem)
    localStorage.setItem('expenseItems', JSON.stringify(expenseItemList))
}

window.addEventListener('DOMContentLoaded')