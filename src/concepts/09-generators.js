



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generartorFunctionComponent = ( element ) => { 

    //const myGenerator = myFirstGeneratorfunction();


//     console.log( myGenerator.next() );
//     console.log( myGenerator.next() );
//     console.log( myGenerator.next() );
//     console.log( myGenerator.next() );
//     console.log( myGenerator.next() );
//     console.log( myGenerator.next() );
//     console.log( myGenerator.next() );
const genId = idGenerator();

const button = document.createElement('button');
button.innerText = 'click me';
element.append( button)

const renderButton =  () => {
    const { value } = genId.next();
    button.innerText =`click ${value}`;         


}

button.addEventListener('click',  renderButton );    

 };  
 function* idGenerator() {
    let currentId = 0;
    while(true){
        yield ++currentId;
    }
 }



function* myFirstGeneratorfunction() {

    yield ' primer valor' //se pausa
    yield ' segundo valor'  
    yield ' tercer valor' 
    yield 'cuarto  valor' 
    return  'ya no hay valores'
    yield 'no se puede'
}