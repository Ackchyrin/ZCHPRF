let dataCharacter = {}
dataCharacter['skills'] = {}
dataCharacter['specifications'] = {}
dataCharacter['spell'] = {}
document.getElementById('fileInput').addEventListener('change', loadFile)

function saveFile(){
    document.querySelectorAll('.skills-item').forEach(el =>{
        colSingl = 0
        let dividerValue = Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))
        let inputValue = Number(el.querySelector('.skills-item__numbers-input').value) || 0
        if(dividerValue > 1){
            colSingl = ((dividerValue * (dividerValue - 1)) / 2) + inputValue
        }else{
            colSingl = inputValue
        }
        dataCharacter['skills'][el.querySelector('.skills-item__numbers-input').id] = colSingl
    })
    document.querySelectorAll('.specifications-item').forEach(el =>{
        colSingl = 0
        let dividerValue = Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))
        let inputValue = Number(el.querySelector('.specifications-item__numbers-input').value) || 0
        if(dividerValue > 1){
            colSingl = ((dividerValue * (dividerValue - 1)) / 2) + inputValue
        }else{
            colSingl = inputValue
        }
        dataCharacter['specifications'][el.querySelector('.specifications-item__numbers-input').id] = colSingl-1
    })
    document.querySelectorAll('.mid-third__spell').forEach((el,index)=>{
        dataCharacter['spell'][index] = {}
        dataCharacter['spell'][index]['name'] = el.querySelector('.spell-long__title input').value
        dataCharacter['spell'][index]['school'] = el.querySelector('select').value
        dataCharacter['spell'][index]['schoolManual'] = el.querySelector('.spell-long__school input').value
        dataCharacter['spell'][index]['minMana'] = el.querySelector('.spell-long__cost input').value
        dataCharacter['spell'][index]['maxMana'] = el.querySelectorAll('.spell-long__cost input')[1].value
        dataCharacter['spell'][index]['time'] = el.querySelector('.spell-long__time input').value
        dataCharacter['spell'][index]['duration'] = el.querySelector('.spell-long__duration input').value
        dataCharacter['spell'][index]['range'] = el.querySelector('.spell-long__range input').value
        dataCharacter['spell'][index]['description'] = el.querySelector('.spell-long__description textarea').value
        if(el.querySelector('.spell-system__favourites').classList.contains('active')){
            dataCharacter['spell'][index]['favourites'] = true
        }else{
            dataCharacter['spell'][index]['favourites'] = false
        }
        if(!el.querySelector('.spell-system__change').classList.contains('active')){
            dataCharacter['spell'][index]['open'] = true
        }else{
            dataCharacter['spell'][index]['open'] = false
        }
    })
    dataCharacter['name'] = document.querySelector('#name').value
    dataCharacter['character'] = document.querySelector('#character').value
    dataCharacter['species'] = document.querySelector('#species').value
    dataCharacter['features'] = document.querySelector('#features').value
    dataCharacter['abilities'] = document.querySelector('#abilities').value
    dataCharacter['beauty'] = document.querySelector('#beauty').value
    dataCharacter['inspiration'] = document.querySelector('#inspiration').value
    dataCharacter['mana'] = document.querySelectorAll('.special-mana__container-bonus svg').length
    dataCharacter['age'] = document.querySelector('#age').value
    dataCharacter['height'] = document.querySelector('#height').value
    dataCharacter['weight'] = document.querySelector('#weight').value
    dataCharacter['eyesColor'] = document.querySelector('#eyesColor').value
    dataCharacter['eyes'] = document.querySelector('#eyes').value
    dataCharacter['skinColor'] = document.querySelector('#skinColor').value
    dataCharacter['skin'] = document.querySelector('#skin').value
    dataCharacter['parents'] = document.querySelector('#parents').value
    dataCharacter['hairColor'] = document.querySelector('#hairColor').value
    dataCharacter['hair'] = document.querySelector('#hair').value
    dataCharacter['birth'] = document.querySelector('#birth').value
    dataCharacter['traits'] = document.querySelector('#traits').value
    dataCharacter['task'] = document.querySelector('#task').value
    dataCharacter['attachments'] = document.querySelector('#attachments').value
    dataCharacter['fear'] = document.querySelector('#fear').value
    dataCharacter['characterSkills'] = document.querySelector('#characterSkills').value
    dataCharacter['background'] = document.querySelector('#background').value
    dataCharacter['replenishment'] = document.querySelector('#replenishment').value
    currentdate = new Date();
    day = currentdate.getDate();
    month = currentdate.getMonth() + 1;
    year = currentdate.getFullYear();
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    datetime = day + "." + month + "." + year;
    const jsonStr = JSON.stringify(dataCharacter, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const link = document.createElement('a'); 
    link.href = URL.createObjectURL(blob); 
    link.download = document.querySelector('#name').value+" "+datetime+'.json'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    document.querySelector('.modal').classList.add('active')
    document.querySelector('.modal').innerText = 'Успешно сохранён'
    setTimeout(() => {
        document.querySelector('.modal').classList.remove('active')
        setTimeout(() => {
            document.querySelector('.modal').innerText = ''
        }, 500);
    }, 2000);
}

