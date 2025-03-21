function setHint(x,y){
    x.addEventListener('mouseenter', (e) => {
        document.querySelector('.hints').style.display = 'block';
        document.querySelector('.hints').textContent = y;
    });

    x.addEventListener('mousemove', (e) => {
        document.querySelector('.hints').style.top = `${e.pageY + 10}px`;
        document.querySelector('.hints').style.left = `${e.pageX + 10}px`;
    });

    x.addEventListener('mouseleave', () => {
        document.querySelector('.hints').style.display = 'none';
    });
}

function takeHints(x){
    if(x.innerText == "Включить подсказки"){
        x.innerText = "Выключить подсказки"
        document.querySelector('.hints').classList.remove('hiden')
    }else{
        document.querySelector('.hints').classList.add('hiden')
        x.innerText = "Включить подсказки"
    }
}

document.querySelector('.system-button__tech').addEventListener('mouseenter',setHint(document.querySelector('.system-button__tech'),'Позволяет сделать фото активного листа.'))
document.querySelectorAll('.system-button__tech')[1].addEventListener('mouseenter',setHint(document.querySelectorAll('.system-button__tech')[1],'Позволяет сохранить файл на компьютер.'))
document.querySelector('.system-file__button').addEventListener('mouseenter',setHint(document.querySelector('.system-file__button'),'Выбор вашего персонажа и его загрузка.'))
document.querySelector('.hot').addEventListener('mouseenter',setHint(document.querySelector('.hot'),'Информация о горячих клавишах.'))
document.querySelector('.spent').addEventListener('mouseenter',setHint(document.querySelector('.spent'),'Информация о затраченном опыте прокачки.'))
document.querySelector('.mid-info__item').addEventListener('mouseenter',setHint(document.querySelector('.mid-info__item'),'Имя игрока.'))
document.querySelectorAll('.mid-info__item')[1].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-info__item')[1],'Имя персонажа.'))
document.querySelectorAll('.mid-info__item')[2].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-info__item')[2],'Раса персонажа.'))
document.querySelector('.special-inspiration').addEventListener('mouseenter',setHint(document.querySelector('.special-inspiration'),'Сколько было получено вдохновенние. Мы вами очень гордимся.'))
document.querySelector('.special-mana__container').addEventListener('mouseenter',setHint(document.querySelector('.special-mana__container'),'Визуальное отображение вашей максимальной и текущей маны.'))
document.querySelector('.special-mana__button').addEventListener('mouseenter',setHint(document.querySelector('.special-mana__button'),'Убавить ману :('))
document.querySelectorAll('.special-mana__button')[1].addEventListener('mouseenter',setHint(document.querySelectorAll('.special-mana__button')[1],'Добавить ману ;)'))
document.querySelector('.special-mana__col').addEventListener('mouseenter',setHint(document.querySelector('.special-mana__col'),'Циферное отображение максимальной и текущей маны.'))
document.querySelector('.skills-item').addEventListener('mouseenter',setHint(document.querySelector('.skills-item'),'Умение для тех, кто предпочитает решать неприятности при помощи кулаков, клинков, булав, копий и прочего оружия, а не дипломатическими методами. Оценка этого навыка проводится с целью определения успешности осуществления атаки или другого использования оружия в ближнем бою.'))
document.querySelectorAll('.skills-item')[1].addEventListener('mouseenter',setHint(document.querySelectorAll('.skills-item')[1],'Предпочтительный выбор для тех, кто избегает близкого контакта с врагом из-за страха или других причин. Этот навык позволяет мастерски обращаться с оружием, способным поражать цель на значительном расстоянии. Оценка навыка позволяет оценить вашу способность поразить цель на расстоянии.'))
document.querySelectorAll('.skills-item')[2].addEventListener('mouseenter',setHint(document.querySelectorAll('.skills-item')[2],'Это искусство мастерского владения своим телом. Оценка проводится с целью определить, удастся ли вам благополучно приземлиться лицом в грязь после впечатляющего прыжка или продемонстрировать трюк, который поразит проходящую мимо девицу. А так же определяет успешность уклонения от атак или попытки сбежать с поля боя.'))
document.querySelectorAll('.skills-item')[3].addEventListener('mouseenter',setHint(document.querySelectorAll('.skills-item')[3],'Навык предназначенный для тех, кто хочет жить дольше, чем один раунд. Его проверка определит: удалось ли отразить атаку и в случае необходимости принять её на себя не превращаясь в кровавое пятно на полу после первого же удара.'))
document.querySelectorAll('.skills-item')[4].addEventListener('mouseenter',setHint(document.querySelectorAll('.skills-item')[4],'С помощью этого навыка вы сможете вызывать огненные шары, ледяные стрелы и даже исцелять своих товарищей, если они не слишком сильно вас раздражают. Будьте осторожны при применении магии, поскольку плохое значение при её проверке, может направить «заклинание превращения в кролика» в вашего друга, вместо врага.'))
document.querySelectorAll('.skills-item')[5].addEventListener('mouseenter',setHint(document.querySelectorAll('.skills-item')[5],'Позволяет вам смешивать различные ингредиенты, чтобы создать зелья, бомбы и другие интересные предметы. Будьте осторожны, так как эксперименты, из-за проваленной проверки, могут закончиться взрывом, но это всё часть процесса обучения, верно?'))
document.querySelectorAll('.skills-item')[6].addEventListener('mouseenter',setHint(document.querySelectorAll('.skills-item')[6],'Превосходное искусство для тех, кто в совершенстве овладел навыками ближнего боя, но упустил из виду важность защиты. Проверка навыка перед тем, как извлекать стрелу из живота, может оказаться весьма разумной идеей.'))
document.querySelectorAll('.skills-item')[7].addEventListener('mouseenter',setHint(document.querySelectorAll('.skills-item')[7],'Самый важный навык, если вы потерялись в лесу, так как именно он позволит вам приготовить еду, поохотиться, не потерять следы, разбить лагерь, найти воду. Проверка навыка совершается для определения успешности всех этих действий.'))
document.querySelectorAll('.skills-item')[8].addEventListener('mouseenter',setHint(document.querySelectorAll('.skills-item')[8],'Удачная проверка этого навыка позволит вам убедить даже самого упрямого торговца дать скидку, убедить врагов сдаться без боя и даже заставить своих друзей поверить, что вы не виноваты в том, что съели последний сэндвич в общей сумке. Однако будьте осторожны: чрезмерное использование этого навыка может привести к тому, что вы начнёте верить своим собственным байкам.'))
document.querySelectorAll('.skills-item')[9].addEventListener('mouseenter',setHint(document.querySelectorAll('.skills-item')[9],'С помощью этого навыка вы сможете незаметно пробираться мимо охраны, открывать замки и красть у врагов их самые ценные вещи. Только не говорите, что мы вас не предупреждали: При плохих проверках с этими навыками вы рискуете стать самым популярным персонажем в тюрьме.'))
document.querySelector('.features').addEventListener('mouseenter',setHint(document.querySelector('.features'),'Вы можете выбрать до двух особенностей, которые определяют вашего персонажа. Эти особенности могут иметь как положительные, так и отрицательные аспекты, но именно они наделят вашего персонажа уникальным свойством, которого нет у других.'))
document.querySelector('.specifications-item').addEventListener('mouseenter',setHint(document.querySelector('.specifications-item'),'Повышайте Силу, чтобы ваши удары стали такими мощными, что враги будут летать, а друзья будут завидовать способности поднять не только меч, но и весь стол с пивом. Только не забудьте, что с большой силой приходит большая ответственность — не разрушайте городские стены, если только это не часть квеста.'))
document.querySelectorAll('.specifications-item')[1].addEventListener('mouseenter',setHint(document.querySelectorAll('.specifications-item')[1],'Если вы хотите быть похожи на ниндзя, то Ловкость — ваш выбор. Повышая её, вы не только станете быстрее и проворнее, но и сможете убедить себя, что вы действительно мастер паркура, даже если на самом деле просто спотыкаетесь о свои ноги. Прекрасно сочетается с навыком Акробатики.'))
document.querySelectorAll('.specifications-item')[2].addEventListener('mouseenter',setHint(document.querySelectorAll('.specifications-item')[2],'Определяет, насколько ваш персонаж способен читать сложные заклинания и не путать заклинания с рецептами из кулинарной книги. Так же интеллект определяет количество доступной маны для использования магии.'))
document.querySelectorAll('.specifications-item')[3].addEventListener('mouseenter',setHint(document.querySelectorAll('.specifications-item')[3],'Характеристика которая определяет количество вашего ХП, иммунитета и скорость накопления усталости. Повышая выносливость, вы сможете бегать без отдыха, не болеть и даже пережить несколько неудачных попыток "пробежать" через толпу врагов.'))
document.querySelectorAll('.specifications-item')[4].addEventListener('mouseenter',setHint(document.querySelectorAll('.specifications-item')[4],'Это ваша способность очаровывать и убеждать других, даже если вы не совсем уверены, что говорите. В комбинации с красноречием творит чудеса. Ведь кто нуждается в оружии, когда у вас есть обаятельная улыбка и умение говорить так, что даже самый злой монстр начнёт вас жалеть?'))
document.querySelectorAll('.specifications-item')[5].addEventListener('mouseenter',setHint(document.querySelectorAll('.specifications-item')[5],'Характеристика, которая определяет, насколько хорошо вы знаете мир, в котором живёте, насколько хорошо вы его помните и замечаете происходящее вокруг. Если вы не можете вспомнить, страну в которой живёте, или не замечаете летящий прямо в нос снежок, вероятно ваша Мудрость оставляет желать лучшего.'))
document.querySelectorAll('.specifications-item')[6].addEventListener('mouseenter',setHint(document.querySelectorAll('.specifications-item')[6],'Определяет, насколько вы будете «Удачливы». Если у вас высокая Удача, вы с большей вероятностью найдёте редкие предметы, избежите случайных атак или даже получите неожиданные бонусы. Однако не удивляйтесь, если иногда она сыграет с вами злую шутку, заставив вас споткнуться о воздух или выронить деньги из случайно порвавшегося кошелька. Стартовая удача определяется кубиком D10.'))
document.querySelector('.abilities').addEventListener('mouseenter',setHint(document.querySelector('.abilities'),'Способности персонажа которые вы можете получить от вашей предыстории, прокачанных навыках или характеристик, так-же от ваших действий по игре.'))
document.querySelector('.beauty').addEventListener('mouseenter',setHint(document.querySelector('.beauty'),'Информация о персонаже которая должна быть в быстром доступе. Чаще всего это короткое описание.'))
document.querySelector('.mid-second__info-item').addEventListener('mouseenter',setHint(document.querySelector('.mid-second__info-item'),'Имя игрока.'))
document.querySelectorAll('.mid-second__info-item')[1].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-second__info-item')[1],'Имя персонажа.'))
document.querySelectorAll('.mid-second__info-item')[2].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-second__info-item')[2],'Раса персонажа.'))
document.querySelectorAll('.mid-second__info-item')[3].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-second__info-item')[3],'Возраст персонажа.'))
document.querySelectorAll('.mid-second__info-item')[4].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-second__info-item')[4],'Рост персонажа.'))
document.querySelectorAll('.mid-second__info-item')[5].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-second__info-item')[5],'Вес персонажа.'))
document.querySelectorAll('.mid-second__info-item')[6].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-second__info-item')[6],'Цвет глаз персонажа и описание глаз.'))
document.querySelectorAll('.mid-second__info-item')[7].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-second__info-item')[7],'Цвет кожи персонажа и описание кожи.'))
document.querySelectorAll('.mid-second__info-item')[8].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-second__info-item')[8],'Цвет волос персонажа и описание волос.'))
document.querySelectorAll('.mid-second__info-item')[9].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-second__info-item')[9],'Дата рождения персонажа день и месяц.'))
document.querySelectorAll('.mid-second__info-item')[10].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-second__info-item')[10],'Наличие родителей персонажа их имена, фамилии и т.п. .'))
document.querySelector('.mid-character').addEventListener('mouseenter',setHint(document.querySelector('.mid-character'),'Это особенности личности вашего персонажа, которые определяют его поведение, и взаимодействие с окружающим миром. Это то, что делает вашего персонажа уникальным и запоминающимся. Черты характера могут быть как положительными, так и отрицательными, что помогает создать многогранного и интересного персонажа.'))
document.querySelectorAll('.mid-character')[1].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-character')[1],'Это ключевой элемент, определяющий мотивацию и направление развития вашего героя в игре. Они помогают создать глубокий, многогранный образ и сделать игровой процесс более увлекательным и осмысленным.'))
document.querySelectorAll('.mid-character')[2].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-character')[2],'Это важная часть его личности, которая помогает раскрыть его внутренний мир, мотивацию и связи с окружающим миром. Это могут быть люди, места, вещи или идеи, которые имеют для персонажа особое значение. Привязанности делают вашего героя более живым и интересным, а также дают вам и мастеру игры точки опоры для развития сюжета.'))
document.querySelectorAll('.mid-character')[3].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-character')[3],'Это внутренние переживания, опасения или фобии, которые вызывают у него тревогу или панику. Это может быть что-то конкретное, например, боязнь высоты, или более абстрактное, как страх одиночества или провала. Страхи помогут сделать вашего персонажа глубже, интереснее и человечнее. Они раскрывают его уязвимость и добавляют драматизма в историю.'))
document.querySelectorAll('.mid-character')[4].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-character')[4],'Навыки которые не относятся к основным навыкам персонажам (Например игра на музыкальном инструменте или быстрое чтение).'))
document.querySelectorAll('.mid-character')[5].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-character')[5],'Это история, которая объясняет, кем был ваш герой до начала игры. В ролевых играх предыстория делает вашего героя более живым и интересным, а также даёт Гейммастеру материал для создания увлекательных сюжетов, связанных с вашим персонажем.'))
document.querySelector('.hot-info__button').addEventListener('mouseenter',setHint(document.querySelector('.hot-info__button'),'Включает/Выключает горячие клавиши.'))
document.querySelectorAll('.hot-info__button')[1].addEventListener('mouseenter',setHint(document.querySelectorAll('.hot-info__button')[1],'Включает/Выключает подсказки при наведение.'))
document.querySelector('.right-container__button').addEventListener('mouseenter',setHint(document.querySelector('.right-container__button'),'Лист основных характеристик персонажа.'))
document.querySelectorAll('.right-container__button')[1].addEventListener('mouseenter',setHint(document.querySelectorAll('.right-container__button')[1],'Лист подробного описания характере,внешнего вида и истории персонажа.'))
document.querySelectorAll('.right-container__button')[2].addEventListener('mouseenter',setHint(document.querySelectorAll('.right-container__button')[2],'Лист заклинаниний персонажа.'))
document.querySelectorAll('.right-container__button')[3].addEventListener('mouseenter',setHint(document.querySelectorAll('.right-container__button')[3],'Лист инвентаря персонажа.'))
document.querySelector('.mid-third__mana').addEventListener('mouseenter',setHint(document.querySelector('.mid-third__mana'),'Визуальное отображение вашей максимальной и текущей маны.'))
document.querySelector('.mid-third__tech-information div').addEventListener('mouseenter',setHint(document.querySelector('.mid-third__tech-information div'),'Циферное отображение максимальной и текущей маны.'))
document.querySelectorAll('.mid-third__tech-information div')[1].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-third__tech-information div')[1],'Количество заклинаний.'))
document.querySelectorAll('.mid-third__tech-information div')[2].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-third__tech-information div')[2],'Скорость восстановление маны.'))
document.querySelector('.mid-third__tech-add').addEventListener('mouseenter',setHint(document.querySelector('.mid-third__tech-add'),'Добавляет заклинание. Развлекайтесь :>'))
document.querySelector('.mid-fourth__money div').addEventListener('mouseenter',setHint(document.querySelector('.mid-fourth__money div'),'Количество золотых монет.'))
document.querySelectorAll('.mid-fourth__money div')[1].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-fourth__money div')[1],'Количество серебрянных монет.'))
document.querySelectorAll('.mid-fourth__money div')[2].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-fourth__money div')[2],'Количество медных монет.'))
document.querySelectorAll('.mid-fourth__money div')[3].addEventListener('mouseenter',setHint(document.querySelectorAll('.mid-fourth__money div')[3],'Общее количество монет в медных.'))
document.querySelectorAll('.mid-fourth__equipment-item').forEach(el=>{
    el.addEventListener('mouseenter',setHint(el,'Ваше снаряжение по виду.'))
})
document.querySelectorAll('.mid-fourth__equipment-item textarea').forEach(el=>{
    el.addEventListener('mouseenter',setHint(el,'Описания надетого снаряжения.'))
})
document.querySelectorAll('.equipment-item__bonus').forEach(el=>{
    el.addEventListener('mouseenter',setHint(el,'Бонус что даёт ваше снаряжение.'))
})
document.querySelectorAll('.equipment-item__bonus-add').forEach(el=>{
    el.addEventListener('mouseenter',setHint(el,'Добавить бонус к снаряжению.'))
})
document.querySelector('.mid-fourth__inventory').addEventListener('mouseenter',setHint(document.querySelector('.mid-fourth__inventory'),'Опись вашего инвентаря.'))



