class ProductManager {

    constructor (){
        this.products = [];
        this.id = 0;
    }

    addProduct (title, description, price, thumbnail, code, stock){
        if (!title || !description || !price || !thumbnail || !code || !stock) return console.error(`Todos los campos son necesarios`)

        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code === code) return console.error(`Codigo ${code} repetido, favor de insertar codigo diferente`)}
        
        this.products.push({
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        id: this.id++});
    }

    getProducts () {
        return this.products; 
    }

    getProductsById (id) {
        return this.products[id] || console.error("Not found");
    }
}


const productos = new ProductManager();


productos.addProduct(
    "Halo 2",
    "Juego de Xbox",
    1500,
    "Halo.jpg",
    "1234",
    10

)

productos.addProduct(
    "Mario Bros",
    "Juego de Nintendo",
    150,
    "Mario.jpg",
    "4321",            
    10

)



productos.addProduct(
    "Crash Bandicoot",
    "Juego de Sony",
    1000,
    "Crash.jpg",
    "456789",                 //<---         
    10
)

// PRUEBA DE CODIGO REPETIDO
/*
productos.addProduct(
    "DOOM",
    "Juego de ID software",
    100,
    "Doom.jpg",
    "456789",                 //<---         
    10
)
*/


// PRODUCTOS AÑADIDOS
console.log(productos.getProducts())

// OBTENER PRODUCTO MEDIANTE EL ID 
console.log(productos.getProductsById(2))  /* insertar numero del ID */


