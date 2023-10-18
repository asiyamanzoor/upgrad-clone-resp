const btn = $('#scrolltotop');
$(window).scroll(function () {
   if ($(window).scrollTop() > 300) {
      btn.addClass('show');
   } else {
      btn.removeClass('show');
   }
});

btn.on('click', function (e) {
   e.preventDefault();
   $('html, body').animate({
      scrollTop: 0
   }, '300');
});

/* Courses List */

// Courses button at top
let brn = document.querySelector('.cButton');
var course = document.getElementById('courses');


// Courses button at top
if (brn) {
   // Add event on button
   brn.addEventListener("mouseenter", function (e) {
      // style on courses list
      course.style.display = "block";
      // add event on courses list box
      course.addEventListener("mouseenter", function () {
         course.style.display = "block"
      })

      // Once you move your mouse from courses then courses list will close
      course.addEventListener("mouseleave", function () {
         course.style.display = "none"
      })

   })

   // If you move your mouse from buttton courses will get close
   brn.addEventListener("mouseleave", function () {

      course.style.display = "none"
   })
}
// ----------------------- more tab in navbar -------------------

let more = document.querySelector('.moreBtn');
var moreDiv = document.getElementById('more2');

if (more) {

   more.addEventListener("mouseenter", function (e) {

      moreDiv.style.display = "block"
      moreDiv.addEventListener("mouseenter", function () {
         moreDiv.style.display = "block"
      })

      moreDiv.addEventListener("mouseleave", function () {
         moreDiv.style.display = "none"
      })

   })

   more.addEventListener("mouseleave", function () {

      moreDiv.style.display = "none"
   })
}

// Red Underline for For Working Professionals (jQuery) Copied code from stackoverflow
$(document).ready(function () {
   $('.button1').on('click', function () {
      // Remove "selected" class from all buttons
      $('.button1').removeClass('selected');

      // Add "selected" class to the clicked button
      $(this).addClass('selected');
   });
});


// SlideShow Code
const img_arr = [
   {
      imgUrl: "https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fdeloitte__1644555599257.png&w=1920&q=75",
   },
   {
      imgUrl: "https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2FdataScience__1644555732575.png&w=1920&q=75",
   },
   {
      imgUrl: "https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fmba__1644558374257.png&w=1920&q=75",
   },
   {
      imgUrl: "https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fsoftware__1644558447943.png&w=1920&q=75",
   },
   {
      imgUrl: "https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2F4__1635261083350.jpg&w=1920&q=75",
   },
];

function slide() {
   let slides_div = document.querySelector(".slideshow-m")

   let images = document.createElement("img")


   let i = 0
   setInterval(() => {
      // If images array is empty
      if (i == img_arr.length) {
         return
      }
      slides_div.append(images)
      images.setAttribute("class", "sliding-img-m")
      images.src = img_arr[i].imgUrl;
      i++;
   }, 2000);
}

slide()