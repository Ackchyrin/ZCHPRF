let group = []

function addGroup(){
    document.querySelector('.group-overflow').innerHTML += `
    <div class="group-item">
        <input class="group-item__input" value="${document.querySelectorAll('.group-item').length + 1}">
        <div class="group-item__button" onclick="openHiddenList(this,${document.querySelectorAll('.group-item').length})">Показать</div>
        <div class="group-item__list" data-number="${document.querySelectorAll('.group-item').length}">
            <div class="group-item__list-char"><div class="item-list__char-status"></div></div>
        </div>
    </div>`
    setTimeout(() => {
        checkGroup()
    }, 1000);
}

addGroup()

function openHiddenList(element,number){
    const list = document.querySelector(`.group-item__list[data-number="${number}"]`)
    list.classList.toggle('active')
    if(list.classList.contains('active')){
        element.innerHTML = "Скрыть"
    }else{
        element.innerHTML = "Показать"
    }
}