document.querySelectorAll('.hot-info__button')[1].click();


function addHintsSpell(){
    document.querySelectorAll('.spell-short__title').forEach(el=>{
        el.addEventListener('mouseenter',setHint(el,'Название вашего заклинания.'))
    })
    document.querySelectorAll('.spell-short__cost').forEach(el=>{
        el.addEventListener('mouseenter',setHint(el,'Минимальная стоимость каста вашего заклинания.'))
    })
    document.querySelectorAll('.spell-short__range').forEach(el=>{
        el.addEventListener('mouseenter',setHint(el,'Дальность вашего заклинания.'))
    })
    document.querySelectorAll('.spell-short__time').forEach(el=>{
        el.addEventListener('mouseenter',setHint(el,'Время накладывания вашего заклинания.'))
    })
    document.querySelectorAll('.spell-short__duration').forEach(el=>{
        el.addEventListener('mouseenter',setHint(el,'Длительность вашего заклинания.'))
    })
    document.querySelectorAll('.spell-long__title').forEach(el=>{
        el.addEventListener('mouseenter',setHint(el,'Название вашего заклинания.'))
    })
    document.querySelectorAll('.spell-long__school').forEach(el=>{
        el.addEventListener('mouseenter',setHint(el,'Школа/Тип вашего заклинания.'))
    })
    document.querySelectorAll('.spell-long__school').forEach(el=>{
        el.addEventListener('mouseenter',setHint(el,'Школа/Тип вашего заклинания.'))
    })
    document.querySelectorAll('.spell-long__cost').forEach(el=>{
        el.addEventListener('mouseenter',setHint(el,'Стоимость вашего заклинания.'))
    })
    document.querySelectorAll('.spell-long__cost').forEach(el=>{
        el.querySelector('input').addEventListener('mouseenter',setHint(el.querySelector('input'),'Минимальная стоимость вашего заклинания.'))
    })
    document.querySelectorAll('.spell-long__cost').forEach(el=>{
        el.querySelectorAll('input')[1].addEventListener('mouseenter',setHint(el.querySelectorAll('input')[1],'Максимальная стоимость вашего заклинания.'))
    })
    document.querySelectorAll('.spell-long__time').forEach(el=>{
        el.addEventListener('mouseenter',setHint(el,' Время накладывания вашего заклинания.'))
    })
    document.querySelectorAll('.spell-long__duration').forEach(el=>{
        el.addEventListener('mouseenter',setHint(el,' Длительность вашего заклинания.'))
    })
    document.querySelectorAll('.spell-long__range').forEach(el=>{
        el.addEventListener('mouseenter',setHint(el,' Дистанция вашего заклинания.'))
    })
    document.querySelectorAll('.spell-long__description').forEach(el=>{
        el.addEventListener('mouseenter',setHint(el,' Описание вашего заклинания.'))
    })
    document.querySelectorAll('.spell-long__delete').forEach(el=>{
        el.addEventListener('mouseenter',setHint(el,' Удалить ваше заклинание.'))
    })
    document.querySelectorAll('.spell-system__favourites').forEach(el=>{
        el.addEventListener('mouseenter',setHint(el,' Добавить/Убрать в избранное ваше заклинание.'))
    })
    document.querySelectorAll('.spell-system__change').forEach(el=>{
        el.addEventListener('mouseenter',setHint(el,' Показать/Свернуть описания вашего заклинания.'))
    })
}

document.querySelectorAll('.bonus-list__item').forEach(el=>{
    el.addEventListener('mouseenter',setHint(el,' Показать/Свернуть описания вашего заклинания.'))
})

function addHintsBonusEquipment(){
    document.querySelectorAll('.bonus-list__item').forEach(el=>{
        el.querySelector('select').addEventListener('mouseenter',setHint(el.querySelector('select'),'Тип бонуса что даёт ваше снаряжение.'))
    })
    document.querySelectorAll('.bonus-list__item').forEach(el=>{
        el.querySelectorAll('select')[1].addEventListener('mouseenter',setHint(el.querySelectorAll('select')[1],' К чему даётся бонус.'))
    })
    document.querySelectorAll('.bonus-list__item').forEach(el=>{
        el.querySelector('input').addEventListener('mouseenter',setHint(el.querySelector('input'),'Количества бонуса к снаряжению.'))
    })
    document.querySelectorAll('.item-bonus__list-checkbox-hover').forEach(el=>{
        el.addEventListener('mouseenter',setHint(el,'Активен ли ваш бонус.'))
    })
    document.querySelectorAll('.item-bonus__list-delete').forEach(el=>{
        el.addEventListener('mouseenter',setHint(el,'Удалить бонус.'))
    })
}

