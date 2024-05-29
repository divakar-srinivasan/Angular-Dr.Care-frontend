import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [RouterOutlet ,FormsModule,HttpClientModule  ,RouterLink ],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  title = 'hello everyone ';
}
