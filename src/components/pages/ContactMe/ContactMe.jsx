import React from 'react'

export const Contact = () => {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <p>si te gusta lo que ves o te gustaria saber mas sobre mis habilidades o por alguna razon necesitas ayuda con algo o un trabajo para mi, no dudes en contactarme.</p>
      <form action="#" method="POST">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo Electrónico" required />
        <textarea placeholder="Tu mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}