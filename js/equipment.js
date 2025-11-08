let colSpentInventory = []
let colSkillInventory = 0
let colSpecificationsInventory = 0
document.querySelectorAll('.mid-fourth__equipment-item').forEach(el=>{
    addBonus(el)
})

function addBonus(x){
    x.querySelector('.equipment-item__bonus-add').addEventListener('click',()=>{
        x.querySelector('.equipment-item__bonus-list').insertAdjacentHTML('beforeend', `
            <div class="bonus-list__item">
                <select>
                    <option>
                        Опыт
                    </option>
                    <option>
                        Пункт
                    </option>
                </select>
                <select>
                    <option>Мана</option>
                    <option>Здоровье</option>
                    <option>Броня</option>
                    <option>Уклонение</option>
                    <option>Инициатива</option>
                    <option>Ближний бой</option>
                    <option>Дальний бой</option>
                    <option>Акробатика</option>
                    <option>Защита</option>
                    <option>Магия</option>
                    <option>Алхимия</option>
                    <option>Медицина</option>
                    <option>Выживание</option>
                    <option>Красноречие</option>
                    <option>Навыки вора</option>
                    <option>Сила</option>
                    <option>Ловкость</option>
                    <option>Интеллект</option>
                    <option>Выносливость</option>
                    <option>Харизма</option>
                    <option>Мудрость</option>
                    <option>Удача</option>
                </select>
                <input class="number-only">
                <div class="item-bonus__list-checkbox-hover">
                    <div class="item-bonus__list-checkbox deactive">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 16L18 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                            
                    </div>
                </div>
                <div class="item-bonus__list-delete">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12H18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        `)
        document.querySelectorAll('.number-only').forEach(input =>{
            input.addEventListener('input', function(){
                this.value = this.value.replace(/[^0-9-]/g, '')
            })
        })
        element = x.querySelectorAll('.equipment-item__bonus-list .bonus-list__item')[x.querySelectorAll('.equipment-item__bonus-list .bonus-list__item').length -1]
        deleteBonus(element)
        activeBonus(element)
        activeUse(element)
        activeCheckbox(element)
        addHintsBonusEquipment()
        editMoreSkillsName()
    })
}

function activeBonus(x){
    x.querySelector('.item-bonus__list-checkbox').addEventListener('click',()=>{
        x.querySelector('.item-bonus__list-checkbox').classList.toggle('active')
        setBonusAll(x)
        checkFavoritesSkillsAndSpecifications()
    })
}

function deleteBonus(x){
    x.querySelector('.item-bonus__list-delete').addEventListener('click',()=>{
        x.remove()
    })
}

function activeUse(x){
    x.querySelector('input').addEventListener('click',()=>{
        if(x.querySelector('.item-bonus__list-checkbox').classList.contains('active')){
            x.querySelector('.item-bonus__list-checkbox').classList.remove('active')
            x.querySelector('.item-bonus__list-checkbox').classList.add('deactive')
            setBonusAll(x)
            x.querySelector('input').value = ''
            checkFavoritesSkillsAndSpecifications()
        }
    })
    x.querySelector('input').addEventListener('change',()=>{
        if(x.querySelector('input').value != ''){
            x.querySelector('input').classList.add('active')
            x.querySelector('.item-bonus__list-checkbox').classList.add('active')
            x.querySelector('.item-bonus__list-checkbox').classList.remove('deactive')
        }else{
            x.querySelector('input').classList.remove('active')
            x.querySelector('.item-bonus__list-checkbox').classList.add('deactive')
        }
        setBonusAll(x)
        checkFavoritesSkillsAndSpecifications()
    })
}

