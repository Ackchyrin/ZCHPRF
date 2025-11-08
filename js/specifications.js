document.querySelectorAll('.specifications-item').forEach(el=>{
    colUp = Number(el.querySelector('.specifications-item__square span').innerText)+1
    colInput = Number(el.querySelector('.specifications-item__numbers-input').value)
    el.querySelector('.specifications-item__numbers-divider').innerText = '/'+colUp
    el.querySelector('.specifications-item__numbers-left').addEventListener('click',()=>{        
        if(Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) > 0){
            el.querySelector('.specifications-item__numbers-input').value = Number(el.querySelector('.specifications-item__numbers-input').value) - 1
            if(Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) == Number(el.querySelector('.specifications-item__square span').innerText)){                
                el.querySelector('.specifications-item__square span').innerText = Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) - 1
            }
            countingspecifications(el)
        }
    })
    el.querySelector('.specifications-item__numbers-right').addEventListener('click',()=>{            
        if(Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) <= 10){            
            el.querySelector('.specifications-item__numbers-input').value = Number(el.querySelector('.specifications-item__numbers-input').value) + 1
            countingspecifications(el)
        }
    })
    el.querySelector('.specifications-item__numbers-input').addEventListener('click',()=>{
        colInput = Number(el.querySelector('.specifications-item__numbers-input').value)        
    })
    el.querySelector('.specifications-item__numbers-input').addEventListener('change',()=>{
        colEntry = Number(el.querySelector('.specifications-item__numbers-input').value)
        if(colEntry > colInput){
            el.querySelector('.specifications-item__numbers-input').value = colInput
            for (let index = 1; index <= (colEntry-colInput); index++) {
                setTimeout(() => {
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
                        if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('one')){
                            el.querySelector('advantage').style.color = 'rgba(255, 0, 150, 1)'
                        }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('two')){
                            el.querySelector('advantage').style.color = 'rgba(255, 80, 120, 1)'
                        }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('tree')){
                            el.querySelector('advantage').style.color = 'rgba(255, 120, 60, 1)'
                        }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('phour')){
                            el.querySelector('advantage').style.color = 'rgba(255, 180, 0, 1)'
                        }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('five')){
                            el.querySelector('advantage').style.color = 'rgba(180, 200, 0, 1)'
                        }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('six')){
                            el.querySelector('advantage').style.color = 'rgba(0, 200, 180, 1)'
                        }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('seven')){
                            el.querySelector('advantage').style.color = 'rgba(0, 150, 255, 1)'
                        }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('eight')){
                            el.querySelector('advantage').style.color = 'rgba(100, 0, 255, 1)'
                        }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('nine')){
                            el.querySelector('advantage').style.color = 'rgba(200, 0, 255, 1)'
                        }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('ten')){
                            el.querySelector('advantage').style.color = 'rgba(255, 0, 200, 1)'
                        }
                    }
                    setMana()
                    setHealth()
                    setAdvantage()
                    calculateSpent()
                }, index * 100);
            }
        }
    })
})

