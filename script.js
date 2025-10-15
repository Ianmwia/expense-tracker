//dom interaction
const expense = document.getElementById('expense')
const amount = document.getElementById('amount')
const category = document.getElementById('category')
const expenseForm = document.getElementById('expense-form')

//event listener
expenseForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    //user input
    const expenseDescription = expense.value
    const expenseAmount = amount.value
    const expenseCategory = category.value

    //reset after user input
    expenseForm.reset()
})