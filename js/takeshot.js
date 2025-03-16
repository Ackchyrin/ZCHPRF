function takeshot(){
    window.scrollTo(0, 0)

    document.querySelectorAll('.special-mana__container svg').forEach(el=>{
        if(el.classList.contains('active')){
            el.classList.add('change')
        }
        el.classList.remove('active')
    })
    document.querySelectorAll('.skills-item__numbers').forEach(el=>el.style.display = 'none')
    document.querySelectorAll('.specifications-item__numbers').forEach(el=>el.style.display = 'none')
    document.querySelectorAll('.equipment-item__bonus-add').forEach(el=>el.style.display = 'none')
    document.querySelectorAll('.money-coin__plus').forEach(el=>el.style.display = 'none')
    document.querySelectorAll('.item-bonus__list-checkbox').forEach(el=>el.style.display = 'none')
    document.querySelectorAll('.item-bonus__list-delete').forEach(el=>el.style.display = 'none')
    document.querySelectorAll('.mid-fourth__money input').forEach(el=>el.classList.add('active'))
    document.querySelectorAll('.number-only').forEach(el=>el.classList.add('active'))
    document.querySelectorAll('.moneyOnly').forEach(el=>el.style.display = 'none')
    document.querySelector('.special-mana__col span').style.display = 'none'
    document.querySelector('.features div').style.display = 'block'
    document.querySelector('.features textarea').style.display = 'none'
    document.querySelector('.features div').innerHTML = document.querySelector('.features textarea').value
    document.querySelector('.abilities div').style.display = 'block'
    document.querySelector('.abilities textarea').style.display = 'none'
    document.querySelector('.abilities div').innerHTML = document.querySelector('.abilities textarea').value
    document.querySelector('.beauty div').style.display = 'block'
    document.querySelector('.beauty textarea').style.display = 'none'
    document.querySelector('.beauty div').innerHTML = document.querySelector('.beauty textarea').value
    document.querySelector('.mid-fourth__inventory div').style.display = 'block'
    document.querySelector('.mid-fourth__inventory textarea').style.display = 'none'
    document.querySelector('.mid-fourth__inventory div').innerHTML = document.querySelector('.mid-fourth__inventory textarea').value
    document.querySelectorAll('.mid-info__item-input').forEach(el=>el.classList.add('hidden'))
    document.querySelectorAll('.mid-character').forEach(el=>{
        el.querySelector('div').style.display = 'block'
        el.querySelector('.mid-character__text').style.display = 'none'
        el.querySelector('div').innerHTML = el.querySelector('.mid-character__text').value
    })
    document.querySelectorAll('.spell-long__description').forEach(el=>{
        el.querySelector('textarea').style.display = 'none'
        el.querySelector('div').style.display = 'block'
        el.querySelector('div').innerHTML = el.querySelector('textarea').value
    })
    document.querySelectorAll('.mid-fourth__equipment-item').forEach(el=>{
        el.querySelector('textarea').style.display = 'none'
        el.querySelector('.equipment-item__text').style.display = 'block'
        el.querySelector('.equipment-item__text').innerHTML = el.querySelector('textarea').value
    })
    div = ''
    if(!document.querySelector('.mid').classList.contains('deactive')){
        div = document.querySelector('.mid')
    }else if(document.querySelector('.mid-second').classList.contains('active')){
        div = document.querySelector('.mid-second')
    }else if(document.querySelector('.mid-third').classList.contains('active')){
        div = document.querySelector('.mid-third')
    }else if(document.querySelector('.mid-fourth').classList.contains('active')){
        div = document.querySelector('.mid-fourth')
    }
    html2canvas(div).then(
        function (canvas) {
            document
            .getElementById('output')
            .appendChild(canvas);
        })
    setTimeout(() => {
        currentdate = new Date();
        day = currentdate.getDate();
        month = currentdate.getMonth() + 1;
        year = currentdate.getFullYear();
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;
        datetime = day + "." + month + "." + year;
        download(document.querySelector('#output canvas'),document.querySelector('#character').value+'  '+datetime+'.png');
        document.querySelector('.modal').classList.add('active')
        document.querySelector('.modal').innerText = 'Успешно'
    }, 1000);
}

function download(canvas, filename) {
    var lnk = document.createElement('a'),
        e;
    lnk.download = filename;
    lnk.href = document.querySelector('#output canvas').toDataURL();
    if (document.createEvent) {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, true, window,
                         0, 0, 0, 0, 0, false, false, false,
                         false, 0, null);
        lnk.dispatchEvent(e);
    }else if(lnk.fireEvent){
        lnk.fireEvent("onclick");
    }
    document.querySelectorAll('.special-mana__container svg.change').forEach(el=>{
        el.classList.add('active')
        el.classList.remove('change')
    })
    document.querySelectorAll('.skills-item__numbers').forEach(el=>el.style.display = 'flex')
    document.querySelectorAll('.specifications-item__numbers').forEach(el=>el.style.display = 'flex')
    document.querySelectorAll('.equipment-item__bonus-add').forEach(el=>el.style.display = 'flex')
    document.querySelectorAll('.money-coin__plus').forEach(el=>el.style.display = 'block')
    document.querySelectorAll('.mid-fourth__money input').forEach(el=>el.classList.remove('active'))
    document.querySelectorAll('.item-bonus__list-checkbox').forEach(el=>el.style.display = 'block')
    document.querySelectorAll('.item-bonus__list-delete').forEach(el=>el.style.display = 'block')
    document.querySelectorAll('.moneyOnly').forEach(el=>el.style.display = 'block')
    document.querySelector('.special-mana__col span').style.display = 'block'
    document.querySelector('.features div').style.display = 'none'
    document.querySelector('.features textarea').style.display = 'block'
    document.querySelector('.abilities div').style.display = 'none'
    document.querySelector('.abilities textarea').style.display = 'block'
    document.querySelector('.beauty div').style.display = 'none'
    document.querySelector('.beauty textarea').style.display = 'block'
    document.querySelector('.mid-fourth__inventory div').style.display = 'none'
    document.querySelector('.mid-fourth__inventory textarea').style.display = 'block'
    document.querySelectorAll('.mid-info__item-input').forEach(el=>el.classList.remove('hidden'))
    document.querySelectorAll('.mid-character').forEach(el=>{
        el.querySelector('div').style.display = 'none'
        el.querySelector('.mid-character__text').style.display = 'block'
    })
    document.querySelectorAll('.spell-long__description').forEach(el=>{
        el.querySelector('textarea').style.display = 'block'
        el.querySelector('div').style.display = 'none'
    })
    document.querySelectorAll('.mid-fourth__equipment-item').forEach(el=>{
        el.querySelector('textarea').style.display = 'block'
        el.querySelector('.equipment-item__text').style.display = 'none'
    })
    document.querySelectorAll('.number-only').forEach(el=>{
        if(el.value == ''){
            el.classList.remove('active')
        }
    })
    setTimeout(() => {
        document.querySelector('.modal').classList.remove('active')
        setTimeout(() => {
            document.querySelector('.modal').innerText = ''
        }, 500);
    }, 2000);
    document.querySelector('#output').innerHTML = ''
}
