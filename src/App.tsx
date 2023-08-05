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

  const [carrousselIndex, setCarrousselIndex] = useState(0);
  const [newTool, setNewTool] = useState('');
  const [toolKitLi, setToolKitLi] = useState(toolKit);

  function handleCarrousselNext(): void {
    carrousselIndex + 1 < toolKitLi.length ?
      setCarrousselIndex(carrousselIndex + 1) : setCarrousselIndex(0)
  }

  function handleCarrousselPrevious(): void {
    carrousselIndex - 1 < 0 ?
      setCarrousselIndex(toolKitLi.length - 1) : setCarrousselIndex(carrousselIndex - 1)
  }

  function handleAddNewToolKit(): void {
    newTool ? setToolKitLi([...toolKitLi, newTool]) : undefined
  }

  return (
    <>
      <h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
      <h2>{toolKitLi[carrousselIndex]}</h2>
      <div className='btn-container'>
        <button onClick={handleCarrousselPrevious}>Anterior</button>
        <button onClick={handleCarrousselNext}>Próximo</button>
      </div>
      <section>
        <h3>Adicione novas ferramentas:</h3>
        <input onChange={({ target }) => setNewTool(target.value)} type='text' />
        <button onClick={handleAddNewToolKit}>Adicionar</button>
      </section>
      <section>
        <h3>Lista de intens do carrossel:</h3>
        <ul>
          {
            toolKitLi.map((e, i) => <li key={i}>{ e }</li>)
          }
        </ul>
      </section>
    </>
  )
}

export default App
