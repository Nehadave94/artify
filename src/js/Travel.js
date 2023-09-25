import { createApi } from 'unsplash-js';
const main = document.querySelector('#main');
const unsplash = createApi({
    accessKey: "qrKFtvSv8o75ROTknSFmcYIUj_zlPTn23f1tI4LrDzc"
})

unsplash.search.getPhotos({
    query: 'Travel',
    page: 1,
    perPage: 12,
    orientation: 'portrait'
}).then(result => {
    if (result.type == 'success') {
        const photos = result.response.results;
        console.log(photos);
        const getUrls = photos.map((i) => {
            return `<img src="${i.urls.small}" />`;
        });
        main.innerHTML = getUrls.join('');
    }
});