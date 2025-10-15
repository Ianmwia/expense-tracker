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

    //user input
    const expenseDescription = expense.value
    const expenseAmount = amount.value
    const expenseCategory = category.value

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