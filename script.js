const menuIcon = document.querySelector('.menu-icon i');
const menuList = document.querySelector('.menu-list');


menuIcon.addEventListener('click', () => {
    if (menuIcon.classList.contains("fa-bars")) { 
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
        menuList.style.display = 'block';
    } else if (menuIcon.classList.contains("fa-xmark")) {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
        menuList.style.display = 'none';
    } 

});