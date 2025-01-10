<!DOCTYPE html>
<html>
<head>
    <style>
        /* Keep all your existing styles */
        /* ... (keep all the existing styles up to the @media query) ... */
        * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    overflow-x: hidden;
}

.nav {
    background: #333;
    padding: clamp(0.5rem, 2vw, 1.5rem);
    height: clamp(60px, 8vh, 100px);
    position:fixed;
    width: 100%;
    z-index: 1000;
    transform: translateY(-77px);
}

.nav-container {
    width: clamp(320px, 90vw, 1200px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.logo {
    color: white;
    font-size: clamp(1.25rem, 3vw, 2rem);
    font-weight: bold;
    text-decoration: none;
    flex-shrink: 0;
}

.nav-links {
    display: flex;
    gap: clamp(1.5rem, 3vw, 2.5rem);
    list-style: none;
    margin-left: auto;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    transition: color 0.3s ease;
    padding: clamp(0.5rem, 1vw, 1rem);
    position: relative;
}

.nav-links a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background: #00ff9d;
    left: 0;
    bottom: -5px;
    transition: width 0.3s ease;
}

.nav-links a:hover {
    color: #00ff9d;
}

.nav-links a:hover::after {
    width: 100%;
}

/* Updated Menu Toggle Styles */
.menu-toggle {
    display: none;
    cursor: pointer;
    padding: 10px;
    background: transparent;
    border: none;
    width: 44px;  /* Increased touch target */
    height: 44px; /* Increased touch target */
    position: relative;
    z-index: 1001;
    margin-left: 10px;
}

.menu-toggle:focus {
    outline: none;
}

.menu-toggle span {
    display: block;
    position: absolute;
    height: 3px;
    width: 30px;
    background: white;
    border-radius: 3px;
    opacity: 1;
    left: 50%;
    transform: translateX(-50%) rotate(0deg);
    transition: .3s cubic-bezier(.165,.84,.44,1);
}

.menu-toggle span:nth-child(1) {
    top: 12px;
    transform-origin: left center;
}

.menu-toggle span:nth-child(2) {
    top: 21px;
    transform-origin: left center;
}

.menu-toggle span:nth-child(3) {
    top: 30px;
    transform-origin: left center;
}

.menu-toggle.active span:nth-child(1) {
    transform: translateX(-50%) rotate(45deg);
    top: 11px;
    left: 52%;
}

.menu-toggle.active span:nth-child(2) {
    width: 0;
    opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
    transform: translateX(-50%) rotate(-45deg);
    top: 29px;
    left: 52%;
}

@media (max-width: 768px) {
    .menu-toggle {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .nav-links {
        display: none;
        position: fixed;
        top: clamp(60px, 8vh, 100px);
        left: 0;
        right: 0;
        bottom: 0;
        background: #333;
        flex-direction: column;
        align-items: center;
        padding: clamp(1rem, 3vh, 2rem);
        opacity: 0;
        transform: translateY(-10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .nav-links.active {
        display: flex;
        opacity: 1;
        transform: translateY(0);
    }

    .nav-links a {
        padding: clamp(0.75rem, 2vh, 1.5rem);
        width: 100%;
        text-align: center;
    }

    .nav-links a::after {
        bottom: 5px;
    }
}

/* Add support for reduced motion */
@media (prefers-reduced-motion: reduce) {
    .menu-toggle span,
    .nav-links,
    .nav-links a::after {
        transition: none;
    }
}

        /* Add new slider styles */
        .slider-container {
            position: relative;
            height:100vh;
            width: 100%;
            overflow: hidden;
            margin-top: clamp(60px, 8vh, 100px); /* Accounts for fixed nav */
        }

        .slide {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 1s ease-in-out;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .slide.active {
            opacity: 1;
        }

        .slide-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            transform: scale(1);
            transition: transform 6s ease-in-out;
            z-index: -1;
        }

        .slide.active .slide-bg {
            transform: scale(1.1);
        }

        .slide::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: -1;
        }

        .slide-content {
            text-align: center;
            color: white;
            max-width: 800px;
            padding: 2rem;
            opacity: 0;
            transform: translateY(20px);
            transition: all 1s ease 0.5s;
            z-index: 1;
        }

        .slide.active .slide-content {
            opacity: 1;
            transform: translateY(0);
        }

        .slide-content h2 {
            font-size: clamp(2rem, 5vw, 4rem);
            margin-bottom: 1rem;
            font-weight: 700;
        }

        .slide-content p {
            font-size: clamp(1rem, 2vw, 1.25rem);
            margin-bottom: 2rem;
            line-height: 1.6;
        }

        .cta-button {
            display: inline-block;
            padding: clamp(0.8rem, 2vw, 1.2rem) clamp(1.5rem, 3vw, 2.5rem);
            background: #00ff9d;
            color: #333;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            font-size: clamp(1rem, 1.5vw, 1.2rem);
            transition: all 0.3s ease;
            border: 2px solid #00ff9d;
        }

        .cta-button:hover {
            background: transparent;
            color: #00ff9d;
        }

        /* Slider Navigation */
        .slider-nav {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 1rem;
            z-index: 10;
        }

        .slider-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .slider-dot.active {
            background: #00ff9d;
            transform: scale(1.2);
        }

        /* Slider Arrows */
        .slider-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 50px;
            height: 50px;
            background: rgba(0, 0, 0, 0.5);
            border: none;
            color: white;
            cursor: pointer;
            font-size: 1.5rem;
            z-index: 10;
            border-radius: 50%;
            transition: all 0.3s ease;
        }

        .slider-arrow:hover {
            background: rgba(0, 0, 0, 0.8);
        }

        .slider-arrow.prev {
            left: 2rem;
        }

        .slider-arrow.next {
            right: 2rem;
        }

        @media (max-width: 768px) {
            .slider-arrow {
                width: 40px;
                height: 40px;
                font-size: 1.2rem;
            }

            .slider-arrow.prev {
                left: 1rem;
            }

            .slider-arrow.next {
                right: 1rem;
            }
        }
    </style>
</head>
<body>
    <!-- Keep your existing navigation -->
    <nav class="nav">
        <div class="nav-container">
            <a href="#" class="logo">Your Brand</a>
            <button class="menu-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Add new slider section -->
    <div class="slider-container">
        <div class="slide active">
            <div class="slide-bg" style="background-image: url('/api/placeholder/1920/1080')"></div>
            <div class="slide-content">
                <h2>Welcome to Innovation</h2>
                <p>Transform your digital presence with our cutting-edge solutions and creative expertise.</p>
                <a href="#" class="cta-button">Discover More</a>
            </div>
        </div>
        
        <div class="slide">
            <div class="slide-bg" style="background-image: url('/api/placeholder/1920/1080')"></div>
            <div class="slide-content">
                <h2>Creative Excellence</h2>
                <p>Bring your vision to life with our award-winning design team and innovative solutions.</p>
                <a href="#" class="cta-button">Our Work</a>
            </div>
        </div>
        
        <div class="slide">
            <div class="slide-bg" style="background-image: url('/api/placeholder/1920/1080')"></div>
            <div class="slide-content">
                <h2>Growth Partners</h2>
                <p>Join thousands of successful businesses who have transformed their digital presence with us.</p>
                <a href="#" class="cta-button">Get Started</a>
            </div>
        </div>

        <button class="slider-arrow prev" aria-label="Previous slide">&larr;</button>
        <button class="slider-arrow next" aria-label="Next slide">&rarr;</button>
        
        <div class="slider-nav">
            <div class="slider-dot active"></div>
            <div class="slider-dot"></div>
            <div class="slider-dot"></div>
        </div>
    </div>

    <script>
        // Keep your existing navigation JavaScript
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        document.addEventListener('click', function(event) {
            const isClickInsideNav = event.target.closest('.nav-container');
            if (!isClickInsideNav && navLinks.classList.contains('active')) {
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('active');
            }
        });

        document.querySelectorAll('.nav-links a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                if (navLinks.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    navLinks.classList.remove('active');
                }
            });
        });

        // Add new slider JavaScript
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slider-dot');
        const prevBtn = document.querySelector('.slider-arrow.prev');
        const nextBtn = document.querySelector('.slider-arrow.next');
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            currentSlide = index;
            if (currentSlide >= slides.length) currentSlide = 0;
            if (currentSlide < 0) currentSlide = slides.length - 1;
            
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function startSlideShow() {
            if (slideInterval) {
                clearInterval(slideInterval);
            }
            slideInterval = setInterval(nextSlide, 5000);
        }

        prevBtn.addEventListener('click', () => {
            prevSlide();
            startSlideShow();
        });

        nextBtn.addEventListener('click', () => {
            nextSlide();
            startSlideShow();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                startSlideShow();
            });
        });

        startSlideShow();

        document.querySelector('.slider-container').addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        document.querySelector('.slider-container').addEventListener('mouseleave', startSlideShow);
    </script>
</body>
</html>