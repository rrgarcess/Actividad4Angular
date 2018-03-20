import { Injectable } from '@angular/core';
import {Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx' ;

@Injectable()
export class AlumnoService {

  private url = "http://localhost:9090/Actividad4/alumno";

  constructor(private http: Http) {
    if (!this.http){
      console.log('Service ok');
    }
  }

  get(){
    return this.http.get(this.url)
      .map(res => res.json())
      .toPromise();
  }

  /*getAlumnos(): Promise<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.url + '/alumno')
      .map(r => r)
      .toPromise();
  }*/

}
