function checkGroup(){
    group = []
    document.querySelectorAll('.group-item__input').forEach(el=>{
        if(el.value.trim() != '' && !group.includes(el.value.trim())){
            group.push(el.value.trim())
        }
    })
    if(document.querySelector(`label[for="group"] .select`).innerHTML != ''){
        document.querySelector(`label[for="group"] .select`).innerHTML = ''
    }
    group.forEach(element => {
        document.querySelector(`label[for="group"] .select`).innerHTML += `<div class="option">${element}</div>`;
    });

    document.querySelectorAll(`label[for="group"] .option`).forEach(el=>el.addEventListener('click',()=>{
        document.querySelector('#group').value = el.innerHTML
    }))
}

document.querySelector('#group').addEventListener('focus',()=>{
    document.querySelector(`label[for="group"] .select`).classList.add('active')
})
document.querySelector('#group').addEventListener('blur',()=>{
    setTimeout(() => {
        document.querySelector(`label[for="group"] .select`).classList.remove('active')
    }, 100);
})
document.querySelector('#group').addEventListener('click',()=>{
    checkGroup()
    document.querySelector(`label[for="group"] .select`).classList.add('active')
})

function createCharacter(){
    if(document.querySelector('#race').value == ''){
        alert('Заполните расу')
        return
    }
    if(document.querySelector('#archetype').value == ''){
        alert('Заполните архетип')
        return
    }
    if(document.querySelector('#group').value == ''){
        alert('Выберите группу')
        return
    }
}
