import React, { useState } from 'react';
import '../App.css';


const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefono: '',
    mensaje: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a un servidor
    console.log('Datos enviados:', formData);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };

  return (
    <section id="contacto" className="App-header">
      <h1>Contactanos</h1>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <label htmlFor="name">Nombre</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="email">Correo Electrónico</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="telefono">Telefono</label><br />
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="mensaje">Mensaje</label><br />
          <textarea
            id="mensaje"
            name="mensaje"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
          <br />
          <button type="submit">Enviar</button>
          <button type="button" onClick={handleReset}>Resetear</button>
        </div>
      </form>
    </section>
  );
};


export default Form;
