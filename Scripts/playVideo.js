document.addEventListener("DOMContentLoaded", () => {
    const videoContainer = document.querySelector('.project-item');
    const video = document.querySelector('.hover-video');
    const thumbnail = document.querySelector('.project-image');

    if (videoContainer && video && thumbnail) {
        videoContainer.addEventListener('mouseenter', () => {
            video.style.opacity = "1";
            thumbnail.style.opacity = "0";
            video.play();
        });

        videoContainer.addEventListener('mouseleave', () => {
            video.style.opacity = "0";
            thumbnail.style.opacity = "1";
            video.pause();
            video.currentTime = 0;
        });

        video.addEventListener('ended', function() {
            video.style.opacity = "0"; 
            thumbnail.style.opacity = "1";  
        });
    } else {
        console.error("One or more elements not found. Check your class names.");
    }
});