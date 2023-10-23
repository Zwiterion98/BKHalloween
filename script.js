// Select the background element
const background = document.getElementById('background');

// Initialize variables for position
let posX = 50; // initial X position
let posY = 50; // initial Y position

// Check for device motion support
if (window.DeviceMotionEvent) {
    // Display a permission dialog
    if (confirm("Do you want to enable motion-based background movement?")) {
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
            posX = Math.min(Math.max(posX, -50), 300);
            posY = Math.min(Math.max(posY, -50), 300);
            document.querySelector("#x").innerHTML = `accX:${accelerationX}`;
            document.querySelector("#y").innerHTML = `accY:${accelerationY}`;
            document.querySelector("#z").innerHTML = `accZ:${accelerationZ}`;
            // Update the background position\
            
            background.style.transform = `translate(${posX}%, ${posY}%)`;
        }
    } else {
        alert("Motion-based background movement is disabled.");
    }
} else {
    alert("Device motion is not supported in your browser.");
}
