# Actividad4Angular

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 1.6.8.

## Descargar y ejecutar

Para ejecutar el proyecto puede descargarlo a un directorio o clonarlo directamente.

Al tenerlo descargado o clonado el proyecto necesitará correr el comando `npm install` dentro de la carpeta para descargar los archivos necesarios.

Si tiene `angular cli` instalado basta con ejecutar el comando `ng serve` para iniciar la aplicación.

Abra su navegador en la siguiente ruta para ver la aplicación funcionando `http://localhost:4200/`.


## Consumir Web Service

La aplicación hace consumo de un web service donde se listan usuarios, el cual debe correr localmente. Si levanta el servidor en 
otra dirección que no sea `http://localhost:9090/Actividad4/alumno` deberá especificarla en el archivo 
`scr/app/services/alumno.service.ts` con el nombre de `url`.
