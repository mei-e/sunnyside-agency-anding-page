# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Syntactically Awesome Style Sheets / Sass - CSS Pre-processor
- Flexbox (for the layout of most parts of this project)
- CSS Grid (for the image set on the bottom page)
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

I have never used grid before in my projects since using flexbox is easy for me to do responsive layouts. But I found out that this is also possible with grid columns. Since I am not comfortable with using grid completely, I only used it for the image set located on the bottom of the website.

```css

#image-set-mobile{
    display:grid;
    grid-template-columns: repeat(2,1fr);
}

@media screen and (min-width: 600px){
    #image-set-desktop{
        display:grid;
        grid-template-columns: repeat(4,1fr);
    }
}

```

I also learned that I can recolor .svg files using the filter property. I used this for the logo and social media icons (hover) in the footer (see useful resources)

```css

footer{
    padding:$extra-large-value;
    background-color: $moderate-cyan;
    .logo{
        margin:$large-value 0;
        height: $extra-large-value;
        filter:invert(53%) sepia(25%) saturate(699%) hue-rotate(118deg) brightness(86%) contrast(87%);
    }
}

#social-media img{
    height: $large-value;
    width: $large-value;
    margin:0 $medium-value;
    transition: filter 0.5s ease-out;
    &:hover{
        filter: invert(100%) sepia(100%) saturate(5%) hue-rotate(200deg) brightness(200%) contrast(100%);
    }
}

```
I am also introduced to the **window object** that helped me incorporate scroll animations.
```js
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
```

### Continued development

The layout did not match completely when I opened it in Firefox (the image layout in the main section did not match with the sample design). I will work on sizing and media queries more to provide cross-compatible web projects.

### Useful resources

- [W3Schools](https://www.w3schools.com/) - This is one of my main sources for figuring out how to do certain parts of the project. This helped me understand more about grids, window object, and different kinds of transitions and animations that I incorported for this project.
- [Stack Overflow](https://stackoverflow.com/) - This is also one of my main sources like W3Schools. This is where I found out how to put the underline decoration for the "learn more" anchors.
- [MDN](https://developer.mozilla.org/en-US/) - Another source like W3Schools and Stack Overflow where I learned more about each CSS properties.
- [CodePen by Barrett Sonntag](https://codepen.io/sosuke/pen/Pjoqqp) - I used this tool to change the logo color in the footer.
- [Scroll animation tutorial by Dev Ed](https://youtu.be/C_JKlr4WKKs) - This tutorial for scroll animations is beginner-friendly. The original tutorial only provided the code for one element, but there is a comment by **demian** who provided one for multiple elements. I am new to this yet I wanted to spice up my project so this is helpful for me.

## Author

- Frontend Mentor - [@mei-e](https://www.frontendmentor.io/profile/mei-e)