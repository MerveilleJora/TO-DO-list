let TaskBox = document.querySelector('.items')
let Clearbtn = document.getElementById('clearBtn')
let input = document.getElementById('input')

function add() {
    console.log("yes")
    if (!input.value) {
        input.style.border = "2px solid red";
    } else {
        input.style.border = "1px solid black";
        var task = document.createElement('li')
        TaskBox.appendChild(task)
        task.classList.add('item')
        var text = document.createElement("span")
        task.appendChild(text)
        text.classList.add('li-text')
        text.innerText = input.value
        input.value = "";
    }
}
