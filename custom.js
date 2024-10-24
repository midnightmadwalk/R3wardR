window.onload = function() {
  function createFallingPumpkin() {
    const pumpkin = document.createElement('div'); 
    pumpkin.innerText = '🎃'; 
    pumpkin.style.position = 'fixed'; 
    pumpkin.style.top = '-50px'; 
    pumpkin.style.left = Math.random() * window.innerWidth + 'px'; 
    pumpkin.style.fontSize = Math.random() * 30 + 20 + 'px'; 
    pumpkin.style.zIndex = '9999'; 
    document.body.appendChild(pumpkin);

    let fallSpeed = Math.random() * 5 + 2; 
    let horizontalMovement = Math.random() * 2 - 1; 

    let fallInterval = setInterval(function () {
      let currentTop = parseFloat(pumpkin.style.top); 
      let currentLeft = parseFloat(pumpkin.style.left);
      pumpkin.style.top = currentTop + fallSpeed + 'px';
      pumpkin.style.left = currentLeft + horizontalMovement + 'px';

      // Remove pumpkin if it goes below the screen
      if (currentTop > window.innerHeight) {
        clearInterval(fallInterval);
        pumpkin.remove(); 
      }
    }, 30); 
  }

  // Use setInterval to create a pumpkin every 500ms (or your desired interval)
  setInterval(createFallingPumpkin, 500); // 500ms between new pumpkins
};
