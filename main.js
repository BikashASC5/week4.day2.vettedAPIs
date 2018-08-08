
//https://developers.giphy.com/docs/
//https://www.flickr.com/services/api/


//javascript, jQuery
const xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=5");
   xhr.done(function(data) {
       console.log("success got data", data);
   });

const naruto = document.getElementById('naruto');
naruto.addEventListener('click', searchNaruto);

const kakashi = document.getElementById('kakashi');
kakashi.addEventListener('click', searchKakashi);

const itachi = document.getElementById('itachi');
itachi.addEventListener('click', searchItachi);

const shikamaru = document.getElementById('shikamaru');
shikamaru.addEventListener('click', searchShikamaru);

const gaara = document.getElementById('gaara');
gaara.addEventListener('click', searchGaara);

const konan = document.getElementById('konan');
konan.addEventListener('click', searchKonan);


const sasuke = document.getElementById('sasuke');
const hashirama = document.getElementById('hashirama');
const hinata = document.getElementById('hinata');
const sakura = document.getElementById('sakura');
const obito = document.getElementById('obito');

sasuke.addEventListener('click', searchSasuke);
hashirama.addEventListener('click', searchHashirama);
hinata.addEventListener('click', searchHinata);
sakura.addEventListener('click', searchSakura);
obito.addEventListener('click', searchObito);

function randomFromArray(array) {
   const randomIndex = Math.random();
   const range = randomIndex * (array.length);
   const finalIndex = Math.floor(range);
   return array[finalIndex];
}

function randomAnyRange(low, high) {
   const randomNumber = Math.floor((Math.random() * (high - low)) + low);
   return randomNumber;
}

function searchNaruto() {
   const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=naruto&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
   zhr.done(function(data) {
       const ranIndex = randomAnyRange(0, data.data.length);
       naruto.src =  data.data[ranIndex].images.original.url;
   });
}

function searchKakashi() {
    const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=kakashi&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
    zhr.done(function(data) {
        const ranIndex = randomAnyRange(0, data.data.length);
        kakashi.src =  data.data[ranIndex].images.original.url;
    });
 }

 function searchItachi() {
    const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=itachi&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
    zhr.done(function(data) {
        const ranIndex = randomAnyRange(0, data.data.length);
        itachi.src =  data.data[ranIndex].images.original.url;
    });
 }

 function searchShikamaru() {
    const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=shikamaru&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
    zhr.done(function(data) {
        const ranIndex = randomAnyRange(0, data.data.length);
        shikamaru.src =  data.data[ranIndex].images.original.url;
    });
 }

 function searchGaara() {
    const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=gaara&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
    zhr.done(function(data) {
        const ranIndex = randomAnyRange(0, data.data.length);
        gaara.src =  data.data[ranIndex].images.original.url;
    });
 }

 function searchKonan() {
    const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=konan&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
    zhr.done(function(data) {
        const ranIndex = randomAnyRange(0, data.data.length);
        konan.src =  data.data[ranIndex].images.original.url;
    });
 }

 function searchSasuke() {
    const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=sasuke&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
    zhr.done(function(data) { 
        const ranIndex = randomAnyRange(0, data.data.length);
        sasuke.src =  data.data[ranIndex].images.original.url;
    });
}

function searchHashirama() {
    const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=hashirama&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
    zhr.done(function(data) { 
        const ranIndex = randomAnyRange(0, data.data.length);
        hashirama.src =  data.data[ranIndex].images.original.url;
    });
}

function searchHinata() {
    const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=hinata&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
    zhr.done(function(data) { 
        const ranIndex = randomAnyRange(0, data.data.length);
        hinata.src =  data.data[ranIndex].images.original.url;
    });
}

function searchSakura() {
    const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=sakura&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
    zhr.done(function(data) { 
        const ranIndex = randomAnyRange(0, data.data.length);
        sakura.src =  data.data[ranIndex].images.original.url;
    });
}

function searchObito() {
    const zhr = $.get("http://api.giphy.com/v1/gifs/search?q=obito&api_key=BQiKDYu7Qz0C8sT3M9WNNJbUA5SMpsrY&limit=25");
    zhr.done(function(data) { 
        const ranIndex = randomAnyRange(0, data.data.length);
        obito.src =  data.data[ranIndex].images.original.url;
    });
}

