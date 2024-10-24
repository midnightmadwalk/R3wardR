window.onload = function() {
  const numberOfPumpkins = 30;

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

      if (currentTop > window.innerHeight) {
        clearInterval(fallInterval);
        pumpkin.remove(); 
      }
    }, 30); 
  }

  for (let i = 0; i < numberOfPumpkins; i++) {
    setTimeout(createFallingPumpkin, i * 500); // Add delay between pumpkin creations
  }
};
