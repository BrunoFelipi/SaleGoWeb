app.controller('publicarCtrl', function($scope, toastr, $location){

    $('.chips-placeholder').material_chip({
        placeholder: '+ Tag',
        secondaryPlaceholder: 'Insira uma Tag',
    });

    $scope.countChar = function () {
        alert('a');
        var len = $('#textarea').val();
        if (len.length >= 500) {
          val.value = val.value.substring(0, 500);
        } else {
          $('#charNum').value = 500 - len;
        }
      };

    $scope.s = function(){

        var bla = $('#textarea').val();
        alert(bla.length);

        if(bla.length > 5000){
            alert('Limite máximo de caracteres atingido: 5000');
            return;
        }

        var data = $('.chips-placeholder').material_chip('data');
        console.log(data);

        for(var i = 0; i < data.length; i++){
            console.log(data[i].tag);
        }
    }
});
