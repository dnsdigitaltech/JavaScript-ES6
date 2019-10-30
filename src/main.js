const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

minhaPromise().then(response => {
    console.log(response);
});
//executaPromise();
//async/await
/*async function executaPromise() {
    //wait = .then()
    const response = await minhaPromise();
    console.log(response);
};*/
/*async function executaPromise() {
    //wait = .then()
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());

    //se fosse usar essa sitaxe com o .then() faria desta maneira n vezes
    /* minhaPromise().then(response = > {
         console.log(response);
     })*
};*/

//podemos usar o async/await tambem com arrow function
const executaPromise = async() => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
};
executaPromise();