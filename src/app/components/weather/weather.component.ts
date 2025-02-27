// import { Component } from '@angular/core';
// import { NgIf } from '@angular/common'; // ✅ Import NgIf

// @Component({
//   selector: 'app-weather',
//   standalone: true,
//   imports: [NgIf], // ✅ Add NgIf to the imports array
//   templateUrl: './weather.component.html',
//   styleUrls: ['./weather.component.css']
// })
// export class WeatherComponent {
//   city = 'Paris';
//   temperature = 22;
//   condition = 'Ensoleillé';
//   conditionIcon = 'assets/sun.png'; // Default icon

//   refreshWeather() {
//     const randomTemp = Math.floor(Math.random() * 15) + 10;
//     const conditions = [
//       { name: 'Ensoleillé', icon: 'assets/sun.png' },
//       { name: 'Nuageux', icon: 'assets/cloud.jpg' },
//       { name: 'Pluvieux', icon: 'assets/rain.jpg' },
//       { name: 'Orageux', icon: 'assets/storm.jpg' }
//     ];

//     const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];

//     this.temperature = randomTemp;
//     this.condition = randomCondition.name;
//     this.conditionIcon = randomCondition.icon;
//   }
// }
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // ✅ Import HttpClientModule

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [NgIf, HttpClientModule], // ✅ Add HttpClientModule here
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city = 'Paris';
  temperature!: number;
  condition!: string;
  conditionIcon!: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.http.get<any[]>(`http://localhost:8080/weather/${this.city}`)
      .subscribe((updates) => {
        if (updates.length > 0) {
          const latest = updates[updates.length - 1];
          this.temperature = latest.temperature;
          this.condition = latest.condition;
          this.setWeatherIcon(latest.condition);
        }
      });
  }

  

  setWeatherIcon(condition: string) {
    const icons: { [key: string]: string } = {
      'Ensoleillé': 'assets/sun.png',
      'Nuageux': 'assets/cloud.jpg',
      'Pluvieux': 'assets/rain.jpg',
      'Orageux': 'assets/storm.jpg'
    };
    this.conditionIcon = icons[condition] || 'assets/default.png';
  }
}
