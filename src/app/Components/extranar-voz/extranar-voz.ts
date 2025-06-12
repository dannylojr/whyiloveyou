import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-extranar-voz',
  imports: [NgClass, NgFor],
  templateUrl: './extranar-voz.html',
  styleUrl: './extranar-voz.css'
})
export class ExtranarVoz {
  audios = [
    { titulo: 'Te amo', ruta: 'assets/audios/te_amo.mp3' },
    { titulo: 'Buenas noches MI VIDA', ruta: 'assets/audios/buenas_noches.mp3' },
    { titulo: 'Te extraño', ruta: 'assets/audios/te_extrano.mp3' },
    { titulo: 'Nunca estás sola', ruta: 'assets/audios/compania.mp3' },
    { titulo: 'Sonrisa linda', ruta: 'assets/audios/sonrisa_linda.mp3' }
  ];

  audioActivo: string | null = null;

  activarLatido(titulo: string) {
    this.audioActivo = titulo;
  }

  desactivarLatido(titulo: string) {
    if (this.audioActivo === titulo) {
      this.audioActivo = null;
    }
  }
}
