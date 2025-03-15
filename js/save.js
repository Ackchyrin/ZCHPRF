let dataCharacter = {}
dataCharacter['skills'] = {}
dataCharacter['specifications'] = {}
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
        Object.entries(jsonData['specifications']).forEach(([key, val]) => {
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
            }, index*50)
        }
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
