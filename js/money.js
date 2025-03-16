document.querySelector('#gold').addEventListener('change',()=>{
    if(document.querySelector('#gold').value != ''){
        document.querySelector('#gold').classList.add('active')
    }else{
        document.querySelector('#gold').classList.remove('active')
    }
    calculationAllMoney()
})

document.querySelector('#silver').addEventListener('change',()=>{
    if(document.querySelector('#silver').value != ''){
        document.querySelector('#silver').classList.add('active')
    }else{
        document.querySelector('#silver').classList.remove('active')
    }
    calculationAllMoney()
})

document.querySelector('#copper').addEventListener('change',()=>{
    if(document.querySelector('#copper').value != ''){
        document.querySelector('#copper').classList.add('active')
    }else{
        document.querySelector('#copper').classList.remove('active')
    }
    calculationAllMoney()
})

document.querySelectorAll(".moneyOnly").forEach(input =>{
    input.addEventListener("input", function (){
        this.value = this.value.replace(/[^0-9-]/g, '')
    })
})

document.querySelector('#goldCalculation').addEventListener('change',()=>{
    document.querySelector('#gold').value = Number(document.querySelector('#gold').value) + Number(document.querySelector('#goldCalculation').value)
    document.querySelector('#goldCalculation').value = ''
    if(document.querySelector('#gold').value == 0){
        document.querySelector('#gold').value = ''
    }
    if(document.querySelector('#gold').value != ''){
        document.querySelector('#gold').classList.add('active')
    }else{
        document.querySelector('#gold').classList.remove('active')
    }
    calculationAllMoney()
})
document.querySelector('#silverCalculation').addEventListener('change',()=>{
    document.querySelector('#silver').value = Number(document.querySelector('#silver').value) + Number(document.querySelector('#silverCalculation').value)
    document.querySelector('#silverCalculation').value = ''
    if(document.querySelector('#silver').value == 0){
        document.querySelector('#silver').value = ''
    }
    if(document.querySelector('#silver').value != ''){
        document.querySelector('#silver').classList.add('active')
    }else{
        document.querySelector('#silver').classList.remove('active')
    }
    calculationAllMoney()
})
document.querySelector('#copperCalculation').addEventListener('change',()=>{
    document.querySelector('#copper').value = Number(document.querySelector('#copper').value) + Number(document.querySelector('#copperCalculation').value)
    document.querySelector('#copperCalculation').value = ''
    if(document.querySelector('#copper').value == 0){
        document.querySelector('#copper').value = ''
    }
    if(document.querySelector('#copper').value != ''){
        document.querySelector('#copper').classList.add('active')
    }else{
        document.querySelector('#copper').classList.remove('active')
    }
    calculationAllMoney()
})

function calculationAllMoney(){
    document.querySelector('.mid-fourth__money span').innerHTML = Number(document.querySelector('#gold').value*100) + Number(document.querySelector('#silver').value*10) + Number(document.querySelector('#copper').value)
}
