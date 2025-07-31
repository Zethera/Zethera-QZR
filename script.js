// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header background on scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.symbol-card, .philosophy-card, .strategy-card, .stat-card, .tech-feature, .feature-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Button interactions
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Handle specific button actions
            const buttonText = this.textContent.trim();
            
            if (buttonText === 'Comprar QZR') {
                e.preventDefault();
                alert('Funcionalidade de compra será implementada em breve!');
            } else if (buttonText === 'Whitepaper') {
                e.preventDefault();
                alert('Whitepaper será disponibilizado em breve!');
            } else if (buttonText === 'Conectar Carteira') {
                e.preventDefault();
                alert('Funcionalidade de conexão de carteira será implementada em breve!');
            } else if (buttonText === 'Ver no BSCScan') {
                e.preventDefault();
                alert('Link para BSCScan será disponibilizado em breve!');
            } else if (buttonText === 'Relatório de Auditoria') {
                e.preventDefault();
                alert('Relatório de auditoria será disponibilizado em breve!');
            }
        });
    });
    
    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-background, .butterfly-animation');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Mobile menu toggle (if needed in future)
    const createMobileMenu = () => {
        const nav = document.querySelector('.nav');
        const navMenu = document.querySelector('.nav-menu');
        
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.mobile-menu-toggle')) {
                const mobileToggle = document.createElement('button');
                mobileToggle.className = 'mobile-menu-toggle';
                mobileToggle.innerHTML = '☰';
                mobileToggle.style.cssText = `
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    color: #2563eb;
                    cursor: pointer;
                    display: block;
                `;
                
                nav.appendChild(mobileToggle);
                
                mobileToggle.addEventListener('click', () => {
                    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
                    navMenu.style.flexDirection = 'column';
                    navMenu.style.position = 'absolute';
                    navMenu.style.top = '100%';
                    navMenu.style.left = '0';
                    navMenu.style.right = '0';
                    navMenu.style.background = 'white';
                    navMenu.style.padding = '1rem';
                    navMenu.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                });
            }
        }
    };
    
    // Initialize mobile menu
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);
    
    // Add loading animation
    const addLoadingAnimation = () => {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
                this.style.transform = 'scale(1)';
            });
            
            // Set initial state
            img.style.opacity = '0';
            img.style.transform = 'scale(0.9)';
            img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
    };
    
    addLoadingAnimation();
    
    // Stats counter animation
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number, .security-number');
        
        counters.forEach(counter => {
            const target = counter.textContent;
            
            if (target.includes('%') || target.includes('.')) {
                // Skip percentage and decimal numbers
                return;
            }
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const finalNumber = parseInt(target.replace(/[^\d]/g, ''));
                        if (finalNumber && finalNumber > 0) {
                            let current = 0;
                            const increment = finalNumber / 50;
                            const timer = setInterval(() => {
                                current += increment;
                                if (current >= finalNumber) {
                                    counter.textContent = target;
                                    clearInterval(timer);
                                } else {
                                    counter.textContent = Math.floor(current).toLocaleString();
                                }
                            }, 30);
                        }
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(counter);
        });
    };
    
    // Initialize counter animation
    animateCounters();
    
    // Add hover effects to cards
    const addHoverEffects = () => {
        const cards = document.querySelectorAll('.symbol-card, .philosophy-card, .strategy-card, .stat-card, .tech-feature, .feature-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
                this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            });
        });
    };
    
    addHoverEffects();
    
    // Console message
    console.log('🦋 Zethera (QZR) - Site carregado com sucesso!');
    console.log('💙 Transformação silenciosa, leveza e resistência');
});

