import { Component, OnInit } from '@angular/core';
import {AlumnoService} from '../../services/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  alumnos: any[];
  alumnoActivo;

  constructor( private alumnoService: AlumnoService ) {

  }

  ngOnInit() {
    this.alumnoService.get()
      .then((items) => {
        this.alumnos = items;
        this.alumnoActivo = this.alumnos[4];
        console.log(this.alumnos);
      })
      .catch( (error) => console.log(error));
  }

  activarAlumno(alumno: any) {
    console.log('mostrar: %o', alumno);
    this.alumnoActivo = alumno;
  }

  nextAlumno(){
    let index = this.alumnoActivo.id;
    if (index < this.alumnos.length){
      this.alumnoActivo = this.alumnos[index];
    }
  }

  prevAlumno(){
    let index = this.alumnoActivo.id - 2;
    if (index >= 0){
      this.alumnoActivo = this.alumnos[index];
    }
  }
}
