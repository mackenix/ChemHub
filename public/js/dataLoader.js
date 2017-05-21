var myObj = [{ "name":"John", "age":31, "address":"123 Street","city":"New York" }];

$(document).ready(function() {
    $('#table').DataTable( {
        "ordering": true,
        "data": myObj,
        "searching": false,
        "columns": [
          {'data':'name'},
          {'data':'age'},
          {'data':'address'},
          {'data':'city'}
        ]

    });
});
var root = 'https://jsonplaceholder.typicode.com';
//root + '/posts/1',

/*$(document).ready(function() {
    $.ajax({
        url: '/search',
        method: 'get',
        dataType: 'json'
      }).then(function(data){
        console.log(data);
        $('#table').DataTable( {
            data: JSON.stringify(data),
            'scrollY': 300,
            columns: [
                {
                    'data': 'userId'
                },
                {
                    'data': 'id'
                },
                {
                    'data': 'title'
                },
                {
                    'data': 'body'
                },
            ]
        });
      });
}); */
