let keyDownHandlerA = function(event){
    if(event.ctrlKey && (event.key.toLowerCase() === 'a' || event.key === 'ф')){
        document.querySelector('#fileInput').click()
    }
}

let keyDownHandlerZ = function(event){
    if(event.ctrlKey && (event.key.toLowerCase() === 'z' || event.key === 'я')){
        takeshot()
    }
}

let keyDownHandlerC = function(event){
    if(event.ctrlKey && (event.key.toLowerCase() === 'c' || event.key === 'с')){
        document.querySelectorAll('.hot-info__button')[1].click()
    }
}

let keyDownHandlerV = function(event){
    if(event.ctrlKey && (event.key.toLowerCase() === 'v' || event.key === 'м')){
        document.querySelector('.hot-info__button').click()
    }
}

let keyDownHandlerB = function(event){
    if(event.ctrlKey && (event.key.toLowerCase() === 'b' || event.key === 'и')){
        swapList()
    }
}

let keyDownHandlerQ = function(event){
    if(event.ctrlKey && (event.key.toLowerCase() === 'q' || event.key === 'й')){
        saveFile()
    }
}

function setHot(x){
    if (x.innerText == "Включить горячие клавиши"){
        x.innerText = "Выключить  горячие клавиши"
        openHot()
    } else{
        closeHot()
        x.innerText = "Включить  горячие клавиши"
    }
}

function openHot(){
    document.addEventListener('keydown', keyDownHandlerA)
    document.addEventListener('keydown', keyDownHandlerZ)
    document.addEventListener('keydown', keyDownHandlerC)
    document.addEventListener('keydown', keyDownHandlerV)
    document.addEventListener('keydown', keyDownHandlerB)
    document.addEventListener('keydown', keyDownHandlerQ)

}

function closeHot(){
    document.removeEventListener('keydown', keyDownHandlerA)
    document.removeEventListener('keydown', keyDownHandlerZ)
    document.removeEventListener('keydown', keyDownHandlerC)
    document.addEventListener('keydown', keyDownHandlerV)
    document.addEventListener('keydown', keyDownHandlerB)
    document.addEventListener('keydown', keyDownHandlerQ)
}
