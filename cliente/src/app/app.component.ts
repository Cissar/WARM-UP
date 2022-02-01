import { Component } from '@angular/core';
import { NoticiasProvider } from './providers/noticia.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cliente';
  dataNoticia = [];

  constructor(private noticiasProvider: NoticiasProvider) {}

  ngOnInit(): void {
    this.callService();
  }

  callService(): void {
    this.noticiasProvider.getNoticias().subscribe(
      data => this.dataNoticia = data,
      err => alert('h ocurrido un error ... recaega la página')
    );
  }

  onFileDropped() {
    this.callService();
  }
}
