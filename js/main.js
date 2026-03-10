/**
 * Big Screen Hack - Main JavaScript
 * Handles scroll animations, interactions, and dynamic effects
 */

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// DOM Elements
const sections = document.querySelectorAll('.section');
const progressFill = document.querySelector('.progress-fill');
const navNodes = document.querySelectorAll('.nav-node');
const form = document.getElementById('registrationForm');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initProgressBar();
    initNavigation();
    initForm();
    initGlitchEffects();
    initParallax();
});

/**
 * Scroll Animations with GSAP ScrollTrigger
 */
function initScrollAnimations() {
    // Boot Section Animations
    gsap.from('.section-boot .glitch-text', {
        scrollTrigger: {
            trigger: '.section-boot',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
    });

    // Title Section Animations
    gsap.from('.title-line', {
        scrollTrigger: {
            trigger: '.section-title',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        rotationX: 90,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out'
    });

    gsap.from('.edition-badge', {
        scrollTrigger: {
            trigger: '.section-title',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)'
    });

    // Last Event Section
    gsap.from('.winner-card', {
        scrollTrigger: {
            trigger: '.section-last-event',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.stat', {
        scrollTrigger: {
            trigger: '.section-last-event',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });

    // Tools Section
    gsap.from('.tool-card', {
        scrollTrigger: {
            trigger: '.section-tools',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        y: 80,
        opacity: 0,
        rotationY: 15,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    });

    // Hack Concept Section
    gsap.from('.time-display', {
        scrollTrigger: {
            trigger: '.section-hack-concept',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
    });

    gsap.from('.timeline-item', {
        scrollTrigger: {
            trigger: '.timeline',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
    });

    // Cannes Section
    gsap.from('.palm-icon', {
        scrollTrigger: {
            trigger: '.section-cannes',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        scale: 0,
        rotation: 360,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)'
    });

    gsap.from('.detail-card', {
        scrollTrigger: {
            trigger: '.event-details',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });

    // CTA Section
    gsap.from('.cta-title', {
        scrollTrigger: {
            trigger: '.section-cta',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });

    gsap.from('.form-field', {
        scrollTrigger: {
            trigger: '.hack-form',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
    });

    gsap.from('.submit-btn', {
        scrollTrigger: {
            trigger: '.hack-form',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)'
    });
}

/**
 * Progress Bar
 */
function initProgressBar() {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressFill.style.width = scrollPercent + '%';
    });
}

/**
 * Section Navigation
 */
function initNavigation() {
    // Click on nav nodes to scroll to sections
    navNodes.forEach((node, index) => {
        node.addEventListener('click', () => {
            sections[index].scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Update active nav node on scroll
    sections.forEach((section, index) => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => updateNavNode(index),
            onEnterBack: () => updateNavNode(index)
        });
    });
}

function updateNavNode(activeIndex) {
    navNodes.forEach((node, index) => {
        if (index === activeIndex) {
            node.classList.add('active');
        } else {
            node.classList.remove('active');
        }
    });
}

/**
 * Form Handling
 */
function initForm() {
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.querySelector('.btn-text').textContent;
        
        submitBtn.querySelector('.btn-text').textContent = 'PROCESSING...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.querySelector('.btn-text').textContent = 'ACCESS_GRANTED';
            submitBtn.style.background = '#39FF14';
            submitBtn.style.color = '#000';
            
            // Show success message
            showNotification('Welcome to the hack! Check your email for details.');
            
            setTimeout(() => {
                submitBtn.querySelector('.btn-text').textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.style.color = '';
                submitBtn.disabled = false;
                form.reset();
            }, 3000);
        }, 1500);
    });

    // Input focus effects
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
}

/**
 * Glitch Effects
 */
function initGlitchEffects() {
    // Random glitch on glitch-text elements
    const glitchTexts = document.querySelectorAll('.glitch-text');
    
    setInterval(() => {
        const randomText = glitchTexts[Math.floor(Math.random() * glitchTexts.length)];
        randomText.style.animation = 'none';
        setTimeout(() => {
            randomText.style.animation = '';
        }, 100);
    }, 3000);

    // Hover glitch intensification
    document.querySelectorAll('.hover-glitch').forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.setProperty('--glitch-intensity', '10px');
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.setProperty('--glitch-intensity', '2px');
        });
    });
}

/**
 * Parallax Effects
 */
function initParallax() {
    // Parallax for background elements
    gsap.utils.toArray('.parallax-bg').forEach(bg => {
        gsap.to(bg, {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: bg.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // Mouse parallax for interactive elements
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        document.querySelectorAll('.tool-card').forEach((card, index) => {
            const depth = (index + 1) * 10;
            gsap.to(card, {
                x: mouseX * depth,
                y: mouseY * depth,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
}

/**
 * Notification System
 */
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-text">${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #000;
        border: 2px solid #FFFF00;
        padding: 20px 30px;
        z-index: 10000;
        font-family: 'Space Mono', monospace;
        color: #FFFF00;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

/**
 * Text Scramble Effect
 */
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }
    
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise(resolve => this.resolve = resolve);
        this.queue = [];
        
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    
    update() {
        let output = '';
        let complete = 0;
        
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="scramble-char">${char}</span>`;
            } else {
                output += from;
            }
        }
        
        this.el.innerHTML = output;
        
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

// Initialize text scramble on elements with data-scramble attribute
document.querySelectorAll('[data-scramble]').forEach(el => {
    const fx = new TextScramble(el);
    let counter = 0;
    
    const next = () => {
        fx.setText(el.dataset.scramble).then(() => {
            setTimeout(next, 3000);
        });
        counter = (counter + 1) % 2;
    };
    
    next();
});

/**
 * Countdown Timer for 24-hour hack
 */
function initCountdown() {
    const timeDisplay = document.querySelector('.time-display');
    if (!timeDisplay) return;
    
    let hours = 24;
    let minutes = 0;
    let seconds = 0;
    
    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    hours = 24;
                }
            }
        }
        
        const formattedTime = 
            String(hours).padStart(2, '0') + ':' +
            String(minutes).padStart(2, '0') + ':' +
            String(seconds).padStart(2, '0');
        
        timeDisplay.textContent = formattedTime;
    }, 1000);
}

// Initialize countdown when section is visible
ScrollTrigger.create({
    trigger: '.section-hack-concept',
    start: 'top center',
    onEnter: initCountdown,
    once: true
});

/**
 * Smooth Scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/**
 * Keyboard Navigation
 */
document.addEventListener('keydown', (e) => {
    const currentSection = document.querySelector('.section:hover') || 
                          document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2).closest('.section');
    
    if (!currentSection) return;
    
    const sectionIndex = Array.from(sections).indexOf(currentSection);
    
    if (e.key === 'ArrowDown' && sectionIndex < sections.length - 1) {
        sections[sectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowUp' && sectionIndex > 0) {
        sections[sectionIndex - 1].scrollIntoView({ behavior: 'smooth' });
    }
});

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    .scramble-char {
        color: #FFFF00;
    }
`;
document.head.appendChild(style);