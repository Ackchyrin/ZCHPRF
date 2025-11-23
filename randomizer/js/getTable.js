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

loadRaces()
loadArchetype()
