import {heroes} from '../data/heroes'



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent2 = ( element ) => { 

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = (hero1,hero2) => {
        element.innerHTML = `
            <h3>${hero1.name}</h3>
            <h3>${hero2.name}</h3>

        `
    }
    
    const renderError = ( error) => {
        element.innerHTML = `
        <h1>Error:</h1>
        <h3>${error}</h3  >
        `; 
    }
    const id1 = '5d86371f97c29d020f1e1f6d';
    const id2 = '5d86371fd55e2e2a30fe1ccb';
    
//las siguientes formas hacen lo mismo pero esta ultima
// es mucho mas facil de leer, de mantener, y es lo recomendable
//porque mandamos a ejecutar las promesas simultaneas
//si una da error no se ejecuta nada del then, then solo se ejecuta
//si todas las promesas se cumplen correctamente
//la unica condicion para usarlo es que las promesas sean independientes
//la una de la otra
    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then( ([hero1, hero2]) => renderTwoHeroes( hero1, hero2) )
    .catch( renderError)

    
    //!!forma 2 // si para disparar la segundo promesa necesito de la primera
    //entoces me sirve la forma 2
    //let hero1;
    // findHero(id1)
    //     .then( hero => {
    //         hero1 = hero;
    //         return findHero(id2)
    //     }).then( hero2 => {
    //         renderTwoHeroes( hero1, hero2 );
    //     }).catch( renderError )
    //refactorizacion arriba// 
    
    
    
    
    //!!forma 1
    // findHero( id1 )
    //     //.then( superHero => renderHero( superHero));
    //     .then( (hero1) => {
          
    //        findHero( id2).
    //             then( hero2 => {
    //                 renderTwoHeroes( hero1, hero2)
    //             });
    //     })
    //     .catch( renderError);//lo mismo acá


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

