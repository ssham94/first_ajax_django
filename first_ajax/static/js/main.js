document.addEventListener("DOMContentLoaded", function() {
    const runAjax = document.querySelector('.createRequest');
    const pingPong = document.querySelector('.pingPong');
    const section = document.querySelector('section');
    const count = document.querySelector('.count');
    const time = document.querySelector('.time');
    const car = document.querySelector('.car');
    const carList = document.querySelector('.car_list')
    runAjax.addEventListener('click', function() {
        let request = axios.get('http://intro-ajax-api.herokuapp.com/').then(function(response){
            //Checing to see that we're getting a actual messaage 
        })
    })
    pingPong.addEventListener('click', function() {
        let pingRequest = axios.get('http://intro-ajax-api.herokuapp.com/ping').then(function(response){
            console.log(`Response data: ${response.data}`);
            const dataElem = document.createElement('p');
            dataElem.innerHTML = response.data;
            section.append(dataElem);
        }).catch(function(error){
            console.log('Issues connecting, try a different URL');
            const issue = document.createElement('p');
            issue.innerHTML = 'Issues';
            section.append(issue);
        }).then(function(response){
            console.log('Finished the thing don\'t worry about it')
        });
    });
    count.addEventListener('click', function() {
        let countRequest = axios.get('http://intro-ajax-api.herokuapp.com/count').then(function(response){
            console.log(`Response data: ${response.data}`);
            const countData = document.createElement('p');
            countData.innerHTML = response.data;
            section.append(countData)
        })
    })
    time.addEventListener('click', function(response){
        let timeRequest = axios.get('http://intro-ajax-api.herokuapp.com/time', {params:{timezone:'Pacific/Honolulu'}}).then(function(response){
            console.log('ZA WORUDO');
            console.log(`${response.data}`)
            const timeData = document.createElement('p');
            timeData.innerHTML = response.data;
            section.append(timeData)
        })
    })
    car.addEventListener('click', function(response){
        let carRequest = axios.get('http://intro-ajax-api.herokuapp.com/a_car').then(function(response){
            console.log('Got Car');
            const carData = document.createElement('li');
            carData.innerHTML = response.data;
            carList.append(carData);
        }).catch(function(error){
            console.log('There was an issue');
            const issue = document.createElement('li');
            issue.innerHTML = 'There was an issue';
            carList.append(issue);
        })
    })
});
