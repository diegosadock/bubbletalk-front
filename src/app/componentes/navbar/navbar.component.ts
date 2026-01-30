import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen = false;
  menuStyles: { [key: string]: string } = {};

  @ViewChild('menu', { static: false }) menuEl?: ElementRef;
  @ViewChild('toggle', { static: false }) toggleEl?: ElementRef;
  isMobileView = false;

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as Node;
    const clickedInsideNavbar = this.el.nativeElement.contains(target);
    const clickedMenu = !!(this.menuEl && this.menuEl.nativeElement.contains(target));
    const clickedToggle = !!(this.toggleEl && this.toggleEl.nativeElement.contains(target));
    if (!clickedInsideNavbar && !clickedMenu && !clickedToggle) {
      this.menuOpen = false;
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (this.menuOpen) {
      this.positionMenu();
    }
  }

  toggleMenu(event: Event) {
    this.menuOpen = !this.menuOpen;
    // determine mobile view
    this.isMobileView = window.innerWidth <= 600;
    if (this.menuOpen) {
      // wait for menu DOM to render, then position
      setTimeout(() => this.positionMenu());
    }
  }

  private positionMenu() {
    try {
      const toggleRect = this.toggleEl?.nativeElement.getBoundingClientRect();
      let menuWidth = 260; // default width (matches CSS)
      if (!toggleRect) return;

      const padding = 8;
      const isMobile = window.innerWidth <= 600;
      this.isMobileView = isMobile;
      let left: number;
      if (isMobile) {
        // drawer: full-width with small side margins, anchored to bottom
        menuWidth = Math.max(200, window.innerWidth - padding * 2);
        left = padding;
        this.menuStyles = {
          position: 'fixed',
          left: `${left}px`,
          right: `${left}px`,
          bottom: `${padding}px`,
          top: 'auto',
          width: `auto`,
          height: `auto`
        };
      } else {
        left = Math.round(toggleRect.right - menuWidth);
        if (left < padding) left = padding;
        if (left + menuWidth > window.innerWidth - padding) {
          left = window.innerWidth - menuWidth - padding;
        }
        const top = Math.round(toggleRect.bottom + 6);
        this.menuStyles = {
          position: 'fixed',
          top: `${top}px`,
          left: `${left}px`,
          right: 'auto',
          width: `${menuWidth}px`
        };
      }
    } catch (e) {
      // silent
    }
  }

  onBackdropClick() {
    this.menuOpen = false;
  }

  logout() {
    console.log('logout');
    alert('Logout function called');
    // authService.logout();
  }
}


