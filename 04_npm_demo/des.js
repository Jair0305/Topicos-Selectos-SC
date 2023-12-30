// NPM

// Node Package Manager
// Gestor/administrador de paquetes de Node
//Es un programa que permite administrar/gestionar los paquetes d enod eque podemos instalar o que ya estan instalados ya sea de forma global a nivel de sistema operativo o de manera local en una aplicacion especifica como dependencia de la misma.

//Los paquetes son programas(modulos) que podemos encontrar dentro de sus repositarios oficiales. (Todo programa que hagamos ppuede ser un paquete)

//NPM consiste en dos partes
//1. Una herramienta CLI (Interrfaz de linea de comandos)
//2. Un repositorio en linea que alberga los paquetes de JS

// Cuando instalamos Node se instala una version estable de npm

// nom install -g npm --> actualiza npm a la version mas reciente del paquete de forma global
//npm install -g npm@6.9.1 --> instala una version especifica del paquete.
//npm i -g npm --> forma compacta
//npm i npm@6.9.1

// el parametro -g indica una instalacion global a nivel de sistema operativo

// Importante: revisarla version necesaria de cada paquete, esto porque peude haber cambios o modificaciones en los paquetes que hagan que nuestro codigo deje de funcionar.

// package.JSON
//Para crear el archivo package.json es npm init

//Inicializa el gestor de paquetes en una ubicacion especifica para un proyecto, pregunta una serie de cosas

//El archivo package.json contiene informacion basica y general del proyecto que estamos creando, pro ejemplo, nombre, autor, version, descripcion, etc.

// para usar todos los valores por default (que no pregunte)
// npm init --yes

// --------- Instalar un paquete
//Instalacion local
// npm install [nombre del paquete]
//npm i [nombre del paquete]
//nmp i [nombre del paquete]@version

//Los paquetes son como modulos o librerias enn su uso.

// VERSIONADO DE PAQUETES
// ^1.4.0 --> versionado semantico
//X.y.z
//x = version mayor
//y = version menor
//z = version de parches

//componente Z: Se arreglaron errores del paquete.
//1.3.4 --> Se corrigieron errores de la version 1.3.3

//Componente y: Se aggregan nuevas funciones al paquete o se cambia el comportamiento de algunos componentes
//1.4.0 --> Nueva verison mneor sin parches

//Componente x: Se hacen grandes cambios al paquete, ya no es compatible con la version anterior
//6.0.0 --> nueva version completa

//Revisar cuando salen nuevas versiones para comprobar la compatibilidad con nuestro proyecto

// ~, ^ --> Podemos tener estos caracteres antes de la version en mi package.json , si no hay caracteres antes de la version, esto indica que es la version concreta, es decir, esa version es la que se debe utilizar, no acepta actualizaciones para ese paquete

//Si aparece el caracter ^ antes de la version, acepta instalar versiones dentro de la version mayor

//Si aparece el caracter ~, Acepta instalar versiones dentro de la version menor.

// Simbolo         Dependencia             Versiones de trabajo
//tilde(~)         ~3.9.2                      3.9.*
//caret(^)         ^3.9.2                      3.*.*

// Mas sobre la instalacion y desinstalacion d epaquetes
//Para instalar una dependencia de desarrollo (devDependency)
// npm install -save-dev [paquete]
// npm i -D [paquete]

//Para desinstalar un paquete en general
// npm uninstall [paquete]
// npm un [paquete]

//Paquetes globales
//Para instalar un paquete de forma global se deben tener permisos de administrador
//npm i -g [paquete]

//Los paquetes globales no se instalan en lac arpeta del proyecto, sino dentro de la carpeta npm a nivel de todo el S.O.

//Hay una carpeta node_modules a nivel S.O.

// Para saber que paquetes globales estan instaado
// npm list -g

//Para saber que paquetes globales estan desactualizados
//npm -g outdated

//Para desinstalar un paquete global
//npm un -g [paquete]

//Mostrar el arbol de dependencias
//npm list

//Mostrar mas niveles del arbol
//npm list --depth=1

// INFORMACION DE LOS PAQUETES
//Para tener la informacion desde la terminal 
// npm view [paquete]

// Revisar cuales son los paquetes que necesitan una actualizacion

// npm outdated

//Instala el paquete para revisar las actualizaciones de los paquetes
// npm i -g npm-check-updates

// npm-check-updates

//Devuelve la lista de paquetes actualizables

//Ejecutar
//ncu -u 
//Modifica el package.json con las nuevas versiones de los paquetes actualizables

//Ejecutar:
// npm install
//Actualiza los paquetes de a cuerdo con el package.json