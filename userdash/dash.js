const sideMenu = document.querySelector( "aside ");
const menuBtn = document.querySelector("#menu-btn") ;
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".material-icons-sharp");
 const themeChanger=document.querySelector(".material-icons-sharp")
 const darkMode= document.getElementById("dark")
 const lightMode= document.getElementById("light")

menuBtn.addEventListener('click',() =>{
    sideMenu.style.display = 'block';
})
closeBtn.addEventListener('click',() =>{
    sideMenu.style.display = 'none';
})
themeToggler.addEventListener('click',() =>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span').classList.toggle('active');
    themeToggler.querySelector('span').classList.toggle('active');
})

darkMode.addEventListener("click",function(){
    document.body.classList.add('dark-theme-variables');
})
lightMode.addEventListener("click",function(){
    document.body.classList.remove('dark-theme-variables');
})



 
