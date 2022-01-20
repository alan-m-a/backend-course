const arrayMascotas = [];
const arrayLibros = [];
const arrayNombresLibros = [];


class Usuario {
  constructor( nombre, apellido, libros, mascotas){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName(){
    return `${this.nombre} ${this.apellido}`
  }

  addMascota(mascota){
    arrayMascotas.push(mascota)
  }

  countMascotas(){
    return arrayMascotas.length
  }

  addBook(name, author){
    arrayLibros.push({"nombre": name, "autor":author})
  }

  getBookNames(){
    arrayLibros.forEach(function(item) {
      arrayNombresLibros.push(item.nombre)
    })
    return arrayNombresLibros
  }
}

const user1 = new Usuario('Ludmila', 'Ibarra');


console.log(user1.getFullName());
console.log(user1.addMascota('Theo'))
console.log(user1.countMascotas())
console.log(user1.addBook('Harry Potter','J.K Rowling'))
console.log(user1.addBook('The Lord of the Ring', 'J. R. R. Tolkien'))
console.log(user1.getBookNames());