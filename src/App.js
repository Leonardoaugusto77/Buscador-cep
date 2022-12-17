import React, {useState} from "react";
import Icon from './Imgs/icon.png'

export default () => {
  
  const [input, setInput] = useState('')

  const  handleSearch = () => {
    alert('Valor do input ' + input)
  }



  return(
    <>
      <div className="container">
        <h1 className="title">Buscador de CEP</h1>

        <div className="containerinput">
          
          <input type='text' placeholder="Digite seu CEP..." value={input} onChange={(e)=> setInput(e.target.value) } />
          <button   className="buttonSearch" onClick={handleSearch}><img id="icon-img" src={Icon} style={{width: '30px'}}
         

          /></button>

        </div>

        <main className="main">
          <h2>CEP: 9999-9999</h2>

          <span>Rua: Batman muito louco</span>
          <span>Complemento: algumssss</span>
          <span>Bairro: Vila Rosa</span>
          <span>campo grande</span>
        </main>


      </div>
    </>
  )
}