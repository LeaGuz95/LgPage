/**
 * MAIN APPLICATION LOGIC
 * Portfolio interactivo con navegación suave, animaciones y efectos
 */

// ============================================
// STATE MANAGEMENT
// ============================================
const state = {
    currentSection: 'home',
    isMenuOpen: false,
    currentArtIndex: 0,
    currentFilter: 'all',
    isDarkMode: true
};

// ============================================
// DOM ELEMENTS
// ============================================
const elements = {
    navbar: document.getElementById('navbar'),
    navLinks: document.querySelectorAll('.nav-link'),
    sections: document.querySelectorAll('.section'),
    menuToggle: document.getElementById('menuToggle'),
    navMenu: document.getElementById('navMenu'),
    themeToggle: document.getElementById('themeToggle'),
    themeIcon: document.querySelector('.theme-icon'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    projectCards: document.querySelectorAll('.project-card'),
    artItems: document.querySelectorAll('.art-item'),
    lightbox: document.getElementById('lightbox'),
    lightboxImage: document.getElementById('lightboxImage'),
    lightboxTitle: document.getElementById('lightboxTitle'),
    lightboxDescription: document.getElementById('lightboxDescription'),
    lightboxClose: document.getElementById('lightboxClose'),
    lightboxPrev: document.getElementById('lightboxPrev'),
    lightboxNext: document.getElementById('lightboxNext'),
    contactForm: document.getElementById('contactForm'),
    statNumbers: document.querySelectorAll('.stat-number')
};

// ============================================
// NAVIGATION
// ============================================
class Navigation {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupNavigation();
        this.setupScrollBehavior();
        this.setupMobileMenu();
        this.animateStats();
        
    }
    
    setupNavigation() {
        // Handle navigation link clicks
        elements.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSection = link.getAttribute('data-section');
                this.navigateToSection(targetSection);
                
                // Close mobile menu if open
                if (state.isMenuOpen) {
                    this.toggleMobileMenu();
                }
            });
            
        });
        
        // Handle button navigation
        document.querySelectorAll('[data-section]').forEach(btn => {
            if (!btn.classList.contains('nav-link')) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetSection = btn.getAttribute('data-section');
                    this.navigateToSection(targetSection);
                });
            }
        });
    }
    
    navigateToSection(sectionId) {
        // Update state
        state.currentSection = sectionId;
        
        // Hide all sections
        elements.sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            
            // Trigger animations
            this.triggerSectionAnimations(targetSection);
        }
        
        // Update nav links
        elements.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            }
        });
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    triggerSectionAnimations(section) {
        // Animate stats if in home section
        if (section.id === 'home') {
            this.animateStats();
        }
        
        // Animate skill bars if in skills section
        if (section.id === 'skills') {
            this.animateSkillBars();
        }
    }
    
    setupScrollBehavior() {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Add scrolled class to navbar
            if (currentScroll > 50) {
                elements.navbar.classList.add('scrolled');
            } else {
                elements.navbar.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }
    
    setupMobileMenu() {
        elements.menuToggle.addEventListener('click', () => {
            this.toggleMobileMenu();
        });
    }
    
    toggleMobileMenu() {
        state.isMenuOpen = !state.isMenuOpen;
        elements.menuToggle.classList.toggle('active');
        elements.navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll', state.isMenuOpen);
    }
    
    animateStats() {
        elements.statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 1000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateStat = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(updateStat);
                } else {
                    stat.textContent = target;
                }
            };
            
            updateStat();
        });
    }
    
    animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.width = bar.style.width || '0%';
            }, index * 100);
        });
    }
}

// ============================================
// TODO THEME TOGGLE
// ============================================
class ThemeManager {
    constructor() {
        this.init();
    }
    
    init() {
        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.setTheme(savedTheme);
        
        // Setup toggle button
        elements.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }
    
