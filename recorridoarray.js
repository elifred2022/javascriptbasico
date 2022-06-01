var articulos = [
    {nombre: "bici", costo: 3000},
    {nombre: "tv", costo: 2500},
    {nombre: "libro", costo: 2500},
    {nombre: "celular", costo: 10000},
    {nombre: "lapto", costo: 20000},
    {nombre: "teclado", costo: 500},
    {nombre: "audifonos", costo: 1700},
]

/*  metodo filter */ /*articulos.filter*/

var articulosFiltrados = articulos.filter(function(articulo) {return articulo.costo <= 500});
undefined
articulosFiltrados
(1)[
{
costo:
500
nombre:
teclado
}
]

/*  metodo de map  */ /* articulos.map*/

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

nombreArticulos
(7)[
bici
tv
libro
celular
lapto
teclado
audifonos
]

/*  metodo find */ 

var encuantraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "lapto"
});

encuantraArticulo
{
costo:
20000
nombre:
lapto
}

/*  forEach */

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

bici
tv
libro
celular
lapto
teclado
audifonos

/* .some "este solo regresa un true o flase es solo para validar una informacion"  */

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

articulosBaratos
true

// HHHH //




