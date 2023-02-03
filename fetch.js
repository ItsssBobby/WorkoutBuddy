var myKey = '&apiKeyYeXnj8j9ucRYQoYZRqppcw==JdSJPgGAPE7ZjzMs';

var muscle = 'biceps'
$.ajax({
    method: 'GET',
    url: `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
    headers: { 'X-Api-Key': 'myKey'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});