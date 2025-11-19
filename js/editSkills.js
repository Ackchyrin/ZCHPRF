document.querySelectorAll('.skills-item__title').forEach((el, index) => {
    el.querySelector('svg').addEventListener('click', () => {
        let oldName = el.querySelector('.skills-item__title-text').textContent.trim();
        let skillsName = prompt("Введите новое название навыка:", oldName);
        if (skillsName !== null) {
            el.querySelector('.skills-item__title-text').textContent = skillsName;
            editMoreSkillsName();
        }
    });
});

function editMoreSkillsName(){
    document.querySelectorAll('.skills-item__title').forEach((el,index)=>{
        document.querySelectorAll('.spent-data')[index + 1].innerHTML = el.querySelector('.skills-item__title-text').innerHTML.replace(/\s+$/, "") +': <span></span>'
        document.querySelectorAll('.bonus-list__item').forEach(elem=>{
            elem.querySelectorAll('select')[1].querySelectorAll('option')[index + 5].innerHTML = el.querySelector('.skills-item__title-text').innerHTML.replace(/\s+$/, "")
        })
    })
    calculateSpent()
    specialJournalSkillsAndSpecifications()
}
