import { useState } from 'react'
import './App.css'
import logo from "./assets/logo.png"

function App() {

  const [ textoFrase, setTextoFrase ] = useState("")
  const [ categoriaSelct, setCategoriaSelect ] = useState(0)
  
  const todasFrases = [
    {id: 1,
    nome:"Motivacional",
    frases: [
      "Antes de fazer qualquer coisa nunca se questione se você é capaz. Apenas se lembre que... Nada vai dar certo",
      "Não sinto frio pois sempre estou coberto de decepções",
      "Desistir é para os fracos. Faça que nem eu, nem tente",
      "Não deixe ninguém estragar o seu dia, vai lá e estrague você mesmo",
      "Olá amigo, estude para no futuro, você ser fracassado apenas no amor"
    ]
    },
    {id: 2,
    nome: "Bom Dia",
    frases: [
      "Que Deus abençoe você e tudo o que você fizer neste dia. Bom dia ! - Luciana Castro", 
      "A palavra do dia é Gratidão: Hoje eu só quero dizer de todo coração, obrigado Senhor, por mais um dia de vida! Bom dia",
      "Escrevi e saí correndo. DEUS ABENÇOE QUEM ESTÁ LENDO!",
      "Bom dia! Vovó é o amor de mamãe em dobro!"
    ]
    },
    {id: 3,
    nome: "Boa Noite",
    frases: [
      "Abraço é coisa tão séria que não se empresta, se dá... Então aqui vai o meu abraço pra você! Boa Noite!",
      "Desejo que sua noite seja cheia de amor, carinho e felicidade de vó. Boa noite lindos sonhos!",
      "Por mais longe que se esteja, por mais difícil que se torne, haverá sempre um jeitinho simples e lindo para dizer: Boa Noite!",
      "Olá...Pessoas Lindas! Passei pra dizer que... Adoro a sua Amizade! Você é muito Especial! Boa Noite! Beijos"
    ]
    }
  ]

  function categoriaEscolhida (index: number){
    console.log("OOI", index)
  }

  return (
    <div className="container">
      <img
        alt="Logo frases"
        src={logo}
        className="logo"
      />

      <h2 className="titulo">Categorias</h2>
      <section className="area-categoria">
        {todasFrases.map( (item, index) => (
          <button key={item.id} className="btn-categoria" 
            style={{
              borderWidth: item.nome === todasFrases[categoriaSelct].nome? 2:0,
              borderColor: "#ED4C67"
            }} onClick={() => categoriaEscolhida(index)}>
            {item.nome}
          </button>))}
        
      </section>
      <button className="btn-frase">Gerar Frases</button>

      {textoFrase !== "" && <p className="texto-frase">{textoFrase}</p>}
    </div>
  )
}

export default App
