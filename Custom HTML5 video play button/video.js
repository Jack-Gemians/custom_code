window.addEventListener("DOMContentLoaded", function() {
    // Xử lý các phần tử video sau khi DOM đã được tải
    document.querySelectorAll(".video-container").forEach(function(videoContainer) {
      // Video
      var video = videoContainer.querySelector("video");
  
      // Video Controls
      var videoControls = videoContainer.querySelector(".video-inner-container");
      var playButton = videoContainer.querySelector(".play-gif");
  
      function playVideo() {
        if (video.paused) {
          video.play();
          videoControls.classList.add("playing");
        } else {
          video.pause();
          videoControls.classList.remove("playing");
        }
      }
  
      // Play/pause on button click
      playButton.addEventListener("click", function() {
        playVideo();
      });
    });
  
    // Disable video controls for all videos
    document.querySelectorAll(".video-container video").forEach(function(vid) {
      vid.controls = false;
    });
  });