const BASE_URL = 'http://numbersapi.com/15?json';

let my_fav_num = axios.get(BASE_URL);

my_fav_num
.then(res => {
    console.log(res.data);
    $("#num_results").append(`<li>${res.data.text}</li>`)
    return axios.get(BASE_URL);
})
.then(res => {
    console.log(res.data)
    $("#num_results").append(`<li>${res.data.text}</li>`)
    return axios.get(BASE_URL);
})
.then(res => {
    console.log(res.data)
    $("#num_results").append(`<li>${res.data.text}</li>`)
    return axios.get(BASE_URL);
})
.then(res => {
    console.log(res.data)
    $("#num_results").append(`<li>${res.data.text}</li>`)
    return axios.get(BASE_URL);
})
.catch(err => console.log(err))

// ********************************************

let number_range = axios.get('http://numbersapi.com/15..20?json');

number_range
.then(res => {
    console.log(res.data)
})