
function addMana(){
    document.querySelector('.special-mana__container').innerHTML += '<svg class="active main" onclick="manaPaint(this)" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="12.5,1 24,9 19,23 6,23 1,9" stroke="black" stroke-width="2" fill="none"/></svg>'
    colMana()
}

function deleteMana(){
    document.querySelector('.special-mana__container').querySelector('svg:last-of-type').remove()
    colMana()
}

function colMana(){
    i = 0
    document.querySelectorAll('.special-mana__container svg').forEach(element => {
        if(element.classList.contains('active')){
            i++
        }
    })    
    document.querySelector('.special-mana__col span').innerText =  i+'/'+document.querySelectorAll('.special-mana__container svg').length
}

function restoreMana(){
    document.querySelectorAll('.special-mana__container svg').forEach(element => {
        element.classList.add('active')
    })
    colMana()
}

function manaPaint(element){
    const svgs = document.querySelectorAll('.special-mana__container svg')
    let paint = true
    let lastActive = null
    svgs.forEach(svg =>{
        if (svg.classList.contains('active')){
            lastActive = svg
        }
    })
    let isLastActive = (element === lastActive)
    let isFirst = (element === svgs[0])
    if(isFirst && !svgs[1]?.classList.contains('active')){
        element.classList.toggle('active')
        colMana()
        return
    }
    svgs.forEach(svg =>{
        if(paint){
            svg.classList.add('active')
        }else{
            svg.classList.remove('active')
        }
        if(svg === element){
            paint = false
        }
    })
    if(isLastActive){
        element.classList.remove('active')
    }
    colMana()
}

function setMana(){
    baseMana = Number(document.querySelectorAll('.specifications-item')[2].querySelector('.specifications-item__square span').innerText) * 2
    bonusMana = Math.floor(Number(document.querySelectorAll('.specifications-item')[5].querySelector('.specifications-item__square span').innerText) / 2)
    document.querySelector('.special-mana__container').querySelectorAll('svg.main').forEach(svg => svg.remove())
    for(let index = 0; index < baseMana; index++){
        addMana()
    }
    for(let index = 0; index < bonusMana; index++){
        addMana()
    }
}

setMana()
document.querySelector('.special-mana__container').innerHTML += '<div class="special-mana__container-bonus"></div>'

function addManaBonus(){
    document.querySelector('.special-mana__container-bonus').innerHTML += '<svg class="active" onclick="manaPaint(this)" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="12.5,1 24,9 19,23 6,23 1,9" stroke="black" stroke-width="2" fill="none"/></svg>'
    colMana()
}

function deleteManaBonus(){
    document.querySelector('.special-mana__container-bonus').querySelector('svg:last-of-type').remove()
    colMana()
}
