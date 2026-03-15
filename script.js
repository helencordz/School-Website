// 1. Navigation Highlighting (Scroll Spy)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar li a');

window.addEventListener('scroll', () => {
    let current = "";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Detect if the section is currently in the middle of the screen
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// 2. Add a "Back to Top" Button Dynamically
const backToTop = document.createElement('button');
backToTop.innerHTML = "↑";
backToTop.id = "backToTop";
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 3. Interactive Card Hover Effect
// Makes the member cards pop when you hover
document.querySelectorAll('.member-card, .fe-box').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = "all 0.3s ease";
        card.style.transform = "scale(1.05) translateY(-10px)";
        card.style.borderColor = "#ff69b4";
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1) translateY(0)";
        card.style.borderColor = "#eee";
    });
});

// 4. Typing Effect for the Motto
const motto = document.querySelector('#hero p');
const text = motto.innerHTML;
motto.innerHTML = "";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        motto.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
// Start typing effect when page loads
window.onload = typeWriter;

// --- PHOTO LIGHTBOX LOGIC ---
const galleryImages = document.querySelectorAll('.gallery-item');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        // Create Dark Overlay
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox-overlay';
        document.body.appendChild(lightbox);

        // Create the Large Image
        const bigImg = document.createElement('img');
        bigImg.src = image.src;
        lightbox.appendChild(bigImg);

        // Close on click
        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});