function activeCheckbox(x){
    x.querySelector('select').addEventListener('click',()=>{
        if(x.querySelector('.item-bonus__list-checkbox').classList.contains('active')){
            x.querySelector('.item-bonus__list-checkbox').classList.remove('active')
            setBonusAll(x)
            x.querySelector('.item-bonus__list-checkbox').classList.add('deactive')
            x.querySelector('input').value = ''
            checkFavoritesSkillsAndSpecifications()
        }
    })
    x.querySelectorAll('select')[1].addEventListener('click',()=>{
        if(x.querySelector('.item-bonus__list-checkbox').classList.contains('active')){
            x.querySelector('.item-bonus__list-checkbox').classList.remove('active')
            setBonusAll(x)
            x.querySelector('.item-bonus__list-checkbox').classList.add('deactive')
            x.querySelector('input').value = ''
            checkFavoritesSkillsAndSpecifications()
        }
    })
}

function setBonusAll(x){
    if(x.querySelector('input') != ''){
        if(x.querySelectorAll('select')[1].value == 'Мана' && x.querySelector('.item-bonus__list-checkbox').classList.contains('active')){
            for (let index = 0; index < x.querySelector('input').value; index++) {
                addManaBonus()
            }
        }else if(x.querySelectorAll('select')[1].value == 'Мана' && !x.querySelector('.item-bonus__list-checkbox').classList.contains('active') && x.querySelector('input').value != ''){
            for (let index = 0; index < x.querySelector('input').value; index++) {
                deleteManaBonus()
            }
        }
        if(x.querySelector('select').value == 'Опыт' && x.querySelectorAll('select')[1].value != 'Мана' && x.querySelectorAll('select')[1].value != 'Здоровье' && x.querySelectorAll('select')[1].value != 'Броня' && x.querySelectorAll('select')[1].value != 'Уклонение' && x.querySelectorAll('select')[1].value != 'Инициатива'){
            document.querySelectorAll('.skills-item').forEach(el=>{
                if(el.querySelector('.skills-item__title').innerText == x.querySelectorAll('select')[1].value && x.querySelector('.item-bonus__list-checkbox').classList.contains('active')){
                    for(let index = 1; index <= x.querySelector('input').value; index++){
                        if(Number(el.querySelector('.skills-item__numbers-input').value) + 1 != 9){  
                            el.querySelector('.skills-item__numbers-left').classList.remove('deactive')
                            el.querySelector('.skills-item__numbers-input').value = Number(el.querySelector('.skills-item__numbers-input').value) + 1
                            if(Number(el.querySelector('.skills-item__numbers-input').value) > Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))){
                                el.querySelector('.skills-item__numbers-divider').innerText = '/'+ (Number(el.querySelector('.skills-item__square span').innerText)+1)
                                el.querySelector('.skills-item__numbers-input').value = 1                        
                            }
                            if(Number(el.querySelector('.skills-item__numbers-input').value) == Number(el.querySelector('.skills-item__square span').innerText)+1){                        
                                el.querySelector('.skills-item__square span').innerText = Number(el.querySelector('.skills-item__square span').innerText)+1
                            }
                            el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].querySelector('div').style.width = 100 - (Number(el.querySelector('.skills-item__numbers-input').value)/Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')))*100 + "%"    
                            if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('one') || el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('eight')){
                                el.querySelector('.skills-item__square span').style.color = 'rgba(100, 40, 160, 1)'
                            }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('two') || el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('seven')){
                                el.querySelector('.skills-item__square span').style.color = 'rgba(120, 160, 210, 1)'
                            }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('tree') || el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('six')){
                                el.querySelector('.skills-item__square span').style.color = 'rgba(50, 220, 190, 1)'
                            }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('phour') || el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('five')){
                                el.querySelector('.skills-item__square span').style.color = 'rgba(30, 180, 120, 1)'
                            }
                        }
                    }
                }else if(el.querySelector('.skills-item__title').innerText == x.querySelectorAll('select')[1].value && !x.querySelector('.item-bonus__list-checkbox').classList.contains('active') && x.querySelector('input').value != ''){
                    for(let index = 1; index <= x.querySelector('input').value; index++){
                        if(Number(el.querySelector('.skills-item__numbers-input').value) >= 1){ 
                            el.querySelector('.skills-item__numbers-left').classList.remove('deactive')
                            el.querySelector('.skills-item__numbers-input').value = Number(el.querySelector('.skills-item__numbers-input').value) - 1
                            if(Number(el.querySelector('.skills-item__numbers-input').value) == 0){
                                if(Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) >= 1){
                                    el.querySelector('.skills-item__square span').innerText = Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) - 1
                                }
                                el.querySelector('.skills-item__numbers-divider').innerText = '/' + (Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) - 1)
                                el.querySelector('.skills-item__numbers-input').value = Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))
                            }
                            if(Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) - 1 <= 0 || Number(el.querySelector('.skills-item__numbers-input').value) == 0){
                                el.querySelector('.skills-item__numbers-left').classList.add('deactive')
                            } else {
                                el.querySelector('.skills-item__numbers-left').classList.remove('deactive')
                            }
                            if(Number(el.querySelector('.skills-item__square span').innerText) == 0){
                                el.querySelector('.skills-item__numbers-divider').innerText = '/1'
                            }
                            for(let index = Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) - 1; index >= 0 && index < 8; index++){
                                if (el.querySelectorAll('.skills-item__square-main')[index]){
                                    el.querySelectorAll('.skills-item__square-main')[index].querySelector('div').style.width = '100%'
                                }
                            }
                            el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].querySelector('div').style.width = 100 - (Number(el.querySelector('.skills-item__numbers-input').value)/Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')))*100 + "%"    
                            if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('one') || el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('eight')){
                                el.querySelector('.skills-item__square span').style.color = 'rgba(100, 40, 160, 1)'
                            }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('two') || el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('seven')){
                                el.querySelector('.skills-item__square span').style.color = 'rgba(120, 160, 210, 1)'
                            }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('tree') || el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('six')){
                                el.querySelector('.skills-item__square span').style.color = 'rgba(50, 220, 190, 1)'
                            }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('phour') || el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('five')){
                                el.querySelector('.skills-item__square span').style.color = 'rgba(30, 180, 120, 1)'
                            }
                        }
                    }
                }
            })
            document.querySelectorAll('.specifications-item').forEach(el=>{
                if(el.querySelector('.specifications-item__title').innerText == x.querySelectorAll('select')[1].value){
                    if(el.querySelector('.specifications-item__title').innerText == x.querySelectorAll('select')[1].value && x.querySelector('.item-bonus__list-checkbox').classList.contains('active')){
                        for (let index = 1; index <= x.querySelector('input').value; index++){
                            if(Number(el.querySelector('.specifications-item__numbers-input').value) + 1 != 11){
                                el.querySelector('.specifications-item__numbers-left').classList.remove('deactive')
                                el.querySelector('.specifications-item__numbers-input').value = Number(el.querySelector('.specifications-item__numbers-input').value) + 1
                                if(Number(el.querySelector('.specifications-item__numbers-input').value) > Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))){
                                    el.querySelector('.specifications-item__numbers-divider').innerText = '/'+ (Number(el.querySelector('.specifications-item__square span').innerText)+1)
                                    el.querySelector('.specifications-item__numbers-input').value = 1                        
                                }
                                if(Number(el.querySelector('.specifications-item__numbers-input').value) == Number(el.querySelector('.specifications-item__square span').innerText)+1){                        
                                    el.querySelector('.specifications-item__square span').innerText = Number(el.querySelector('.specifications-item__square span').innerText)+1
                                }
                                el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].querySelector('div').style.width = 100 - (Number(el.querySelector('.specifications-item__numbers-input').value)/Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')))*100 + "%"    
                                if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('one') || el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('ten')){
                                    el.querySelector('.specifications-item__square span').style.color = 'rgba(100, 40, 160, 1)'
                                }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('two') || el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('nine')){
                                    el.querySelector('.specifications-item__square span').style.color = 'rgba(120, 160, 210, 1)'
                                }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('tree') || el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('eight')){
                                    el.querySelector('.specifications-item__square span').style.color = 'rgba(50, 220, 190, 1)'
                                }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('phour') || el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('seven')){
                                    el.querySelector('.specifications-item__square span').style.color = 'rgba(30, 180, 120, 1)'
                                }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('five') || el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('six')){
                                    el.querySelector('.specifications-item__square span').style.color = 'rgba(40, 30, 100, 1)'
                                }
                            }
                        }
                    }else if(!x.querySelector('.item-bonus__list-checkbox').classList.contains('active') && x.querySelector('input').value != ''){                        
                        for(let index = 1; index <= x.querySelector('input').value; index++){
                            if(Number(el.querySelector('.specifications-item__numbers-input').value) >= 0){
                                el.querySelector('.specifications-item__numbers-left').classList.remove('deactive')
                                el.querySelector('.specifications-item__numbers-input').value = Number(el.querySelector('.specifications-item__numbers-input').value)-1
                                if(Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) == Number(el.querySelector('.specifications-item__square span').innerText)){                
                                    el.querySelector('.specifications-item__square span').innerText = Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) - 1
                                }
                                if(Number(el.querySelector('.specifications-item__numbers-input').value) == 0 && el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')-1 != 1){        
                                    el.querySelector('.specifications-item__numbers-divider').innerText = '/'+ (el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')-1)
                                    el.querySelector('.specifications-item__square span').innerText = el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')
                                    el.querySelector('.specifications-item__numbers-input').value = el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')
                                }
                                if(Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) - 1 <= 0 || Number(el.querySelector('.specifications-item__numbers-input').value) == 0){
                                    el.querySelector('.specifications-item__numbers-left').classList.add('deactive')
                                } else {
                                    el.querySelector('.specifications-item__numbers-left').classList.remove('deactive')
                                }
                                for(let index = Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) - 1; index >= 0 && index < 8; index++){
                                    if (el.querySelectorAll('.specifications-item__square-main')[index]){
                                        el.querySelectorAll('.specifications-item__square-main')[index].querySelector('div').style.width = '100%'
                                    }
                                }
                                el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].querySelector('div').style.width = 100 - (Number(el.querySelector('.specifications-item__numbers-input').value)/Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')))*100 + "%"    
                                if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('one') || el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('ten')){
                                    el.querySelector('.specifications-item__square span').style.color = 'rgba(100, 40, 160, 1)'
                                }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('two') || el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('nine')){
                                    el.querySelector('.specifications-item__square span').style.color = 'rgba(120, 160, 210, 1)'
                                }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('tree') || el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('eight')){
                                    el.querySelector('.specifications-item__square span').style.color = 'rgba(50, 220, 190, 1)'
                                }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('phour') || el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('seven')){
                                    el.querySelector('.specifications-item__square span').style.color = 'rgba(30, 180, 120, 1)'
                                }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('five') || el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('six')){
                                    el.querySelector('.specifications-item__square span').style.color = 'rgba(40, 30, 100, 1)'
                                }
                            }
                        }
                    }
                }
            })
        }else if(x.querySelector('select').value == 'Пункт' && x.querySelectorAll('select')[1].value != 'Мана' && x.querySelectorAll('select')[1].value != 'Здоровье' && x.querySelectorAll('select')[1].value != 'Броня' && x.querySelectorAll('select')[1].value != 'Уклонение' && x.querySelectorAll('select')[1].value != 'Инициатива'){
            document.querySelectorAll('.skills-item').forEach(el=>{
                if(el.querySelector('.skills-item__title').innerText == x.querySelectorAll('select')[1].value && x.querySelector('.item-bonus__list-checkbox').classList.contains('active')){
                    colPoint = 0
                    for (let index = 0; index < x.querySelector('input').value; index++) {                        
                        colPoint += Number(el.querySelector('.skills-item__square span').innerText) + 1 + index
                    }
                    for(let index = 1; index <= colPoint; index++){
                        if(Number(el.querySelector('.skills-item__numbers-input').value) + 1 != 9){  
                            el.querySelector('.skills-item__numbers-left').classList.remove('deactive')
                            el.querySelector('.skills-item__numbers-input').value = Number(el.querySelector('.skills-item__numbers-input').value) + 1
                            if(Number(el.querySelector('.skills-item__numbers-input').value) > Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))){
                                el.querySelector('.skills-item__numbers-divider').innerText = '/'+ (Number(el.querySelector('.skills-item__square span').innerText)+1)
                                el.querySelector('.skills-item__numbers-input').value = 1                        
                            }
                            if(Number(el.querySelector('.skills-item__numbers-input').value) == Number(el.querySelector('.skills-item__square span').innerText)+1){                        
                                el.querySelector('.skills-item__square span').innerText = Number(el.querySelector('.skills-item__square span').innerText)+1
                            }
                            el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].querySelector('div').style.width = 100 - (Number(el.querySelector('.skills-item__numbers-input').value)/Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')))*100 + "%"    
                            if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('one') || el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('eight')){
                                el.querySelector('.skills-item__square span').style.color = 'rgba(100, 40, 160, 1)'
                            }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('two') || el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('seven')){
                                el.querySelector('.skills-item__square span').style.color = 'rgba(120, 160, 210, 1)'
                            }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('tree') || el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('six')){
                                el.querySelector('.skills-item__square span').style.color = 'rgba(50, 220, 190, 1)'
                            }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('phour') || el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('five')){
                                el.querySelector('.skills-item__square span').style.color = 'rgba(30, 180, 120, 1)'
                            }
                        }
                    }
                }else if(el.querySelector('.skills-item__title').innerText == x.querySelectorAll('select')[1].value && !x.querySelector('.item-bonus__list-checkbox').classList.contains('active') && x.querySelector('input').value != ''){
                    colPoint = 0
                    for (let index = 0; index < x.querySelector('input').value; index++) {                        
                        colPoint += Number(el.querySelector('.skills-item__square span').innerText) - index
                    }
                    for(let index = 1; index <= colPoint; index++){
                        if(Number(el.querySelector('.skills-item__numbers-input').value) >= 1){ 
                            el.querySelector('.skills-item__numbers-left').classList.remove('deactive')
                            el.querySelector('.skills-item__numbers-input').value = Number(el.querySelector('.skills-item__numbers-input').value) - 1
                            if(Number(el.querySelector('.skills-item__numbers-input').value) == 0){
                                if(Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) >= 1){
                                    el.querySelector('.skills-item__square span').innerText = Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) - 1
                                }
                                el.querySelector('.skills-item__numbers-divider').innerText = '/' + (Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) - 1)
                                el.querySelector('.skills-item__numbers-input').value = Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))
                            }
                            if(Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) - 1 <= 0 || Number(el.querySelector('.skills-item__numbers-input').value) == 0){
                                el.querySelector('.skills-item__numbers-left').classList.add('deactive')
                            } else {
                                el.querySelector('.skills-item__numbers-left').classList.remove('deactive')
                            }
                            if(Number(el.querySelector('.skills-item__square span').innerText) == 0){
                                el.querySelector('.skills-item__numbers-divider').innerText = '/1'
                            }
                            for(let index = Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) - 1; index >= 0 && index < 8; index++){
                                if (el.querySelectorAll('.skills-item__square-main')[index]){
                                    el.querySelectorAll('.skills-item__square-main')[index].querySelector('div').style.width = '100%'
                                }
                            }
                            el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].querySelector('div').style.width = 100 - (Number(el.querySelector('.skills-item__numbers-input').value)/Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')))*100 + "%"    
                            if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('one') || el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('eight')){
                                el.querySelector('.skills-item__square span').style.color = 'rgba(100, 40, 160, 1)'
                            }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('two') || el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('seven')){
                                el.querySelector('.skills-item__square span').style.color = 'rgba(120, 160, 210, 1)'
                            }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('tree') || el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('six')){
                                el.querySelector('.skills-item__square span').style.color = 'rgba(50, 220, 190, 1)'
                            }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('phour') || el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('five')){
                                el.querySelector('.skills-item__square span').style.color = 'rgba(30, 180, 120, 1)'
                            }
                        }
                    }
                }
            })
            document.querySelectorAll('.specifications-item').forEach(el=>{
                if(el.querySelector('.specifications-item__title').innerText == x.querySelectorAll('select')[1].value){
                    if(el.querySelector('.specifications-item__title').innerText == x.querySelectorAll('select')[1].value && x.querySelector('.item-bonus__list-checkbox').classList.contains('active')){
                        colPoint = 0
                        for (let index = 0; index < x.querySelector('input').value; index++) {                        
                            colPoint += Number(el.querySelector('.specifications-item__square span').innerText) + 1 + index
                        }
                        for (let index = 1; index <= colPoint; index++){
                            if(Number(el.querySelector('.specifications-item__numbers-input').value) + 1 != 11){
                                el.querySelector('.specifications-item__numbers-left').classList.remove('deactive')
                                el.querySelector('.specifications-item__numbers-input').value = Number(el.querySelector('.specifications-item__numbers-input').value) + 1
                                if(Number(el.querySelector('.specifications-item__numbers-input').value) > Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))){
                                    el.querySelector('.specifications-item__numbers-divider').innerText = '/'+ (Number(el.querySelector('.specifications-item__square span').innerText)+1)
                                    el.querySelector('.specifications-item__numbers-input').value = 1                        
                                }
                                if(Number(el.querySelector('.specifications-item__numbers-input').value) == Number(el.querySelector('.specifications-item__square span').innerText)+1){                        
                                    el.querySelector('.specifications-item__square span').innerText = Number(el.querySelector('.specifications-item__square span').innerText)+1
                                }
                                el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].querySelector('div').style.width = 100 - (Number(el.querySelector('.specifications-item__numbers-input').value)/Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')))*100 + "%"    
                                if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('one') || el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('ten')){
                                    el.querySelector('.specifications-item__square span').style.color = 'rgba(100, 40, 160, 1)'
                                }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('two') || el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('nine')){
                                    el.querySelector('.specifications-item__square span').style.color = 'rgba(120, 160, 210, 1)'
                                }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('tree') || el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('eight')){
                                    el.querySelector('.specifications-item__square span').style.color = 'rgba(50, 220, 190, 1)'
                                }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('phour') || el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('seven')){
                                    el.querySelector('.specifications-item__square span').style.color = 'rgba(30, 180, 120, 1)'
                                }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('five') || el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('six')){
                                    el.querySelector('.specifications-item__square span').style.color = 'rgba(40, 30, 100, 1)'
                                }
                            }
                        }
                    }else if(!x.querySelector('.item-bonus__list-checkbox').classList.contains('active') && x.querySelector('input').value != ''){  
                        colPoint = 0
                        for (let index = 0; index < x.querySelector('input').value; index++){
                            colPoint += Number(el.querySelector('.specifications-item__square span').innerText) - index
                        }
                        for(let index = 1; index <= colPoint; index++){
                            if(Number(el.querySelector('.specifications-item__numbers-input').value) > 0){
                                el.querySelector('.specifications-item__numbers-left').classList.remove('deactive')
                                el.querySelector('.specifications-item__numbers-input').value = Number(el.querySelector('.specifications-item__numbers-input').value)-1
                                if(Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) == Number(el.querySelector('.specifications-item__square span').innerText)){                
                                    el.querySelector('.specifications-item__square span').innerText = Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) - 1
                                }
                                if(Number(el.querySelector('.specifications-item__numbers-input').value) == 0 && el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')-1 != 1){        
                                    el.querySelector('.specifications-item__numbers-divider').innerText = '/'+ (el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')-1)
                                    el.querySelector('.specifications-item__square span').innerText = el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')
                                    el.querySelector('.specifications-item__numbers-input').value = el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')
                                }
                                if(Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) - 1 <= 0 || Number(el.querySelector('.specifications-item__numbers-input').value) == 0){
                                    el.querySelector('.specifications-item__numbers-left').classList.add('deactive')
                                } else {
                                    el.querySelector('.specifications-item__numbers-left').classList.remove('deactive')
                                }
                                for(let index = Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) - 1; index >= 0 && index < 8; index++){
                                    if (el.querySelectorAll('.specifications-item__square-main')[index]){
                                        el.querySelectorAll('.specifications-item__square-main')[index].querySelector('div').style.width = '100%'
                                    }
                                }
                                el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].querySelector('div').style.width = 100 - (Number(el.querySelector('.specifications-item__numbers-input').value)/Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')))*100 + "%"    
                                if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('one') || el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('ten')){
                                    el.querySelector('.specifications-item__square span').style.color = 'rgba(100, 40, 160, 1)'
                                }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('two') || el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('nine')){
                                    el.querySelector('.specifications-item__square span').style.color = 'rgba(120, 160, 210, 1)'
                                }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('tree') || el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('eight')){
                                    el.querySelector('.specifications-item__square span').style.color = 'rgba(50, 220, 190, 1)'
                                }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('phour') || el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('seven')){
                                    el.querySelector('.specifications-item__square span').style.color = 'rgba(30, 180, 120, 1)'
                                }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('five') || el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('six')){
                                    el.querySelector('.specifications-item__square span').style.color = 'rgba(40, 30, 100, 1)'
                                }
                            }
                        }
                    }
                }
            })
        }
        setMana()
        setAdvantage()
        setSpentInventory()
        setHealthAll()
        editMoreSkillsName()
    }
}

