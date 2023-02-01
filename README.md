# Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
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
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

Desktop version

![](screenshots/desktop-version.png)

Desktop error version

![](screenshots/desktop-error.png)

[Mobile version](screenshots/mobile-version.png)

### Links

- Solution URL: [Base Apparel GitHub](https://github.com/EugeneZanevskij/Base-apparel)
- Live Site URL: [Base Apparel Website](https://eugenezanevskij.github.io/Base-apparel/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- RegEx

### What I learned

While working on this project I learned how to check whether input is eMail or not.

```js
function isEmail(input) {
    return /^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(input);
}
```

### Continued development

In future projects I want to continue focusing on working with some kind of forms, inputs. I'd like to work more with Regular Expressions to better understand this concept.

### Useful resources

- [StackOverflow](https://stackoverflow.com/) - This helped me to overcome problem with submitting form, how to round the number to the nearest tenth.
- [MDN](https://developer.mozilla.org/en-US/) - Documentation.

## Author

- LinkedIn - [Eugene Zanevskij](https://www.linkedin.com/in/eugene-zanevskij/)
- Frontend Mentor - [@EugeneZanevskij](https://www.frontendmentor.io/profile/EugeneZanevskij)
- GitHub - [@EugeneZanevskij](https://github.com/EugeneZanevskij)