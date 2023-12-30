function C(objeto) 
{ 
  let career;
  if (objeto === student) //Para no hacer multiples funciones, reutilice la misma funcion de CRUD para estudiante y evento, cabe destacar que en los menus de estudiante y de evento, pase como parametro sus respectivos arrays y clases tanto a estudiante como a vento
  {                       //por lo que dentro de cada una de estas funciones solo agregue 2 ifs, por si el parametro que se le paso era la clase student, pidiera los datos de estudiante y que pidiera los datos de evento en caso de que tuviera como parametro la clase de evento
    let alumno = new student();
    console.log(`Introduce el nombre del alumno: `.blue);
    alumno.nombre = prompt(`>>>`.green);
    while (true)//While true, siempre va a entrar cuando el usuario ingrese el correo, por lo que siempre pasara por las 2 validaciones si o si
    {
      console.log(`Introduce el email del alumno: `.blue);
      alumno.email = prompt(`>>>`.green); //se guarda em alumno.email el correo
      alumno.email = alumno.email.toLowerCase();//Las 2 ultimas funciones del programa las use apra valdiar los correos, para validarlos, tuve que convertir el correo a solo minusculas y asi seria mas facil para mi comparar un correo con otro
      if (!validacionEmail(alumno.email)) // aqui use regex, para validar que el formato del correo solo pudiera terminar en "@ugto.mx"
      {
        console.log(`El correo electronico ${alumno.email} no es valido, intentelo de nuevo\n(Recuerde que debe temrinar con @ugto.mx)`.red);//mensaje de error en caso de formato no cumplido
        continue;
      }
      if (!validacionComparacionCorreo(alumno.email))//En esta parte valido que el correo de un estudiante no sea igual al de otro...
      {
        console.log(`El correo electronico ${alumno.email} ya existe, intentelo de nuevo`.red);//mensaje de error en caso de que se ingrese un correo ya registradp
        continue;
      }
      break;
    }
    while(career !== 'LISC' && career !== 'LAT' && career !== 'LIGE' && career !== 'LIM' && career !== 'LIME' && career !== 'LIE')//Use como referencia las siglas de las carreras de dicis, con esta validacion se fuerza al usuario a ingresar una de estas carreras en mayusculas y solo las inciiales
    {
      console.log(`Ingrese la carrera del alumno tomando en cuenta las siguientes existentes(Favor de usar mayusculas):\nLISC LAT LIGE LIM LIME LIE`.blue)
      career = prompt(`>>>`.green);
      if(career !== 'LISC' && career !== 'LAT' && career !== 'LIGE' && career !== 'LIM' && career !== 'LIME' && career !== 'LIE')
      {
        console.log(`Por favor Escoja una carrera válida!!!`.red);//mensaje de error en caso de que ponga una diferente
      }else
      {
        alumno.career = career;//En caso de que pong auna valida, la guarda en alumno.carrera
      }
    }
    
    studentArray.push(alumno);//ya que haya guardado todos los datos de cada atributo del objeto que creamos al principio de este if, los empuja todos juntos al array declarado hasta el principio del programa llamado "studentArray"
    mainmenu();
  }else if(objeto === eventO)//si el parametro que se le paso no es estudent y en su lugar es eventO, entonces entra en esta parte del codigo saltandose todo lo anterior
  {
    let hour;
    let evento = new eventO();
    //console.log(eventArray);
    console.log(`Introduce el titulo del evento: `.blue);
    evento.title = prompt(`>>>`.green);//Guarda el titulo del evento en evento.title
    let combinacion;
    do //en este dowhile se hace la validacion de que no puede haber un evento el mismo dia, la misma fecha y el mismo lugar
    {
      combinacion = false;
      
      do //En esta validacion hice que el usuario deba poner una fecha valida, como 05/02/2023 o 5/02/2023 o incluso 5/2/2023 
      {
        console.log(`Introduce la fecha del evento en formato dd/mm/yyyy: `.blue);
        evento.date = prompt(`>>>`.green);//Guarda la fecha en evento.date

        if(!evento.date.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/) || !validarFecha(evento.date))
        {
          console.log(`Escribe una fecha correcta con el formato solicitado!!!`.red)//Mensaje de error en caso de que no ponga una fecha con el formato indicado
        }
        
      } while (!evento.date.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/) || !validarFecha(evento.date));

      do//solo puse horas enteras, si la universidad abre a las 8 y cierra a las 6, tomando enc uenta que no puede haber un evento a las 6 ya que, a esa hora se cierra, hice la validacion de que la hora sea entre 8 y 5, y usando solo numeros enteros
      {
        console.log(`Tomando en cuenta que la universidad abre a las 8 y cierra a las 18`.blue)
        console.log(`Introduce la hora del evento en formato 24 horas: `.blue);
        hour = prompt(`>>>`.green);
        if(hour > 7 && hour <17)
        {
          evento.hour = hour //Guarda en evento.hour
        }else
        {
          console.log(`Hora fuera del rango!!!, por favor escoja otra hora`.red)
        }
      }
      while(hour < 7 || hour >18)

      console.log(`Introduce el lugar del evento: `.blue);
      evento.place = prompt(`>>>`.green);//guarda lo que ponga el usuario en evento.place

      for(let i=0;i<eventArray.length; i++)
      {
        if(eventArray[i].date === evento.date && eventArray[i].place === evento.place && eventArray[i].hour === evento.hour)
        {
        console.log(`Ya hay un evento en ese lugar, en esa fecha y en ese lugar\nintente con otra combinacion\n\n`. red);//mensaje de error en caso de que el evento se repita a otro en el mismo lugar, fecha y todo
        combinacion = true//Esto es lo que define si el ciclo se cierra, y esque debe ser false para que continue, en caso de que no, sigue pidiendo estos 3 datos para que ya no sean repetidos
        break;
        }
      }
    
    }while(combinacion)

    console.log(`Introduce el nombre del ponente: `.blue);
    evento.speakerName = prompt(`>>>`.green);//Lo guarda en evento.speakerName

    eventArray.push(evento); //todos los datos registrados los empuja al mismo tiempo al array eventArray
    mainmenu();//No importa si esta registrando un evento o un alumno, siempre va a regresar al menu principal al final
  }
}

