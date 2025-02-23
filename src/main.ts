import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { WeatherComponent } from './app/components/weather/weather.component'; // Import your component
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [provideAnimations()] // Add other providers if needed
}).catch(err => console.error(err));
