document.querySelector('#species').addEventListener('input',autoRace)
document.querySelector('#speciesSecond').addEventListener('input',autoRace)
let globalCommonSpecifications = 0
let dataRace = {}

function autoRace(){
    if(document.querySelector('#species').value.toLowerCase() == 'человек'){
        dataRace = {
            "strength": 5,
            "dexterity": 5,
            "intelligence": 5,
            "endurance": 5,
            "charisma": 5,
            "wisdom": 5
        }
    }
    
    if(document.querySelector('#species').value.toLowerCase() == 'гном'){
        dataRace = {
            "strength": 9,
            "dexterity": 2,
            "intelligence": 2,
            "endurance": 9,
            "charisma": 5,
            "wisdom": 5
        }
    }

    if(document.querySelector('#species').value.toLowerCase() == 'эльф'){
        dataRace = {
            "strength": 2,
            "dexterity": 9,
            "intelligence": 5,
            "endurance": 2,
            "charisma": 5,
            "wisdom": 9
        }
    }

    if(document.querySelector('#species').value.toLowerCase() == 'полурослик'){
        dataRace = {
            "strength": 0,
            "dexterity": 9,
            "intelligence": 5,
            "endurance": 2,
            "charisma": 5,
            "wisdom": 5
        }
    }

    if(document.querySelector('#species').value.toLowerCase() == 'полуэльф'){
        dataRace = {
            "strength": 5,
            "dexterity": 5,
            "intelligence": 5,
            "endurance": 5,
            "charisma": 9,
            "wisdom": 9
        }
    }

    if(document.querySelector('#species').value.toLowerCase() == 'орк'){
        dataRace = {
            "strength": 9,
            "dexterity": 5,
            "intelligence": 0,
            "endurance": 9,
            "charisma": 5,
            "wisdom": 0
        }
    }

    if(document.querySelector('#species').value.toLowerCase() == 'полуорк'){
        dataRace = {
            "strength": 7,
            "dexterity": 5,
            "intelligence": 5,
            "endurance": 7,
            "charisma": 5,
            "wisdom": 5
        }
    }

    if(document.querySelector('#species').value.toLowerCase() == 'фелин'){
        dataRace = {
            "strength": 2,
            "dexterity": 9,
            "intelligence": 5,
            "endurance": 9,
            "charisma": 5,
            "wisdom": 5
        }
    }
    
    autoRaceSpecigication()
    setHealth()
}

function autoRaceCommon(){

    if(document.querySelector('#species').value.toLowerCase() == 'человек'){
        globalCommonSpecifications = 30
    }
    
    if(document.querySelector('#species').value.toLowerCase() == 'гном'){
        globalCommonSpecifications = 32
    }

    if(document.querySelector('#species').value.toLowerCase() == 'эльф'){
        globalCommonSpecifications = 32
    }

    if(document.querySelector('#species').value.toLowerCase() == 'полурослик'){
        globalCommonSpecifications = 26
    }

    if(document.querySelector('#species').value.toLowerCase() == 'полуэльф'){
        globalCommonSpecifications = 38
    }

    if(document.querySelector('#species').value.toLowerCase() == 'орк'){
        globalCommonSpecifications = 28
    }

    if(document.querySelector('#species').value.toLowerCase() == 'полуорк'){
        globalCommonSpecifications = 34
    }

    if(document.querySelector('#species').value.toLowerCase() == 'фелин'){
        globalCommonSpecifications = 35
    }
}

function autoRaceSpecigication(){
    specificationsTime = 0
    Object.entries(dataRace).forEach(([key, val]) => {
        document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-left').classList.remove('deactive')
        for(let index = 0; index < val; index++){
            setTimeout(() =>{
                document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-input').value = Number(document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-input').value) + 1
                if(Number(document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-input').value) > Number(document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))){
                    document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-divider').innerText = '/'+ (Number(document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__square span').innerText)+1)
                    document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-input').value = 1                        
                }
                if(Number(document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-input').value) == Number(document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__square span').innerText)+1){                        
                    document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__square span').innerText = Number(document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__square span').innerText)+1
                }
                document.querySelector(`label[for="${key}"]`).querySelectorAll('.specifications-item__square-main')[Number(document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].querySelector('div').style.width = 100 - (Number(document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-input').value)/Number(document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')))*100 + "%"    
                if(document.querySelector(`label[for="${key}"]`).querySelectorAll('.specifications-item__square-main')[Number(document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('one') || document.querySelector(`label[for="${key}"]`).querySelectorAll('.specifications-item__square-main')[Number(document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('ten')){
                    document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__square span').style.color = 'rgba(100, 40, 160, 1)'
                }else if(document.querySelector(`label[for="${key}"]`).querySelectorAll('.specifications-item__square-main')[Number(document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('two') || document.querySelector(`label[for="${key}"]`).querySelectorAll('.specifications-item__square-main')[Number(document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('nine')){
                    document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__square span').style.color = 'rgba(120, 160, 210, 1)'
                }else if(document.querySelector(`label[for="${key}"]`).querySelectorAll('.specifications-item__square-main')[Number(document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('tree') || document.querySelector(`label[for="${key}"]`).querySelectorAll('.specifications-item__square-main')[Number(document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('eight')){
                    document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__square span').style.color = 'rgba(50, 220, 190, 1)'
                }else if(document.querySelector(`label[for="${key}"]`).querySelectorAll('.specifications-item__square-main')[Number(document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('phour') || document.querySelector(`label[for="${key}"]`).querySelectorAll('.specifications-item__square-main')[Number(document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('seven')){
                    document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__square span').style.color = 'rgba(30, 180, 120, 1)'
                }else if(document.querySelector(`label[for="${key}"]`).querySelectorAll('.specifications-item__square-main')[Number(document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('five') || document.querySelector(`label[for="${key}"]`).querySelectorAll('.specifications-item__square-main')[Number(document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('six')){
                    document.querySelector(`label[for="${key}"]`).querySelector('.specifications-item__square span').style.color = 'rgba(40, 30, 100, 1)'
                }
                calculateSpent()
                setAdvantage()
            }, index*50)
            if(specificationsTime < index*50){
                specificationsTime = index*50
            }
        }
    })
}
