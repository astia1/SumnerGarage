function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

jQuery(window).on("scroll", onScroll);

function onScroll(event) {
  var scrollPos = jQuery(document).scrollTop();
  jQuery("#navbarSupportedContent a").each(function () {
    var currLink = jQuery(this);
    var refElement = jQuery(currLink.attr("href"));
    if (
      refElement.offset().top - 100 <= scrollPos &&
      refElement.offset().top - 100 + refElement.height() > scrollPos
    ) {
      jQuery("#menu-center ul li a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}

jQuery(".tab-row a").each(function () {
  jQuery(this).on("click", function (event) {
    event.preventDefault();
    var currentId = jQuery(this).attr("href");
    setTimeout(() => {
      jQuery("html, body").animate(
        {
          scrollTop: jQuery(currentId).offset().top - 50,
        },
        0
      );
    }, 0);
  });
});

$(window).scroll(function () {
  var s = $(window).scrollTop(),
    d = $(document).height(),
    c = $(window).height();
  scrollPercent = (s / (d - c)) * 100;
  var position = scrollPercent;

  $("#progressbar").attr("value", position);
});


// Controls the description below the images in the carousel
const contentArray = document.querySelectorAll('.carousel-content');

contentArray.forEach((content, index) => {
  const activeItem = document.querySelector('.carousel-item.active');
  const activeIndex = Array.from(activeItem.parentNode.children).indexOf(activeItem);

  if (index === activeIndex) {
    content.classList.add('active');
    content.classList.remove('d-none');
  } else {
    content.classList.remove('active');
    content.classList.add('d-none');
  }
});

// Observes changes in the carousel-items and updates the description
const carouselItems = document.querySelectorAll('.carousel-item');
const observer = new MutationObserver(function (mutationsList) {
  mutationsList.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      // Handle changes in carousel-item class
      contentArray.forEach((content, index) => {
        const activeItem = document.querySelector('.carousel-item.active');
        const activeIndex = Array.from(activeItem.parentNode.children).indexOf(activeItem);

        if (index === activeIndex) {
          content.classList.add('active');
          content.classList.remove('d-none');
        } else {
          content.classList.remove('active');
          content.classList.add('d-none');
        }
      });
    }
  });
});

carouselItems.forEach((item) => {
  observer.observe(item, { attributes: true });
});


// Listens on every <details> element to be clicked
document.addEventListener('DOMContentLoaded', function() {
  // Get all the <details> elements on the page
  const detailsElements = document.querySelectorAll('details');

  // Add a toggle event listener to each <details> element
  detailsElements.forEach(function(detail) {
      detail.addEventListener('toggle', function() {
          // Get the <span> with the class "plus" inside the current <details>
          const spanPlus = this.querySelector('.plus');

          // Check if the <details> is open or closed and update the <span> content accordingly
          if (this.open) {
              spanPlus.textContent = '- ';
          } else {
              spanPlus.textContent = '+ ';
          }
      });
  });
});
