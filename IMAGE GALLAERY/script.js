let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})

// Open the overlay when clicking "See" button
document.querySelectorAll('.open-overlay').forEach(button => {
    button.addEventListener('click', function() {
      let movieId = this.getAttribute('data-movie');
      let overlay = document.getElementById(movieId);
      if (overlay) {
        overlay.style.display = "flex"; // Show overlay
      }
    });
  });
  
  // Close the overlay when clicking "×" button
  document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
      this.parentElement.style.display = "none"; // Hide overlay
    });
  });
  
  // Close the overlay when clicking outside the image
  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('overlay')) {
      event.target.style.display = "none"; // Hide overlay
    }
  });
  
  