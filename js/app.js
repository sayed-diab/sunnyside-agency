// burger menu btn
let burgerBtn = document.querySelector(".burger-menu")
let navBar = document.querySelector('.nav-bar')

burgerBtn.addEventListener('click', ()=>{
    if(navBar.style.display === 'flex'){
        navBar.style.display = 'none'
    }else{
        navBar.style.display = 'flex'
    }
})

window.addEventListener("resize",()=>{
    if(window.innerWidth > 768){
        navBar.style.display = 'flex'
    }else{
        navBar.style.display = 'none'
    }
})