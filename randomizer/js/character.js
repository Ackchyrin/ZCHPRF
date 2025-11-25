document.querySelectorAll('.character').forEach(el =>{
    el.addEventListener('mousedown', function (e){
        let rect = el.getBoundingClientRect()
        let shiftX = e.clientX - rect.left
        let shiftY = e.clientY - rect.top
        function moveAt(pageX, pageY){
            let newLeft = pageX - shiftX
            let newTop  = pageY - shiftY
            const maxLeft = window.innerWidth  - rect.width
            const maxTop  = window.innerHeight - rect.height
            if (newLeft < 0) newLeft = 0
            if (newTop < 0) newTop = 0
            if (newLeft > maxLeft) newLeft = maxLeft
            if (newTop > maxTop) newTop = maxTop
            el.style.left = newLeft + 'px'
            el.style.top  = newTop + 'px'
        }
        moveAt(e.pageX, e.pageY)
        function onMouseMove(e){
            moveAt(e.pageX, e.pageY)
        }
        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('mouseup', function mouseUp(){
            document.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('mouseup', mouseUp)
        })
    })
    el.ondragstart = () => false
})

document.querySelectorAll('.character').forEach(el =>{
    const rect = el.getBoundingClientRect();
    const maxLeft = window.innerWidth  - rect.width;
    const maxTop  = window.innerHeight - rect.height;
    const randLeft = Math.random() * maxLeft;
    const randTop  = Math.random() * maxTop;
    el.style.position = "absolute"
    el.style.left = randLeft + "px"
    el.style.top  = randTop + "px"
})

