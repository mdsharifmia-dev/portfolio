import { gsap } from 'gsap';

export interface CursorOptions {
  speed?: number;
  skewing?: number;
}

export class MouseFollower {
  private el: HTMLElement;
  private textEl: HTMLElement;
  private pos = { x: 0, y: 0 };
  private mouse = { x: 0, y: 0 };
  private speed: number;
  private isDestroyed = false;

  constructor(options: CursorOptions = {}) {
    this.speed = options.speed || 0.25;

    // Create Cursor DOM elements
    this.el = document.createElement('div');
    this.el.className = 'mf-cursor';
    this.el.style.color = '#ffffff';

    this.textEl = document.createElement('div');
    this.textEl.className = 'mf-cursor-text';
    this.el.appendChild(this.textEl);

    document.body.appendChild(this.el);

    this.bindEvents();
    this.render();
  }

  private bindEvents() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    }, { passive: true });

    // Global listener for data-cursor attributes
    document.addEventListener('mouseover', (e) => {
      const target = (e.target as HTMLElement).closest('[data-cursor], [data-cursor-text], a, button');
      if (!target) return;

      const cursorState = target.getAttribute('data-cursor');
      const cursorText = target.getAttribute('data-cursor-text');

      if (cursorText) {
        this.setText(cursorText);
      } else if (cursorState) {
        this.addState(cursorState);
      } else if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        this.addState('-pointer');
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = (e.target as HTMLElement).closest('[data-cursor], [data-cursor-text], a, button');
      if (!target) return;

      this.resetStates();
    });
  }

  public setText(text: string) {
    this.textEl.textContent = text;
    this.el.classList.add('-text');
  }

  public addState(state: string) {
    this.el.classList.add(state.startsWith('-') ? state : `-${state}`);
  }

  public resetStates() {
    this.textEl.textContent = '';
    this.el.className = 'mf-cursor';
  }

  private render = () => {
    if (this.isDestroyed) return;

    // Linear interpolation (lerp)
    this.pos.x += (this.mouse.x - this.pos.x) * this.speed;
    this.pos.y += (this.mouse.y - this.pos.y) * this.speed;

    gsap.set(this.el, {
      x: this.pos.x,
      y: this.pos.y,
    });

    requestAnimationFrame(this.render);
  };

  public destroy() {
    this.isDestroyed = true;
    if (this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
    }
  }
}

export function initMouseFollower(): MouseFollower | null {
  if (typeof window === 'undefined') return null;
  // Activate only on devices with fine pointer (mouse/trackpad)
  if (!window.matchMedia('(pointer: fine)').matches) return null;

  return new MouseFollower({ speed: 0.28 });
}
