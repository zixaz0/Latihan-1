const bwButton = document.getElementById('bw')

bwButton.onclick = function(){
    // document.body.style.backgroundColor = 'lightgreen'
    // document.body.setAttribute('class', 'merah-tua')
    document.body.classList.toggle('merah-tua')
}

const random = document.createElement('button')
const teks = document.createTextNode('random warna')

random.appendChild(teks)
random.setAttribute('type', 'button')

bwButton.after(random)

random.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1)
    const g = Math.round(Math.random() * 255 + 1)
    const b = Math.round(Math.random() * 255 + 1)
    document.body.style.backgroundColor = 'rgb('+r+','+b+','+b+')'
})



const sMerah = document.querySelector('input[name=sMerah]')
const sHijau = document.querySelector('input[name=sHijau]')
const sBiru = document.querySelector('input[name=sBiru]')

sMerah.addEventListener('input', function(){
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})

sHijau.addEventListener('input', function(){
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})

sBiru.addEventListener('input', function(){
    const r = sMerah.value
    const g = sHijau.value
    const b = sBiru.value
      document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})

document.body.addEventListener('mousemove', function(event){
    //posisi mouse
    //console.log(event.clientY)
    //ukuran browser
    //console.log(window.innerWidth);
    const xPos =Math.round( (event.clientX / window.innerWidth) * 255)
    const yPos =Math.round( (event.clientY / window.innerHeight) * 255)
    document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+', 100)'
})