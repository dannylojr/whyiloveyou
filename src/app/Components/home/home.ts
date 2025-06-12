import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Razon {
  numero: number;
  texto: string;
  desbloqueado: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [NgIf, NgFor, FormsModule]
})
export class HomeComponent implements OnInit {
  razones: Razon[] = [];
  filtroNumero: number | null = null;
  carta: string = 'Gracias por estos 100 momentos llenos de amor, ternura y locura. Te amo. 💜';
  abierto = new Set<number>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.cargarRazones();
  }

  private cargarRazones(): void {
    this.http.get<string[]>('assets/razones.json').subscribe({
      next: (data) => {
        const desbloqueadas = JSON.parse(localStorage.getItem('desbloqueadas') || '[]');
        this.razones = data.map((texto, index) => ({
          numero: index + 1,
          texto,
          desbloqueado: desbloqueadas.includes(index + 1)
        }));
      },
      error: (error) => {
        console.error('Error al cargar las razones:', error);
        // Opcional: mostrar mensaje de error al usuario
      }
    });
  }

  abrirRazon(razon: Razon): void {
    // Verificar si se puede desbloquear la razón
    const desbloqueadas = this.razones.filter(r => r.desbloqueado).length;

    if (!razon.desbloqueado && razon.numero === desbloqueadas + 1) {
      this.desbloquearRazon(razon);
    }

    // Abrir/cerrar la carta
    if (this.abierto.has(razon.numero)) {
      this.abierto.delete(razon.numero);
    } else {
      this.abierto.add(razon.numero);
    }
  }

  private desbloquearRazon(razon: Razon): void {
    razon.desbloqueado = true;
    const guardadas = JSON.parse(localStorage.getItem('desbloqueadas') || '[]');
    if (!guardadas.includes(razon.numero)) {
      guardadas.push(razon.numero);
      localStorage.setItem('desbloqueadas', JSON.stringify(guardadas));
    }
  }

  cerrarRazon(razon: Razon): void {
    if (this.abierto.has(razon.numero)) {
      this.abierto.delete(razon.numero);
      console.log(`Razón ${razon.numero} cerrada`);
    }
  }

  cerrarTodasLasRazones(): void {
    this.abierto.clear();
  }

  get todasDesbloqueadas(): boolean {
    return this.razones.length > 0 && this.razones.every(r => r.desbloqueado);
  }

  razonesFiltradas(): Razon[] {
    if (!this.filtroNumero) {
      return this.razones;
    }
    return this.razones.filter(r => r.numero === this.filtroNumero);
  }

  // Método auxiliar para debugging
  getEstadoDebug(): string {
    const desbloqueadas = this.razones.filter(r => r.desbloqueado).length;
    const abiertas = this.abierto.size;
    return `Desbloqueadas: ${desbloqueadas}/${this.razones.length}, Abiertas: ${abiertas}`;
  }
}