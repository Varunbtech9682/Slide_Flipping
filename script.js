const { createApp } = Vue;

createApp({
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "PlayStation5",
          desc: 
            "Released in 2020, the PS5 is the latest generation console from Sony. It features a custom SSD for faster loading times, ray tracing support, haptic feedback with the DualSense controller. Notable titles for the PS5 include Demon's Souls and Ratchet & Clank: Rift Apart.",
          photo:
            "https://i.pinimg.com/564x/fb/eb/1c/fbeb1c98ca333da1b9d80f065240c701.jpg"
        },
        {
          id: 2,
          title: "PlayStation4",
          desc:
            " Launched in 2013, the PS4 brought enhanced graphics, improved social features, and a redesigned controller (DualShock 4). It emphasized online gaming and introduced services like PlayStation Plus.",
          photo:
            "https://www.flokq.com/blog/wp-content/uploads/2021/09/6a0a9f5dec3d9b587116285e60a89bc7.jpg"
        },
        {
          id: 3,
          title: "PlayStation3",
          desc:
            "Released in 2006, the PS3 introduced high-definition gaming with its powerful Cell processor. It featured a Blu-ray disc drive, built-in Wi-Fi, and online multiplayer capabilities through the PlayStation Network.",
          photo:
            "https://i.pinimg.com/564x/21/1c/24/211c24230026bf433994f6b84a94107f.jpg"
        },
        {
          id: 4,
          title: "PlayStation2",
          desc:
            "Launched in 2000, the PS2 is one of the best-selling consoles of all time. It had improved graphics, backward compatibility with PS1 games, and a DVD-ROM drive. The PS2 boasted a vast game library and introduced franchises like God of War.",
          photo:
            "https://i.pinimg.com/564x/82/a0/39/82a039025f7d71d0d97e0d5527fea715.jpg"
        }
      ],
      currentNum: 0
    };
  },
  computed: {
    currentCard() {
      return this.cards[this.currentNum];
    }
  },
  methods: {
    playFoward() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: "sine.out"
        },
        onComplete: () => {
          this.playReverse();
          if (this.currentNum >= 3) {
            this.currentNum = 0;
          } else {
            this.currentNum++;
          }
        }
      });
      tl.to("#mask-1", {
        yPercent: 100,
        scaleY: 1.4
      })
        .to(
          "#mask-2",
          {
            yPercent: -100,
            scaleY: 1.4
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
          },
          "<0.4"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`
          },
          "<0.3"
        );
    },
    playReverse() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: "sine.in"
        }
      });
      tl.to("#mask-1", {
        yPercent: -100,
        scaleY: 1.4
      })
        .to(
          "#mask-2",
          {
            yPercent: 100,
            scaleY: 1.4
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.2"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`
          },
          "<0.3"
        );
    },
    nextCard() {
      this.playFoward();
    }
  }
}).mount("#app");