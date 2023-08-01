import {heroes} from '../data/heroes'



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = ( element ) => { 

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }
    
    const renderError = ( error) => {
        element.innerHTML = `
        <h1>Error:</h1>
        <h3>${error}</h3  >
        `; 
    }
    const id1 = '5d86371f97c29d020f1e1f6d1';
    
    findHero( id1 )
        //.then( superHero => renderHero( superHero));
        .then( renderHero)// mandar la funcion como referencia
        //identico a la linea de arriba, 
        //superHero solo cumple la funcion 
        //de mandarselo como argumento a la funcion renderHero
        //.catch( error => renderError( error ));
        .catch( renderError);//lo mismo acá
};  

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = ( id ) => {

    console.log('hola mundo')
    return new Promise(( resolve, reject ) => {

        const hero = heroes.find( hero => hero.id == id );  
        
        if ( hero ) {
            resolve( hero);
            return;
        }

        reject(`Hero with id ${id} not found`);
    });



}

