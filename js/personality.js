let healthStats = 0
let healthBonus = 0
let healthAdd = 0
let healthyStats = 0
let healthyAdd = 0
let armorBonus = 0
let armorAdd = 0
let evasionBonus = 0
let evasionAdd = 0
let initiativeBonus = 0
let initiativeAdd = 0

function setHealthAll(){
    healthBonus = 0
    document.querySelectorAll('.bonus-list__item').forEach(el=>{
        if(el.querySelectorAll('select')[1].value == 'Здоровье' && el.querySelector('.item-bonus__list-checkbox').classList.contains('active')){
            healthBonus += Number(el.querySelector('input').value)
        }
    })
    document.querySelector('#health').value = healthStats + healthBonus + healthAdd
    colorHealthy()
}

function setHealthyAll(){
    document.querySelector('#healthy').value = healthyStats + healthyAdd
    colorHealthy()
}

function addHealth(){
    if(Number(document.querySelector('#health').value) >= 0){
        healthAdd += 1
    }
    setHealthAll()
}

function removeHealth(){
    if(Number(document.querySelector('#health').value) >= 0 && Number(document.querySelector('#health').value) - 1 >= 0){
        healthAdd -= 1
    }
    setHealthAll()
}

function addHealthy(){
    healthyAdd += 1
    setHealthyAll()
}

function removeHealthy(){
    healthyAdd -= 1
    setHealthyAll()
}

function colorHealthy(){
    if(Number(document.querySelector('#health').value) * 0.25 < Number(document.querySelector('#healthy').value) && Number(document.querySelector('#healthy').value) < Number(document.querySelector('#health').value) * 0.75){
        document.querySelector('#healthy').style.color = 'orange'
    }else if(Number(document.querySelector('#health').value) * 0.25 > Number(document.querySelector('#healthy').value)){
        document.querySelector('#healthy').style.color = 'red'
    }else if(Number(document.querySelector('#healthy').value) > Number(document.querySelector('#health').value) * 0.75){
        document.querySelector('#healthy').style.color = 'green'
    }
}

function setHealth(){
    healthStats = 0
    species = document.querySelector('#species').value.toLowerCase()
    classCharacter = document.querySelector('#class').value.toLowerCase()
    endurance = Number(document.querySelectorAll('.specifications-item__square span')[3].innerText)
    speciesNormal = 0
    speciesCoef = 1
    classCoef = 1
    healthEquipment = 0
    classArray = [
        'бард',
        'варвар',
        'воин',
        'маг',
        'плут',
        'разбойник',
        'алхимик',
        'следопыт',
        'жрец',
        'чаровник',
        'охотник',
        'универсал',
        'мистик',
        'шаман',
        'паладин',
        'мультикласс']
    if(species == 'человек'){
        speciesNormal = 5
        speciesCoef = 5
    }
    
    if(species == 'гном'){
        speciesNormal = 4
        speciesCoef = 6
    }

    if(species == 'эльф'){
        speciesNormal = 8
        speciesCoef = 4
    }

    if(species == 'полурослик'){
        speciesNormal = 6
        speciesCoef = 4
    }

    if(species == 'полуэльф'){
        speciesNormal = 6
        speciesCoef = 5
    }

    if(species == 'орк'){
        speciesNormal = 10
        speciesCoef = 6
    }

    if(species == 'полуорк'){
        speciesNormal = 7
        speciesCoef = 6
    }

    if(species == 'фелин'){
        speciesNormal = 5
        speciesCoef = 5
    }

    if(classCharacter == 'бард'){
        classCoef = 1
    }

    if(classCharacter == 'варвар'){
        classCoef = 1.5
    }
    
    if(classCharacter == 'воин'){
        classCoef = 1.3
    }
    
    if(classCharacter == 'маг'){
        classCoef = 0.9
    }
    
    if(classCharacter == 'плут'){
        classCoef = 0.8
    }
    
    if(classCharacter == 'разбойник'){
        classCoef = 0.9
    }
    
    if(classCharacter == 'алхимик'){
        classCoef = 1
    }
    
    if(classCharacter == 'следопыт'){
        classCoef = 1
    }
    
    if(classCharacter == 'жрец'){
        classCoef = 1.1
    }
    
    if(classCharacter == 'чаровник'){
        classCoef = 0.8
    }
    
    if(classCharacter == 'охотник'){
        classCoef = 1.2
    }
    
    if(classCharacter == 'универсал'){
        classCoef = 1
    }
    
    if(classCharacter == 'мистик'){
        classCoef = 0.8
    }
    
    if(classCharacter == 'шаман'){
        classCoef = 1
    }
    
    if(classCharacter == 'паладин'){
        classCoef = 1.4
    }
    
    if(classCharacter == 'мультикласс'){
        classCoef = 1
    }        
    healthCalculate = speciesNormal + (speciesCoef*endurance*classCoef) + healthEquipment
    for (let index = 0; index < healthCalculate; index++) {
        healthStats += 1
    }
    setHealthAll()
}


function setArmorAll(){
    armorBonus = 0
    document.querySelectorAll('.bonus-list__item').forEach(el=>{
        if(el.querySelectorAll('select')[1].value == 'Броня' && el.querySelector('.item-bonus__list-checkbox').classList.contains('active')){
            armorBonus += Number(el.querySelector('input').value)
        }
    })
    document.querySelector('#armor').value = armorAdd + armorBonus
}

function addArmor(){
    armorAdd += 1
    setArmorAll()
}

function removeArmor(){
    armorAdd -= 1
    setArmorAll()
}

function setEvasionAll(){
    evasionBonus = 0
    document.querySelectorAll('.bonus-list__item').forEach(el=>{
        if(el.querySelectorAll('select')[1].value == 'Уклонение' && el.querySelector('.item-bonus__list-checkbox').classList.contains('active')){
            evasionBonus += Number(el.querySelector('input').value)
        }
    })
    document.querySelector('#evasion').value = evasionAdd + evasionBonus
}

function addEvasion(){
    evasionAdd += 1
    setEvasionAll()
}

function removeArmor(){
    evasionAdd -= 1
    setEvasionAll()
}

function setInitiativeAll(){
    initiativeBonus = 0
    document.querySelectorAll('.bonus-list__item').forEach(el=>{
        if(el.querySelectorAll('select')[1].value == 'Инициатива' && el.querySelector('.item-bonus__list-checkbox').classList.contains('active')){
            initiativeBonus += Number(el.querySelector('input').value)
        }
    })
    document.querySelector('#initiative').value = initiativeAdd + initiativeBonus
}

function addInitiative(){
    initiativeAdd += 1
    setInitiativeAll()
}

function removeInitiative(){
    initiativeAdd -= 1
    setInitiativeAll()
}

document.querySelector('#class').addEventListener('input',setHealth)
