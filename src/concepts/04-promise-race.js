



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = ( element ) => { 

    element.innerHTML = 'Loading...';

    const renderValue = ( value ) => {
        element.innerHTML = value;
    
    }
    
    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
        fastPromise(),
        mediumPromise(),
        slowPromise(),
    ])
    .then( renderValue);
};  

const slowPromise = () => new Promise( resolve => {

    setTimeout(() => {
        resolve('Slow Promise')
    }, 3000);
});

const mediumPromise = () => new Promise( resolve => {

    setTimeout(() => {
        resolve('Medium Promise')
    }, 2000);
});
const fastPromise = () => new Promise( resolve => {

    setTimeout(() => {
        resolve('Fast Promise')
    }, 1000);
});

