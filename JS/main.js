// Following Add Active Class

let followingLi = document.querySelectorAll(".follwing li");
let ArrayOfLi = Array.from(followingLi);

ArrayOfLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    ArrayOfLi.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// Start textArea
let textArea = document.querySelector(".textArea");
let linear = document.querySelector(".progress .linear");
let progress = document.querySelector(".progress");
let maxLength = textArea.getAttribute("maxlength");

textArea.oninput = function () {
  if (this.value != "") {
    progress.classList.add("show");
  } else {
    progress.classList.remove("show");
  }
  // ProgressBar
  linear.style.width = `${(this.value.length * 100) / maxLength}%`;
};

// image ==> Ahalay
let theImage = document.querySelectorAll(".ahaly");
let theLightImage = document.querySelector(".lightImage");
let theImgLight = theLightImage.querySelector("img");
let Closed = document.querySelector(".closed");

theImage.forEach((img) => {
  img.addEventListener("click", () => {
    theLightImage.classList.add("show");
    document.body.style.overflow = "hidden";
    theImgLight.src = img.src;
  });
});

Closed.addEventListener("click", () => {
  theLightImage.classList.remove("show");
  document.body.style.overflow = "auto";
});

// Video
let theIcon = document.querySelector(".quran .theicon");
let theVideo = document.querySelector(".video video");
let lightVideo = document.querySelector(".lightVideo");
let videoClosed = lightVideo.querySelector(".closed");

theIcon.addEventListener("click", () => {
  lightVideo.classList.add("show");
  theVideo.play();
  document.body.style.overflow = "hidden";
});
videoClosed.onclick = function () {
  lightVideo.classList.remove("show");
  document.body.style.overflow = "auto";
  theVideo.pause();
};

// prloader
let preLoader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preLoader.classList.add("loaded");
    document.body.style.overflow = "auto";
})
