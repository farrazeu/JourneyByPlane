
document.addEventListener("DOMContentLoaded", function () {

  // Automatically update the copyright year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Smooth navigation for website links
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener("click", function() {
      console.log("Website navigation:", link.getAttribute("href"));
    });
  });

});
