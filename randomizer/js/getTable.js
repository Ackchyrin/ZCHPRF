let race = []
let archetype = {}
async function loadRaces(){
    const sheetId = "1tndWT-e-PqrS2zJ3u7D9EB9zYpL3_q-8Y3SkwjSUF8I"
    const sheetName = "Технический"
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`
    const res = await fetch(url)
    const text = await res.text()
    const json = JSON.parse(text.substring(47, text.length - 2))
    const rows = json.table.rows
    const result = rows.map(r =>{
        if (!r.c[0]) return null
        const raw = r.c[0].v
        const [name, id] = raw.split(":")
        return {
            name,
            id: Number(id)
        }
    }).filter(Boolean)
    race = result
    race.forEach(element =>{
        document.querySelector(`label[for="race"] .select`).innerHTML += `<div class="option" data-id="${element.id}">${element.name}</div>`;
    });
    document.querySelectorAll(`label[for="race"] .option`).forEach(el=>el.addEventListener('click',()=>{
        document.querySelector('#race').value = el.innerHTML
    }))
    document.querySelector('#race').addEventListener('focus',()=>{
        document.querySelector(`label[for="race"] .select`).classList.add('active')
    })
    document.querySelector('#race').addEventListener('blur',()=>{
        setTimeout(() => {
            document.querySelector(`label[for="race"] .select`).classList.remove('active')
        }, 100);
    })
    document.querySelector('#race').addEventListener('click',()=>{
        document.querySelector(`label[for="race"] .select`).classList.add('active')
    })
}

async function loadArchetype(){
    const sheetId = "1tndWT-e-PqrS2zJ3u7D9EB9zYpL3_q-8Y3SkwjSUF8I"
    const sheetName = "Характеристики"
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`
    const res = await fetch(url)
    const text = await res.text()
    const json = JSON.parse(text.substring(47, text.length - 2))
    const rows = json.table.rows
    const result = rows.slice(1).map(row => row.c[0]?.v ?? "")
    archetype = result    
    archetype.forEach(element => {
        document.querySelector(`label[for="archetype"] .select`).innerHTML += `<div class="option">${element}</div>`;
    });
    document.querySelectorAll(`label[for="archetype"] .option`).forEach(el=>el.addEventListener('click',()=>{
        document.querySelector('#archetype').value = el.innerHTML
    }))
    document.querySelector('#archetype').addEventListener('focus',()=>{
        document.querySelector(`label[for="archetype"] .select`).classList.add('active')
    })
    document.querySelector('#archetype').addEventListener('blur',()=>{
        setTimeout(() => {
            document.querySelector(`label[for="archetype"] .select`).classList.remove('active')
        }, 100);
    })
    document.querySelector('#archetype').addEventListener('click',()=>{
        document.querySelector(`label[for="archetype"] .select`).classList.add('active')
    })
}

