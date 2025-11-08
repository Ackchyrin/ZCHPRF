document.querySelector('.system-master').addEventListener('click', () => {
    document.querySelector('.master').classList.toggle('active')
    if(document.querySelector('.master').classList.contains('active')){
        document.querySelector('.system-master').innerText = 'Убрать виртуального мастера'
    }else{
        document.querySelector('.system-master').innerText = 'Позвать виртуального мастера'
    }
    checkFirstOpen()
})

document.querySelector('.master-button').addEventListener('click',checkStep)

function checkFirstOpen(){
    if(document.querySelector('.mid-info__item-input').value == ''){
        document.querySelector('.master-text').innerHTML = 'Я помогу тебе создать нового персонажа за 7 шагов. К сожалению, я не обладаю искуственным интеллектом, поэтому тебе желательно следовать за порядком который я говорю. И не бояться обращаться к старшим товарищам за помощью.'
    }else{
        checkStep()
    }
}

function checkStep(){
    if(document.querySelector('.master-title').innerHTML == 'Привет я кубЫч'){
        oneStep()
        return
    }
    if(document.querySelector('.master-title').innerHTML == 'Шаг 1 из 7: Придумайте персонажа.'){
        twoStep()
        return
    }
    if(document.querySelector('.master-title').innerHTML == 'Шаг 2 из 7: Что умеет ваш персонаж?'){
        treeStep()
        return
    }
    if(document.querySelector('.master-title').innerHTML == 'Шаг 3 из 7: Каков ваш персонаж с рождения?'){
        phourStep()
        return
    }
    if(document.querySelector('.master-title').innerHTML == 'Шаг 4 из 7: Закончите персонажа'){
        fiveStep()
        return
    }
    if(document.querySelector('.master-title').innerHTML == 'Шаг 5 из 7: Заклинания персонажа'){
        sixStep()
        return
    }
    if(document.querySelector('.master-title').innerHTML == 'Шаг 6 из 7: Имущество персонажа'){
        sevenStep()
        return
    }
    if(document.querySelector('.master-title').innerHTML == 'Шаг 7 из 7: Финальная штрихофка'){
        saveFile()
        document.querySelector('.master').classList.remove('active')
        document.querySelector('.master-title').innerHTML = 'Привет я кубЫч'
        document.querySelector('.master-text').innerHTML = ''
        document.querySelector('.master-succes').innerHTML = ''
        document.querySelector('.master-alert').innerHTML = ''
        return
    }
}

function oneStep(){
    document.querySelector('.master-title').innerHTML = 'Шаг 1 из 7: Придумайте персонажа.'
    document.querySelector('.master-text').innerHTML = 'Вначале не торопитесь придумайте персонажа. Хотя бы его очертания. Для этого заполните имя игрока, персонажа, расу и класс. Будьте внимательны расу и класс будет очень тяжело поменять в дальнейшем.'
    document.querySelector('.master-succes').innerHTML = 'А вы знали что тут есть подскзаки для каждого поля? Они находятся в левой функциональной части.'
    document.querySelector('.master').style.top = '10%'
    document.querySelector('.master').style.right = '50%'
}

function twoStep(){
    document.querySelector('.master-title').innerHTML = 'Шаг 2 из 7: Что умеет ваш персонаж?'
    document.querySelector('.master-text').innerHTML = 'Теперь когда вы придумали персонажа, самое время распределить его начальные навыки. Они будут влиять на спезиализацию которую вы прописали в поле класс. Вы же его прописали?'
    document.querySelector('.master-succes').innerHTML = 'Возникли вопросы и нет рядом гейммастера? Обращайтесь в <a href="https://docs.google.com/document/d/1JA_9GWh6ilwM6tdC9Gf_873bIx83505W2D6G11B49qw/edit?tab=t.xvbix4cvloac" target="_blank">документацию</a>' 
    document.querySelector('.master-alert').innerHTML = 'Не забываейте что у вас есть 11 очков опыта для распределния начальных навыков. Можно конечно и больше если гейммастер вашей партии разрешил или мы ему не скажем;)'
    window.scrollTo({ top: document.querySelector('.skills').getBoundingClientRect().top + window.pageYOffset - 50, behavior: 'smooth' })
    document.querySelector('.master').style.top = '15%'
    document.querySelector('.master').style.right = '80%'
}

