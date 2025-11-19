document.querySelectorAll('.specifications-item').forEach((el, index) => {
    el.querySelector('svg').addEventListener('click', () => {
        let oldName = el.querySelector('.specifications-item__title').textContent.trim();
        let skillsName = prompt("Введите новое название характеристики:", oldName);
        if (skillsName !== null) {
            el.querySelector('.specifications-item__title').textContent = skillsName;
            editMoreSprecificationName();
        }
    });
});

function editMoreSprecificationName(){
    document.querySelectorAll('.specifications-item').forEach((el,index)=>{
        document.querySelectorAll('.spent-data')[index + 12].innerHTML = el.querySelector('.specifications-item__title').innerHTML.replace(/\s+$/, "") +': <span></span>'
        document.querySelectorAll('.bonus-list__item').forEach(elem=>{
            elem.querySelectorAll('select')[1].querySelectorAll('option')[index + 15].innerHTML = el.querySelector('.specifications-item__title').innerHTML.replace(/\s+$/, "")
        })
    })
    calculateSpent()
    specialJournalSkillsAndSpecifications()
}