    toggleTheme() {
        const newTheme = state.isDarkMode ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
    
    setTheme(theme) {
        state.isDarkMode = theme === 'dark';
        
        if (state.isDarkMode) {
            document.documentElement.classList.remove('light-mode');
            document.documentElement.classList.add('dark');
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            elements.themeIcon.textContent = 'dark_mode';
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            elements.themeIcon.textContent = 'light_mode';
        }
        
        // Save theme preference
        localStorage.setItem('theme', theme);
    }
}

// ============================================
// TODO PROJECT FILTERING
// ============================================
class ProjectFilter {
    constructor(section) {
        this.section = section;
        this.buttons = section.querySelectorAll('.filter-btn');
        this.cards = section.querySelectorAll('.project-card');
        this.init();
    }

    init() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.filter(btn.dataset.filter);
                this.setActive(btn);
            });
        });
    }

    filter(filter) {
        this.cards.forEach(card => {
            const category = card.dataset.category;
            card.style.display =
                filter === 'all' || category === filter
                    ? 'block'
                    : 'none';
        });
    }

    setActive(activeBtn) {
        this.buttons.forEach(b => b.classList.remove('active'));
        activeBtn.classList.add('active');
    }
}
// ============================================
// TODO ART FILTERING
// ============================================
class ArtFilter {
    constructor(section) {
        this.section = section;
        this.buttons = section.querySelectorAll('.filter-btn');
        this.items = section.querySelectorAll('.art-item');
        this.init();
    }

    init() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.filter(btn.dataset.filter);
                this.setActive(btn);
            });
        });
    }

    filter(filter) {
        this.items.forEach(item => {
            const category = item.dataset.category;
            item.style.display =
                filter === 'all' || category === filter
                    ? 'block'
                    : 'none';
        });
    }

    setActive(activeBtn) {
        this.buttons.forEach(b => b.classList.remove('active'));
        activeBtn.classList.add('active');
    }
}

// ============================================
// TODO ART GALLERY MODAL
// ============================================
class ArtGallery {
    constructor() {
        this.imageModal = null;
        this.imageModalImg = null;
        this.zoom = 1;
        this.pos = { x: 0, y: 0 };
        this.dragging = false;
        this.start = { x: 0, y: 0 };
        this.init();
    }
    
    init() {
        this.imageModal = document.getElementById('imageModal');
        this.imageModalImg = document.getElementById('imageModalImg');
        
        if (!this.imageModal || !this.imageModalImg) return;
        
        this.setupZoom();
        this.setupDrag();
        this.setupClose();
    }
    
    setupZoom() {
        // Zoom con rueda
        this.imageModal.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY * -0.001;
            this.zoom = Math.min(Math.max(1, this.zoom + delta), 10);
            this.updateTransform();
        });
    }
    
    setupDrag() {
        // Arrastrar imagen
        this.imageModalImg.addEventListener('mousedown', (e) => {
            e.stopPropagation(); 
            this.dragging = true;
            this.start = { x: e.clientX, y: e.clientY };
        });

        window.addEventListener('mousemove', (e) => {
            if (!this.dragging) return;

            this.pos.x += e.clientX - this.start.x;
            this.pos.y += e.clientY - this.start.y;
            this.start = { x: e.clientX, y: e.clientY };

            this.updateTransform();
        });

        window.addEventListener('mouseup', () => {
            this.dragging = false;
        });
    }
    
    setupClose() {
        // Cerrar SOLO si clickeas fuera de la imagen
        this.imageModal.addEventListener('click', (e) => {
            if (e.target === this.imageModal) {
                this.close();
            }
        });

        // Cerrar con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.imageModal.classList.contains('active')) {
                this.close();
            }
        });
    }
    
    updateTransform() {
        this.imageModalImg.style.transform =
            `translate(${this.pos.x}px, ${this.pos.y}px) scale(${this.zoom})`;
    }

    open(src, alt, category) {
        this.imageModalImg.src = src;
        this.imageModalImg.alt = alt;

        // Aplicar pixelated si es pixel art
        this.imageModalImg.classList.toggle('pixelated', category === 'pixelart');

        // Reset zoom y posición
        this.zoom = 1;
        this.pos = { x: 0, y: 0 };
        this.updateTransform();

        this.imageModal.classList.add('active');
        document.body.classList.add('no-scroll');
    }

    close() {
        this.imageModal.classList.remove('active');
        this.imageModalImg.src = '';
        document.body.classList.remove('no-scroll');
    }
}

