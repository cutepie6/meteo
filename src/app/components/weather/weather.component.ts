import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // ✅ Import NgIf

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [NgIf], // ✅ Add NgIf to the imports array
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  city = 'Paris';
  temperature = 22;
  condition = 'Ensoleillé';
  conditionIcon = 'assets/sun.png'; // Default icon

  refreshWeather() {
    const randomTemp = Math.floor(Math.random() * 15) + 10;
    const conditions = [
      { name: 'Ensoleillé', icon: 'assets/sun.png' },
      { name: 'Nuageux', icon: 'assets/cloud.jpg' },
      { name: 'Pluvieux', icon: 'assets/rain.jpg' },
      { name: 'Orageux', icon: 'assets/storm.jpg' }
    ];

    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];

    this.temperature = randomTemp;
    this.condition = randomCondition.name;
    this.conditionIcon = randomCondition.icon;
  }
}
