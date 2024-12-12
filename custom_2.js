document.addEventListener("DOMContentLoaded", () => {
  const giftEmoji = "🎁"; // Gift emoji for the cursor
  const burstEmoji = "🎁"; // Emoji for burst effect on click
  
  // Create a custom cursor element
  const cursor = document.createElement("div");
  cursor.style.position = "fixed";
  cursor.style.pointerEvents = "none";
  cursor.style.zIndex = "10000";
  cursor.style.fontSize = "24px";
  cursor.textContent = giftEmoji;
  document.body.appendChild(cursor);

  // Update cursor position
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });

  // Click effect
  document.addEventListener("click", (e) => {
    const burstContainer = document.createElement("div");
    burstContainer.style.position = "absolute";
    burstContainer.style.left = e.pageX + "px";
    burstContainer.style.top = e.pageY + "px";
    burstContainer.style.pointerEvents = "none";
    burstContainer.style.zIndex = "10000";

    // Create multiple burst emojis
    for (let i = 0; i < 10; i++) {
      const burst = document.createElement("span");
      burst.textContent = burstEmoji;
      burst.style.position = "absolute";
      burst.style.fontSize = "18px";
      burst.style.animation = `burst 1s ease-out forwards`;
      burst.style.left = `${Math.random() * 40 - 20}px`;
      burst.style.top = `${Math.random() * 40 - 20}px`;
      burstContainer.appendChild(burst);
    }

    document.body.appendChild(burstContainer);

    // Remove burst after animation
    setTimeout(() => {
      document.body.removeChild(burstContainer);
    }, 1000);
  });

  // Add CSS styles for burst animation
  const style = document.createElement("style");
  style.textContent = `
    @keyframes burst {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
});
