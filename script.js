window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbar.classList.remove('bg-opacity-0');
        navbar.classList.add('bg-opacity-100', 'bg-white');
    } else {
        navbar.classList.remove('bg-opacity-100', 'bg-white');
        navbar.classList.add('bg-opacity-0');
    }


});

window.addEventListener('DOMContentLoaded', function () {
    const animatedText = document.getElementById('animated-text');
    const textAnimation = ['Create', 'Animate', 'Publish', 'Monitore', 'Optimise'];
    let index = 0;

    function animateText() {
        animatedText.innerText = textAnimation[index];
        index = (index + 1) % textAnimation.length;
    }

    setInterval(animateText, 1000);
});

window.addEventListener('scroll', function () {
    var hero = document.querySelector('.hero');
    var fadeOutOffset = hero.offsetTop + (hero.offsetHeight / 2);

    if (window.pageYOffset > fadeOutOffset) {
        hero.classList.add('fade-out-hidden');
    } else {
        hero.classList.remove('fade-out-hidden');
    }
});

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-element a');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  window.addEventListener('scroll', () => {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - window.innerHeight * 0.5;
      const sectionBottom = section.offsetTop + section.offsetHeight - window.innerHeight * 0.5;

      if (window.pageYOffset > sectionTop && window.pageYOffset < sectionBottom) {
        const targetLink = document.querySelector(`.navbar-element a[href="#${section.id}"]`);
        navLinks.forEach((link) => link.classList.remove('active'));
        if (targetLink) {
          targetLink.classList.add('active');
        }
      }
    });
  });

  // Wait for the DOM content to load
  document.addEventListener('DOMContentLoaded', function() {
    // Get the loader element
    const loader = document.getElementById('loader');
    
    // Add the 'loaded' class to the body element
    document.body.classList.add('loaded');
    
    // Hide the loader
    loader.style.display = 'none';
  });


  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add the 'active' class to the slide-in elements when in viewport
  function handleScroll() {
    const elements = document.querySelectorAll('.slide-in');
    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('active');
      }
    });
  }

  // Event listener for scroll event
  window.addEventListener('scroll', handleScroll);
  // Call the handleScroll function initially to check the initial state
  handleScroll();


  window.addEventListener('scroll', () => {
    const section = document.getElementById('why-adsparo');
    const sectionPosition = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    if (sectionPosition < windowHeight / 2) {
      section.classList.add('animate-section');
    } else {
      section.classList.remove('animate-section');
    }
  });

  
// Function to handle the mouse wheel event
function handleMouseWheel(event) {
    // Check the delta value of the mouse wheel event
    const delta = Math.sign(event.deltaY);
  
    // Scroll to the next section based on the delta value
    if (delta > 0) {
      // Scroll to the next section
      const currentSection = document.querySelector('.active-section');
      const nextSection = currentSection.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
        currentSection.classList.remove('active-section');
        nextSection.classList.add('active-section');
      }
    } else if (delta < 0) {
      // Scroll to the previous section
      const currentSection = document.querySelector('.active-section');
      const prevSection = currentSection.previousElementSibling;
      if (prevSection) {
        prevSection.scrollIntoView({ behavior: 'smooth' });
        currentSection.classList.remove('active-section');
        prevSection.classList.add('active-section');
      }
    }
  }
  
  // Add event listener for the mouse wheel event
  document.addEventListener('wheel', handleMouseWheel);
  