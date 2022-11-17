import Header from "./componentes/Header";
import FeedBackItem from "./componentes/FeedbackItem";

function App(){
    
    //Objeto de estilos:
    const HeaderStyles = {
        backgroundColor: '#002EFF',
        color: 'red'
    }

    return(
        <div className="container">
            { /* Props: Son Atributos de etiqueta de un componente react */}
            <Header
                bgColor={HeaderStyles.backgroundColor}
                color={HeaderStyles.color} />
            <FeedBackItem/>
            <FeedBackItem/>
            <FeedBackItem/>
            <h2> Componente App</h2>
        </div>
    )
}

export default App;