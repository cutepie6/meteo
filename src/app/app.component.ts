import { Component } from '@angular/core';
import { WeatherComponent } from './components/weather/weather.component'; // Import the component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherComponent], // Include your component here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'live-weather';
}
