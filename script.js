const infoPages = [
  {
    page: "1",
    image: "3-1.png",
    comment: `"The first time I used the Samsung Bespoke Jet™,<br>
I cried. I’m not being sensational; I really did.<br>
Of course, this vacuum worked great.<br>
But that’s not all." <a class="link-grey" href="about:blank" target="_blank">Read more…</a>`,
  },
  {
    page: "2",
    image: "4-1.png",
    comment: `"If you’re an over-cleaner, like myself, you’ll nerd<br> 
out on all of the functions. If you avoid this chore <br>
at all costs, you’ll appreciate how simple <br>
Samsung makes it." <a class="link-grey" href="about:blank" target="_blank">Read more…</a>`,
  },
  {
    page: "3",
    image: "5-1.png",
    comment: `"Both the flor and pet hair attachments are<br> 
cleverly designed to eliminate the dreaded hair <br>
wrap. (In other words, you’ll never have to tackle <br>
hair tangles with a pair of scissors again.)" <br>
<a class="link-grey" href="about:blank" target="_blank">Read more…</a>`,
  },
  {
    page: "4",
    image: "6-1.png",
    comment: `"When I learned the Samsung Bespoke Vac cleaned itself <br>
with amazing technology, that’s when I cried. No more <br>
scraping spider legs and hair out of the crevices with my <br>
hands. Its suction power is so strong. The canister is left <br>
perfectly clean after every use.It’s like a vacuum for your <br>
vacuum." <a class="link-grey" href="about:blank" target="_blank">Read more…</a>`,
  },
  {
    page: "5",
    image: "7-1.png",
    comment: `"Because it’s so nice-looking, it can live right in the <br>
kitchen. No more hauling a vacuum up and down <br>
the basement stairs on the daily" <a class="link-grey" href="about:blank" target="_blank">Read more…</a>`,
  },
];

const itemComment = document.querySelector(".txt-comment");
const itemPage = document.querySelector(".par-number-current-page");
const itemImage = document.querySelector(".picture");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const btnShop = document.querySelector(".btn-shop");

btnNext.addEventListener("mousedown", function () {
  btnNext.classList.add("grey");
});

btnNext.addEventListener("mouseup", function () {
  btnNext.classList.remove("grey");
});

btnPrev.addEventListener("mousedown", function () {
  btnPrev.classList.add("grey");
});

btnPrev.addEventListener("mouseup", function () {
  btnPrev.classList.remove("grey");
});

i = 0;
btnNext.addEventListener("click", function () {
  gsap.from(".txt-comment", {
    x: "5.21vw",
    opacity: 1,
    duration: 0.7,
    ease: "power2.out",
  });
  gsap.fromTo(".picture", { opacity: 0 }, { duration: 0.7, opacity: 1 });
  i++;
  if (i > infoPages.length - 1) {
    i = 0;
  }
  infoPages.forEach(function (item) {
    itemImage.src = infoPages[i].image;
  });
  itemComment.innerHTML = infoPages[i].comment;
  itemPage.textContent = infoPages[i].page;
});

btnPrev.addEventListener("click", function () {
  gsap.from(".txt-comment", {
    x: "-5.21vw",
    opacity: 1,
    duration: 0.7,
    ease: "power2.out",
  });
  gsap.fromTo(".picture", { opacity: 0 }, { duration: 0.7, opacity: 1 });

  i--;
  if (i < 0) {
    i = infoPages.length - 1;
  }
  infoPages.forEach(function (item) {
    itemImage.src = infoPages[i].image;
  });
  itemComment.innerHTML = infoPages[i].comment;
  itemPage.textContent = infoPages[i].page;
});

let animationBtnShop = gsap.to(".btn-shop, .btn-next, .btn-prev", {
  duration: 1.2,
  scale: 1.07,
  ease: "power3.out",
  yoyo: true,
  repeat: -1,
});

btnShop.addEventListener("mouseover", function () {
  animationBtnShop.progress(0).kill();
});

