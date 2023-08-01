import { heroes } from '../data/heroes';




/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => { 

    const id1 = '5d86371f2343e37870b91ef11';
    const id2 = '5d86371f1efebc31def272e21';

    findHero( id1 , (error, hero1) => {

        if ( error) {   
            element.innerHTML = error;
            return;
        }
        findHero(id2, (error, hero2)=>{
            
            if ( error) {   
                element.innerHTML = error;
                return;
            }   

            element.innerHTML = `${ hero1.name } / ${ hero2.name}`;
        })
    });

};  
/**
 * 
 * @param {String} id 
 * @param { ( error: String|null,  hero: Object) => void } callback 
 */

const findHero = ( id, callback ) => {
    
    const hero = heroes.find( hero => hero.id == id );

    if ( !hero ){
        callback(`Hero with id ${ id } not found.`);
        return;//undefined
    }
    
    
    callback( null, hero );
}