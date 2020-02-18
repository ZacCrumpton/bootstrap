console.log("HelloWorld!")

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
};

const ducks = [
    {
        color: 'blue',
        isRubber: true,
        gender: 'male',
        isMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47,
        featherNum: 0,
        name: 'Raymen',
        imgUrl: 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/501/10539/blue-Rubber-Duck-ad-line-3__84014.1569599632.jpg?c=2&imbypass=on'
    },
    {
        color: 'white',
        isRubber: false,
        gender: 'male',
        isMigrator: true,
        socialStatus: 'greedy duck',
        diet: 'munchin on bread',
        age: 67,
        featherNum: 100,
        name: 'Scrooge',
        imgUrl: 'https://vignette.wikia.nocookie.net/scrooge-mcduck/images/f/f2/Scrooge_McDuck_By_Don_Rosa.png/revision/latest?cb=20190801133717'
    },
    {
        color: 'yellow',
        isRubber: true,
        gender: 'male',
        isMigrator: false,
        socialStatus: 'bath tub soaker',
        diet: 'literally nothing',
        age: 5,
        featherNum: 0,
        name: 'Larry',
        imgUrl: 'https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/787/7385/Finger-Fuck-You-Shopping-Rubber-Duck-Lanco-6__16830.1556757640.jpg?c=2&imbypass=on'
    },
    {
        color: 'white',
        isRubber: false,
        gender: 'male',
        isMigrator: true,
        socialStatus: 'Punk duckling',
        diet: 'fish',
        age: 15,
        featherNum: 50,
        name: 'Huey',
        imgUrl: 'data:image/png;base64,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'
    },
    {
        color: 'white',
        isRubber: false,
        gender: 'male',
        isMigrator: true,
        socialStatus: 'angry but caring',
        diet: 'steak',
        age: 45,
        featherNum: 100,
        name: 'Donald',
        imgUrl: 'https://img.etimg.com/thumb/msid-58980445,width-643,imgsize-182458,resizemode-4/some-fun-facts-about-disneys-most-popular-character-donald-duck.jpg'
    },
    {
        color: 'blue',
        isRubber: true,
        gender: 'female',
        isMigrator: false,
        socialStatus: 'drama queen',
        diet: 'low calories',
        age: 15,
        featherNum: 0,
        name: 'Sally',
        imgUrl: 'data:image/jpeg;base64,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'
    },
    {
        color: 'yellow',
        isRubber: true,
        gender: 'female',
        isMigrator: false,
        socialStatus: 'social butterfly',
        diet: 'vegan',
        age: 18,
        featherNum: 0,
        name: 'Jill',
        imgUrl: 'https://cdn11.bigcommerce.com/s-jnapaiw/images/stencil/1280x1280/products/2945/4049/Sunny_duck__52036.1400093435.jpg?c=2'
    },
    {
        color: 'blue',
        isRubber: true,
        gender: 'female',
        isMigrator: false,
        socialStatus: 'respectable member of duck society',
        diet: 'high end',
        age: 20,
        featherNum: 0,
        name: 'Molly',
        imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/81xvjWM2jSL._SY355_.jpg'
    }
];
//good test to make sure loop is working 
const duckBuilder = (duckNames) => {
    let domString = '';
    for(let i = 0; i < duckNames.length; i++){
    domString += '<div class="col-md-6 col-lg-4">'
    domString +=    '<div class="card">';
    domString +=  `<img src="${duckNames[i].imgUrl}" class="card-img-top" alt="...">`;
    domString +=  '<div class="card-body">';
    domString +=    `<h5 class="card-title">${duckNames[i].name}</h5>`;
    domString +=    `<p class="card-text">${duckNames[i].socialStatus}</p>`
    domString +=    `<p class="card-text">${duckNames[i].diet}</p>`
    domString +=    '<p class="card-text"> </p>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>'
    }
    printToDom('ducksPage', domString);
};

const choseColor = (e) => {
    console.log('white');
    const buttonId = e.target.id;
    const selectedDucks = [];
    for(let i = 0; i < ducks.length; i++){
        if(ducks[i].color === buttonId){
            selectedDucks.push(ducks[i]);
        };
    }
    duckBuilder(selectedDucks);
};



const choseGender = (e) => {
    console.log('male');
    const buttonId = e.target.id;
    const selectedDucks = [];
    for(let i = 0; i < ducks.length; i++){
        if(ducks[i].gender === buttonId){
            selectedDucks.push(ducks[i]);
        };
    }
    duckBuilder(selectedDucks);
};


const choseRubber = () => {
    console.log('rubber');
    const selectedDucks = [];
    for(let i = 0; i < ducks.length; i++){
        if(ducks[i].isRubber){
            selectedDucks.push(ducks[i]);
        }
    }
    duckBuilder(selectedDucks);
};


const events = () => {
    document.getElementById('yellow').addEventListener('click', choseColor);
    document.getElementById('blue').addEventListener('click', choseColor);
    document.getElementById('male').addEventListener('click', choseGender);
    document.getElementById('female').addEventListener('click', choseGender);
    document.getElementById('rubber').addEventListener('click', choseRubber);
};

const init = () => {
    duckBuilder(ducks);
    events();
}
init();