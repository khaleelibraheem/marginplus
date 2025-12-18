import confetti from "canvas-confetti";

export const celebrate = () => {
  const duration = 5000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 6,
      angle: 90,
      spread: 120,
      startVelocity: 35,
      origin: { x: Math.random(), y: 0 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  frame();
};

export const celebrate2 = () => {
  const duration = 2000;
  const animationEnd = Date.now() + duration;
  const defaults = {
    startVelocity: 30,
    spread: 120,
    ticks: 100,
    zIndex: 999,
    gravity: 0.5,
    scalar: 1.2,
  };

  const randomInRange = (min, max) => Math.random() * (max - min) + min;

  const frame = () => {
    // @ts-ignore
    confetti({
      ...defaults,
      particleCount: 5 + Math.floor(randomInRange(0, 5)),
      origin: { x: Math.random(), y: Math.random() * 0.2 },
    });

    if (Date.now() < animationEnd) {
      requestAnimationFrame(frame);
    }
  };

  frame();

  // Big central burst
  // @ts-ignore
  confetti({
    ...defaults,
    particleCount: 100,
    spread: 90,
    origin: { x: 0.5, y: 0.6 },
  });
};
