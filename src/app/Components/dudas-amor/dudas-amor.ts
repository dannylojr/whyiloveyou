import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

interface Memory {
  image: string;
  alt: string;
  text: string;
  hearts: string[];
}

@Component({
  selector: 'app-dudas-amor',
  imports: [NgFor],
  templateUrl: './dudas-amor.html',
  styleUrls: ['./dudas-amor.css'],
})
export class DudasAmor {
  @ViewChild('loveLetter', { static: false }) loveLetter!: ElementRef;

  mostrarCarta: boolean = false;
  buttonText: string = 'Abrir carta de amor';

  memories: Memory[] = [
    {
      image: 'assets/images/logros.jpeg',
      alt: 'Recuerdo 1',
      text: 'Quiero celebrar tus logros, y que tú celebres conmigo los míos.',
      hearts: ['❤️', '💕', '❤️']
    },
    {
      image: 'assets/images/matrimonio.jpeg',
      alt: 'Recuerdo 2',
      text: 'Me pediste matrimonio y me quiero quedar para siempre contigo.',
      hearts: ['💖', '❤️', '💖']
    },
    {
      image: 'assets/images/vida_juntos.jpeg',
      alt: 'Recuerdo 3',
      text: 'Quiero tener una vida contigo.',
      hearts: ['❤️', '💕', '❤️']
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Inicialización del componente
  }

  ngAfterViewInit(): void {
    // Animación de entrada suave al cargar el componente
    this.fadeInOnLoad();

    // Configurar efecto parallax
    this.setupParallaxEffect();
  }

  toggleCarta(): void {
    this.mostrarCarta = !this.mostrarCarta;

    if (this.mostrarCarta) {
      this.buttonText = 'Cerrar carta';

      // Scroll suave hacia la carta después de que se muestre
      setTimeout(() => {
        if (this.loveLetter && this.loveLetter.nativeElement) {
          this.loveLetter.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      this.buttonText = 'Abrir carta de amor';
    }
  }

  private fadeInOnLoad(): void {
    // Efecto de desvanecimiento al cargar
    if (typeof document !== 'undefined') {
      const body = document.body;
      body.style.opacity = '0';
      body.style.transition = 'opacity 1s ease';

      setTimeout(() => {
        body.style.opacity = '1';
      }, 100);
    }
  }

  private setupParallaxEffect(): void {
    // Efecto parallax en scroll
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const background = document.querySelector('.love-doubts-container::before') as HTMLElement;

        if (background) {
          const speed = scrolled * 0.5;
          background.style.transform = `translateY(${speed}px)`;
        }
      });
    }
  }

  // Método para manejar errores de carga de imágenes
  onImageError(event: any): void {
    console.log('Error loading image:', event);
    // Puedes agregar una imagen por defecto aquí si es necesario
  }

  // Método para trackBy en *ngFor para mejor rendimiento
  trackByMemory(index: number, memory: Memory): string {
    return memory.image + memory.text;
  }
}