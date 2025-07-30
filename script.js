// Smooth scrolling para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Gráfico de distribuição
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('distributionChart').getContext('2d');
    
    const distributionChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
                'Venda Pública Inicial (35%)',
                'Núcleo Fundacional (30%)',
                'Marketing & Parcerias (10%)',
                'Fundo de Desenvolvimento (7,5%)',
                'Reserva Estratégica (7,5%)',
                'Liquidez (Exchanges) (5%)'
            ],
            datasets: [{
                data: [35, 30, 10, 7.5, 7.5, 5],
                backgroundColor: [
                    '#3B82F6',
                    '#8B5CF6',
                    '#10B981',
                    '#F59E0B',
                    '#EF4444',
                    '#06B6D4'
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const amounts = [
                                '14.000.000.000 QZR',
                                '10.500.000.000 QZR',
                                '3.500.000.000 QZR',
                                '2.625.000.000 QZR',
                                '2.625.000.000 QZR',
                                '1.750.000.000 QZR'
                            ];
                            return `${label}: ${value}% (${amounts[context.dataIndex]})`;
                        }
                    }
                }
            }
        }
    });
});

// Animação de entrada para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos elementos
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.token-card, .simbology-item, .philosophy-item, .tech-feature, .function-item, .destination-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Efeito parallax suave no hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Destacar item do menu ativo
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Adicionar classe active ao CSS
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: #2563eb;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

