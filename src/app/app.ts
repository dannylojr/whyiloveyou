import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Components/home/home';
import { MenuLateral } from './pages/menu-lateral/menu-lateral';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuLateral],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'myapp';
}
