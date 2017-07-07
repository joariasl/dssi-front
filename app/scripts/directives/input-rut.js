'use strict';

/**
 * @ngdoc directive
 * @name dssiFrontApp.directive:inputRut
 * @description
 * # inputRut
 */
 angular.module('dssiFrontApp')
   .directive('inputRut', function () {
     return {
       template: '<input type="text" placeholder="11.222.333-K" ng-bind="changeValue()">',
       replace: true,
       require: 'ngModel',
       scope: {
         value: '=ngModel'
       },
       restrict: 'E',
       link: function (scope, element, attrs, ctrl) {
         scope.value = '';
         scope.changeValue=changeValue;

         ctrl.$parsers.push(rutValidity);

         ////////////
         function changeValue(){
           scope.value = formatRut(element.val(), false);
         }

         function rutValidity(value){
           if(verificarRut(value)){
             ctrl.$setValidity('Rut', true);
             element[0].setCustomValidity('');
           } else {
             ctrl.$setValidity('Rut', false);
             element[0].setCustomValidity('Rut inválido');
           }
           return value;
         }

         function formatRut(input_text, sin_puntos){
           var value = input_text.replace(/[^\dK]*|\-/gi,'');//Se reemplazará 2 veces, necesario para no permitir . al final ni guiones
           var dig=value.substr(value.length-1,1).replace(/[^\dK]*/gi,'');//Problemas con (-1) en IE
           var num=value.substr(0,value.length-1).replace(/[^\d]*/g,'');

           if(!sin_puntos){
             //if(!isNaN(num)) Borrado, para que vacíe también si no es caracter
             num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
             num = num.split('').reverse().join('').replace(/^[\.]/,'');
           }
           return ((num.length>0)?(num+'-'):'')+dig.toUpperCase();
         }

         function verificarRut(input_text){
           var value = input_text.replace(/[^\dK]*/gi,'');
           var dig=value.substr(value.length-1,1).replace(/[^\dK]*/gi,'');//Problemas con (-1) en IE
           var num=value.substr(0,value.length-1).replace(/[^\d]*/g,'');
           var digito, modulo;

           var suma = 0;
           for(var i=0,a=2,temprut=num; num.length>i; temprut /= 10,i++,a++){
             modulo = parseInt(temprut%10);
             if(a>7){
               a = 2;
             }
             suma += modulo*a;
           }

           var tempdigito = 11-(suma%11);
           if(tempdigito<10){
             digito = tempdigito;
           }else{
             if(tempdigito === 11){
               digito = 0;
             }else{
               if(tempdigito === 10){
                 digito = "K";
               }
             }
           }

           return dig.toUpperCase() === digito.toString() && input_text !== '';
         }
       }
     };
   });
