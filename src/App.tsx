import { useState } from 'react'
import './App.css'

function App() {
  const toolKit: string[] = [
    'Javascript',
    'Typescript',
    'React',
    'HTML',
    'CSS',
    'Node',
    'Testes automatizados',
  ];

  return (
    <>
      <h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
      <h2></h2>
      <div className='btn-container'>
        <button>Anterior</button>
        <button>Próximo</button>
      </div>
      <section>
        <h3>Adicione novas ferramentas:</h3>
        <input type='text' />
        <button>Adicionar</button>
      </section>
      <section>
        <h3>Lista de intens do carrossel:</h3>
        <ul></ul>
      </section>
    </>
  )
}

export default App
