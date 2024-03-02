const addNoteButton = document.getElementById("addNoteButton")
const inputNotes = document.getElementById("inputNotes")
let notesList = document.getElementById("notesList")

addNoteButton.addEventListener("click",() => {
    if(inputNotes.value === ""){
        alert("First, fill this!")
        buttons.style.display = "none"
    }
    let textNotes = document.createElement("p")
    textNotes.innerText = inputNotes.value
    notesList.appendChild(textNotes)
    inputNotes.value = ""


    const editNotes = document.createElement("button")
    editNotes.innerText = "Edit"
    const deleteNotes = document.createElement("button")
    deleteNotes.innerText = "Delete"

    const buttons = document.createElement("div")
    buttons.className = "buttonsDiv"
    buttons.appendChild(editNotes)
    buttons.appendChild(deleteNotes)
    textNotes.appendChild(buttons)

    deleteNotes.addEventListener("click",() => {
        textNotes.style.display = "none"
    })
    editNotes.addEventListener("click",() => {
        const newNotes = document.createElement("input")
        newNotes.className = "inputEdit"
        buttons.style.display = "none"
        textNotes.appendChild(newNotes)
        const confirmButton = document.createElement("button")
        confirmButton.innerText = "Add"
        confirmButton.className = "confirmButton"
        textNotes.appendChild(confirmButton)
        confirmButton.addEventListener("click",() => {
            textNotes.innerHTML = newNotes.value
            buttons.style.display = "flex"
            textNotes.appendChild(buttons)
            if(newNotes.value === ""){
                alert("First, fill this!")
                buttons.style.display = "none"
            }
        })
    })
})