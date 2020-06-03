let bannerFeatures = [
    {
        country: 'France, Bordeaux',
        flag: 'assets/icons/flags/france.svg',
        image: 'assets/images/banner/wine_bottles/1.png',
        name: 'Petrus, Chateau<br>Petrus',
        style: 'red - elegant, complex, aged in oak',
        year: '2004',
        isActive: 1,
        color: 'light-burgundy'
    },
    {
        country: 'USA, California',
        flag: 'assets/icons/flags/usa.svg',
        image: 'assets/images/banner/wine_bottles/2.png',
        name: 'Zinfandel Valley<br>Oaks, Fetzer',
        style: 'red - bright fruit, with good acidity, aged in oak.',
        year: '2018',
        isActive: 0,
        color: 'light-olive',
    },
    {
        country: 'USA, California',
        flag: 'assets/icons/flags/usa.svg',
        image: 'assets/images/banner/wine_bottles/3.png',
        name: 'Stories Cabernet<br>Sauvignon<br>Prospectors\'<br>Proof, Fetzer',
        style: 'red - powerful, rich, aged in oak',
        year: '2017',
        isActive: 0,
        color: 'light-yellow',
    },
    {
        country: 'France, Bordeaux',
        flag: 'assets/icons/flags/france.svg',
        image: 'assets/images/banner/wine_bottles/4.png',
        name: 'Chateau Mouton<br>Rothschild',
        style: 'red - elegant, complex, aged in oak',
        year: '2004',
        isActive: 0,
        color: 'light-violet',
    }
];

document.getElementById('bannerUpBtn').addEventListener('click', () => {
    let currentId = getCurrentBannerId();
    let nextId;

    if(currentId === 0) {
        nextId = 3;
    }
    else {
        nextId = currentId - 1;
    }
    document.querySelector('#reveal').classList.add('reveal')
    //replace the data inside DOM with next Object and update the object
    setTimeout(() => updateBanner(nextId, currentId, bannerFeatures), 800);
    setTimeout(() => {
        document.querySelector('#reveal').classList.remove('reveal')
    }, 2000);
});

document.getElementById('bannerDownBtn').addEventListener('click', () => {
    let currentId = getCurrentBannerId();
    let nextId;

    if(currentId === 3) {
        nextId = 0;
    }
    else {
        nextId = currentId + 1;
    }

    document.querySelector('#reveal').classList.add('reveal')
    //replace the data inside DOM with next Object and update the object
    setTimeout(() => updateBanner(nextId, currentId, bannerFeatures), 800);
    setTimeout(() => {
        document.querySelector('#reveal').classList.remove('reveal')
    }, 2000);
});

const getCurrentBannerId = () => {
    let currentId = 0;

    for (let index = 0; index < bannerFeatures.length; index++) {
        if (bannerFeatures[index].isActive) {
            currentId = index;
            break;
        }
        else {
            if (currentId === 3)
                currentId = 1;
            else
                currentId ++;
        }
    }

    return currentId;
}

const updateBanner = (nextId, currentId, bannerFeatures) => {
    const bannerFeature = bannerFeatures[nextId];

    let image = document.querySelector('.product-showcase .product-showcase-image img');
    let year = document.querySelector('.product-showcase .year span');
    let name = document.querySelector('.product-showcase .product-name');
    let flag = document.querySelector('.product-showcase .country-flag');
    let countryName = document.querySelector('.product-showcase .country-name');
    let style = document.querySelector('.product-showcase .style');
    let background = document.querySelector('.product-background');

    image.setAttribute('src', bannerFeatures[nextId].image);
    flag.setAttribute('src', bannerFeatures[nextId].flag);
    year.innerHTML = bannerFeatures[nextId].year;
    name.innerHTML = bannerFeatures[nextId].name;
    countryName.innerHTML = bannerFeatures[nextId].country;
    style.innerHTML = bannerFeatures[nextId].style;
    background.style.background = `var(--${bannerFeatures[nextId].color})`
    
    bannerFeatures[currentId].isActive = 0;
    bannerFeatures[nextId].isActive = 1;
}
