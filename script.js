// Select the background element
const background = document.getElementById('background');

// Initialize variables for position
let posX = -43.5; // initial X position
let posY = -33; // initial Y position

let positions = [
    { value: "si", x: -17, y: 0 },
    { value: "no", x: -69, y: 0 },
    { value: "a", x: -6.3, y: -32 },
    { value: "b", x: -13, y: -25 },
    { value: "c", x: -18, y: -21 },
    { value: "d", x: -24, y: -19 },
    { value: "e", x: -30, y: -17 },
    { value: "f", x: -36, y: -15 },
    { value: "g", x: -42, y: -15 },
    { value: "h", x: -49, y: -17 },
    { value: "i", x: -55, y: -17 },
    { value: "j", x: -60, y: -19 },
    { value: "k", x: -66, y: -20 },
    { value: "l", x: -72, y: -25 },
    { value: "m", x: -78, y: -30 },
    { value: "n", x: -6, y: -50 },
    { value: "o", x: -11, y: -44 },
    { value: "p", x: -15, y: -38 },
    { value: "q", x: -21, y: -35 },
    { value: "r", x: -28, y: -31 },
    { value: "s", x: -35, y: -30 },
    { value: "t", x: -40, y: -30 },
    { value: "u", x: -46, y: -30 },
    { value: "v", x: -53, y: -30 },
    { value: "w", x: -61, y: -32 },
    { value: "x", x: -69, y: -38 },
    { value: "y", x: -76, y: -44 },
    { value: "z", x: -80, y: 51 },
    { value: "0", x: -66, y: -56 },
    { value: "1", x: -17, y: 0 },
    { value: "2", x: -22, y: 0 },
    { value: "3", x: -28, y: 0 },
    { value: "4", x: -33, y: 0 },
    { value: "5", x: -39, y: 0 },
    { value: "6", x: -44, y: 0 },
    { value: "7", x: -50, y: 0 },
    { value: "8", x: -55, y: 0 },
    { value: "9", x: -61, y: 0 },
    { value: "adios", x: -44, y: -66 },
  ];
  
  function searchFor(_letter) {
    // Get the #info element
    const infoElement = document.querySelector("#info");
  
    // Get the position of the target element (specified by _letter)
    const targetPosition = positions.find((element) => element.value === _letter);
  
    if (targetPosition) {
      // Define the threshold for proximity
      const proximityThreshold = 10; // Adjust this value as needed
  
      // Calculate the distance between #info and the target position
      const distanceX = targetPosition.x - posX;
      const distanceY = targetPosition.y - posY;
  
      // Calculate the angle to rotate the pointer
      const angle = Math.atan2(distanceY, distanceX);
      document.querySelector("#z").innerHTML = `dX:${distanceX} dY:${distanceY} ang:${angle}`;
           
      // Check if #info is near the target
      if (Math.abs(distanceX) <= proximityThreshold && Math.abs(distanceY) <= proximityThreshold) {
        // Change the border color to green
        infoElement.style.borderColor = "#00FF00";
      } else {
        // Change the border color back to normal
        infoElement.style.borderColor = "#FF0000";
      }
  
      // Rotate the pointer towards the target position
      infoElement.style.transform = `rotate(${angle}rad)`;
    }
  }
  
  

// Check for device motion support
if (window.DeviceMotionEvent) {
    // Display a permission dialog
    if (confirm("Do you want to enable motion-based background movement  10?")) {
        // Add event listener for device motion
        window.addEventListener('devicemotion', handleMotion);

        function handleMotion(event) {
            const accelerationX = event.accelerationIncludingGravity.x;
            const accelerationY = event.accelerationIncludingGravity.y;
            const accelerationZ = event.accelerationIncludingGravity.z;
            // Calculate the new position based on device motion
            posX += accelerationX / 10; // Adjust the factor as needed
            posY += accelerationY / 10; // Adjust the factor as needed

            // Limit the position to stay within the bounds of the screen
            posX = Math.min(Math.max(posX, -87), 0);
            posY = Math.min(Math.max(posY, -66), 0);
            document.querySelector("#x").innerHTML = `posX: ${posX} accX:${accelerationX}`;
            document.querySelector("#y").innerHTML = `posY: ${posY} accY:${accelerationY}`;
            // Update the background position\
            
            background.style.transform = `translate(${posX}%, ${posY}%)`;
            searchFor("z");
        }
    } else {
        alert("Motion-based background movement is disabled.");
    }
} else {
    alert("Device motion is not supported in your browser.");
}
