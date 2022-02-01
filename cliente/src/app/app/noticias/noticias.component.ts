import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoticiasProvider } from 'src/app/providers/noticia.provider';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  @Input() noticia: any = {};
  @Output() reloadNoticia: any = new EventEmitter<any>();

  constructor(private noticiasProvider: NoticiasProvider) {}

  ngOnInit(): void {
    
  }
  borrarnoticia() {
    this.noticiasProvider.deleteNoticia(this.noticia._id).subscribe(
      data => {
        this.reloadNoticia.emit(true);
        alert('Noticia eliminada con éxito');
      },
      err => alert('ha ocurrido un error ... recarga la página')
    );
  }
}
