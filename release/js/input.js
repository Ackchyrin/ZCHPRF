document.querySelector('#inspiration').addEventListener('input',()=>{
    if(document.querySelector('#inspiration').value != ''){
        document.querySelector('#inspiration').classList.add('active')
    }else{
        document.querySelector('#inspiration').classList.remove('active')
    }
})

document.querySelectorAll('.number-only').forEach(input => {
    input.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});
