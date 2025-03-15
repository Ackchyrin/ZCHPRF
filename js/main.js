function hiddenSystem(){
    let div = document.querySelector('.system')
    let isCollapsed = div.dataset.collapsed === "true"
    let startHeight = isCollapsed ? 60 : div.scrollHeight
    let endHeight = isCollapsed ? div.scrollHeight : 60
    let startTime
    if(isCollapsed){
        document.querySelector('.system-info__hidden').innerText = 'Скрыть'
    }else{
        document.querySelector('.system-info__hidden').innerText = 'Показать'
    }
    
    function animate(timestamp){
        if(!startTime) startTime = timestamp
        let progress = (timestamp - startTime) / 400
        if(progress > 1) progress = 1
        div.style.height = startHeight + (endHeight - startHeight) * progress + "px"
        if(progress < 1){
            requestAnimationFrame(animate)
        }else{
            div.dataset.collapsed = !isCollapsed
        }
    }
    requestAnimationFrame(animate)
}

function hiddenHot(){
    let div = document.querySelector('.hot')
    let isCollapsed = div.dataset.collapsed === "true"
    let startHeight = isCollapsed ? 70 : div.scrollHeight
    let endHeight = isCollapsed ? div.scrollHeight : 70
    let startTime
    if(isCollapsed){
        document.querySelector('.hot-info__hidden').innerText = 'Скрыть'
    }else{
        document.querySelector('.hot-info__hidden').innerText = 'Показать'
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
}

function hiddenSpent(){
    let div = document.querySelector('.spent')
    let isCollapsed = div.dataset.collapsed === "true"
    let startHeight = isCollapsed ? 70 : div.scrollHeight
    let endHeight = isCollapsed ? div.scrollHeight : 70
    let startTime
    if(isCollapsed){
        document.querySelector('.spent-info__hidden').innerText = 'Скрыть'
    }else{
        document.querySelector('.spent-info__hidden').innerText = 'Показать'
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
}


function openListMain(x){
    openButtonRight()
    x.classList.add('deactive')
    document.querySelector('.mid-second').classList.remove('active')
    document.querySelector('.mid').classList.remove('deactive')
    document.querySelector('.mid-third').classList.remove('active')
    document.querySelector('.mid-fourth').classList.remove('active')
    document.querySelectorAll('.right-container__button')[8].classList.add('deactive')
}

function openListCharacter(x){
    openButtonRight()
    x.classList.add('deactive')
    document.querySelector('.mid-second').classList.add('active')
    document.querySelector('.mid').classList.add('deactive')
    document.querySelector('.mid-third').classList.remove('active')
    document.querySelector('.mid-fourth').classList.remove('active')
    document.querySelectorAll('.right-container__button')[8].classList.add('deactive')
}

function openListMagic(x){
    openButtonRight()
    x.classList.add('deactive')
    document.querySelector('.mid-second').classList.remove('active')
    document.querySelector('.mid').classList.add('deactive')
    document.querySelector('.mid-third').classList.add('active')
    document.querySelector('.mid-fourth').classList.remove('active')
    document.querySelectorAll('.right-container__button')[8].classList.remove('deactive')
    setManaMagic()
    // setTimeout(() => {
    //     setManaMagic()
    // }, 1000);
}

function openListInventory(x){
    openButtonRight()
    x.classList.add('deactive')
    document.querySelector('.mid-second').classList.remove('active')
    document.querySelector('.mid').classList.add('deactive')
    document.querySelector('.mid-third').classList.remove('active')
    document.querySelector('.mid-fourth').classList.add('active')
    document.querySelectorAll('.right-container__button')[8].classList.add('deactive')
}

function openButtonRight(){
    document.querySelectorAll('.right-container__button.deactive').forEach(el=>el.classList.remove('deactive'))
}

// document.querySelectorAll('.right-container__button')[3].click()