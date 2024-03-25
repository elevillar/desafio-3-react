import { useState } from 'react'

import Alert from './components/Alert'
import Buscador from './components/Buscador'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

import { BaseColaboradores } from './BaseColaboradores'

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [search, setSearch] = useState('')
  const [alert, setAlert] = useState({ error: '', msg: '', color: '' })

  const handleSubmit = (nuevoColaborador) => {
    const colaboradorConId = { ...nuevoColaborador, id: Date.now() }
    setColaboradores([...colaboradores, colaboradorConId])
    setAlert({
      error: false,
      msg: 'Ingreso exitoso',
      color: 'success'
    });
  };

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredColaboradores = colaboradores.filter((colaborador) => {
    const lowerSearch = search.toLowerCase();
    return (
      colaborador.nombre.toLowerCase().includes(lowerSearch) ||
      colaborador.correo.toLowerCase().includes(lowerSearch) ||
      colaborador.edad.toLowerCase().includes(lowerSearch) ||
      colaborador.cargo.toLowerCase().includes(lowerSearch) ||
      colaborador.telefono.toLowerCase().includes(lowerSearch)
    )
  })

  return (
    <div className='container mt-4'>
      <h1 className='text-start mb-4'>Listado de colaboradores</h1>
      <div className='row'>
        <div className='col-sm-4'>
          <Buscador search={search} onChange={handleChange} />
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-9'>
          <Listado colaboradores={filteredColaboradores} />
        </div>
        <div className='col-md-3'>
          <h2>Agregar colaborador</h2>
          <Formulario onSubmit={handleSubmit} setAlert={setAlert} />
          {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
        </div>
      </div>
    </div>
  )
}

export default App
