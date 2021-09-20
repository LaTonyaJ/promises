let baseURL = 'http://numbersapi.com';
let fav_num = 15;

async function favNum(){
    let res = await Promise.all([
        axios.get(`${baseURL}/${fav_num}?json`),
        axios.get(`${baseURL}/${fav_num}?json`),
        axios.get(`${baseURL}/${fav_num}?json`),
        axios.get(`${baseURL}/${fav_num}?json`)
    ]);

    for(let i = 0; i <= 3; i++){
    console.log(res[i].data)
    $('#num_results').append(`<p>${res[i].data.text}</p>`)
    }
}

favNum()