function U(objeto) 
{
  if(objeto === studentArray) //otra vez pase como parametros los arryas y no las clases, ya que los datos que se van a modificar estan dentro de los arrays
  {
    console.table(studentArray)//imprimo la tabla de los estudiantes para que el usuario pueda ingresar que id quiere registrar
    console.log(`Elige el id del estudiante al cual quieres modificar sus datos`.blue);
    let peticion = prompt(`>>>`.green); 
    // console.log(`Buscando al estudiante con ID ${peticion}...`);
    let findStudent = objeto.findIndex(student => student.id === parseInt(peticion));//en base a lo que haya puesto el usuario que se guarda en la variable peticion, encuentro su index, para poder manipular los datos a aprtir de su indice
    // console.log(`El índice del estudiante con ID ${peticion} es ${findStudent}`);

    if (findStudent !== -1) //Como vimos en clase, si el index regresa -1, es que no se encontro en el array, en caso de que no, devolvera el indice de la persona, asi que si el indice es diferente a -1, prosigue pidiendo los datos a modificar
    {
      let estudiante = objeto[findStudent];//se declara estudiante con los valores del objeto que queremos
      console.log(`Introduce el nombre del alumno: `.blue);
      estudiante.nombre = prompt(`>>>`.green); //Reemplazo el valor de esstudiante.nombre, que es el nuevo nombre nuevo que vaya a poner
      let nuevoEmail = "";
      while (true) {
        console.log(`Introduce el email del alumno: `.blue);
        nuevoEmail = prompt(`>>>`.green); 
        nuevoEmail = nuevoEmail.toLowerCase();
        if (!validacionEmail(nuevoEmail)) 
        {
          console.log(`El correo electrónico ${nuevoEmail} no es válido, inténtelo de nuevo`.red);
          continue;
        }
        if (objeto.some(student => student.email === nuevoEmail)) 
        {
          console.log(`El correo electrónico ${nuevoEmail} ya existe, inténtelo de nuevo`.red);
          continue;
        }
        break;
      }
      estudiante.email = nuevoEmail;
      console.log(`Introduce la carrera del alumno: `.blue);
      estudiante.career = prompt(`>>>`.green);
    } else 
    {
      console.log(`No se encontró ningún estudiante con el ID ${peticion}`.red);
    }
    mainmenu();
  }else if(objeto === eventArray) 
  {
    console.table(eventArray)

    console.log(`Elige el id del evento el cual quieres modificar sus datos`.blue);
    let peticion = prompt(`>>>`.green);
    // console.log(`Buscando el evento con ID ${peticion}...`);
    let findEvent = objeto.findIndex(evento => evento.id === parseInt(peticion));
    // console.log(`El índice del evento con ID ${peticion} es ${findEvent}`);
    if (findEvent !== -1) 
    {
      let evento = objeto[findEvent];
      let hour;
      console.log(`Introduce el titulo del evento: `.blue);
      evento.title = prompt(`>>>`.green);
      evento.date = prompt(`Introduce la fecha del evento: `.blue);
      do
      {
        console.log(`Tomando en cuenta que la universidad abre a las 8 y cierra a las 18`.blue)
        hour = prompt(`Introduce la hora del evento en formato 24 horas: `.blue);
        if(hour > 7 && hour <18)
        {
          evento.hour = hour;
        }else
        {
          console.log(`Hora fuera del rango!!!, por favor escoja otra hora`.red);
        }
      }
      while(hour < 7 || hour >18)
      evento.place = prompt(`Introduce el lugar del evento: `.blue);
      evento.speakerName = prompt(`Introduce el nombre del ponente: `.blue);
    } else 
    {
      console.log(`No se encontró ningún evento con el ID ${peticion}`);
    }
    mainmenu();
  }
}