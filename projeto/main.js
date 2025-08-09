document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 90,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const nav = document.querySelector('.nav');
                nav.classList.remove('active');
            }
        });
    });
    
    // Mobile menu toggle
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.header .container').appendChild(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        const nav = document.querySelector('.nav');
        nav.classList.toggle('active');
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
            
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                this.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 1500);
        });
    }
    
    // Gallery lightbox
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const imgAlt = this.querySelector('.gallery-overlay p').textContent;
            
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="close-lightbox">&times;</span>
                    <img src="${imgSrc}" alt="${imgAlt}">
                    <p>${imgAlt}</p>
                </div>
            `;
            
            document.body.appendChild(lightbox);
            
            lightbox.querySelector('.close-lightbox').addEventListener('click', function() {
                lightbox.remove();
            });
            
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox) {
                    lightbox.remove();
                }
            });
        });
    });
    
    // Add lightbox styles dynamically
    const lightboxStyles = document.createElement('style');
    lightboxStyles.textContent = `
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        .lightbox.show {
            opacity: 1;
        }
        
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        
        .lightbox-content img {
            max-width: 100%;
            max-height: 80vh;
            display: block;
            border-radius: 5px;
        }
        
        .lightbox-content p {
            color: white;
            text-align: center;
            margin-top: 15px;
            font-size: 1.2rem;
        }
        
        .close-lightbox {
            position: absolute;
            top: -40px;
            right: 0;
            color: white;
            font-size: 2rem;
            cursor: pointer;
        }
    `;
    document.head.appendChild(lightboxStyles);
    
    // Show lightbox after adding to DOM
    setTimeout(() => {
        const lightbox = document.querySelector('.lightbox');
        if (lightbox) lightbox.classList.add('show');
    }, 10);
    
    // WhatsApp button animation
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('mouseover', function() {
            this.querySelector('i').classList.add('fa-bounce');
        });
        
        whatsappBtn.addEventListener('mouseout', function() {
            this.querySelector('i').classList.remove('fa-bounce');
        });
    }
});

// Adicionando estilos para o menu mobile
const mobileMenuStyles = document.createElement('style');
mobileMenuStyles.textContent = `
    .menu-toggle {
        display: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--dark);
    }
    
    @media (max-width: 768px) {
        .menu-toggle {
            display: block;
            position: absolute;
            top: 25px;
            right: 20px;
        }
        
        .nav {
            position: fixed;
            top: 90px;
            left: 0;
            width: 100%;
            background-color: var(--white);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s;
        }
        
        .nav.active {
            max-height: 300px;
            padding: 20px 0;
        }
        
        .nav ul {
            flex-direction: column;
            align-items: center;
        }
        
        .nav ul li {
            margin: 10px 0;
        }
    }
`;
document.head.appendChild(mobileMenuStyles);