function countingspecifications(x){
    colTek = Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))
    colUp = Number(x.querySelector('.specifications-item__square span').innerText)+1
    if(Number(x.querySelector('.specifications-item__numbers-input').value) > colTek){
        x.querySelector('.specifications-item__numbers-divider').innerText = '/'+ (colUp)
        x.querySelector('.specifications-item__numbers-input').value = 1
    }
    if(Number(x.querySelector('.specifications-item__numbers-input').value) == colUp){
        x.querySelector('.specifications-item__square span').innerText = colUp
    }
    if(Number(x.querySelector('.specifications-item__numbers-input').value) + 1 == 11){
        x.querySelector('.specifications-item__numbers-right').classList.add('deactive')
    }else{
        x.querySelector('.specifications-item__numbers-right').classList.remove('deactive')
    }    
    if(Number(x.querySelector('.specifications-item__numbers-input').value) == 0 && colTek-1 != 1){        
        x.querySelector('.specifications-item__numbers-divider').innerText = '/'+ (colTek-1)
        x.querySelector('.specifications-item__square span').innerText = colTek-1
        x.querySelector('.specifications-item__numbers-input').value = colTek-1
        x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))].querySelector('div').style.width = 100 + "%"
        x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].querySelector('div').style.width = 0
    }
    if((colUp - 1) != 0 && (colUp - 1) < 0 || Number(x.querySelector('.specifications-item__numbers-input').value) == 0){
        x.querySelector('.specifications-item__numbers-left').classList.add('deactive')
    }else{
        x.querySelector('.specifications-item__numbers-left').classList.remove('deactive')
    }
    x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].querySelector('div').style.width = 100 - (Number(x.querySelector('.specifications-item__numbers-input').value)/Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')))*100 + "%"            
    if(x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('one')){
        x.querySelector('advantage').style.color = 'rgba(255, 0, 150, 1)'
    }else if(x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('two')){
        x.querySelector('advantage').style.color = 'rgba(255, 80, 120, 1)'
    }else if(x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('tree')){
        x.querySelector('advantage').style.color = 'rgba(255, 120, 60, 1)'
    }else if(x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('phour')){
        x.querySelector('advantage').style.color = 'rgba(255, 180, 0, 1)'
    }else if(x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('five')){
        x.querySelector('advantage').style.color = 'rgba(180, 200, 0, 1)'
    }else if(x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('six')){
        x.querySelector('advantage').style.color = 'rgba(0, 200, 180, 1)'
    }else if(x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('seven')){
        x.querySelector('advantage').style.color = 'rgba(0, 150, 255, 1)'
    }else if(x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('eight')){
        x.querySelector('advantage').style.color = 'rgba(100, 0, 255, 1)'
    }else if(x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('nine')){
        x.querySelector('advantage').style.color = 'rgba(200, 0, 255, 1)'
    }else if(x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('ten')){
        x.querySelector('advantage').style.color = 'rgba(255, 0, 200, 1)'
    }
    calculateSpent()
    setAdvantage()
    setHealth()
    document.querySelectorAll('.specifications-item__favourites').forEach(el=>{
        if(el.classList.contains('active')){
            specialJournalSkillsAndSpecifications()
        }
    })
}

function setAdvantage(){
    document.querySelectorAll('.specifications-item__square').forEach(el=>{
        el.querySelector('advantage').innerHTML = Number(el.querySelector('span').innerText) - 3
    })
}

setAdvantage()

document.querySelectorAll('.specifications-item__favourites').forEach(el=>el.addEventListener('click',()=>{
    el.classList.toggle('active')
    specialJournalSkillsAndSpecifications()
}))

document.querySelectorAll('.specifications-item').forEach(el => {
    if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('one')){
        el.querySelector('advantage').style.color = 'rgba(255, 0, 150, 1)'
    }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('two')){
        el.querySelector('advantage').style.color = 'rgba(255, 80, 120, 1)'
    }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('tree')){
        el.querySelector('advantage').style.color = 'rgba(255, 120, 60, 1)'
    }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('phour')){
        el.querySelector('advantage').style.color = 'rgba(255, 180, 0, 1)'
    }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('five')){
        el.querySelector('advantage').style.color = 'rgba(180, 200, 0, 1)'
    }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('six')){
        el.querySelector('advantage').style.color = 'rgba(0, 200, 180, 1)'
    }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('seven')){
        el.querySelector('advantage').style.color = 'rgba(0, 150, 255, 1)'
    }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('eight')){
        el.querySelector('advantage').style.color = 'rgba(100, 0, 255, 1)'
    }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('nine')){
        el.querySelector('advantage').style.color = 'rgba(200, 0, 255, 1)'
    }else if(el.querySelectorAll('.specifications-item__square-main')[Number(el.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('ten')){
        el.querySelector('advantage').style.color = 'rgba(255, 0, 200, 1)'
    }
})
