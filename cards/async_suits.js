const baseURL = 'http://deckofcardsapi.com/api/deck/';
let deck_id = null;

async function shuffleCards(){
    let res = await axios.get(`${baseURL}/new/shuffle/`);
    deck_id = res.data.deck_id;
    console.log(res.data);
}

$('#add_card').on('click', async function(){
    let res = await axios.get(`${baseURL}/${deck_id}/draw`);
    console.log(res.data);
    $('#card').append(`<img src=${res.data.cards[0].image}>`)
});

shuffleCards();
