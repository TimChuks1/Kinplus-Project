// To Bact to Top of the Page smoothly after th Nav and header sections.
function handleBackToTop() {
  const backToTopButton = document.querySelector('.back-to-top');
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const footer = document.querySelector('footer');
  
  // Get the positions of each section
  function getPositions() {
    const headerBottom = header?.getBoundingClientRect().bottom + window.scrollY;
    const navTop = nav?.getBoundingClientRect().top + window.scrollY;
    const navBottom = nav?.getBoundingClientRect().bottom + window.scrollY;
    const footerTop = footer?.getBoundingClientRect().top + window.scrollY;
    
    return { headerBottom, navTop, navBottom, footerTop };
  }

  // Handle scroll event
  function handleScroll() {
    const { headerBottom, navTop, navBottom, footerTop } = getPositions();
    const scrollPosition = window.scrollY;

    // Show button after header but hide in nav section
    if (
      (scrollPosition > headerBottom && scrollPosition < navTop) || // After header, before nav
      (scrollPosition > navBottom && scrollPosition < footerTop) || // After nav, before footer
      scrollPosition > footerTop // In footer section
    ) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  }

  // Scroll to top with smooth animation
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Event listeners
  window.addEventListener('scroll', handleScroll);
  backToTopButton.addEventListener('click', scrollToTop);

  // Initial check
  handleScroll();
}

// Initialize the functionality
document.addEventListener('DOMContentLoaded', handleBackToTop);
