function toggleMode() {
    const body = document.body

    // if(body.classList.contains('Light')){
    //     body.classList.remove('Light')
    // } else {
    //     body.classList.add('light')
    // }
    body.classList.toggle('light')

// Alterar imagem 
//pega a imagem
const img = document.querySelector('#container_data_user img')
// Substitui a img (if else)
if(body.classList.contains('light')){
    img.setAttribute('src', './assets/Group 9.svg')
}else {
    img.setAttribute('src', './assets/foto (2).svg')
}
}
