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
                    setMana()
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
    if(x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('one') || x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('ten')){
        x.querySelector('.specifications-item__square span').style.color = 'rgba(100, 40, 160, 1)'
    }else if(x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('two') || x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('nine')){
        x.querySelector('.specifications-item__square span').style.color = 'rgba(120, 160, 210, 1)'
    }else if(x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('tree') || x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('eight')){
        x.querySelector('.specifications-item__square span').style.color = 'rgba(50, 220, 190, 1)'
    }else if(x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('phour') || x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('seven')){
        x.querySelector('.specifications-item__square span').style.color = 'rgba(30, 180, 120, 1)'
    }else if(x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('five') || x.querySelectorAll('.specifications-item__square-main')[Number(x.querySelector('.specifications-item__numbers-divider').innerText.replace(/^\/|\/$/g, ''))-1].classList.contains('six')){
        x.querySelector('.specifications-item__square span').style.color = 'rgba(40, 30, 100, 1)'
    }
    calculateSpent()
    setAdvantage()
}

function setAdvantage(){
    document.querySelectorAll('.specifications-item__square').forEach(el=>{
        el.querySelector('advantage').innerHTML = Number(el.querySelector('span').innerText) - 3
    })
}

setAdvantage()