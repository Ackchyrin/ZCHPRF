function setColor(){
    document.querySelector(`label[for="eyesColor"]`).style.backgroundColor = document.querySelector('#eyesColor').value
    document.querySelector(`label[for="skinColor"]`).style.backgroundColor = document.querySelector('#skinColor').value
    document.querySelector(`label[for="hairColor"]`).style.backgroundColor = document.querySelector('#hairColor').value
}

document.querySelector('#eyesColor').addEventListener('change',setColor)
document.querySelector('#skinColor').addEventListener('change',setColor)
document.querySelector('#hairColor').addEventListener('change',setColor)
document.querySelector('#eyesColor').addEventListener('input',setColor)
document.querySelector('#skinColor').addEventListener('input',setColor)
document.querySelector('#hairColor').addEventListener('input',setColor)

setColor()

document.querySelector('#name').addEventListener('input',()=>{
    document.querySelector('#nameSecond').value = document.querySelector('#name').value
})

document.querySelector('#nameSecond').addEventListener('input',()=>{
    document.querySelector('#name').value = document.querySelector('#nameSecond').value
})

document.querySelector('#character').addEventListener('input',()=>{
    document.querySelector('#characterSecond').value = document.querySelector('#character').value
})

document.querySelector('#characterSecond').addEventListener('input',()=>{
    document.querySelector('#character').value = document.querySelector('#characterSecond').value
})

document.querySelector('#species').addEventListener('input',()=>{
    document.querySelector('#speciesSecond').value = document.querySelector('#species').value
})

document.querySelector('#speciesSecond').addEventListener('input',()=>{
    document.querySelector('#species').value = document.querySelector('#speciesSecond').value
})