function treeStep(){
    document.querySelector('.master-title').innerHTML = 'Шаг 3 из 7: Каков ваш персонаж с рождения?'
    document.querySelector('.master-alert').innerHTML = ''
    document.querySelector('.master-text').innerHTML = 'Распредилите характеристики вашего персонажа. Они будут влиять на все аспекты игры. Сила влияет на физическую мощь, Ловкость на скорость и реакцию, Выносливость на здоровье и стойкость, Интеллект на умственные способности, Мудрость на восприятие и интуицию, Харизма на обаяние и лидерские качества. Также не забудьте о поле особенности.'
    document.querySelector('.master-succes').innerHTML = 'Характеристики проставляются автоматически в зависимости от расы.'
    window.scrollTo({ top: document.querySelector('.specifications-features').getBoundingClientRect().top + window.pageYOffset - 50, behavior: 'smooth' })
}

function phourStep(){
    document.querySelectorAll('.right-container__button')[1].click()
    document.querySelector('.master-title').innerHTML = 'Шаг 4 из 7: Закончите персонажа'
    document.querySelector('.master-alert').innerHTML = ''
    document.querySelector('.master-succes').innerHTML = ''
    document.querySelector('.master-text').innerHTML = 'Не пугайтесь так и нужно. Теперь вам нужно закончить персонажа. Описать его внешность, характер, биографию и прочее. После этого вы сможете уже играть за него. Но у нас впереди ещё 3 шага.'
    window.scrollTo({ top: document.querySelector('.mid-second').getBoundingClientRect().top + window.pageYOffset - 50, behavior: 'smooth' })
}

function fiveStep(){
    document.querySelectorAll('.right-container__button')[2].click()
    document.querySelector('.master-title').innerHTML = 'Шаг 5 из 7: Заклинания персонажа'
    document.querySelector('.master-alert').innerHTML = 'Тщательно прописывайте заклинания вашего персонажа. Если что то будет не так во время игры, гейммастер вашей партии может попросить вас это исправить.'
    document.querySelector('.master-succes').innerHTML = 'Заклинания можете брать из любых источников. Но правильно определите школу заклинания.'
    document.querySelector('.master-text').innerHTML = 'Теперь если вы хотите поколдовать, вам нужно заполнить заклинания вашего персонажа. Учтите количество начальных заклинаний ограниченно.И если усомневаетесь, в их качестве лучше пообщаться с гейммастером вашей партии.'
    window.scrollTo({ top: document.querySelector('.mid-third').getBoundingClientRect().top + window.pageYOffset - 50, behavior: 'smooth' })
}

function sixStep(){
    document.querySelectorAll('.right-container__button')[3].click()
    document.querySelector('.master-title').innerHTML = 'Шаг 6 из 7: Имущество персонажа'
    document.querySelector('.master-text').innerHTML = 'Теперь вам нужно составить инвентарь вашего персонажа. В зависимости от класса и расы у вас будет разное начальное имущество. Но вы можете его менять на своё усмотрение. Конечно всегда будет мало, но это вы восполните во время игры.'
    document.querySelector('.master-succes').innerHTML = 'Ура! Первый бросок кубов за вашего персонажа. Можно прокинуть начальные финансы.'
    document.querySelector('.master-alert').innerHTML = 'Внимательно думайте что брать с собой в приключение. Ваш персонаж конечно будущий герой, спаситель мира и всё такое, но у него нет рюкзака бесконечной вместимости.'
    window.scrollTo({ top: document.querySelector('.mid-fourth').getBoundingClientRect().top + window.pageYOffset - 50, behavior: 'smooth' })
}

function sevenStep(){
    document.querySelectorAll('.right-container__button')[0].click()
    document.querySelector('.master-title').innerHTML = 'Шаг 7 из 7: Финальная штрихофка'
    document.querySelector('.master-text').innerHTML = 'Ну вот мы и закончили этот путь. У некоторых он занимает 10 минут, у кого то пару дней. А кто то идёт к совершенству годами. Но сейчас самое время проверить всё ли вы заполнили правильно и полно. После этого вы сможете сохранить вашего персонажа в файл и начать играть.'
    document.querySelector('.master-succes').innerHTML = 'Сохраннённый файл можете отправить гейммастеру вашей партии для проверки.'
    document.querySelector('.master-alert').innerHTML = ''
    document.querySelector('.master-button').innerHTML = 'Закончить и сохранить'
    window.scrollTo({ top: document.querySelector('.mid-fourth').getBoundingClientRect().top + window.pageYOffset - 50, behavior: 'smooth' })
}
