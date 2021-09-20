const baseURL = "http://deckofcardsapi.com/api/deck/new/shuffle"

let card = axios.get(baseURL);
let deck_id = null;
card
.then(res => {
    console.log(res.data);
    deck_id = res.data.deck_id;
    // console.log(deck_id);

    // for(let i = 0; i < res.data.cards.length; i++){
    //     $("#card").append(`<p>${res.data.cards[i].suit} of ${res.data.cards[i].value}</p>`);
    // }
    let cards = res.data.remaining;
    console.log(cards);
})
    
$('#add_card').on('click', function(){
    axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw`)
    .then(res => {
    console.log(res.data);
    // cards--;
    // console.log(cards);
    $("#card").append(`<img src=${res.data.cards[0].image}>`);
    });
})

// .then(res => {
//     console.log(res.data)
//     for(let i = 0; i < res.data.cards.length; i++){
//         $("#card").append(`<p>${res.data.cards[i].suit} of ${res.data.cards[i].value}</p>`);
//     }
// })