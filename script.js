document.addEventListener('DOMContentLoaded', () =>{

    const humburgerMenu = document.querySelector(".humburger-container");
    const navigationList = document.querySelector(".nav");

    // open navigation menu
    humburgerMenu.addEventListener('click', () =>{
        humburgerMenu.classList.toggle("active");
        navigationList.classList.toggle("active");
    });

    //close navigation menu when a link is clicked
    navigationList.querySelectorAll('li a').forEach(item => {
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

    // Popup image for project gallery
    document.querySelectorAll(".project-gallery-content img").forEach(image => {
        image.onclick = () =>{
            document.querySelector(".popup-image").style.display = "block";
            document.querySelector(".popup-image img").src = image.getAttribute("src");
        }
    });

    document.querySelector(".popup-image i").onclick = () =>{
            document.querySelector(".popup-image").style.display = "none";
    }
});