# 🚀 Proyecto Final - Base de Datos II

## ❗ Enunciado Seleccionado

#### Proyecto 1: Sistema de Biblioteca Digital

Dificultad : ⭐⭐⭐

### Descripción
Crear un sistema para gestionar una biblioteca digital con libros, autores y préstamos.

### Requerimientos:
+ Gestionar libros con título, autor, ISBN, género, año de publicación
+ Registrar préstamos con fecha de préstamo y devolución
+ Consultar disponibilidad de libros
+ Generar reportes de libros más prestados

## 📃 Información

Una API implementada con 'Node.js (JavaScript)' utilizando 'Mongoose'.

Comandos para probar la API usando CURL desde la terminal mas abajo ⬇️.

--

## 🏗️ Inicializar el Proyecto
1. Clonar el repositorio actual.

    ```bash
    git clone <URL-DEL-REPOSITORIO>
    ```
2. Abrir el repositorio clonado anteriormente en el Visual Studio Code y entrar a la carpeta donde se encuentra el proyecto.

    ```bash
    cd Proyecto Final
    ```
3. Instalar los paquetes necesarios:

    ```bash
    npm i
    ```
4. Iniciar la API:
    ```bash
    node app.js
    ```

## 🔗 Endpoints

+ Libros: http://localhost:3000/libros
+ Prestamos: http://localhost:3000/prestamos

## 🔍 Testing API con Curl
Comandos para probar la API usando CURL desde la terminal

## ⚙️ Operaciones Crud

### GET

+ Obtener todos los Libros disponibles

```bash
# GET - Lista de Libros
curl http://localhost:3000/libros
```

+ Obtener los Libros segun un criterio
```bash
# GET - Lista de libros en las que el autor sea Gabriel García Márquez - **EJEMPLO**
curl http://localhost:3000/libros/crt?criterio=Gabriel García Márquez
```

+ Obtener los 5 Libros más populares
```bash
# GET - Lista de libros mas populares
curl http://localhost:3000/libros/populares
```

+ Obtener todos los Prestamos realizados

```bash
# GET - Lista de Prestamos
curl http://localhost:3000/prestamos
```

### POST

+ Agregar un Libro
```bash
# POST - Crear un nuevo Libro
curl -X POST http://localhost:3000/libros \
  -H "Content-Type: application/json" \
  -d '{
  "titulo":"Nuevo libro",
  "autor":"Juan Pérez",
  "isbn":"123-456-789",
  "genero":"Ficción",
  "anioPublicacion":2024,
  "copias":5,
  "disponibles":5
}'
```

+ Realizar prestamo de un Libro
```bash
# POST - Realizar un prestamo
curl -X POST http://localhost:3000/Prestamos \
  -H "Content-Type: application/json" \
  -d '{
  "isbn":"123-456-789",
  "usuario":"Juan Perez"
}'
```

+ Devolver un Libro
```bash
# POST - Devolver un libro
curl -X POST http://localhost:3000/Prestamos/devolver \
  -H "Content-Type: application/json" \
  -d '{
  "prestamoId":" **ID del prestamo** "
}'
```

## 👥 Integrantes del Proyecto
+ Mateo Avila Baez
+ Juan Braun
+ Ramiro Gabeiras
