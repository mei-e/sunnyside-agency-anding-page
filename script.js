function arrowClick(){
    const element = document.getElementById("transform");
    element.scrollIntoView(
        {
            behavior:"smooth"
        }
    );
}

function openMenu() {
    var x = document.getElementById("menu-mobile");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function animateScroll()
{
    let repeat = true;
    let scrollElement = document.querySelectorAll(".scroll-container");

    scrollElement.forEach(elmnt=>{
      let scrollPosition = elmnt.getBoundingClientRect().top;
      let screenPosition = window.innerHeight;
      if (scrollPosition <= screenPosition) {
        elmnt.classList.add("appear");
      }
      else if (scrollPosition >= screenPosition && repeat) {
        elmnt.classList.remove("appear");
      }
    });
  }

window.addEventListener('scroll', animateScroll);