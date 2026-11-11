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

    //Functionality for image slider buttons
    const buttons = document.querySelectorAll("[data-carousel-button]");

    buttons.forEach(button =>{
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1;
            const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

            const activeSlide = slides.querySelector("[data-active]");
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;

            if (newIndex < 0) newIndex = slides.children.length - 1;
            if (newIndex >= slides.children.length) newIndex - 0;

            slides.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;
        })
    })
});