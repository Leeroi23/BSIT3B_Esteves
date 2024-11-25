let slideIndex = 0;
        const totalSlides = 5; // total number of images

        function moveSlide() {
            const slides = document.querySelectorAll('.slides img');
            slideIndex++;

            if (slideIndex >= totalSlides) {
                slideIndex = 0;
            }

            const slidesContainer = document.querySelector('.slides');
            slidesContainer.style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
        }

        // Automatically slide every 3 seconds
        setInterval(moveSlide, 3000);