document.querySelectorAll('.skills-item').forEach(el=>{
    colUp = Number(el.querySelector('.skills-item__square span').innerText)+1
    colInput = Number(el.querySelector('.skills-item__numbers-input').value)
    el.querySelector('.skills-item__numbers-divider').innerText = '/'+colUp
    el.querySelector('.skills-item__numbers-left').addEventListener('click',()=>{        
        if(Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) > 0){
            el.querySelector('.skills-item__numbers-input').value = Number(el.querySelector('.skills-item__numbers-input').value) - 1
            if(Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) == Number(el.querySelector('.skills-item__square span').innerText)){
                el.querySelector('.skills-item__square span').innerText = Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) - 1
            }
            countingSkills(el)
        }
    })
    el.querySelector('.skills-item__numbers-right').addEventListener('click',()=>{            
        if(Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')) <= 8){            
            el.querySelector('.skills-item__numbers-input').value = Number(el.querySelector('.skills-item__numbers-input').value) + 1
            countingSkills(el)
        }
    })
    el.querySelector('.skills-item__numbers-input').addEventListener('click',()=>{
        colInput = Number(el.querySelector('.skills-item__numbers-input').value)        
    })
    el.querySelector('.skills-item__numbers-input').addEventListener('change',()=>{
        colEntry = Number(el.querySelector('.skills-item__numbers-input').value)
        if(colEntry > colInput){
            el.querySelector('.skills-item__numbers-input').value = colInput
            for (let index = 1; index <= (colEntry-colInput); index++){
                setTimeout(() => {
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
                        if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('one')){
                            el.querySelector('.skills-item__square span').style.color = 'rgba(100, 40, 160, 1)'
                        }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('two')){
                            el.querySelector('.skills-item__square span').style.color = 'rgba(120, 100, 185, 1)'
                        }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('tree')){
                            el.querySelector('.skills-item__square span').style.color = 'rgba(120, 160, 210, 1)'
                        }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('phour')){
                            el.querySelector('.skills-item__square span').style.color = 'rgba(85, 190, 200, 1)'
                        }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('five')){
                            el.querySelector('.skills-item__square span').style.color = 'rgba(50, 220, 190, 1)'
                        }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('six')){
                            el.querySelector('.skills-item__square span').style.color = 'rgba(40, 200, 150, 1)'
                        }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('seven')){
                            el.querySelector('.skills-item__square span').style.color = 'rgba(30, 180, 120, 1)'
                        }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('eight')){
                            el.querySelector('.skills-item__square span').style.color = 'rgba(65, 110, 140, 1)'
                        }
                        calculateSpent()
                    }
                }, index * 100);
            }
        }    
    })
})

function countingSkills(x){
    colTek = Number(x.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))
    colUp = Number(x.querySelector('.skills-item__square span').innerText)+1
    if(Number(x.querySelector('.skills-item__numbers-input').value) > colTek){
        x.querySelector('.skills-item__numbers-divider').innerText = '/'+ (colUp)
        x.querySelector('.skills-item__numbers-input').value = 1
    }
    if(Number(x.querySelector('.skills-item__numbers-input').value) == colUp){
        x.querySelector('.skills-item__square span').innerText = colUp
    }
    if(Number(x.querySelector('.skills-item__numbers-input').value) + 1 == 9){
        x.querySelector('.skills-item__numbers-right').classList.add('deactive')
    }else{
        x.querySelector('.skills-item__numbers-right').classList.remove('deactive')
    }
    if(Number(x.querySelector('.skills-item__numbers-input').value) == 0 && colTek != 1){        
        x.querySelector('.skills-item__numbers-divider').innerText = '/'+ (colTek-1)
        x.querySelector('.skills-item__square span').innerText = colTek-1
        x.querySelector('.skills-item__numbers-input').value = colTek-1
        x.querySelectorAll('.skills-item__square-main')[Number(x.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))].querySelector('div').style.width = 100 + "%"
        x.querySelectorAll('.skills-item__square-main')[Number(x.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].querySelector('div').style.width = 0
    }
    if((colUp - 1) != 0 && (colUp - 1) < 0 || Number(x.querySelector('.skills-item__numbers-input').value) == 0){
        x.querySelector('.skills-item__numbers-left').classList.add('deactive')
    }else{
        x.querySelector('.skills-item__numbers-left').classList.remove('deactive')
    }
    x.querySelectorAll('.skills-item__square-main')[Number(x.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].querySelector('div').style.width = 100 - (Number(x.querySelector('.skills-item__numbers-input').value)/Number(x.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, '')))*100 + "%"    
    if(x.querySelectorAll('.skills-item__square-main')[Number(x.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('one')){
        x.querySelector('.skills-item__square span').style.color = 'rgba(100, 40, 160, 1)'
    }else if(x.querySelectorAll('.skills-item__square-main')[Number(x.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('two')){
        x.querySelector('.skills-item__square span').style.color = 'rgba(120, 100, 185, 1)'
    }else if(x.querySelectorAll('.skills-item__square-main')[Number(x.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('tree')){
        x.querySelector('.skills-item__square span').style.color = 'rgba(120, 160, 210, 1)'
    }else if(x.querySelectorAll('.skills-item__square-main')[Number(x.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('phour')){
        x.querySelector('.skills-item__square span').style.color = 'rgba(85, 190, 200, 1)'
    }else if(x.querySelectorAll('.skills-item__square-main')[Number(x.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('five')){
        x.querySelector('.skills-item__square span').style.color = 'rgba(50, 220, 190, 1)'
    }else if(x.querySelectorAll('.skills-item__square-main')[Number(x.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('six')){
        x.querySelector('.skills-item__square span').style.color = 'rgba(40, 200, 150, 1)'
    }else if(x.querySelectorAll('.skills-item__square-main')[Number(x.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('seven')){
        x.querySelector('.skills-item__square span').style.color = 'rgba(30, 180, 120, 1)'
    }else if(x.querySelectorAll('.skills-item__square-main')[Number(x.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('eight')){
        x.querySelector('.skills-item__square span').style.color = 'rgba(65, 110, 140, 1)'
    }
    calculateSpent()
    document.querySelectorAll('.skills-item__favourites').forEach(el=>{
        if(el.classList.contains('active')){
            specialJournalSkillsAndSpecifications()
        }
    })
}

document.querySelectorAll('.skills-item__favourites').forEach(el=>el.addEventListener('click',()=>{
    el.classList.toggle('active')
    specialJournalSkillsAndSpecifications()
}))

document.querySelectorAll('.skills-item').forEach(el => {
    if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('one')){
        el.querySelector('.skills-item__square span').style.color = 'rgba(100, 40, 160, 1)'
    }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('two')){
        el.querySelector('.skills-item__square span').style.color = 'rgba(120, 100, 185, 1)'
    }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('tree')){
        el.querySelector('.skills-item__square span').style.color = 'rgba(120, 160, 210, 1)'
    }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('phour')){
        el.querySelector('.skills-item__square span').style.color = 'rgba(85, 190, 200, 1)'
    }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('five')){
        el.querySelector('.skills-item__square span').style.color = 'rgba(50, 220, 190, 1)'
    }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('six')){
        el.querySelector('.skills-item__square span').style.color = 'rgba(40, 200, 150, 1)'
    }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('seven')){
        el.querySelector('.skills-item__square span').style.color = 'rgba(30, 180, 120, 1)'
    }else if(el.querySelectorAll('.skills-item__square-main')[Number(el.querySelector('.skills-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('eight')){
        el.querySelector('.skills-item__square span').style.color = 'rgba(65, 110, 140, 1)'
    }
})
