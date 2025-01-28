document.addEventListener("DOMContentLoaded", function () {
    const typedText = "Nabillatul Syahbandi Ardyansal";
    const subText = "Mahasiswa S1 Informatika Universitas Pahlawan";
    const mainTitle = document.querySelector(".display-4");
    const leadText = document.querySelector(".lead");

    let index = 0;
    let subIndex = 0;

    function typeMainText() {
        if (index < typedText.length) {
            mainTitle.textContent += typedText.charAt(index);
            index++;
            setTimeout(typeMainText, 100);
        } else {
            setTimeout(typeSubText, 500);
        }
    }

    function typeSubText() {
        if (subIndex < subText.length) {
            leadText.textContent += subText.charAt(subIndex);
            subIndex++;
            setTimeout(typeSubText, 80);
        } else {
            setTimeout(resetTyping, 3000);
        }
    }

    function resetTyping() {
        mainTitle.textContent = "";
        leadText.textContent = "";
        index = 0;
        subIndex = 0;
        typeMainText();
    }

    typeMainText();
});


document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#about .row");

    
    aboutSection.style.opacity = 0;
    aboutSection.style.transform = "translateY(50px)";
    aboutSection.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";

    let hasAnimated = false;

    
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom > 0
        );
    }

 
    function checkViewport() {
        if (isInViewport(aboutSection) && !hasAnimated) {
            hasAnimated = true;
            aboutSection.style.opacity = 1;
            aboutSection.style.transform = "translateY(0)";
        }
    }

    document.addEventListener("scroll", checkViewport);
    window.addEventListener("load", checkViewport);
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);


  gsap.from("#project .card", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#project",
      start: "top 80%",
      toggleActions: "play none none reverse", 
    },
  });


  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: "power1.out",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power1.out",
        boxShadow: "none",
      });
    });
  });

  gsap.from("#project svg", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#project svg",
      start: "top 90%",
      toggleActions: "play none none reverse", 
    },
  });
});
