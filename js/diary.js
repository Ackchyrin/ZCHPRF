function addDiary(){
    if(document.querySelector('.diary-info__hidden').innerText == 'Скрыть'){
        document.querySelector('.diary').style.height = document.querySelector('.diary').clientHeight+62+'px'
    }
    numberDiary = document.querySelectorAll('.diary-list__item').length + 1
    document.querySelector('.diary-list').insertAdjacentHTML('beforeend', `<div class="diary-list__item">
        <input value="Дневник ${numberDiary}" class="diary-list__item-name">
        <div class="diary-list__item-arrow">
            <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 13 L12 7 L18 13 M12 7 L12 18" stroke="black" stroke-width="2" fill="none"/>
            </svg>                          
        </div>
        <div class="diary-list__item-delete delete">
            <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5 L20 20 M5 20 L20 5" stroke="black" stroke-width="2" fill="none"/>
            </svg>
        </div>
    </div>`)
    element = document.querySelectorAll('.diary-list__item')[document.querySelectorAll('.diary-list__item').length - 1]
    document.querySelector('.journal').insertAdjacentHTML('beforeend', `<div class="journal-item" data-collapsed="false">
        <div class="journal-item__grab">
            <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="1" x2="20" y2="1" stroke="black" stroke-width="1"/>
                <line x1="5" y1="5" x2="15" y2="5" stroke="black" stroke-width="1"/>
                <line x1="0" y1="9" x2="20" y2="9" stroke="black" stroke-width="1"/>
            </svg>
        </div>
        <div class="journal-item__info">
            <input class="journal-item__info-name" value="Дневник ${numberDiary}">
            <div class="journal-item__info-hidden">
                <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 13 L12 7 L18 13 M12 7 L12 18" stroke="black" stroke-width="2" fill="none"/>
                </svg>   
            </div>
            <div class="journal-item__info-arrow">
                <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 13 L12 7 L18 13 M12 7 L12 18" stroke="black" stroke-width="2" fill="none"/>
                </svg>   
            </div>
        </div>
        <textarea></textarea>
        <div class="journal-item__vertically"></div>
        <div class="journal-item__horizontally"></div>
        <div class="journal-item__diagonals"></div>
    </div>`)
    elem = document.querySelectorAll('.journal-item')[document.querySelectorAll('.journal-item').length - 1]
    dragAndDrop(elem)
    hiddenJournal(elem)
    deleteDiary(element,elem)
    swapNameDiaryToJournal(element,elem)
    rolDiary(element,elem)
    resizeVertically(elem)
    resizeHorizontally(elem)
    resizeDiagonals(elem)
    addHintsDiary()
}

function rolDiary(x,k){
    x.querySelector('.diary-list__item-arrow').addEventListener('click',()=>{
        x.querySelector('.diary-list__item-arrow').classList.toggle('active')
        k.classList.toggle('deactive')
    })
    k.querySelector('.journal-item__info-arrow').addEventListener('click',()=>{
        x.querySelector('.diary-list__item-arrow').classList.toggle('active')
        k.classList.toggle('deactive')
    })
}

