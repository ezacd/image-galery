const imagesContainer = document.querySelector('.images');

getData()

async function getData() {
    imagesContainer.innerHTML = '';
    const prompt = document.getElementById('input').value;
    const url = `https://api.unsplash.com/photos/random?query=${prompt}&orientation=landscape&count=30&client_id=tUHkx6rrpBxFdxS242We29pSLTq_qDJR7N9yr-qAz0c`;
    const res = await fetch(url);
    const data = await res.json();
    showData(data);
}

function showData(data) {
    data.forEach(photo => {
        const img = document.createElement('img');
        img.classList.add('img');
        img.src = photo.urls.regular;
        img.alt = 'img';
        imagesContainer.appendChild(img);
    });
}

document.querySelector('#input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') getData();
});