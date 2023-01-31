var muscle = 'biceps';
fetch (`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}` , {
  headers: {
    'X-Api-Key': 'YeXnj8j9ucRYQoYZRqppcw==JdSJPgGAPE7ZjzMs'
  },
})
.then((response) => {
  return response.json();
})
.then(data => {
  console.log(data);
})