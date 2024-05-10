let scrollContainer = document.querySelector(".right-section");
   let backBtn = document.querySelector(".backBtn");
   let nextBtn = document.querySelector(".nextBtn");

   let scrollDistance =200;
   let scrollInterval;

  
   function scrollRight() {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += scrollDistance;
   }

   
   function scrollLeft() {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft -= scrollDistance;
   }

   nextBtn.addEventListener("mousedown", () => {
      scrollInterval = setInterval(scrollRight, 100);
   });

  
   backBtn.addEventListener("mousedown", () => {
      scrollInterval = setInterval(scrollLeft, 100);
   });
   window.addEventListener("mouseup", () => {
      clearInterval(scrollInterval);
   });

 
   scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
      scrollContainer.style.scrollBehavior = "smooth";
   });



   const mobile_nav = document.querySelector(".menu-bar");
   const nav_header = document.querySelector(".header");

   const toggleNavbar = () => {
    nav_header.classList.toggle("active");
   };

mobile_nav.addEventListener("click", () => toggleNavbar());




