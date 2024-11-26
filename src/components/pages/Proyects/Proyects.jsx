import React from 'react'

export const Projects = () => {
  return (
    <section id="projects">
    <h2>Proyectos</h2>
    <div className="project-list">

        <div className="project">
            <h3> proyecto atlas</h3>
            <p>ejercicio de maquetacion de sitio web lo mas parecido posible donde se trabaja el buen uso de html y css.</p>
        </div>
        <div className="project">
            <h3>Generador de cards de personajes de los simpson</h3>
            <p>proyecto api donde con una serie de arreglos se logra generar cards una por una o poner un numero de cards a generar y tambien se puede buscar un personaje exactamente.</p>
        </div>
        <div className="project">
            <h3>Tienda virtual</h3>
            <p> se crea una tienda virtual con la API de fakestoreapi.com, para asi tener una simulacion de tienda virtual donde podemos encontrar distintos productos en lista y un carrito de compras. </p>
        </div>
        <div className="project">
            <h3>PetShop API</h3>
            <p>PetShop API es una aplicación RESTful desarrollada con Spring Boot para gestionar una tienda veterinaria. Permite realizar operaciones CRUD "Crear, Leer, Actualizar, Eliminar" sobre recursos como mascotas, productos y servicios veterinarios.</p>
        </div>
    </div>
</section>
  )
}