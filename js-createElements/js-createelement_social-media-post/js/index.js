console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const section = document.createElement("section");
section.className = "post";

const p = document.createElement("p");
p.className = " post__content";
p.textContent =
  "neuer Post der iqbXBQI BWLQHB WLHBLQHBLASHBJÖ DOHÖAW JDJXBKJH hdhdh";
const footer = document.createElement("footer");
footer.className = "post__footer";

const span = document.createElement("span");
span.className = "post__username";
span.textContent = "Julie";

const button = document.createElement("button");
button.className = " post__button";
button.textContent = " ♥ Like";
button.type = "button";
button.addEventListener("click", handleLikeButtonClick);

document.body.append(section);
section.append(p);
section.append(footer);
footer.append(span);
footer.append(button);
