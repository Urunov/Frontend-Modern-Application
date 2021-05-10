import React from 'react';

function HeroAgain(heroName) {

    if(heroName === "BatMan1"){
            throw new Error('Joker is not Hero')
    }
    return (
        <div>
            {heroName}

        </div>
    );
}

export default HeroAgain;