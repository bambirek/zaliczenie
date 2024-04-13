//addBtn - przycisk dodania nowego zadania
//todoInput - miejsce wpisania treści zadania
//taskList - lista wpisanych zadań
//error-info - wyświetla że nie ma zadań

//pobranie elementów
const addBtn = document.querySelector('.btn')
const todoInput = document.querySelector('.inp')
const taskList = document.querySelector('.container ul')
//const taskNumber = document.querySelector('p span');
const errorInfo = document.querySelector('.error-info')

let toDoList = [] 

function addNewTodo () {
    if (todoInput.value !== '') {
    toDoList = document.createElement('li')

    taskList.append(toDoList)
    toDoList.textContent = todoInput.value
    
    todoInput.value = ''
    createToolsArea()
    errorInfo.textContent = ''}
    else {
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div')
    toDoList.append(toolsPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = 'wykonane'
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = 'usuń z listy'

    toolsPanel.append(completeBtn, deleteBtn)
}

const checkClick = e => {
    if(e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    } else if (e.target.matches('.delete')) {
        deleteTodo(e)
    }
    }
    
    const deleteTodo = (e) => {
        e.target.closest('li').remove()
    } 


const enterKeyCheck = e => {
    if(e.key === 'Enter') {
        console.log('enter');
        addNewTodo()
    }

}



//nasłuchiwanie
addBtn.addEventListener('click', addNewTodo)
todoInput.addEventListener('keyup', enterKeyCheck)
taskList.addEventListener('click', checkClick)