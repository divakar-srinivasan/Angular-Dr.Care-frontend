import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HelloComponent } from './Components/hello.component';
import { HeaderComponent } from './header/header.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,FormsModule,HttpClientModule  ,RouterLink,HelloComponent ,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Divakar';
}
