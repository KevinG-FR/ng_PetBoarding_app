import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./layout/navigation/navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, NavigationComponent],
  templateUrl: 'app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  private faIconLibrary: FaIconLibrary = inject(FaIconLibrary);

  http = inject(HttpClient);
  title = 'ng-PetBoarding-app'; 
  data: any;

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe({
      next: response => this.data = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })

    this.intiAwesome();
  }

  private intiAwesome(): void {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}