document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("logo-video");
  const content = document.querySelector(".content");

  video.addEventListener("timeupdate", function () {
    if (video.currentTime > 2.9) {
      video.style.display = "none";
      content.style.display = "block";
    }
  });
});
