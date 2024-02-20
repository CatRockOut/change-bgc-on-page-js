function initRandomColor() {
    const btn = document.getElementById('button');
    const backgroundColor = document.querySelector('.name-color');
    const hexSymbol = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    const getRandomColor = () => {
        let hexColorRep = '#';

        hexSymbol.forEach((i) => {
            if (i < 6) {
                const randomNumber = Math.floor(Math.random() * hexSymbol.length);
                hexColorRep += hexSymbol[randomNumber];
            }
        });

        return hexColorRep;
    };

    const checkBlock = () => {
        if (!backgroundColor || !btn) {
            throw Error('Element does not exist!!!')
        } else {
            console.log('Verification successful. The block exists.')
        }
    };

    btn.addEventListener('click', () => {
        checkBlock();
        const resultNewColor = getRandomColor();

        document.body.style.backgroundColor = resultNewColor;
        backgroundColor.textContent = resultNewColor;
    });
};

document.addEventListener('DOMContentLoaded', initRandomColor);