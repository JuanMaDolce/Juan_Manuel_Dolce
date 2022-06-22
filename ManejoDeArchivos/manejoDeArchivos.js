const { error } = require('console');
const fs = require('fs')
const myArray = [];
const emptyArray = []

class Contenedor {
    constructor(title, price, thumbnail){
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
    }

    save(object){
        this.id = myArray.length + 1;
        myArray.push(object)
        console.log(`Producto agregado ${this.title} ID ${this.id}`)
        try{
            fs.writeFileSync('productos.txt', JSON.stringify(myArray))
        } catch (err) {
            console.log(err)
        }
    } 
    async getAll(){
        try{
            const contenido = fs.readFileSync('productos.txt')
            let viewObject = JSON.parse(contenido)
            console.log(viewObject);
        }
        catch (err){
            console.log(err)
        }
    }
    getById(id){
        try{
            const contenido = fs.readFileSync('productos.txt')
            let viewObject = JSON.parse(contenido)
            const product = viewObject.find( p => p.id === id);
            console.log(product)
        } catch (err){
            console.log(null)
        }
    }
    async deleteById(id){
        const newArray = myArray.filter(p => p.id !== id)
        console.log(newArray)
        try{
            await fs.promises.writeFile('productos.txt', JSON.stringify(newArray))
        } catch (err) {
            console.log(err)
        }
    }
    async deleteAll(){
        try{
            await fs.promises.writeFile('productos.txt', JSON.stringify(emptyArray))
        } catch (err) {
            console.log(err)
        }
    }

}

const productoUno = new Contenedor("Celular", 100000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLBe9IALeU_ueNTJrif2j-96BWjGx_7_A6SgMlnNqrxATeqGGq3pHKhyx-JoqxxEaVGdI&usqp=CAU")
const productoDos = new Contenedor("Tablet", 150000, "https://www.macstation.com.ar/img/productos/2907-2829-2450-1.jpg")
const productoTres = new Contenedor("Notebook", 200000, "https://cnnespanol.cnn.com/wp-content/uploads/2021/10/MacBook-2.jpg?quality=100&strip=info")
productoUno.save(productoUno);
productoDos.save(productoDos);
productoTres.save(productoTres);

productoTres.getAll();

productoTres.getById(2);

productoTres.deleteById(2);

productoTres.deleteAll();
