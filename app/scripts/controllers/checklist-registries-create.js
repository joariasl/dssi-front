'use strict';

/**
 * @ngdoc function
 * @name dssiFrontApp.controller:ChecklistRegistriesCreateCtrl
 * @description
 * # ChecklistRegistriesCreateCtrl
 * Controller of the dssiFrontApp
 */
angular.module('dssiFrontApp')
  .controller('ChecklistRegistriesCreateCtrl', function (Turns, moment, $localStorage, ChecklistItem, ChecklistRegistry, notificationService, $state, $filter) {
    var vm = this;
    vm.save = save;
    vm.checklistTurns = Turns.turns;
    vm.updateTotalOk = updateTotalOk;

    // Datepicker
    vm.datepicker = {
      format: 'dd/MM/yyyy',
      //date: new Date(),
      opened: false,
      dateOptions: {
        //initDate: moment(),
        maxDate: moment(),
        minDate: moment().subtract(1, 'month'),
        startingDay: 1
      },
      altInputFormats: ['d!-M!-yyyy'],
      open: function(){
        vm.datepicker.opened = true;
      }
    };

    vm.checklistRegistry = new ChecklistRegistry({
      date: new Date(),
      turn: null,
      property_id: $localStorage.property_id,
      credential_avaliable: 0,
      credential_delivered: 0,
      checklist_entries: []
    });
    vm.checklistItems = ChecklistItem.query({
      property_id: $localStorage.property_id,
      without_disabled: 1
    });
    vm.checklistItems.$promise.then(function(){
      angular.forEach(vm.checklistItems, function(value, key){
        vm.checklistRegistry.checklist_entries.push({
          checklist_item_id: value.id,
          response: false,
          observations: null
        });
      });
    });

    vm.total_ok = 0;
    updateTotalOk();

    ////////////

    function save(){
      // vm.checklistRegistry.date = dateFormat(vm.datepicker.value);
      vm.checklistRegistry.$save().then(function(){
        notificationService.success('Checklist guardada!');
        $state.go('^.checklist-registries');
      }, function(){
        notificationService.error('No ha sido posible atender la solicitud.');
      });;
    }

    function updateTotalOk(){
      vm.total_ok = $filter('filter')(vm.checklistRegistry.checklist_entries, {response:true}).length;
    }

    // function dateFormat(date){
    //   return $filter('date')(date, 'yyyy-MM-dd');
    // }
  });
