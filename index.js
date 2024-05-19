
document.getElementById('viewGamesButton').addEventListener('click', async () => {
    try {
        const res = await fetch('http://localhost:3000/games');
        if (!res.ok) {
            throw new Error(`http error status ${res.status}`);
        }

        const data = await res.json();

        const names = data.map(game => game.title).join('\n');
        const platforms = data.map(game => game.platforms).join('\n');
        const prices = data.map(game => game.worth).join('\n');
        const images = data.map(game => game.image).join('\n');

        const arrNames = names.split("\n");
        const arrPlatforms = platforms.split("\n");
        const arrPrices = prices.split("\n");
        const arrImages = images.split("\n");

        const arrGame = [];
        for (let i = 0; i < arrNames.length; i++) {
            arrGame.push(new GamesClass(arrNames[i], arrPlatforms[i], arrPrices[i], arrImages[i]));
        }

        arrGame.forEach(url => {
            const cardContainer = document.createElement('div');

            cardContainer.classList.add('card');

            cardContainer.style.margin = "5%"; 

            const imgElement = document.createElement('img');

            imgElement.src = url.image;
            imgElement.alt = 'svg image';
            imgElement.width = 100;
            imgElement.height = 100;


            const h3Name = document.createElement('h3');
            h3Name.innerText = url.name;

            const h3Platform = document.createElement('h3');
            h3Platform.innerText = url.platforms;

            const h3Price = document.createElement('h3');
            h3Price.innerText = url.price;

            cardContainer.appendChild(imgElement);
            cardContainer.appendChild(h3Name);
            cardContainer.appendChild(h3Platform);
            cardContainer.appendChild(h3Price);

            document.getElementById('svgcontainer').appendChild(cardContainer);
        })
    }
    catch (error) {
        console.log('fetch error');
    }
})