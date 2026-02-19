(function(){
  // Objetivo: 25 Abril 2026 (00:00) hora local del navegador
  const target = new Date(2026, 3, 25, 18, 0, 0); // 3 = abril (0-based)

  const elDays = document.querySelector("[data-days]");
  const elHours = document.querySelector("[data-hours]");
  const elMins = document.querySelector("[data-mins]");
  const elSecs = document.querySelector("[data-secs]");

  const pad2 = (n) => String(n).padStart(2, "0");

  function tick(){
    const now = new Date();
    let diff = target.getTime() - now.getTime();
    if(diff < 0) diff = 0;

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    if(elDays) elDays.textContent = String(days).padStart(2, "0");
    if(elHours) elHours.textContent = pad2(hours);
    if(elMins) elMins.textContent = pad2(mins);
    if(elSecs) elSecs.textContent = pad2(secs);
  }

  tick();
  setInterval(tick, 1000);
})();
