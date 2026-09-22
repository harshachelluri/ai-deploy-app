import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly http = inject(HttpClient);
  protected readonly apiMessage = signal('Connecting to the Python API...');
  protected readonly apiOnline = signal(false);

  constructor() {
    this.http.get<{ message: string }>('http://localhost:8000/api/hello').subscribe({
      next: (response) => {
        this.apiMessage.set(response.message);
        this.apiOnline.set(true);
      },
      error: () => this.apiMessage.set('Start the backend on port 8000 to connect.')
    });
  }
}
