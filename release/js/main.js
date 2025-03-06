function hiddenSystem(){
    let div = document.querySelector('.system');
    let isCollapsed = div.dataset.collapsed === "true";
    let startHeight = isCollapsed ? 60 : div.scrollHeight;
    let endHeight = isCollapsed ? div.scrollHeight : 60;
    let startTime;
    if(isCollapsed){
        document.querySelector('.system-info__hidden').innerText = 'Скрыть'
    }else{
        document.querySelector('.system-info__hidden').innerText = 'Показать'
    }
    
    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = (timestamp - startTime) / 400;
        if (progress > 1) progress = 1;
        div.style.height = startHeight + (endHeight - startHeight) * progress + "px";
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            div.dataset.collapsed = !isCollapsed;
        }
    }
    requestAnimationFrame(animate);
}

function hiddenHot(){
    let div = document.querySelector('.hot');
    let isCollapsed = div.dataset.collapsed === "true";
    let startHeight = isCollapsed ? 70 : div.scrollHeight;
    let endHeight = isCollapsed ? div.scrollHeight : 70;
    let startTime;
    if(isCollapsed){
        document.querySelector('.hot-info__hidden').innerText = 'Скрыть'
    }else{
        document.querySelector('.hot-info__hidden').innerText = 'Показать'
    }
    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = (timestamp - startTime) / 400;
        if (progress > 1) progress = 1;
        div.style.height = startHeight + (endHeight - startHeight) * progress + "px";
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            div.dataset.collapsed = !isCollapsed;
        }
    }
    requestAnimationFrame(animate);
}

function hiddenSpent(){
    let div = document.querySelector('.spent');
    let isCollapsed = div.dataset.collapsed === "true";
    let startHeight = isCollapsed ? 70 : div.scrollHeight;
    let endHeight = isCollapsed ? div.scrollHeight : 70;
    let startTime;
    if(isCollapsed){
        document.querySelector('.spent-info__hidden').innerText = 'Скрыть'
    }else{
        document.querySelector('.spent-info__hidden').innerText = 'Показать'
    }
    
    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = (timestamp - startTime) / 400;
        if (progress > 1) progress = 1;
        div.style.height = startHeight + (endHeight - startHeight) * progress + "px";
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            div.dataset.collapsed = !isCollapsed;
        }
    }
    requestAnimationFrame(animate);
}

function swapList(){
    document.querySelector('.mid-second').classList.toggle('active')
    document.querySelector('.mid').classList.toggle('deactive')
}
