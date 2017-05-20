# Dreams - Sistema de Seguridad Integral

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

## Recursos requeridos
* Cliente Git: http://git-scm.com/ (Marcar agregar variables de entorno)
* NodeJS: https://nodejs.org/ (Marcar agregar variables de entorno)
* Actualizar versión de npm:
  ```sh
  npm install -g npm
  ```
* Ruby: http://rubyinstaller.org/ (Marcar agregar variables de entorno)
* compass (SASS):
  ```sh
  gem install compass
  ```
  (o usando gestor de packetes del sistema operativo en caso de ser necesario)
* Recursos NodeJS:
  ```sh
  npm install -g grunt-cli bower yo generator-karma generator-angular
  ```
* Instalar Karma para correr Unit tests:
  ```sh
  # Install Karma:
  npm install karma --save-dev

  # Install plugins that your project needs:
  npm install karma-jasmine karma-chrome-launcher --save-dev

  # Command line interface Karma
  npm install -g karma-cli
  ```

## Iniciar proyecto

para descargar los recursos necesarios para inicializar el proyecto. Ejecutar en el directorio del proyecto AngularJS:
```sh
npm install
bower install
```

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
