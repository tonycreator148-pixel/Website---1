
  // Mobile dropdown toggle
  document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".navbar-mobile .menu");
    const dropdown = document.querySelector(".navbar-mobile .dropdown");

    menuBtn.addEventListener("click", function () {
      dropdown.classList.toggle("active"); // open/close on each click
    });
  });

// Google Sign-In functionality

  function handleGoogleSignIn() {
    google.accounts.id.initialize({
      client_id: "537791541680-ljot858jb47ram44dfjcthgjlhk8704h.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.prompt(); // triggers the popup
  }

  function handleCredentialResponse(response) {
    // Decode the JWT token for user info (you can use a real JWT parser)
    console.log("Encoded JWT ID token: " + response.credential);
    // You can also store user data in localStorage/sessionStorage if needed
    window.location.href = "profile.html"; // Redirect to profile page
  }

 
  // Also Available Section 

  const locations = [
    "Sitabuldi",
    "Dharampeth",
    "Bharat Nagar",
    "Nandanvan",
    "Trimurti Nagar",
    "Mahal",
    "Manish Nagar"
  ];

  let currentLocationIndex = 0;
  const locationElement = document.getElementById("rotating-location");

  setInterval(() => {
    currentLocationIndex = (currentLocationIndex + 1) % locations.length;
    locationElement.style.opacity = 0;
    setTimeout(() => {
      locationElement.textContent = locations[currentLocationIndex];
      locationElement.style.opacity = 1;
    }, 300);
  }, 3000);

// Testimonial Section


  const testimonials = document.querySelectorAll('.testimonial');
  let current = 0;

  setInterval(() => {
    testimonials[current].classList.remove('active');
    current = (current + 1) % testimonials.length;
    testimonials[current].classList.add('active');
  }, 5000); // 5 seconds


// Area Availability Checker

  const areaInput = document.getElementById('areaInput');
  const resultBox = document.getElementById('resultBox');
  const availableAreas = ['sitabuldi', 'dharampeth', '440001', 'bajaj nagar', 'bharat nagar', '440013'];

  function checkAvailability() {
    const area = areaInput.value.trim().toLowerCase();

    if (area === '') {
      resultBox.style.color = '#d32f2f';
      resultBox.innerText = '⚠️ Please enter an area or pincode.';
    } else if (availableAreas.includes(area)) {
      resultBox.style.color = '#2e7d32';
      resultBox.innerText = '✅ Yes! We deliver in your area.';
    } else {
      resultBox.style.color = '#d32f2f';
      resultBox.innerText = '❌ Sorry, we don’t currently serve this location.';
    }

    resultBox.style.display = 'block';
  }

  function handleInputChange() {
    if (areaInput.value.trim() === '') {
      resultBox.style.display = 'none';
    }
  }

// How It Works 

    const steps = document.querySelectorAll('.step-card');
    let currentStep = 0;

    function showStep(index) {
        steps.forEach(step => step.classList.remove('active'));
        steps[index].classList.add('active');
    }

    // Auto-slide functionality
    let autoSlideInterval = setInterval(() => {
        currentStep = (currentStep + 1) % steps.length;
        showStep(currentStep);
    }, 5000);

    // Manual navigation
    document.querySelector('.left-arrow').addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        currentStep = (currentStep - 1 + steps.length) % steps.length;
        showStep(currentStep);
    });

    document.querySelector('.right-arrow').addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        currentStep = (currentStep + 1) % steps.length;
        showStep(currentStep);
    });





document.addEventListener('DOMContentLoaded', () => {

    // --- "More Queries" Button ---
    const showMoreBtn = document.getElementById('show-more-btn');
    const hiddenQuestions = document.querySelector('.hidden-questions');

    showMoreBtn.addEventListener('click', () => {
        hiddenQuestions.classList.toggle('show');
        showMoreBtn.classList.toggle('active');

        // Toggle button text
        showMoreBtn.textContent = hiddenQuestions.classList.contains('show') 
            ? 'Show Less' 
            : 'More Queries';
    });

    // --- Accordion Logic ---
    const accordionContainer = document.querySelector('.accordion');

    accordionContainer.addEventListener('click', (event) => {
        const header = event.target.closest('.accordion-header');
        if (!header) return;

        const accordionItem = header.closest('.accordion-item');
        const currentlyActive = document.querySelector('.accordion-item.active');

        // Close previously active item if it's not the one clicked
        if (currentlyActive && currentlyActive !== accordionItem) {
            currentlyActive.classList.remove('active');
        }

        // Toggle the clicked item
        accordionItem.classList.toggle('active');
    });

});
   // Location Permission Modal 

    const enableLocationModule = false;    // Set to true to enable the location permission modal

    window.onload = () => {
      if (enableLocationModule) {
        setTimeout(() => {
          document.getElementById('locationModal').classList.add('active');
        }, 5000);
      }
    }

    function getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          closeLocationModal();
        }, () => {
          closeLocationModal();
        });
      } else {
        closeLocationModal();
      }
    }

    function closeLocationModal() {
      document.getElementById('locationModal').classList.remove('active');
    }


