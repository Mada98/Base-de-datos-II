Trabajo Práctico 1 

Base de datos II 

Fundamentos, Integridad y Concurrencia 

Ejercicio 1:

En el siguiente ejemplo si queremos eliminar un alumno de la tabla “Alumnos” y este pertenece a una Asignatura, generaría que estas tengan un id ya no existente. Para evitar esto usamos “ON DELETE RESTRICT” para que no se pueda eliminar un alumno que tenga asignaturas asociadas. También podríamos usar “ON DELETE CASCADE” para que también se elimine la asignatura referente al alumno eliminado. 
![alt text](imagenes/image.png)

Ejercicio 2: 

En el siguiente ejemplo agregamos la Matrícula la cual asigna una asignatura a un alumno existente. En este caso tratamos de agregar un alumno inexistente (99), a la matrícula (2) que es Historia, esto resulta en un error gracias a la restricción de la clave foránea. 

Error: Query Error: Cannot add or update a child row: a foreign key constraint fails (`test`.`Matricula`, CONSTRAINT 
`Matricula_ibfk_1` FOREIGN KEY (`id_alumno`) REFERENCES `Alumnos` (`id`) ON DELETE CASCADE) 
![alt text](imagenes/image-1.png)

Ejercicio 3: 

En el siguiente ejemplo podemos observar 2 transacciones que ocurrirían al mismo tiempo, una está mostrando el saldo de una cuenta, mientras que la otra lo está modificando. Si usamos el nivel de aislamiento READ COMMITTED,  la primera transacción podría leer el valor 1000, y si vuelve a hacer el mismo SELECT más tarde en la misma transacción, podría obtener el valor 500 si la segunda transacción ya hizo commit. 
![alt text](imagenes/image-2.png)

En el siguiente ejemplo podemos observar las mismas transacciones pero esta vez usando el nivel de aislamiento SERIALIZABLE, esto hace que se ejecuten de manera serializada (Una detrás de otra) por lo tanto el UPDATE de la Sesión 2 no podrá continuar mientras la transacción de la sección 1 este abierta. Tiene que esperar a que esta realice COMMIT. 

Este nivel es el más estricto ya que las transacciones se ejecutan de manera aislada, evitando lecturas fantasma. 
![alt text](imagenes/image-3.png)

Ejercicio 4: 
En este ejercicio lo primero que hacemos es crear una base de datos “Personas” e le insertamos varios registros: 
![alt text](imagenes/image-4.png)

Luego realizamos una consulta donde quiero que me devuelva las personas con más de 25 años, primero realizamos esta consulta sin índice, después creamos el índice y realizamos nuevamente la misma consulta consulta: 
![alt text](imagenes/image-5.png)

Podemos notar que la consulta que realizamos con índice es minimamente más rápida que la consulta sin índice. 

Ejercicio 5: 

En este ejercicio vamos crear primero una base de datos para guardar juegos: sus nombre, género, valoraciones, y fecha de salida: 

![alt text](imagenes/image-6.png)

Le insertamos a la tabla varios registros para luego realizar una consulta, donde básicamente quiero que me devuelva los nombres de los juegos que sean del género ’’Aventura’’ y que su valoración sea mayor a 9.0. 

Primero vamos a realizar esta consulta sin utilizar índices, para luego crearlos y comparar el rendimiento de ambas consultas 
![alt text](imagenes/image-7.png)

Como podemos ver la consulta que realizamos con índice es minimamente más rápida que la consulta sin índice. 

Ejercicio 6: 

Para este ejercicio, primero creamos dos tablas, una para registrar los “Productos”: sus nombre y precios, y otra tabla para registrar las “Ventas” de los productos a partir de su ID: 
![alt text](imagenes/image-8.png)

Luego creamos una vista para ver las ventas mensuales de cada producto registrado: 
![alt text](imagenes/image-9.png)

Después utilizamos la vista que creamos anteriormente para usarla dentro de una consulta para que nos devuelva los primero 5 productos más vendidos: 
![alt text](imagenes/image-10.png)

Ejercicio 7: 

En este ejercicio, primero vamos a crear un usuario llamado “Analista” dónde vamos darle a través del usuario root, la función de realizar “Select” en la base de datos que queramos. 

Primero creamos el usuario “Analista”: 

![alt text](imagenes/image-11.png)

Segundo le damos privilegios (solo la función select en la base de datos llamada “Empleados”) y aplicamos los cambios: 

![alt text](imagenes/image-12.png)

y Tercero, a la hora que el usuario analista quiera hacer una función que no tiene permitida sucede esto: 

![alt text](imagenes/image-13.png)

Le tira un error, diciendo que la función de insertar datos en una tabla no la tiene permitida.

Ejercicio 8: 

En este ejercicio para poder simular una auditoría con triggers vamos a hacerlo en varios pasos. 

Primero creamos una tabla, en este caso una tabla “empleados” donde guardaremos datos de empleados: 

![alt text](imagenes/image-14.png)

Luego creamos otra tabla llamada “auditoria_empleados”, donde guardaremos los registro de los cambios que se van a ir haciendo en la tabla empleados: 

![alt text](imagenes/image-15.png)

Después creamos tres triggers, que nos van a ayudar a registrar los cambios que suceden en la tabla “empleados”, ya sea agregando nuevos empleados, actualizando empleados o eliminando empleados: 

Agregar empleados: 

![alt text](imagenes/image-16.png)

Actualizar empleados: 

![alt text](imagenes/image-17.png)

Eliminar empleados: 

![alt text](imagenes/image-18.png)

Luego de crear las tablas y triggers vamos a probar si funciona. 

A la hora de agregar un usuario en la tabla “Empleados: 

![alt text](imagenes/image-19.png)

![alt text](imagenes/image-20.png)

Podemos ver que en la tabla de “auditoria_empleados” queda registrado el “insert” que hicimos anteriormente.

Cuando actualizamos un empleados en la tabla “Empleados: 

![alt text](imagenes/image-21.png)

![alt text](imagenes/image-22.png)

Podemos notar que en la tabla “auditoria_empleados” queda registrado el “update” que hicimos anteriormente. 

Y Cuando queremos eliminar un empleado en la tabla “Empleados”: 

![alt text](imagenes/image-23.png)

![alt text](imagenes/image-24.png)

Podemos ver que en la tabla “auditoria_empleados” queda registrado el “delete” que hicimos recién. 
Ejercicio 9: 

Video paso a paso cómo hacer un Backup y Restore de una base de datos desde Powershell.

Video: https://drive.google.com/file/d/1eVAep_Te2_NgO6WdOe9WQhIFUQMnmMdn/view?usp=sharing
