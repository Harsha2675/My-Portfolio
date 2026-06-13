// ==================== PORTFOLIO INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Premium Portfolio Loading...');

    // ==================== NAVBAR SCROLL EFFECT ====================
    class NavbarController {
        constructor() {
            this.navbar = document.getElementById('navbar');
            this.init();
        }

        init() {
            window.addEventListener('scroll', () => this.handleScroll());
        }

        handleScroll() {
            if (window.pageYOffset > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        }
    }

    // ==================== TYPEWRITER EFFECT ====================
    class TypewriterEffect {
        constructor() {
            this.textElement = document.querySelector('.typewriter-text');
            this.phrases = [
                'Full Stack Developer',
                'AI & ML Enthusiast',
                'Web Designer',
                'Problem Solver'
            ];
            this.currentPhrase = 0;
            this.charIndex = 0;
            this.isDeleting = false;
            this.init();
        }

        init() {
            this.type();
        }

        type() {
            const currentPhrase = this.phrases[this.currentPhrase];
            
            if (this.isDeleting) {
                this.textElement.textContent = currentPhrase.substring(0, this.charIndex--);
                if (this.charIndex < 0) {
                    this.isDeleting = false;
                    this.currentPhrase = (this.currentPhrase + 1) % this.phrases.length;
                    this.charIndex = 0;
                    setTimeout(() => this.type(), 500);
                    return;
                }
            } else {
                this.textElement.textContent = currentPhrase.substring(0, this.charIndex++);
                if (this.charIndex > currentPhrase.length) {
                    this.isDeleting = true;
                    setTimeout(() => this.type(), 2000);
                    return;
                }
            }
            
            setTimeout(() => this.type(), this.isDeleting ? 50 : 100);
        }
    }

    // ==================== MOUSE PARALLAX FOR BLOBS ====================
    class BlobParallax {
        constructor() {
            this.blobs = document.querySelectorAll('.blob');
            this.init();
        }

        init() {
            document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        }

        handleMouseMove(e) {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            this.blobs.forEach((blob, index) => {
                const moveX = (x * 50) * (index + 1) * 0.5;
                const moveY = (y * 50) * (index + 1) * 0.5;
                blob.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        }
    }

    // ==================== ADVANCED SCROLL CONTENT ANIMATIONS ====================
    class AdvancedScrollAnimations {
        constructor() {
            this.init();
        }

        init() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateElement(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Animate section headers
            document.querySelectorAll('.section-header').forEach(el => {
                observer.observe(el);
            });

            // Animate section titles
            document.querySelectorAll('.section-title').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(40px)';
                el.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
                observer.observe(el);
            });

            // Animate section descriptions
            document.querySelectorAll('.section-description').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s';
                observer.observe(el);
            });

            // Animate all feature cards with stagger
            document.querySelectorAll('.feature-card').forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(40px) scale(0.95)';
                el.style.transition = `all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s`;
                observer.observe(el);
            });

            // Animate skill categories with stagger
            document.querySelectorAll('.skill-category').forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(40px) rotateX(20deg)';
                el.style.transition = `all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.08}s`;
                el.style.transformOrigin = 'center top';
                observer.observe(el);
            });

            // Animate timeline items
            document.querySelectorAll('.timeline-item').forEach((el, index) => {
                if (index % 2 === 0) {
                    el.style.opacity = '0';
                    el.style.transform = 'translateX(-60px) translateY(40px)';
                } else {
                    el.style.opacity = '0';
                    el.style.transform = 'translateX(60px) translateY(40px)';
                }
                el.style.transition = `all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15}s`;
                observer.observe(el);
            });

            // Animate project cards with stagger
            document.querySelectorAll('.project-card').forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(50px) scale(0.9)';
                el.style.transition = `all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s`;
                observer.observe(el);
            });

            // Animate certification cards
            document.querySelectorAll('.cert-card').forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(40px) rotateZ(-5deg)';
                el.style.transition = `all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s`;
                observer.observe(el);
            });

            // Animate contact info cards
            document.querySelectorAll('.info-card').forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateX(-40px) translateY(30px)';
                el.style.transition = `all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.15}s`;
                observer.observe(el);
            });

            // Animate text blocks
            document.querySelectorAll('.text-block').forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateX(-30px) translateY(20px)';
                el.style.transition = `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s`;
                observer.observe(el);
            });

            // Animate about and contact wrappers
            document.querySelectorAll('.about-text, .about-features, .contact-info, .contact-form').forEach((el, index) => {
                if (index % 2 === 0) {
                    el.style.opacity = '0';
                    el.style.transform = 'translateX(-50px) translateY(30px)';
                } else {
                    el.style.opacity = '0';
                    el.style.transform = 'translateX(50px) translateY(30px)';
                }
                el.style.transition = `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s`;
                observer.observe(el);
            });
        }

        animateElement(el) {
            // Trigger animation by resetting transform and opacity
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = el.style.transform.includes('rotateX') 
                    ? 'translateY(0) rotateX(0deg)'
                    : el.style.transform.includes('rotateZ')
                    ? 'translateY(0) rotateZ(0deg)'
                    : el.style.transform.includes('scale')
                    ? 'translateY(0) scale(1)'
                    : el.style.transform.includes('translateX')
                    ? 'translateX(0) translateY(0)'
                    : 'translateY(0)';
            }, 10);
        }
    }

    // ==================== SMOOTH NAVIGATION ====================
    class Navigation {
        constructor() {
            this.navLinks = document.querySelectorAll('.nav-link');
            this.navMenu = document.getElementById('navMenu');
            this.navToggle = document.getElementById('navToggle');
            this.init();
        }

        init() {
            this.setupScrollSpy();
            this.setupMobileMenu();
            this.setupSmoothScroll();
        }

        setupScrollSpy() {
            window.addEventListener('scroll', () => {
                let current = '';
                
                document.querySelectorAll('section[id]').forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (window.pageYOffset >= sectionTop - 200) {
                        current = section.getAttribute('id');
                    }
                });

                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            });
        }

        setupMobileMenu() {
            if (this.navToggle) {
                this.navToggle.addEventListener('click', () => {
                    this.navMenu.classList.toggle('active');
                    this.navToggle.classList.toggle('active');
                });
            }

            this.navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (this.navMenu) {
                        this.navMenu.classList.remove('active');
                    }
                    if (this.navToggle) {
                        this.navToggle.classList.remove('active');
                    }
                });
            });
        }

        setupSmoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });
        }
    }

    // ==================== FORM HANDLING ====================
    class FormHandler {
        constructor() {
            this.form = document.getElementById('contactForm');
            if (this.form) {
                this.init();
            }
        }

        init() {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }

        handleSubmit(e) {
            e.preventDefault();

            const inputs = this.form.querySelectorAll('input, textarea');
            let isValid = true;
            
            inputs.forEach((input) => {
                if (!input.value.trim()) {
                    isValid = false;
                    this.highlightField(input);
                }
            });

            if (!isValid) {
                this.showNotification('Please fill all fields', 'error');
                return;
            }

            const emailInput = this.form.querySelector('input[type="email"]');
            if (!this.isValidEmail(emailInput.value)) {
                this.showNotification('Please enter a valid email', 'error');
                this.highlightField(emailInput);
                return;
            }

            this.showNotification('✨ Message sent successfully! I\'ll get back to you soon.', 'success');
            this.form.reset();
        }

        isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        highlightField(field) {
            field.style.borderColor = '#ef4444';
            setTimeout(() => {
                field.style.borderColor = 'rgba(148, 163, 184, 0.1)';
            }, 2000);
        }

        showNotification(message, type) {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1.2rem 2rem;
                background: ${type === 'success' 
                    ? 'linear-gradient(135deg, #10b981, #059669)' 
                    : 'linear-gradient(135deg, #ef4444, #dc2626)'};;
                color: white;
                border-radius: 8px;
                font-weight: 600;
                z-index: 9999;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                animation: slideInNotification 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                backdrop-filter: blur(10px);
                font-size: 0.95rem;
            `;
            notification.textContent = message;

            document.body.appendChild(notification);

            setTimeout(() => {
                notification.style.animation = 'slideOutNotification 0.4s ease';
                setTimeout(() => notification.remove(), 400);
            }, 4000);
        }
    }

    // ==================== ANIMATION STYLES ====================
    function addAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInNotification {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            @keyframes slideOutNotification {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ==================== INITIALIZE ====================
    new NavbarController();
    new TypewriterEffect();
    new BlobParallax();
    new AdvancedScrollAnimations();
    new Navigation();
    new FormHandler();
    addAnimationStyles();

    console.log('✨ Premium Portfolio fully loaded with advanced scroll animations!');
});

window.addEventListener('load', () => {
    console.log('🎉 All assets loaded successfully!');
});