async function loadSkills(){
    const sheetId = "1tndWT-e-PqrS2zJ3u7D9EB9zYpL3_q-8Y3SkwjSUF8I"
    const sheetName = "Технический"
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`
    const res = await fetch(url)
    const text = await res.text()
    const json = JSON.parse(text.substring(47, text.length - 2))
    const rows = json.table.rows
    const result = rows.map(r => {
        if (!r.c[1] || !r.c[1].v) return null
        const name = r.c[1].v
        return { name }
    }).filter(Boolean)
    skills = result
    skills.forEach(el=>{
        document.querySelector('.character-skills').innerHTML += `
        <label class="character-skills__item">
            ${el.name}
            <div class="character-skills__item-block">
                <input type="checkbox">
                <input class="skills-item__block-input">
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.7185 1V4.72122H15.2792C14.191 4.72122 12.9895 5.2524 11.9846 6.26762C10.9797 7.28284 9.88774 8.78892 8.15404 11.2657C6.41252 13.7536 5.4427 15.257 4.8379 15.9326C4.2331 16.6082 4.33038 16.5503 3.45014 16.5503H0.0416H0V19.5075H0.0416H3.45014C4.7717 19.5075 6.10094 18.9551 7.04044 17.9057C7.97994 16.8562 8.86668 15.4024 10.5753 12.9615C12.2917 10.5095 13.3829 9.05832 14.0855 8.34848C14.7881 7.63866 14.8183 7.67848 15.2792 7.67848H18.7186V11.5614L24 6.28146L18.7185 1ZM0 4.7212V7.67846H0.0416H3.45014C4.33038 7.67846 4.2331 7.61896 4.8379 8.29456C5.22702 8.72924 5.86804 9.65108 6.6677 10.8129C6.77608 10.6574 6.82716 10.5824 6.94186 10.4185C7.37746 9.79626 7.77312 9.2348 8.13862 8.72274C8.26582 8.54454 8.37238 8.40396 8.4929 8.23756C7.95248 7.45678 7.5024 6.83754 7.04044 6.3215C6.10094 5.27202 4.7717 4.7212 3.45014 4.7212H0.04158H0ZM18.7185 12.7505V16.5502H15.2792C14.8183 16.5502 14.7881 16.5885 14.0855 15.8787C13.6207 15.4092 12.9626 14.5768 12.0893 13.3835C11.9837 13.5333 11.8982 13.6519 11.7874 13.8102C11.176 14.6836 10.7544 15.3138 10.3119 15.9665C10.9398 16.798 11.4743 17.444 11.9846 17.9595C12.9894 18.9748 14.191 19.5075 15.2792 19.5075H18.7185V23.3119L24 18.032L18.7185 12.7505Z" fill="black"/>
                    </svg>
                </div>
            </div>
        </label>`
    })
}


async function loadSpecifications(){
    const sheetId = "1tndWT-e-PqrS2zJ3u7D9EB9zYpL3_q-8Y3SkwjSUF8I"
    const sheetName = "Технический"
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`
    const res = await fetch(url)
    const text = await res.text()
    const json = JSON.parse(text.substring(47, text.length - 2))
    const rows = json.table.rows
    const result = rows.map(r => {
        if (!r.c[2] || !r.c[2].v) return null
        const name = r.c[2].v
        return { name }
    }).filter(Boolean)
    specifications = result
    specifications.forEach(el=>{
        document.querySelector('.character-specifications').innerHTML += `
        <label class="character-specifications__item">
            ${el.name}
            <div class="character-specifications__item-block">
                <input type="checkbox">
                <input class="specifications-item__block-input">
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.7185 1V4.72122H15.2792C14.191 4.72122 12.9895 5.2524 11.9846 6.26762C10.9797 7.28284 9.88774 8.78892 8.15404 11.2657C6.41252 13.7536 5.4427 15.257 4.8379 15.9326C4.2331 16.6082 4.33038 16.5503 3.45014 16.5503H0.0416H0V19.5075H0.0416H3.45014C4.7717 19.5075 6.10094 18.9551 7.04044 17.9057C7.97994 16.8562 8.86668 15.4024 10.5753 12.9615C12.2917 10.5095 13.3829 9.05832 14.0855 8.34848C14.7881 7.63866 14.8183 7.67848 15.2792 7.67848H18.7186V11.5614L24 6.28146L18.7185 1ZM0 4.7212V7.67846H0.0416H3.45014C4.33038 7.67846 4.2331 7.61896 4.8379 8.29456C5.22702 8.72924 5.86804 9.65108 6.6677 10.8129C6.77608 10.6574 6.82716 10.5824 6.94186 10.4185C7.37746 9.79626 7.77312 9.2348 8.13862 8.72274C8.26582 8.54454 8.37238 8.40396 8.4929 8.23756C7.95248 7.45678 7.5024 6.83754 7.04044 6.3215C6.10094 5.27202 4.7717 4.7212 3.45014 4.7212H0.04158H0ZM18.7185 12.7505V16.5502H15.2792C14.8183 16.5502 14.7881 16.5885 14.0855 15.8787C13.6207 15.4092 12.9626 14.5768 12.0893 13.3835C11.9837 13.5333 11.8982 13.6519 11.7874 13.8102C11.176 14.6836 10.7544 15.3138 10.3119 15.9665C10.9398 16.798 11.4743 17.444 11.9846 17.9595C12.9894 18.9748 14.191 19.5075 15.2792 19.5075H18.7185V23.3119L24 18.032L18.7185 12.7505Z" fill="black"/>
                    </svg>
                </div>
            </div>
        </label>`
    })
}

loadRaces()
loadArchetype()
loadSkills()
loadSpecifications()