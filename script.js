const content = [
  {
    name: "Tanya Sinclair",
    title: " UX Engineer ",
    text: `“ I’ve been interested in coding for a while but never taken the jump,
    until now. I couldn’t recommend this course enough. I’m now in the job
    of my dreams and so excited about the future. ”`,
    picUrl: `images/image-tanya.jpg`,
  },
  {
    name: "John Tarkpor",
    title: " Junior Front-end Developer ",
    text: `“ If you want to lay the best foundation possible I’d recommend taking
    this course. The depth the instructors go into is incredible. I now feel
    so confident about starting up as a professional developer. ”`,
    picUrl: `images/image-john.jpg`,
  },
];

let index = 0;

const cardText = document.querySelector(".text");
const cardName = document.querySelector(".name");
const cardTitle = document.querySelector(".title");
const cardPic = document.querySelector(".card__image > img");

const buttonForward = document.querySelector(".forward");
const buttonBack = document.querySelector(".back");

function updateCard() {
  console.log(index);
  cardText.textContent = content[index]["text"];
  cardName.textContent = content[index]["name"];
  cardTitle.textContent = content[index]["title"];
  cardPic.src = content[index]["picUrl"];
}

buttonForward.addEventListener("click", () => {
  index = (index + 1) % content.length;
  updateCard();
});

buttonBack.addEventListener("click", () => {
  if (index > 0) {
    index = (index - 1) % content.length;
  } else {
    index = content.length - 1;
  }
  updateCard();
});
