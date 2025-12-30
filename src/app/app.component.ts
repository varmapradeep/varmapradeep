import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'VarmaPradeep';
  private devToolsDetected = false;
  ngOnInit(): void {
    //   // Disable right-click
    //   document.addEventListener('contextmenu', (event) => {
    //     this.showAlert('Right-click is disabled!', 'warning');
    //     event.preventDefault();
    //   });

    //   // Disable DevTools shortcuts
    //   document.addEventListener('keydown', (e) => {
    //     if (
    //       (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'K'].includes(e.key.toUpperCase())) ||
    //       e.key === 'F12'
    //     ) {
    //       this.showAlert('DevTools shortcut is blocked!', 'error');
    //       e.preventDefault();
    //     }
    //   });

    //   // Disable pasting
    //   document.addEventListener('paste', (e) => {
    //     e.preventDefault();
    //     this.showAlert('Pasting is disabled!', 'warning');
    //   });

    //   // Start DevTools detection
    //   this.detectDevTools();
    // }

    // detectDevTools(): void {
    //   const threshold = 160;
    //   const check = () => {
    //     const widthExceeded = window.outerWidth - window.innerWidth > threshold;
    //     const heightExceeded = window.outerHeight - window.innerHeight > threshold;

    //     if ((widthExceeded || heightExceeded) && !this.devToolsDetected) {
    //       this.devToolsDetected = true;
    //       this.showAlert('DevTools is open. App will reload.', 'error');

    //       setTimeout(() => window.location.reload(), 1000);
    //     } else {
    //       setTimeout(check, 1000);
    //     }
    //   };
    //   check();
    // }

    // showAlert(message: string, icon: 'info' | 'warning' | 'error' | 'success' = 'info') {
    //   return Swal.fire({
    //     toast: true,
    //     position: 'bottom-left',
    //     icon: icon,
    //     title: message,
    //     showConfirmButton: false,
    //     timer: 4000,
    //     width: '300px',
    //     timerProgressBar: true,
    //     background: '#ff014f',
    //     color: '#fff',
    //     iconColor: '#fff',
    //     didOpen: (toast) => {
    //       toast.addEventListener('mouseenter', Swal.stopTimer);
    //       toast.addEventListener('mouseleave', Swal.resumeTimer);
    //     },
    //   });
  }
}
