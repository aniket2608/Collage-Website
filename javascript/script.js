

function showSemesterOptions() {
  var yearOptions = document.getElementsByName("year");
  var semesterSelect = document.getElementById("semester");
  // Hide all options by default
  for (var i = 0; i < semesterSelect.options.length; i++) {
    semesterSelect.options[i].style.display = "none";
  }
  
  // Show the relevant options based on the selected year
  for (var i = 0; i < yearOptions.length; i++) {
    if (yearOptions[i].checked) {
      var selectedYear = yearOptions[i].value;
      if (selectedYear === "second-year") {
        document.getElementById("third-sem").style.display = "block";
        document.getElementById("fourth-sem").style.display = "block";
      } else if (selectedYear === "third-year") {
        document.getElementById("fifth-sem").style.display = "block";
        document.getElementById("sixth-sem").style.display = "block";
      } else if (selectedYear === "fourth-year") {
        document.getElementById("seventh-sem").style.display = "block";
        document.getElementById("eighth-sem").style.display = "block";
      }
      break;
    }
  }
}
// Timetable
document.addEventListener('DOMContentLoaded', function() {
  const yearSelect = document.getElementById('year-select');
  const timetableSecondYear = document.getElementById('timetable-second-year');
  const timetableThirdYear = document.getElementById('timetable-third-year');
  const timetableFourthYear = document.getElementById('timetable-fourth-year');

  yearSelect.addEventListener('change', function() {
    const selectedYear = yearSelect.value;

    timetableSecondYear.classList.add('hidden');
    timetableThirdYear.classList.add('hidden');
    timetableFourthYear.classList.add('hidden');

    if (selectedYear === 'second-year') {
      timetableSecondYear.classList.remove('hidden');
    } else if (selectedYear === 'third-year') {
      timetableThirdYear.classList.remove('hidden');
    } else if (selectedYear === 'fourth-year') {
      timetableFourthYear.classList.remove('hidden');
    }
  });
});


 // Automatic Image Slider
 const slides = document.querySelectorAll('.slider-image');
 const sliderText = document.querySelectorAll('.slider-text');
 let currentSlide = 0;

 function showSlide() {
     slides.forEach(slide => slide.style.display = 'none');
     sliderText.forEach(text => text.style.opacity = '0');
     slides[currentSlide].style.display = 'block';
     sliderText[currentSlide].style.opacity = '1';
 }

 function animateText() {
     sliderText.forEach(text => {
         text.style.animation = 'none';
         text.offsetHeight; // Trigger reflow to restart the animation quickly
         text.style.animation = 'slide-up 1s forwards';
     });
 }

 function nextSlide() {
     currentSlide++;
     if (currentSlide >= slides.length) {
         currentSlide = 0;
     }
     showSlide();
     animateText();
 }

 function previousSlide() {
     currentSlide--;
     if (currentSlide < 0) {
         currentSlide = slides.length - 1;
     }
     showSlide();
     animateText();
 }

 showSlide();
 setInterval(nextSlide, 10000);
 
 function pauseAnnouncement(element) {
  element.classList.add('paused');
}

function resumeAnnouncement(element) {
  element.classList.remove('paused');
}
function scrollToContent() {
  const contentElement = document.getElementById('content');
  contentElement.scrollIntoView({ behavior: 'smooth' });
}


  