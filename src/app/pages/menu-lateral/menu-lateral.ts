import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-lateral',
  imports: [RouterLink],
  templateUrl: './menu-lateral.html',
  styleUrl: './menu-lateral.css'
})
export class MenuLateral {

  /**
   * Estado del menú (abierto/cerrado)
   */
  isOpen: boolean = false;

  /**
   * Suscripción para eventos del router
   */
  private routerSubscription?: Subscription;

  /**
   * Lista de rutas del menú para referencia
   */
  private menuRoutes: string[] = [
    '/home',
    '/extrañar-voz',
    '/dormir',
    '/dudas',
    '/reir',
    '/playlist',
    '/fotos',
    '/pareja',
    '/estadisticas'
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Suscribirse a los cambios de ruta para cerrar el menú automáticamente
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Cerrar menú en dispositivos móviles después de navegar
        if (this.isMobileDevice()) {
          this.closeMenu();
        }
      });
  }

  ngOnDestroy(): void {
    // Limpiar suscripciones
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  /**
   * Alternar estado del menú
   */
  toggleMenu(): void {
    this.isOpen = !this.isOpen;

    // Prevenir scroll del body cuando el menú está abierto
    this.toggleBodyScroll();

    // Log para debugging (opcional)
    console.log(`Menu ${this.isOpen ? 'opened' : 'closed'}`);
  }

  /**
   * Cerrar el menú
   */
  closeMenu(): void {
    if (this.isOpen) {
      this.isOpen = false;
      this.enableBodyScroll();
    }
  }

  /**
   * Abrir el menú
   */
  openMenu(): void {
    if (!this.isOpen) {
      this.isOpen = true;
      this.disableBodyScroll();
    }
  }

  /**
   * Manejar tecla Escape para cerrar el menú
   */
  /**
 * Manejar tecla Escape para cerrar el menú
 */
  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: Event): void {
    if (event instanceof KeyboardEvent && this.isOpen) {
      this.closeMenu();
      event.preventDefault();
    }
  }
  
  /**
   * Cerrar menú al hacer clic fuera de él (manejado por el overlay en el template)
   */
  @HostListener('window:resize', ['$event'])
  handleResize(event: any): void {
    // Cerrar menú si se cambia a pantalla grande
    if (window.innerWidth > 1024 && this.isOpen) {
      this.closeMenu();
    }
  }

  /**
   * Detectar si es un dispositivo móvil
   */
  private isMobileDevice(): boolean {
    return window.innerWidth <= 768;
  }

  /**
   * Controlar el scroll del body
   */
  private toggleBodyScroll(): void {
    if (this.isOpen) {
      this.disableBodyScroll();
    } else {
      this.enableBodyScroll();
    }
  }

  /**
   * Deshabilitar scroll del body
   */
  private disableBodyScroll(): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    }
  }

  /**
   * Habilitar scroll del body
   */
  private enableBodyScroll(): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
  }

  /**
   * Verificar si una ruta está activa (método auxiliar)
   */
  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }

  /**
   * Navegar a una ruta específica
   */
  navigateToRoute(route: string): void {
    this.router.navigate([route]);

    // Cerrar menú después de navegar en móviles
    if (this.isMobileDevice()) {
      setTimeout(() => {
        this.closeMenu();
      }, 300); // Pequeño delay para mejor UX
    }
  }

  /**
   * Obtener el título de la página actual
   */
  getCurrentPageTitle(): string {
    const currentRoute = this.router.url;
    const routeTitles: { [key: string]: string } = {
      '/home': '100 Razones',
      '/extrañar-voz': 'Cuando extrañes mi voz',
      '/dormir': 'Para dormir tranquila',
      '/dudas': 'Cuando dudes de nosotros',
      '/reir': 'Para hacerte reír',
      '/playlist': 'Playlist',
      '/fotos': 'Fotos interactivas',
      '/pareja': 'Modo pareja',
      '/estadisticas': 'Estadísticas'
    };

    return routeTitles[currentRoute] || 'Mi Amor';
  }

  /**
   * Verificar si hay rutas disponibles
   */
  hasMenuRoutes(): boolean {
    return this.menuRoutes.length > 0;
  }

  /**
   * Obtener información del menú para analytics (opcional)
   */
  getMenuAnalytics(): { totalRoutes: number; currentRoute: string; isOpen: boolean } {
    return {
      totalRoutes: this.menuRoutes.length,
      currentRoute: this.router.url,
      isOpen: this.isOpen
    };
  }
}
