function calculateSpent(){
    colCommon = 0
    document.querySelectorAll('.skills-item').forEach((el,index) =>{
        colSingl = 0
        let dividerValue = Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))
        let inputValue = Number(el.querySelector('.skills-item__numbers-input').value) || 0
        if(dividerValue > 1){
            colCommon += ((dividerValue * (dividerValue - 1)) / 2) + inputValue
            colSingl = ((dividerValue * (dividerValue - 1)) / 2) + inputValue
        }else{
            colCommon += inputValue
            colSingl = inputValue
        }
        document.querySelectorAll('.spent-data span')[index+1].innerText = colSingl
    })
    document.querySelector('.spent-data span').innerText = colCommon
    autoRaceCommon()
    colCommon = 0
    colRace = 0
    document.querySelectorAll('.specifications-item').forEach((el,index) =>{
        colSingl = 0
        let dividerValue = Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))
        let inputValue = Number(el.querySelector('.specifications-item__numbers-input').value) || 0
        if(el.querySelector('.specifications-item__numbers-input').id != 'luck'){
            if(dividerValue > 1){
                colCommon += ((dividerValue * (dividerValue - 1)) / 2) + inputValue
                colSingl = ((dividerValue * (dividerValue - 1)) / 2) + inputValue
            }else{
                colCommon += inputValue
                colSingl = inputValue
            }
        }else{
            if(dividerValue > 1){
                colSingl = ((dividerValue * (dividerValue - 1)) / 2) + inputValue
            }else{
                colSingl = inputValue
            } 
        }
        if(el.querySelector('.specifications-item__numbers-input').id == 'strength'){
            colRace = dataRace['strength']
        }
        if(el.querySelector('.specifications-item__numbers-input').id == 'dexterity'){
            colRace = dataRace['dexterity']
        }
        if(el.querySelector('.specifications-item__numbers-input').id == 'intelligence'){
            colRace = dataRace['intelligence']
        }
        if(el.querySelector('.specifications-item__numbers-input').id == 'endurance'){
            colRace = dataRace['endurance']
        }
        if(el.querySelector('.specifications-item__numbers-input').id == 'charisma'){
            colRace = dataRace['charisma']
        }
        if(el.querySelector('.specifications-item__numbers-input').id == 'wisdom'){
            colRace = dataRace['wisdom']
        }
        if(el.querySelector('.specifications-item__numbers-input').id == 'luck'){
            colRace = 0
        }
        document.querySelectorAll('.spent-data span')[index+11].innerText = colSingl-1-colRace
    })
    document.querySelectorAll('.spent-data span')[10].innerText = colCommon-6-globalCommonSpecifications
    setMana()
}
hiddenSpent()