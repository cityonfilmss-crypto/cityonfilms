// 1. Cinematic Preloader Logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    // Wait a brief moment after load to finish line animation
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.visibility = 'hidden';
            // Start typing effect only after preloader is gone
            startTypingEffect();
        }, 1000);
    }, 1500);
});

// 2. Animated Typing Text Logic
const textToType = "Crafting Visual Appetites.";
const typingElement = document.getElementById('typing-text');
let charIndex = 0;

function startTypingEffect() {
    // Add the cursor element
    typingElement.innerHTML = '<span class="typing-cursor"></span>';
    
    function typeChar() {
        if (charIndex < textToType.length) {
            // Insert character before the cursor
            const textNode = document.createTextNode(textToType.charAt(charIndex));
            typingElement.insertBefore(textNode, typingElement.lastChild);
            charIndex++;
            // Randomize typing speed slightly for realism
            const randomSpeed = Math.floor(Math.random() * 100) + 50; 
            setTimeout(typeChar, randomSpeed);
        }
    }
    // Start typing after a short delay
    setTimeout(typeChar, 500);
}

// 3. Navbar and Hero Scroll Animations
const navbar = document.getElementById('navbar');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;

    // Add glass blur to navbar when scrolling down
    if (scrollPos > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Parallax and fade out for hero text
    if (scrollPos < 800) {
        let opacityValue = 1 - (scrollPos / 400);
        heroContent.style.opacity = opacityValue > 0 ? opacityValue : 0;
        heroContent.style.transform = `translateY(${scrollPos * 0.4}px)`;
    }
});

// 4. Video Accordion Logic (Pure Visual Transitions)
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    // Mobile Tap Execution: Only alters sizes; videos run continuously on background loops
    panel.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            // Remove active class from all other panels
            panels.forEach(p => {
                if (p !== panel) {
                    p.classList.remove('active');
                }
            });

            // Toggle current panel active state
            panel.classList.toggle('active');
        }
    });
});