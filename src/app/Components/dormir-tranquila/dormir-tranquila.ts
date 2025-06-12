import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dormir-tranquila',
  imports: [NgFor, NgIf],
  templateUrl: './dormir-tranquila.html',
  styleUrl: './dormir-tranquila.css'
})
export class DormirTranquila {
  audios = [
    { titulo: 'Buenas noches, mi amochito', ruta: 'assets/audios/dormir/buenas_noches2.mp3' },
    { titulo: 'Relájate y cierra los ojos', ruta: 'assets/audios/dormir/relajar.mp3' },
    { titulo: 'Historia: Comó me enamore y me enamoras', ruta: 'assets/audios/dormir/historia.mp3' }
  ];

  audioInstance: HTMLAudioElement | null = null;
  cunaAudio: HTMLAudioElement | null = null;
  audioActivo: string | null = null;
  timerId: any;

  ngOnInit(): void {
    this.reproducirCuna();

    this.timerId = setTimeout(() => {
      this.detenerTodo();
    }, 10 * 60 * 1000); // 10 minutos
  }

  ngOnDestroy(): void {
    this.detenerTodo();
  }

  reproducir(index: number) {
    this.detenerAudio();

    const audio = new Audio(this.audios[index].ruta);
    this.audioInstance = audio;
    this.audioActivo = this.audios[index].titulo;
    audio.play();

    audio.onended = () => {
      this.audioActivo = null;
    };
  }

  detenerAudio() {
    if (this.audioInstance) {
      this.audioInstance.pause();
      this.audioInstance.currentTime = 0;
      this.audioActivo = null;
    }
  }

  reproducirCuna() {
    this.cunaAudio = new Audio('assets/audios/dormir/cuna.mp3');
    this.cunaAudio.loop = true;
    this.cunaAudio.volume = 0.2;
    this.cunaAudio.play();
  }

  detenerCuna() {
    if (this.cunaAudio) {
      this.cunaAudio.pause();
      this.cunaAudio.currentTime = 0;
    }
  }

  detenerTodo() {
    this.detenerAudio();
    this.detenerCuna();
    clearTimeout(this.timerId);
  }
}
