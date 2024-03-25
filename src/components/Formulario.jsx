import { useState } from 'react'

const Formulario = ({ onSubmit, setAlert }) => {
  const [colaborador, setColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: ''
  })

  const handleChange = (e) => {
    setColaborador({
      ...colaborador,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      colaborador.nombre === '' ||
      colaborador.correo === '' ||
      colaborador.edad === '' ||
      colaborador.cargo === '' ||
      colaborador.telefono === ''
    ) {
      setAlert({
        error: true,
        msg: 'Completa todos los campos',
        color: 'danger'
      })
      return
    }

    onSubmit(colaborador)

    setAlert({
      error: false,
      msg: 'Ingreso exitoso',
      color: 'success'
    })

    setColaborador({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: ''
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            name='nombre'
            className='my-3 w-100'
            placeholder='Nombre del colaborador'
            onChange={handleChange}
            value={colaborador.nombre}
          />
          <input
            type='email'
            name='correo'
            className='my-3 w-100'
            placeholder='Email del colaborador'
            onChange={handleChange}
            value={colaborador.correo}
          />
          <input
            type='number'
            name='edad'
            className='my-3 w-100'
            placeholder='Edad del colaborador'
            onChange={handleChange}
            value={colaborador.edad}
          />
          <input
            type='text'
            name='cargo'
            className='my-3 w-100'
            placeholder='Cargo del colaborador'
            onChange={handleChange}
            value={colaborador.cargo}
          />
          <input
            type='number'
            name='telefono'
            className='my-3 w-100'
            placeholder='Telefono del colaborador'
            onChange={handleChange}
            value={colaborador.telefono}
          />
          <button type='submit' className='btn btn-primary w-100'>Agregar colaborador</button>
        </div>
      </form>
    </>
  )
}

export default Formulario