// ============================================
// TODO CONTACT FORM
// ============================================
class ContactForm {
    constructor() {
        this.init();
    }
    
    init() {
        if (!elements.contactForm) return;
        
        elements.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit(e);
        });
    }
    
    handleSubmit(e) {
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Aquí normalmente enviarías los datos a un servidor
        console.log('Form submitted:', data);
        
        // Show success message
        this.showMessage('¡Mensaje enviado! Te contactaré pronto.', 'success');
        
        // Reset form
        e.target.reset();
    }
    
    showMessage(message, type) {
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = `form-message ${type}`;
        messageEl.textContent = message;
        messageEl.style.cssText = `
            padding: 1rem;
            margin-top: 1rem;
            background: ${type === 'success' ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)'};
            border: 1px solid ${type === 'success' ? 'rgba(0, 255, 0, 0.3)' : 'rgba(255, 0, 0, 0.3)'};
            border-radius: 8px;
            color: ${type === 'success' ? '#00ff00' : '#ff0000'};
            animation: fadeIn 0.3s ease;
        `;
        
        elements.contactForm.appendChild(messageEl);
        
        // Remove after 5 seconds
        setTimeout(() => {
            messageEl.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => messageEl.remove(), 300);
        }, 5000);
    }
}

// ============================================
// TODO SCROLL ANIMATIONS
// ============================================
class ScrollAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
    }
    
    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, options);
        
        // Observe elements with animation
        const animatedElements = document.querySelectorAll('.project-card, .skill-card, .art-item');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// ============================================
// TODO SMOOTH SCROLL
// ============================================
class SmoothScroll {
    constructor() {
        this.init();
    }
    
