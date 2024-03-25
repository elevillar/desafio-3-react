const Buscador = ({ search, onChange }) => {
  return (
    <>
      <div className='input-group mb-3'>
        <input
          className='form-control'
          type='search'
          placeholder='Busca un colaborador'
          aria-label='Search'
          value={search}
          onChange={onChange}
        />
      </div>
    </>
  )
}

export default Buscador
