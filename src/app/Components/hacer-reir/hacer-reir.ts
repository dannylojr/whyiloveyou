import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface VideoDivertido {
  url: string;
  descripcion: string;
}

@Component({
  selector: 'app-hacer-reir',
  imports: [NgFor],
  templateUrl: './hacer-reir.html',
  styleUrl: './hacer-reir.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HacerReir {
  videos: VideoDivertido[] = [
    {
      url: 'assets/videos/borrachera.mp4',
      descripcion: 'Ese fue el primer día que tomé, y de la icónica frase: "Quiero trago loco 🗣️".',
    },
    {
      url: 'assets/videos/basket.mp4',
      descripcion: 'Una de las razones por las que no jugaría basket, pero por ti sí lo haría.',
    },
    {
      url: 'assets/videos/bailando.mp4',
      descripcion: 'Jugando con mi gatita, sé que no es divertido, pero a mí me hace feliz.',
    }
  ];

  handleVideoError(event: Event) {
    console.error('Error al cargar el video:', event);
    alert('No se pudo cargar el video. Intenta con otro navegador o verifica la ruta.');
  }

  playVideo(event: MouseEvent) {
    const overlay = event.currentTarget as HTMLElement;
    const video = overlay.previousElementSibling as HTMLVideoElement;
    if (!video) return;
    if (video.paused) {
      video.play();
      overlay.style.display = 'none'; // Oculta el overlay cuando se reproduce
    } else {
      video.pause();
      overlay.style.display = 'flex'; // Muestra el overlay al pausar
    }
  }
}
