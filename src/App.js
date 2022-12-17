import React, {useState} from "react";
import Icon from './Imgs/icon.png'
import api from './services/api'

export default () => {
  
  
  const [input, setInput] = useState('')

  const [cep, setCep] = useState({})

  const  handleSearch =  async() => {
    if(input === ''){
      alert('Preencha o campo indicado!')
      return
    }

    try{
        const response = await api.get(`${input}/json`) /* Tipo da requisão que vamos fazer */
        setCep(response.data)
        setInput('')
    } catch{
        alert('Ops erro ao buscar o CEP!!!')
        setInput('')
    }



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



        {Object.keys(cep).length > 0 && ( // Para checkar se tem algo 
          <main className="main">
          <h2>CEP:  {cep.cep} </h2>

          <span>Logradouro: {cep.logradouro}</span>
          <span>Complemento: {cep.complemento} </span>
          <span>Bairro: {cep.bairro} </span>
          <span>Localidade: {cep.localidade} - {cep.uf} </span>
        </main>
        )}
        


      </div>
    </>
  )
}