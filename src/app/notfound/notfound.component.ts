import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements AfterViewInit {

  @ViewChild('matrixCanvas') canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;

  private x = 0;
  private y = 0;
  private lastX = 0;
  private lastY = 0;
  private isMoving = false;
  private lastMove = 0;
  private frameId: any;
  

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.resize();
  }

  @HostListener('window:resize')
  resize() {
    const c = this.canvas.nativeElement;
    c.width = window.innerWidth;
    c.height = window.innerHeight;
  }

  onMove(e: MouseEvent) {
    this.updatePos(e.clientX, e.clientY);
  }

  onTouchMove(e: TouchEvent) {
    const t = e.touches[0];
    this.updatePos(t.clientX, t.clientY);
  }

  private updatePos(x: number, y: number) {
    this.lastX = this.x;
    this.lastY = this.y;
    this.x = x;
    this.y = y;
    this.lastMove = Date.now();
    if (!this.isMoving) this.start();
  }

  private start() {
    this.isMoving = true;
    this.animate();
  }

  private animate() {
    if (!this.isMoving) return;

    const now = Date.now();

    // HARD STOP — nothing runs after 150ms idle
    if (now - this.lastMove > 150) {
      this.isMoving = false;
      cancelAnimationFrame(this.frameId);
      return;
    }

    // ONLY draw when moving
    if (this.lastX !== this.x || this.lastY !== this.y) {

      // fade smoothly
      this.ctx.fillStyle = 'rgba(0,0,0,0.15)';
      this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      const dx = this.x - this.lastX;
      const dy = this.y - this.lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const steps = Math.max(1, Math.floor(dist / 4));

      for (let i = 0; i < steps; i++) {
        const px = this.lastX + (dx * i) / steps;
        const py = this.lastY + (dy * i) / steps;

        if (Math.random() > 0.6) {
          const char = Math.random() > 0.5 ? '1' : '0';
          this.ctx.fillStyle = 'rgba(0,255,0,0.8)';
          this.ctx.font = '18px monospace';
          this.ctx.fillText(char, px, py);
        }
      }
    }

    this.frameId = requestAnimationFrame(() => this.animate());
  }
}