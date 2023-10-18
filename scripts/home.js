// SlideShow Code
const img_arr = [
    {
       imgUrl:"https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fdeloitte__1644555599257.png&w=1920&q=75",
    },
    {
       imgUrl:"https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2FdataScience__1644555732575.png&w=1920&q=75",
    },
    {
      imgUrl:"https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fmba__1644558374257.png&w=1920&q=75",
   },
   {
      imgUrl:"https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2Fsoftware__1644558447943.png&w=1920&q=75",
   },
   {
      imgUrl:"https://www.upgrad.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fupgrad1%2Fmarketing-platform-assets%2Fsprites%252Fimages%2F4__1635261083350.jpg&w=1920&q=75",
   },
  
  ]
  
  function slide() {
      let slides_div = document.querySelector(".slideshow-m")
  
      let images = document.createElement("img")
     
  
      let i=0  
     setInterval(() => {
        // If images array is empty
           if(i == img_arr.length) {
              return
           }
           slides_div.append(images)
           images.setAttribute("class","sliding-img-m")
           images.src=img_arr[i].imgUrl;
           i++;
     },2000);
  }
  
  slide()
  