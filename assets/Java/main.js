/*---------menu show-----------*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId)
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*---------active & remove menu-----------*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    //active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //remove menu moblie
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Select elements
const filterToggle = document.getElementById('filter-toggle');
const filterAside = document.getElementById('filter-aside');

// Toggle filter aside visibility
filterToggle.addEventListener('click', () => {
    console.log("Toggle clicked");
    filterAside.classList.toggle('show');
    console.log(filterAside.classList);
});

