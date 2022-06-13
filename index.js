class Usuario {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName(){ 
            return `Hola ${this.nombre} ${this.apellido}`
        }

    addBook(nombre,autor){
        this.libros.push({
            nombre: nombre,
            autor: autor
        })
    }
    getBookNames(){
        const bookNames = this.libros.map(x => x.nombre)
        return bookNames
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        return this.mascotas.length
    }
}

const usuario = new Usuario('Juan Manuel','Dolce')

console.log(usuario.getFullName())

usuario.addBook('El Señor de Los Anillos', 'JRR Tolkien')
usuario.addBook('La Torre Oscura', 'Stephen King')

console.log(usuario.getBookNames())

usuario.addMascota('Perro')
usuario.addMascota('Loro')

console.log(usuario.countMascotas())
