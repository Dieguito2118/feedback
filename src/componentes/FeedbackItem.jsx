import { useState } from "react"

const FeedBackItem = () =>{
    
    //Estados: Persisten información a traves del ciclo de vida
    // de un unico componente
    
    //Estados iniciales
    const [rating, setRating ] = useState(2) 
    const [text, setText] = useState("Mejorar Curso, Mejores Recursos")

    const cambiarNota = () =>{
        //Cambiar estado a rating
        setRating((prev)=>{
            return prev + 1
        })
    }
    const restarNota = () =>{
        //Cambiar estado a rating
        setRating((prev)=>{
            return prev - 1
        })
    }

    return(
        <div className="card">
            <div className="num-display">
                { rating }
            </div>
            <div className="text-display">
                { text }
            </div>
            
            <button onClick={ cambiarNota } className='btn'>
                Cambiar Nota
            </button>
            <br />
            <button onClick={ restarNota} className='btn'>
                Restar Nota
            </button>
            
        </div>
    )
}

export default FeedBackItem