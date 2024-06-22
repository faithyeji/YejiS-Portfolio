function googly2() {
  DeviceMotionEvent.requestPermission().then((response) => {
    if (response == "granted") {
      window.addEventListener("devicemotion", (event) => {
        let shakeX = 0;
        let shakeY = 0;

        let acceleration = event.accelerationIncludingGravity;
        if (acceleration) {
          shakeX = acceleration.x !== null ? acceleration.x * 2 : 0;
          shakeY = acceleration.y !== null ? acceleration.y * 2 : 0;

          const shakeObject = document.getElementById("shakeObject");
          if (shakeObject) {
            shakeObject.style.transform = `translate(-50%, -50%) translate(${shakeX}px, ${shakeY}px)`;
          }
        }
      });
    }
  });
}