function loadFile(){
    specificationsTime = 0
    skillsTime = 0
    textTime = 0
    document.querySelector('.special-mana__container-bonus').innerHTML = ''
    modal = document.querySelector('.modal')
    modal.classList.add('active')
    modal.innerText = 'Подождите'
    const fileInput = document.getElementById('fileInput')
    const file = fileInput.files[0]
    document.getElementById('fileName').innerText = file.name
    const reader = new FileReader()
    reader.onload = function(event){
        const jsonData = JSON.parse(event.target.result)
        document.querySelector('#hairColor').value = jsonData['hairColor']
        document.querySelector('#skinColor').value = jsonData['skinColor']
        document.querySelector('#eyesColor').value = jsonData['eyesColor']
        setColor()
        const fields = [
            {selector: '#name', data: jsonData['name'] },
            {selector: '#character', data: jsonData['character']},
            {selector: '#species', data: jsonData['species']},
            {selector: '#features', data: jsonData['features']},
            {selector: '#abilities', data: jsonData['abilities']},
            {selector: '#beauty', data: jsonData['beauty']},
            {selector: '#inspiration', data: jsonData['inspiration']},
            {selector: "#age", data: jsonData['age']},
            {selector: "#height", data: jsonData['height']},
            {selector: "#weight", data: jsonData['weight']},
            {selector: "#eyes", data: jsonData['eyes']},
            {selector: "#skin", data: jsonData['skin']},
            {selector: "#hair", data: jsonData['hair']},
            {selector: "#birth", data: jsonData['birth']},
            {selector: "#traits", data: jsonData['traits']},
            {selector: "#task", data: jsonData['task']},
            {selector: "#attachments", data: jsonData['attachments']},
            {selector: "#fear", data: jsonData['fear']},
            {selector: "#characterSkills", data: jsonData['characterSkills']},
            {selector: "#background", data: jsonData['background']},
            {selector: "#parents", data: jsonData['parents']},
            {selector: "#nameSecond", data: jsonData['name']},
            {selector: "#characterSecond", data: jsonData['character']},
            {selector: "#speciesSecond", data: jsonData['species']},
            {selector: "#replenishment", data: jsonData['replenishment']},
        ]
        fields.forEach(field => {
            let i = 0
            const input = document.querySelector(field.selector)
            input.value = ''
            const text = field.data
            function typeWriter(){
                if(textTime < text.length*50){
                    textTime = text.length*50
                }
                if(i < text.length){
                    input.value += text.charAt(i)
                    i++
                }else{
                    clearInterval(interval)
                }
            }
            const interval = setInterval(typeWriter, 50)
        })
        document.querySelectorAll('.skills-item__numbers-input').forEach(el=>el.value = '')
        document.querySelectorAll('.skills-item__square span').forEach(el=>el.innerText = 0)
        document.querySelectorAll('.skills-item__square span').forEach(el=>el.style.color = 'black')
        document.querySelectorAll('.skills-item__numbers-divider').forEach(el=>el.innerText = '/' + 1)
        document.querySelectorAll('.skills-item__square-main div').forEach(el=>el.style.width = 100+"%")
        document.querySelectorAll('.skills-item__numbers-left').forEach(el=>el.classList.add('deactive'))        
        Object.entries(jsonData['skills']).forEach(([key, val]) =>{
            document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__numbers-left').classList.remove('deactive')
            for(let index = 0; index < val; index++){
                setTimeout(() =>{
                    document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__numbers-input').value = Number(document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__numbers-input').value) + 1
                    if(Number(document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__numbers-input').value) > Number(document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))){
                        document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__numbers-divider').innerText = '/'+ (Number(document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__square span').innerText)+1)
                        document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__numbers-input').value = 1                        
                    }
                    if(Number(document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__numbers-input').value) == Number(document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__square span').innerText)+1){                        
                        document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__square span').innerText = Number(document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__square span').innerText)+1
                    }
                    document.querySelector(`label[for="${key}"]`).querySelectorAll('.skills-item__square-main')[Number(document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].querySelector('div').style.width = 100 - (Number(document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__numbers-input').value)/Number(document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')))*100 + "%"    
                    if(document.querySelector(`label[for="${key}"]`).querySelectorAll('.skills-item__square-main')[Number(document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('one') || document.querySelector(`label[for="${key}"]`).querySelectorAll('.skills-item__square-main')[Number(document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('eight')){
                        document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__square span').style.color = 'rgba(100, 40, 160, 1)'
                    }else if(document.querySelector(`label[for="${key}"]`).querySelectorAll('.skills-item__square-main')[Number(document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('two') || document.querySelector(`label[for="${key}"]`).querySelectorAll('.skills-item__square-main')[Number(document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('seven')){
                        document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__square span').style.color = 'rgba(120, 160, 210, 1)'
                    }else if(document.querySelector(`label[for="${key}"]`).querySelectorAll('.skills-item__square-main')[Number(document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('tree') || document.querySelector(`label[for="${key}"]`).querySelectorAll('.skills-item__square-main')[Number(document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('six')){
                        document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__square span').style.color = 'rgba(50, 220, 190, 1)'
                    }else if(document.querySelector(`label[for="${key}"]`).querySelectorAll('.skills-item__square-main')[Number(document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('phour') || document.querySelector(`label[for="${key}"]`).querySelectorAll('.skills-item__square-main')[Number(document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('five')){
                        document.querySelector(`label[for="${key}"]`).querySelector('.skills-item__square span').style.color = 'rgba(30, 180, 120, 1)'
                    }
                    calculateSpent()
                }, index*50)
                if(skillsTime < index*50){
                    skillsTime = index*50
                }
            }
        })
        document.querySelectorAll('.specifications-item__numbers-input').forEach(el=>el.value = '')
        document.querySelectorAll('.specifications-item__square span').forEach(el=>el.innerText = 1)
        document.querySelectorAll('.specifications-item__square span').forEach(el=>el.style.color = 'black')
        document.querySelectorAll('.specifications-item__numbers-divider').forEach(el=>el.innerText = '/' + 2)
        document.querySelectorAll('.specifications-item__square-main div').forEach(el=>el.style.width = 100+"%")
        document.querySelectorAll('.specifications-item__square-main.one div').forEach(el=>el.style.width = 0)
        document.querySelectorAll('.specifications-item__numbers-left').forEach(el=>el.classList.add('deactive'))
        Object.entries(jsonData['specifications']).forEach(([key, val]) =>{
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

        for(let index = 0; index < jsonData['mana']; index++){
            setTimeout(() => {
                document.querySelector('.special-mana__container-bonus').innerHTML += '<svg class="active" onclick="manaPaint(this)" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><polygon points="12.5,1 24,9 19,23 6,23 1,9" stroke="black" stroke-width="2" fill="none"/></svg>'
                colMana()
                setManaMagic()
            }, index*50)
        }
        Object.entries(jsonData['spell']).forEach((val) =>{
            document.querySelector('.mid-third').innerHTML +=  `
                <div class="mid-third__spell">
                    <div class="mid-third__spell-short">
                        <div class="spell-short__title">`+val.name+`</div>
                        <div class="spell-short__cost">`+val.minMana+`</div>
                        <div class="spell-short__range">`+val.range+`</div>
                        <div class="spell-short__time">`+val.time+`</div>
                        <div class="spell-short__duration">`+val.duration+`</div>
                    </div>
                    <div class="mid-third__spell-long">
                        <label class="spell-long__title">
                            Название
                            <input value="`+val.name+`">
                        </label>
                        <label class="spell-long__school">
                            Школа заклинания
                            <input value="`+val.schoolManual+`">
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
                            <input class="short" placeholder="Мин" class="number-only" value="`+val.minMana+`">
                            <input class="short" placeholder="Макс" class="number-only" value="`+val.maxMana+`">
                        </label>
                        <label class="spell-long__time">
                            Время накладывания
                            <input placeholder="" value="`+val.time+`">
                        </label>
                        <label class="spell-long__duration">
                            Длительность
                            <input placeholder="" value="`+val.duration+`">
                        </label>
                        <label class="spell-long__range">
                            Дистанция
                            <input placeholder="" value="`+val.range+`">
                        </label>
                        <label class="spell-long__description">
                            Описание
                            <textarea>`+val.description+`</textarea>
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
            elem = document.querySelectorAll('.mid-third__spell')[document.querySelectorAll('.mid-third__spell').length - 1]
            if(val.open){
                addChangeSave(elem)
            }
            if(val.favourites){
                addFavouritesSave(elem)
            }
            elem.querySelectorAll('option').forEach(option =>{
                option.removeAttribute('selected')
                if(option.textContent.trim() === val.school.trim()){
                    option.setAttribute('selected', 'selected')
                }
                if(val.school == 'Собственная'){
                    elem.querySelector('.spell-long__school input').style.display = 'inline'
                }
            })
            document.querySelectorAll('.mid-third__information span')[1].innerHTML = elements.length
        })
    }

    setTimeout(() =>{
        if(textTime > 2000 || textTime > 2000 || specificationsTime > 2000){
            setInterval(() =>{
                modal.innerText = 'Успешно загружен'
                setTimeout(() =>{
                    modal.classList.remove('active')
                    setTimeout(() =>{
                        modal.innerText = ''
                    }, 500)
                }, 2000)
            }, Math.max(textTime, skillsTime, specificationsTime) - 2000)
        }else{
            modal.innerText = 'Успешно загружен'
            setTimeout(() =>{
                modal.classList.remove('active')
                setTimeout(() =>{
                    modal.innerText = ''
                }, 500)
            }, 2000)
        }
    }, 2000)
    reader.readAsText(file)
    document.getElementById('fileInput').value = ''
}

function addFavouritesSave(x){
    x.querySelector('.spell-system__favourites').classList.toggle('active')
    if(x.querySelector('.spell-system__favourites').classList.contains('active')){
        x.style.order = 1
    }else{
        x.style.order = 2
    }
}


function addChangeSave(x){
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
}
