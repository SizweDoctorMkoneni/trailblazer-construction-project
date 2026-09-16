document.addEventListener('DOMContentLoaded', () =>{

    const humburgerMenu = document.querySelector(".humburger-container");
    const navigationList = document.querySelector(".nav");

    // open navigation menu
    humburgerMenu.addEventListener('click', () =>{
        humburgerMenu.classList.toggle("active");
        navigationList.classList.toggle("active");
    });

    //close navigation menu when a link is clicked
    navigationList.querySelectorAll('a li').forEach(item => {
        item.addEventListener('click', () => {
            humburgerMenu.classList.remove("active");
            navigationList.classList.remove("active");
        });
    });

    // Close navigation when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideNav = navigationList.contains(event.target);
        const isClickOnHamburger = humburgerMenu.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navigationList.classList.contains('active')) {
            humburgerMenu.classList.remove("active");
            navigationList.classList.remove("active");
        }
    });
});