let animationBtnNPScale = gsap.to(".btn-next, .btn-prev", {
  duration: 1.2,
  scale: 1.4,
  ease: "power3.out",
  yoyo: true,
  repeat: -1,
});

btnNext.addEventListener("click", function () {
  if (animationBtnNPScale) {
    animationBtnNPScale.progress(0).kill();
  }
});

let animationFirstPageLogo = gsap.timeline();
animationFirstPageLogo
  .fromTo(
    ".logo-company-first",
    {
      y: "5.21vw",
      x: "-5.2vw",
      duration: 0.5,
      opacity: 0,
      ease: "power2.out",
    },
    { y: "5.21vw", x: 0, opacity: 1 }
  )
  .fromTo(
    ".logo-company-first",
    {
      y: "5.21vw",
      x: 0,
      duration: 0.5,
      ease: "power2.out",
    },
    { y: 0, x: 0 }
  );

gsap.from(".par-first", {
  x: "-5.2vw",
  delay: 1,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
});
gsap.from(".par-second", {
  x: "-5.2vw",
  delay: 1.2,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
});
gsap.from(".par-third", {
  x: "-5.2vw",
  delay: 1.4,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
});

gsap.to(".par-first, .par-second, .par-third", {
  y: "3.44vw",
  delay: 2.2,
  duration: 0.5,
  ease: "power2.out",
});

const frameSecond = document.querySelector(".info-container-second");
const frameFirst = document.querySelector(".info-container-first");
const imgFirst = document.querySelector(".img-container");
const pageSelectFirst = document.querySelector(".page-select-container-first");
const commentFirst = document.querySelector(".comment-container");
const logoParFirst = document.querySelector(".logo-par-container");
const btnFirst = document.querySelector(".btn-container");

gsap.to(frameFirst, {
  delay: 3,
  duration: 1,
  opacity: 0,
  onStart: function () {
    frameFirst.style.display = "none";
  },
});

gsap.to(btnFirst, {
  delay: 5,
  duration: 5,
  opacity: 1,
  onStart: function () {
    btnFirst.style.display = "block";
  },
});

gsap.to(pageSelectFirst, {
  delay: 5,
  duration: 5,
  opacity: 1,
  onStart: function () {
    pageSelectFirst.style.display = "block";
  },
});

gsap.to(commentFirst, {
  delay: 5,
  duration: 5,
  opacity: 1,
  onStart: function () {
    commentFirst.style.display = "block";
  },
});

gsap.to(logoParFirst, {
  delay: 5,
  duration: 5,
  opacity: 1,
  onStart: function () {
    logoParFirst.style.display = "block";
  },
});

gsap.from(imgFirst, {
  delay: 3,
  opacity: 1,
  duration: 1.2,
  scale: 1.43,
  y: "-6.51vw",
  x: "-3.2vw",
  ease: "power3.out",
  yoyo: true,
  onStart: function () {
    imgFirst.style.display = "block";
  },
  onComplete: function () {},
});

let animationBtnNAutoClick = gsap.to(btnNext, {
  delay: 6,
  duration: 2,
  repeat: -1,
  onRepeat: function () {
    btnNext.click();
    btnNext.classList.add("grey");
    gsap.to(btnNext, {
      delay: 1,
      scale: 1,
      onStart: function () {
        btnNext.classList.remove("grey");
      },
    });
  },
  onInterrupt: function () {
    btnNext.click();
    btnNext.classList.remove("grey");
  },
});

//Тут Анімація карусель зупиняється, якщо користувач взаємодіє з кнопками <, >.
//Якщо треба, щоб анімація зупинялась при взаємодії користувача з будь якою частиною макета,
//то можна зробити document.addEventListener("mouseover", function () {if (animationBtnNAutoClick) animationBtnNAutoClick.kill();});
btnNext.addEventListener("mouseover", function () {
  if (animationBtnNAutoClick) {
    animationBtnNAutoClick.progress(0).kill();
  }
});

btnPrev.addEventListener("mouseover", function () {
  if (animationBtnNAutoClick) {
    animationBtnNAutoClick.progress(0).kill();
  }
});
