import FrameAnimation from "@mediamonks/display-temple/animation/FrameAnimation";
import SplitText from "gsap/SplitText";

export default class Animation extends FrameAnimation {
  /**
   *
   * @param {HTMLDivElement} container
   * @param {null} config
   */
  constructor(container, config) {
    super();

    this.container = container;
    this.config = config;

    gsap.registerPlugin(SplitText);
  }

  /**
   *
   * @param {gsap.core.Timeline} tl
   */
  frame0(tl) {
    tl.to('.content', { duration: 1, opacity: 1 }, 'frame0')
    tl.from(['#bgImage', '#shadow'], { duration: 2, scale: 1.2, transformOrigin: 'center', ease: 'back.out(.3)' }, 'frame0')
    tl.from(['#baseWhite', '#baseViolet'], { duration: 1, stagger: .1, y: 100, ease: 'back.out(.1)' }, 'frame0+=.5')
  }

  frame1(tl) {
    tl.addLabel('frame1', 'frame0+=1')

    tl.from(['#title', '#logo'], { duration: 1, opacity: 0, y: 50, ease: 'back.out(.3)' }, 'frame1')
    tl.from('#logo', { duration: 1, transformOrigin: 'center', scale: 1.2, ease: 'back.out(1)' }, 'frame1')

    tl.from('#subtitle', { duration: 1, y: 30, opacity: 0, ease: 'power4.out' }, 'frame1+=.5')
    tl.from('#partnerLogo', { duration: 1, opacity: 0, ease: 'power4.out' }, 'frame1+=1.2')
  }
}
