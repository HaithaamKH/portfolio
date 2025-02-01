import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name: string = "Haitham Al-Khateeb"
  position:string ="Software Developer";
  aboutMe : string = "I'm a passionate software developer with a Bachelor's degree in Computer Science. I have a deep love for technology and enjoy solving complex problems through code. Whether it's building scalable web applications or diving into the latest tech trends, I'm always eager to learn and grow. Let's create something amazing together!"

}
