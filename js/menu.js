let show = true 

const menuSection = document.querySelector('.menu-section')
const menuIcon = document.querySelector('.menu-icon')

menuIcon.addEventListener("click", () => {
    menuSection.classList.toggle('on', show)
    show = !show;
})