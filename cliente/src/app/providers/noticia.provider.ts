import {
    Injectable
  } from '@angular/core';
  import {
    environment
  } from 'src/environments/environment'
  
  
  // Interface
  import {
    HttpClient,
    HttpHeaders
  } from '@angular/common/http';
  import {
    Observable
  } from 'rxjs';
  
  @Injectable()
  export class NoticiasProvider {
    constructor(public http: HttpClient) {}
  
    public getNoticias(): Observable < any > {
      return this.http.get(environment.ENDPOINT + environment.SERVICIOS.GET_NOTICIA, );
    }

    public deleteNoticia(id: any): Observable < any > {
        return this.http.delete(environment.ENDPOINT + environment.SERVICIOS.DELETE_NOTICIA, {
            body:{ _id: id}
        });
      }

  }
  