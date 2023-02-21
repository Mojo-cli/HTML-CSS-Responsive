burger = document.querySelector('.burger')
right_nav =  document.querySelector('.right-nav')
nav_bar =  document.querySelector('.nav-bar')
nav_list =  document.querySelector('.nav-list')

burger.addEventListener('click', () => {
    right_nav.classList.toggle('v-class-resp');
    nav_list.classList.toggle('v-class-resp');
    nav_bar.classList.toggle('h-nav-resp');
})