function deleteDiary(x,k){
    x.querySelector('.diary-list__item-delete').addEventListener('click',()=>{
        x.querySelector('.diary-list__item-delete').classList.toggle('delete')
        k.classList.toggle('deactive')
        if(x.querySelector('.diary-list__item-delete').classList.contains('delete')){
            x.querySelector('.diary-list__item-delete').innerHTML = `<svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5 L20 20 M5 20 L20 5" stroke="black" stroke-width="2" fill="none"/>
            </svg>`
            x.querySelector('.diary-list__item-arrow').classList.remove('deactive')
        }else{
            x.querySelector('.diary-list__item-delete').innerHTML = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.854 23L22.217 18.304C25.333 17.121 24.485 12.5 21.152 12.5H2M2 12.5L9 17M2 12.5L9 8.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`
            x.querySelector('.diary-list__item-arrow').classList.add('deactive')
        }
    })
}

function swapNameDiaryToJournal(x,k){
    x.querySelector('.diary-list__item-name').addEventListener('input',()=>{
        k.querySelector('.journal-item__info-name').value = x.querySelector('.diary-list__item-name').value
    })
    k.querySelector('.journal-item__info-name').addEventListener('input',()=>{
        x.querySelector('.diary-list__item-name').value = k.querySelector('.journal-item__info-name').value
    })
}

function dragAndDrop(x){
    let journal = x.querySelector('.journal-item__grab')
    journal.onmousedown = function (event){
        let shiftX = event.clientX - x.getBoundingClientRect().left
        let shiftY = event.clientY - x.getBoundingClientRect().top
        function moveAt(pageX, pageY){
            x.style.left = pageX - shiftX + 'px'
            x.style.top = pageY - shiftY + 'px'
        }
        function onMouseMove(event){
            moveAt(event.pageX, event.pageY)
            journal.classList.add('grab')
        }
        document.addEventListener('mousemove', onMouseMove)
        function onMouseUp(){
            document.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('mouseup', onMouseUp)
            journal.classList.remove('grab')
        }
        document.addEventListener('mouseup', onMouseUp)
    }
    journal.ondragstart = function (){
        return false
    }
}

function hiddenJournal(x){
    x.querySelector('.journal-item__info-hidden').addEventListener('click',()=>{
        let div = x
        let isCollapsed = div.dataset.collapsed === "true"
        let startHeight = isCollapsed ? 60 : div.scrollHeight
        let endHeight = isCollapsed ? div.scrollHeight : 60
        let startTime        
        if(isCollapsed){
            x.querySelector('.journal-item__info-hidden').classList.remove('active')
        }else{
            x.querySelector('.journal-item__info-hidden').classList.add('active')
        }
        function animate(timestamp){
            if (!startTime) startTime = timestamp
            let progress = (timestamp - startTime) / 400
            if (progress > 1) progress = 1
            div.style.height = startHeight + (endHeight - startHeight) * progress + "px"
            if(progress < 1){
                requestAnimationFrame(animate)
            }else{
                div.dataset.collapsed = !isCollapsed
            }
        }
        requestAnimationFrame(animate)
    })
}

function resizeVertically(x){
    const resizer = x.querySelector('.journal-item__vertically')
    resizer.addEventListener('mousedown', (event) =>{
        event.preventDefault()
        const startY = event.clientY
        const startHeight = x.offsetHeight
        function onMouseMove(e){
            const newHeight = startHeight + (e.clientY - startY)
            x.style.height = newHeight + 'px'
        }
        function onMouseUp(){
            document.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('mouseup', onMouseUp)
        }
        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', onMouseUp)
    })
}

function resizeHorizontally(x){
    const resizer = x.querySelector('.journal-item__horizontally')
    resizer.addEventListener('mousedown', (event) =>{
        event.preventDefault()
        const startX = event.clientX
        const startWidth = x.offsetWidth
        function onMouseMove(e){
            const newWidth = startWidth + (e.clientX - startX)
            x.style.width = newWidth + 'px'
        }
        function onMouseUp(){
            document.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('mouseup', onMouseUp)
        }
        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', onMouseUp)
    })
}

function resizeDiagonals(x){
    const resizer = x.querySelector('.journal-item__diagonals')
    resizer.addEventListener('mousedown', (event) =>{
        event.preventDefault()
        const startX = event.clientX
        const startY = event.clientY
        const startWidth = x.offsetWidth
        const startHeight = x.offsetHeight
        function onMouseMove(e){
            const newWidth = startWidth + (e.clientX - startX)
            const newHeight = startHeight + (e.clientY - startY)
            x.style.width = newWidth + 'px'
            x.style.height = newHeight + 'px'
        }
        function onMouseUp(){
            document.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('mouseup', onMouseUp)
        }
        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', onMouseUp)
    })
}

function specialJournalSkillsAndSpecifications(){
    list = ''
    document.querySelectorAll('.skills-item').forEach(el=>{
        if(el.querySelector('.skills-item__favourites').classList.contains('active'))
            list += `<div>
        ${el.querySelector('.skills-item__title').innerText}
            <span>${el.querySelector('.skills-item__square span').innerText}</span>
    </div>`
    })
    document.querySelectorAll('.specifications-item').forEach(el=>{
        if(el.querySelector('.specifications-item__favourites').classList.contains('active'))
            list += `<div>
        ${el.querySelector('.specifications-item__title').innerText}
            <span>${el.querySelector('.specifications-item__square advantage').innerText}</span>
    </div>`
    })
    if(document.querySelector('#skilSpec') == undefined && list != ''){
        if(document.querySelector('.diary-info__hidden').innerText == 'Скрыть'){
            document.querySelector('.diary').style.height = document.querySelector('.diary').clientHeight+62+'px'
        }
        numberDiary = document.querySelectorAll('.diary-list__item').length + 1
        document.querySelector('.diary-list').insertAdjacentHTML('beforeend', `<div class="diary-list__item" id="skilSpec">
            <input value="Список избранных навыков и характеристик" class="diary-list__item-name">
            <div class="diary-list__item-arrow">
                <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 13 L12 7 L18 13 M12 7 L12 18" stroke="black" stroke-width="2" fill="none"/>
                </svg>                          
            </div>
            <div class="diary-list__item-delete delete">
                <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5 L20 20 M5 20 L20 5" stroke="black" stroke-width="2" fill="none"/>
                </svg>
            </div>
        </div>`)
        element = document.querySelectorAll('.diary-list__item')[document.querySelectorAll('.diary-list__item').length - 1]
        document.querySelector('.journal').insertAdjacentHTML('beforeend', `<div class="journal-item" id="skilSpecJournal" data-collapsed="false">
            <div class="journal-item__grab">
                <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="1" x2="20" y2="1" stroke="black" stroke-width="1"/>
                    <line x1="5" y1="5" x2="15" y2="5" stroke="black" stroke-width="1"/>
                    <line x1="0" y1="9" x2="20" y2="9" stroke="black" stroke-width="1"/>
                </svg>
            </div>
            <div class="journal-item__info">
                <input class="journal-item__info-name" value="Список избранных навыков и характеристик">
                <div class="journal-item__info-hidden">
                    <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 13 L12 7 L18 13 M12 7 L12 18" stroke="black" stroke-width="2" fill="none"/>
                    </svg>   
                </div>
                <div class="journal-item__info-arrow">
                    <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 13 L12 7 L18 13 M12 7 L12 18" stroke="black" stroke-width="2" fill="none"/>
                    </svg>   
                </div>
            </div>
            <div class="journal-item__info-list">
            ${list}
            </div>
            <div class="journal-item__vertically"></div>
            <div class="journal-item__horizontally"></div>
            <div class="journal-item__diagonals"></div>
        </div>`)
        elem = document.querySelectorAll('.journal-item')[document.querySelectorAll('.journal-item').length - 1]
        dragAndDrop(elem)
        hiddenJournal(elem)
        deleteDiary(element,elem)
        swapNameDiaryToJournal(element,elem)
        rolDiary(element,elem)
        resizeVertically(elem)
        resizeHorizontally(elem)
        resizeDiagonals(elem)
    }else if(list != ''){
        document.querySelector('#skilSpecJournal .journal-item__info-list').innerHTML = list
    }
    if(document.querySelector('.diary-info__hidden').innerText == 'Показать' && list != ''){
        hiddenDiary()
    }
    listOne = true
    listTwo = true
    document.querySelectorAll('.skills-item__favourites').forEach(el=>{
        if(el.classList.contains('active')){
            listOne = false
        }
    })
    document.querySelectorAll('.specifications-item__favourites').forEach(el=>{
        if(el.classList.contains('active')){
            listTwo = false
        }
    })
    if(listOne && listTwo && document.querySelector('#skilSpecJournal') != undefined && !document.querySelector('#skilSpecJournal').classList.contains('deactive')){
        document.querySelector('#skilSpec .diary-list__item-delete').click()
    }else if(!listOne && !listTwo && document.querySelector('#skilSpecJournal') != undefined && document.querySelector('#skilSpecJournal').classList.contains('deactive')){
        document.querySelector('#spellDiary .diary-list__item-delete').click()
    }
    addHintsDiary()
}

function checkFavoritesSkillsAndSpecifications(){
    document.querySelectorAll('.specifications-item__favourites').forEach(el=>{
        if(el.classList.contains('active')){
            specialJournalSkillsAndSpecifications()
        }
    })
    document.querySelectorAll('.skills-item__favourites').forEach(el=>{
        if(el.classList.contains('active')){
            specialJournalSkillsAndSpecifications()
        }
    })
}

function specialJournalSpell(){
    list = ''
    document.querySelectorAll('.mid-third__spell').forEach(el =>{
        if(el.querySelector('.spell-system__favourites').classList.contains('active')){
            list = `<div class="info-list__item">
                <div>${el.querySelector('.spell-long__title input').value}</div>
                <div>${el.querySelector('.spell-long__cost input').value}</div>
                <div>${el.querySelector('.spell-long__range input').value}</div>
                <div>${el.querySelector('.spell-long__time input').value}</div>
                <div>${el.querySelector('.spell-long__duration input').value}</div>
            </div>`
        }
    })
    if(document.querySelector('#spellDiary') == undefined && list != ''){
        if(document.querySelector('.diary-info__hidden').innerText == 'Скрыть'){
            document.querySelector('.diary').style.height = document.querySelector('.diary').clientHeight+62+'px'
        }
        numberDiary = document.querySelectorAll('.diary-list__item').length + 1
        document.querySelector('.diary-list').insertAdjacentHTML('beforeend', `<div class="diary-list__item" id="spellDiary">
            <input value="Список избранных заклинаний" class="diary-list__item-name">
            <div class="diary-list__item-arrow">
                <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 13 L12 7 L18 13 M12 7 L12 18" stroke="black" stroke-width="2" fill="none"/>
                </svg>                          
            </div>
            <div class="diary-list__item-delete delete">
                <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5 L20 20 M5 20 L20 5" stroke="black" stroke-width="2" fill="none"/>
                </svg>
            </div>
        </div>`)
        element = document.querySelectorAll('.diary-list__item')[document.querySelectorAll('.diary-list__item').length - 1]
        document.querySelector('.journal').insertAdjacentHTML('beforeend', `<div class="journal-item" id="spellJournal" data-collapsed="false">
            <div class="journal-item__grab">
                <svg width="20" height="10" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="1" x2="20" y2="1" stroke="black" stroke-width="1"/>
                    <line x1="5" y1="5" x2="15" y2="5" stroke="black" stroke-width="1"/>
                    <line x1="0" y1="9" x2="20" y2="9" stroke="black" stroke-width="1"/>
                </svg>
            </div>
            <div class="journal-item__info">
                <input class="journal-item__info-name" value="Список избранных заклинаний">
                <div class="journal-item__info-hidden">
                    <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 13 L12 7 L18 13 M12 7 L12 18" stroke="black" stroke-width="2" fill="none"/>
                    </svg>   
                </div>
                <div class="journal-item__info-arrow">
                    <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 13 L12 7 L18 13 M12 7 L12 18" stroke="black" stroke-width="2" fill="none"/>
                    </svg>   
                </div>
            </div>
            <div class="journal-item__info-list">
                ${list}
            </div>
            <div class="journal-item__vertically"></div>
            <div class="journal-item__horizontally"></div>
            <div class="journal-item__diagonals"></div>
        </div>`)
        elem = document.querySelectorAll('.journal-item')[document.querySelectorAll('.journal-item').length - 1]
        dragAndDrop(elem)
        hiddenJournal(elem)
        deleteDiary(element,elem)
        swapNameDiaryToJournal(element,elem)
        rolDiary(element,elem)
        resizeVertically(elem)
        resizeHorizontally(elem)
        resizeDiagonals(elem)
    }else if(list != ''){
        document.querySelector('#spellJournal .journal-item__info-list').innerHTML = list
    }
    if(document.querySelector('.diary-info__hidden').innerText == 'Показать' && list != ''){
        hiddenDiary()
    }
    listOne = true
    document.querySelectorAll('.spell-system__favourites').forEach(el=>{
        if(el.classList.contains('active')){
            listOne = false
        }
    })
    if(listOne && document.querySelector('#spellJournal') != undefined && !document.querySelector('#spellJournal').classList.contains('deactive')){
        document.querySelector('#spellDiary .diary-list__item-delete').click()
    }else if(!listOne && document.querySelector('#spellJournal') != undefined && document.querySelector('#spellJournal').classList.contains('deactive')){
        document.querySelector('#spellDiary .diary-list__item-delete').click()
    }
}
