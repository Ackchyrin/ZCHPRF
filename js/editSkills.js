document.querySelectorAll('.skills-item__title').forEach((el,index)=>{
    el.querySelector('svg').addEventListener('click',()=>{
        let skillsName = prompt("Введите новое название навыка:");
        el.querySelector('.skills-item__title-text').innerHTML = skillsName
        editMoreSkillsName()
    })
})

function editMoreSkillsName(){
    document.querySelectorAll('.skills-item__title').forEach((el,index)=>{
        document.querySelectorAll('.spent-data')[index + 1].innerHTML = el.querySelector('.skills-item__title-text').innerHTML.replace(/\s+$/, "") +': <span></span>'
        document.querySelectorAll('.bonus-list__item').forEach(elem=>{
            elem.querySelectorAll('select')[1].querySelectorAll('option')[index + 6].innerHTML = el.querySelector('.skills-item__title-text').innerHTML.replace(/\s+$/, "")
        })
    })
    calculateSpent()
}
