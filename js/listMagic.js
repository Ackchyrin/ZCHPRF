function setManaMagic(){
    document.querySelector('.mid-third__mana').innerHTML = ''  
    for (let index = 0; index < document.querySelectorAll('.special-mana__container svg').length; index++){
        if(document.querySelectorAll('.special-mana__container svg')[index].classList.contains('active')){
            document.querySelector('.mid-third__mana').innerHTML += '<svg class="active" onclick="manaPaintMagic(this)" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="12.5,1 24,9 19,23 6,23 1,9" stroke="black" stroke-width="2" fill="none"/></svg>'
        }else{
            document.querySelector('.mid-third__mana').innerHTML += '<svg onclick="manaPaintMagic(this)" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="12.5,1 24,9 19,23 6,23 1,9" stroke="black" stroke-width="2" fill="none"/></svg>'
        }
    }
    colManaMagic()
}

document.querySelector('.mid-third__information input').addEventListener('input',()=>{
    if(document.querySelector('.mid-third__information input').value == ''){
        document.querySelector('.mid-third__information input').classList.remove('active')
    }else{
        document.querySelector('.mid-third__information input').classList.add('active')
    }
})

function manaPaintMagic(element){
    const svgs = document.querySelectorAll('.mid-third__mana svg')
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
    document.querySelectorAll('.special-mana__container svg')[Array.from(svgs).indexOf(element)]?.dispatchEvent(new Event('click', { bubbles: true }))
    colManaMagic()
}

function colManaMagic(){
    i = 0;
    document.querySelectorAll('.mid-third__mana svg').forEach(element => {
        if(element.classList.contains('active')){
            i++;
        }
    });
    document.querySelector('.mid-third__information span').innerText =  i+'/'+document.querySelectorAll('.mid-third__mana svg').length
}

function addSpell(){
    document.querySelector('.mid-third').innerHTML +=  `
        <div class="mid-third__spell">
            <div class="mid-third__spell-short">
                <div class="spell-short__title"></div>
                <div class="spell-short__cost"></div>
                <div class="spell-short__range"></div>
                <div class="spell-short__time"></div>
                <div class="spell-short__duration"></div>
            </div>
            <div class="mid-third__spell-long">
                <label class="spell-long__title">
                    Название
                    <input>
                </label>
                <label class="spell-long__school">
                    Школа заклинания
                    <input>
                    <select>
                        <option>Восстановления</option>
                        <option>Иллюзии</option>
                        <option>Изменения</option>
                        <option>Колдовства</option>
                        <option>Разрушения</option>
                        <option>Собственная</option>
                    </select>
                </label>
                <label class="spell-long__cost">
                    Стоимость
                    <input class="short" placeholder="Мин" class="number-only">
                    <input class="short" placeholder="Макс" class="number-only">
                </label>
                <label class="spell-long__time">
                    Время накладывания
                    <input placeholder="">
                </label>
                <label class="spell-long__duration">
                    Длительность
                    <input placeholder="">
                </label>
                <label class="spell-long__range">
                    Дистанция
                    <input placeholder="">
                </label>
                <label class="spell-long__description">
                    Описание
                    <textarea></textarea>
                    <div></div>
                </label>
                <div class="spell-long__delete">
                    Удалить
                    <div class="long-delete__progress-bar"></div>
                </div>
            </div>
            <div class="spell-system">
                <div class="spell-system__favourites">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                </div>
                <div class="spell-system__change">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="4 16 12 8 20 16"></polyline>
                    </svg>
                </div>
            </div>
        </div>
    `
    let elements = document.querySelectorAll('.mid-third__spell')
    elements.forEach(element =>{
        addFavourites(element)
        addChange(element)
        addOption(element)
        deleteSpell(element)
    });
    document.querySelectorAll('.mid-third__information span')[1].innerHTML = elements.length
}

function addFavourites(x){
    x.querySelector('.spell-system__favourites').addEventListener('click',()=>{
        x.querySelector('.spell-system__favourites').classList.toggle('active')
        if(x.querySelector('.spell-system__favourites').classList.contains('active')){
            x.style.order = 1
        }else{
            x.style.order = 2
        }
    })
}

function addChange(x){
    x.querySelector('.spell-system__change').addEventListener('click',()=>{
        x.querySelector('.spell-system__change').classList.toggle('active')
        let heightShort
        let isCollapsed = x.dataset.collapsed === "true"
        if(!isCollapsed){
            x.querySelector('.mid-third__spell-short').style.minHeight = '28px'
            x.querySelector('.mid-third__spell-long').style.marginTop = '10px'
            x.querySelector('.mid-third__spell-short').style.height = 'fit-content'
        }else{
            x.querySelector('.mid-third__spell-short').style.minHeight = '0'
            x.querySelector('.mid-third__spell-short').style.height = '0'
            x.querySelector('.mid-third__spell-long').style.marginTop = '0' 
        }
        if(x.querySelector('.mid-third__spell-short').clientHeight == 0){
            heightShort = 48
        }else{
            heightShort = x.querySelector('.mid-third__spell-short').clientHeight + 20
        }
        let startHeight = isCollapsed ? heightShort : x.scrollHeight
        let endHeight = isCollapsed ? x.scrollHeight : heightShort
        let startTime

        function animate(timestamp){
            if(!startTime) startTime = timestamp
            let progress = (timestamp - startTime) / 400
            if(progress > 1) progress = 1
            x.style.height = startHeight + (endHeight - startHeight) * progress + "px"
            if(progress < 1){
                requestAnimationFrame(animate)
            }else{
                x.dataset.collapsed = !isCollapsed
            }
        }
        requestAnimationFrame(animate)
        addDescription(x)
    })
}

function addOption(x){
    x.querySelector('select').addEventListener('change',()=>{
        if(x.querySelector('select').value == 'Собственная'){
            x.querySelector('.spell-long__school input').style.display = 'inline'
        }else{
            x.querySelector('.spell-long__school input').style.display = 'none'
        }
    })
}

function addDescription(x){
    x.querySelector('.spell-short__title').innerHTML = x.querySelector('.spell-long__title input').value
    x.querySelector('.spell-short__cost').innerHTML = x.querySelector('.spell-long__cost input').value
    x.querySelector('.spell-short__range').innerHTML = x.querySelector('.spell-long__range input').value
    x.querySelector('.spell-short__time').innerHTML = x.querySelector('.spell-long__time input').value
    x.querySelector('.spell-short__duration').innerHTML = x.querySelector('.spell-long__duration input').value

}

function deleteSpell(x){
    x.querySelector('.spell-long__delete').addEventListener('click',()=>{
        if(x.querySelector('.spell-long__delete').innerText == "Удалить"){            
            x.querySelector('.spell-long__delete').querySelector('.long-delete__progress-bar').style.display = 'block'
            setTimeout(() => {
                x.querySelector('.spell-long__delete').querySelector('.long-delete__progress-bar').style.width = '0'
            }, 100);
            setTimeout(() => {
                x.querySelector('.spell-long__delete').innerText = "Уверенны"
            }, 3200);
        }
        if(x.querySelector('.spell-long__delete').innerText == "Уверенны"){
            x.remove()
            document.querySelectorAll('.mid-third__information span')[1].innerHTML = document.querySelectorAll('.mid-third__spell').length
        }
    })
}