function setSpentInventory(){
    colSpentInventory = []
    colSkillInventory = 0
    colSpecificationsInventory = 0
    document.querySelectorAll('.bonus-list__item').forEach(el=>{
        if(el.querySelector('.item-bonus__list-checkbox').classList.contains('active') && el.querySelector('select').value == 'Опыт'){
            if(colSpentInventory[`${el.querySelectorAll('select')[1].value}`] == undefined){
                colSpentInventory[`${el.querySelectorAll('select')[1].value}`] = 0
            }
            colSpentInventory[`${el.querySelectorAll('select')[1].value}`] += Number(el.querySelector('input').value)
            if(['Ближний бой', 'Дальний бой', 'Акробатика', 'Защита', 'Магия','Алхимия', 'Медицина', 'Выживание', 'Красноречие', 'Навыки вора'].includes(el.querySelectorAll('select')[1].value)){
                colSkillInventory += Number(el.querySelector('input').value)
            }
            if(['Сила', 'Ловкость', 'Интеллект','Выносливость', 'Харизма', 'Мудрость', 'Удача',].includes(el.querySelectorAll('select')[1].value)){
                colSpecificationsInventory += Number(el.querySelector('input').value)
            }
        }else if(el.querySelector('.item-bonus__list-checkbox').classList.contains('active') && el.querySelector('select').value == 'Пункт'){
            colPoint = 0
            if(colSpentInventory[`${el.querySelectorAll('select')[1].value}`] == undefined){
                colSpentInventory[`${el.querySelectorAll('select')[1].value}`] = 0
            }
            document.querySelectorAll('.skills-item').forEach(elem=>{
                if(elem.querySelector('.skills-item__title').innerText == el.querySelectorAll('select')[1].value){
                    for (let index = 0; index < Number(elem.querySelector('.skills-item__square span').innerText); index++) {
                        colPoint += 1 + index
                    }
                }
            })
            document.querySelectorAll('.specifications-item').forEach(elem=>{
                if(elem.querySelector('.specifications-item__title').innerText == el.querySelectorAll('select')[1].value){
                    for (let index = 1; index < Number(elem.querySelector('.specifications-item__square span').innerText); index++) {
                        colPoint += 1 + index
                    }
                }
            })            
            colSpentInventory[`${el.querySelectorAll('select')[1].value}`] += colPoint
            if(['Ближний бой', 'Дальний бой', 'Акробатика', 'Защита', 'Магия','Алхимия', 'Медицина', 'Выживание', 'Красноречие', 'Навыки вора'].includes(el.querySelectorAll('select')[1].value)){
                colSkillInventory += colPoint
            }
            if(['Сила', 'Ловкость', 'Интеллект','Выносливость', 'Харизма', 'Мудрость', 'Удача',].includes(el.querySelectorAll('select')[1].value)){
                colSpecificationsInventory += colPoint
            }
        }
    })    
    calculateSpent()
}
