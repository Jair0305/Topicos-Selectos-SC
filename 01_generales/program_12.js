/*

    Created: 2023-02-10
    Created by: Chavez Islas Jair
    Description: Objects

*/

//La clase object representa uno de los tipos de JS
//Es usado apra guardar una coleccion de datos definidos y entidades mas complejas, los objetos pueden ser creados utilizando el constructor del objecto o la sintaxis literal del codigo

const curso = {
    uda: 'topico selecto',
    maestro:{
      nombre: 'juan carlos',
      division:'dicis',
      carrera: 'lisc'
    },
    alumnos:[],
    activos:true,
    inscribir:function(nombre){
      console.log(`${nombre} te has inscrito en el curso  ${this.uda}`);
      this.alumnos.push(nombre);
  
    },
    listaAlumnos: function () 
    { return this.alumnos
    }
  }
  console.log(curso);
  curso.inscribir('yoo');
  curso.inscribir('yooo');
  curso.inscribir('yoooo');
  curso.inscribir('yooooo');
  curso.inscribir('yoooooo');
  curso.inscribir('yooooooo');
  console.log(curso.listaAlumnos);
  
  
  console.log(curso.uda);
  curso.uda = 'Sistemas de informacion';
  console.log(curso.uda);
  
  console.log(curso['uda']);
  
  class Curso{
    construction(name){
      this.name = name;
    }
    saludar(){
      console.log(`Bienvenido al curso de ${this.name}`);
  
    }
  };
  
  let curso1 = new Curso('topico selecto');
  let curso2 = new Curso('topico selecto de yoooo');
  console.log(curso2.name)
  curso2.saludar()
  console.log(curso1.name)
  curso1.saludar()
  
  class vehiculos{
    constructor(marca,modelo,anho,color){
      this.marca = marca;
      this.modelo = modelo;
      this.anho = anho;
      this.color = color;
    };
    description(){
      return `marcayo: ${this.marca}, modeloyo: ${this.modelo} y lo demas ${this.anho}, ${this.color}`
    }
  }
  
  class camion extends vehiculos{
    constructor(marca,modelo,anho,color,toneladas){
      super(marca,modelo,anho,color);
      this.toneladas = toneladas;
    }
    description2()
    {
      return this.description + `camion de ${this.toneladas} toneladasyooo`;
    }
  }
  
  let miCarro = new vehiculos('yooo','yoooooooooo',2020,'rojo')
  console.log(miCarro.description());
  
  let miCamion = new camion ('yooo','yoooooooooo','2020','rojo', '45')
  console.log(miCamion.description());
  console.log(miCamion.description2());
  