    init() {
        // Add smooth scrolling to all links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#' || !href) return;
                
                const target = document.querySelector(href);
                if (target && !this.hasAttribute('data-section')) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ============================================
// TODO EASTER EGGS & FUN FEATURES
// ============================================

class EasterEggs {
    constructor() {
        this.konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        this.konamiIndex = 0;
        this.soundPath = 'assets/images/arte/sound.mp3';
        
        this.sound = new Audio(this.soundPath);
        this.sound.volume = 0.9; // 0 a 1
        this.rainImagePath = 'assets/images/arte/Puchaino.gif';
        this.init();
     }
    
    init() {
        this.setupKonamiCode();
        this.setupConsoleMessage();
        this.setupLogoClick();
        this.addRainStyles();
        
    }
    
    // Agregar estilos CSS para la lluvia de imágenes
    addRainStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainFall {
                0% {
                    transform: translateY(-100px) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(calc(100vh + 100px)) rotate(360deg);
                    opacity: 0;
                }
            }
            
            .rain-image {
                position: fixed;
                width: 80px;
                height: 80px;
                pointer-events: none;
                z-index: 9999;
                object-fit: contain;
            }
        `;
        document.head.appendChild(style);
    }
    playSound() {
    const sfx = new Audio(this.soundPath);
    sfx.volume = 0.9;
    sfx.playbackRate = 0.9 + Math.random() * 0.3;
    sfx.play();
}
    // Función para crear una imagen que cae
    createRainingImage(x) {
        const img = document.createElement('img');
        img.src = this.rainImagePath;
        img.className = 'rain-image';
        img.style.left = x + 'px';
        img.style.top = '-100px';
        
        // Duración aleatoria entre 2 y 4 segundos
        const duration = 2 + Math.random() * 2;
        img.style.animation = `rainFall ${duration}s linear`;
        
        // Tamaño aleatorio
        const size = 60 + Math.random() * 40;
        img.style.width = size + 'px';
        img.style.height = size + 'px';
        
        document.body.appendChild(img);
        
        // Eliminar la imagen después de que termine la animación
        setTimeout(() => {
            img.remove();
        }, duration * 1000);
    }
    
    // Hacer llover una imagen
    rainSingleImage() {
        const x = Math.random() * window.innerWidth;
        this.createRainingImage(x);
    }
    
    // Hacer llover muchas imágenes (para el código Konami)
    rainMultipleImages(count = 50) {
        console.log('LLuvia de puchainos');
        
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                this.createRainingImage(x);
            }, i * 50); 
        }
    }
    
    // Configurar el click en el logo de puchaino
    setupLogoClick() {
        const logo = document.querySelector('.brand-logo');
        if (logo) {
            logo.style.cursor = 'pointer';
            logo.addEventListener('click', () => {
                this.playSound();
                this.rainSingleImage();
                
                // Efecto de click visual
                logo.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    logo.style.transform = '';
                }, 200);
            });
        }
    }
    
    setupKonamiCode() {
        document.addEventListener('keydown', (e) => {
            if (e.key === this.konamiCode[this.konamiIndex]) {
                this.konamiIndex++;
                
                if (this.konamiIndex === this.konamiCode.length) {
                    this.activateKonamiCode();
                    
                    this.konamiIndex = 0;
                }
            } else {
                this.konamiIndex = 0;
            }
        });
    }
    
    activateKonamiCode() {
        console.log('🎮 Konami Code activated!');
        
        // Lluvia de imágenes
            const count = 50;

        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                this.playSound();
                
            }, i * 60);
        }
        this.rainMultipleImages(50);
        
       
                const overlay = document.createElement('div');
        overlay.className = 'rainbow-overlay';
        document.body.appendChild(overlay);

        setTimeout(() => overlay.remove(), 5000);
    }
    
    setupConsoleMessage() {
        console.log('%cQue haces mirando aca o.O ', 'font-size: 20px; font-weight: bold; color: #FF0055;');
        console.log('%cSi estás aca seguro queres chusmear el codigo :D.', 'font-size: 14px; color: #00FFFF;');
        console.log('%c¡No dudes en contactarme!', 'font-size: 14px; color: #8B5CF6;');
        console.log('%cPista: Prueba el código Konami y clickea el logo 😉', 'font-size: 12px; color: #666;');
    }
}

// ============================================
// TODO PERFORMANCE OPTIMIZATION
// ============================================
class PerformanceOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        this.lazyLoadImages();
        this.prefetchLinks();
    }
    
    lazyLoadImages() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
    
    prefetchLinks() {
        // Prefetch important resources on hover
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('mouseenter', () => {
                const href = link.getAttribute('href');
                if (href && !href.startsWith('#')) {
                    const prefetch = document.createElement('link');
                    prefetch.rel = 'prefetch';
                    prefetch.href = href;
                    document.head.appendChild(prefetch);
                }
            }, { once: true });
        });
    }
}

// ============================================
// TODO INITIALIZATION
// ============================================
class App {
    constructor() {
        this.init();
    }
    
    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeApp();
            });
        } else {
            this.initializeApp();
        }
    }
    
    initializeApp() {
        // Initialize all modules
        
        new Navigation();
        new ThemeManager();
         document.querySelectorAll('#projects').forEach(section => {
        new ProjectFilter(section);
    });

    document.querySelectorAll('#art').forEach(section => {
        new ArtFilter(section); 
               
    });
        window.artGalleryInstance = new ArtGallery();
        new ContactForm();
        new ScrollAnimations();
        new SmoothScroll();
        new EasterEggs();
        new PerformanceOptimizer();
        
    
        document.body.classList.add('loaded');
        
        console.log('✨ ARRRANCAMOS LA PAGINA COMO UN CAMPEON ');
    }
}

// Start the application
new App();
