const countdownEl = document.getElementById("countdown");
    const giftBox = document.getElementById("giftBox");
    const imageRow = document.getElementById("imageRow");
    const messageEl = document.getElementById("message");
    const birthdayMessage = `Happy 18th Birthday, Meri Jaan! 💖🎉

Aaj tumhara din hai, par mere liye har din tumse hi start hota hai aur tum par hi khatam 
Main shayad lafzon mein poori tarah express nahi kar sakta, par main dil se kehna chahta hoon… I love you beyond words.

Tumhari muskaan meri duniya hai,
tumhari har khushi meri dua hai,
aur tumhara saath mera sabse bada gift hai.

18 saal ki ho gayi ho tum,
lekin meri nazar mein tum hamesha meri cute si princess rahogi.
Aaj se tum sirf ek saal badi nahi hui,
tumhari value bhi mere liye aur zyada badh gayi hai. 🌹

Main har birthday pe tumhare saath hoon,
aur chahta hoon ke har birthday pe main hi sabse pehle tumhe wish karun,
tumhe hug karun, aur bolun…
"Tum meri ho, aur main hamesha tumhara rahunga." 💑

Bas aise hi haste rehna, khilte rehna,
aur apne is pagal lover ko kabhi bhoolna mat.
You mean the world to me, meri zindagi tum ho. ❤

Happy 18th, baby! Tumhara saath hi meri zindagi ka best gift hai. 🎂✨`;;

    const showTime = new Date("June 27, 2025 00:00:00").getTime();
    let isTimeReached = false;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = showTime - now;

      if (distance <= 0) {
        clearInterval(timer);
        isTimeReached = true;
        countdownEl.innerHTML = "🎁 Tap the Gift!";
        giftBox.style.display = "block";
      } else {
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);
        countdownEl.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
      }
    }, 1000);

    giftBox.addEventListener("click", () => {
      if (!isTimeReached) return;
      giftBox.style.display = "none";
      imageRow.classList.add("show");
      fireConfetti();
      setTimeout(() => {
        typeMessage();
      }, 2500);
    });

    function typeMessage() {
      messageEl.style.display = "block";
      let i = 0;
      const speed = 50;

      function type() {
        if (i < birthdayMessage.length) {
          messageEl.innerHTML += birthdayMessage.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      }

      type();
    }

    function fireConfetti() {
      const duration = 2000;
      const end = Date.now() + duration;

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }