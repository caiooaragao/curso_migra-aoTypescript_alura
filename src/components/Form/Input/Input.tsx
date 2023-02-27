
import "./Input.css"


interface CampoTextoProps {
    aoAlterado: (valor: string) => void
    nome:string
    required: boolean
    placeholder: string
    valor: string
    type: string
}

function Input(props:CampoTextoProps){
    
   

    const aoDigitado = (e: React.SyntheticEvent<InputEvent) => {
        props.aoAlterado(e.target.value)
    }
    
    return(
    
        <div className="input-container">
            <label htmlFor={props.nome}>{props.nome}</label>
            <input id={props.nome} onChange={aoDigitado} required={props.required} type={props.type} placeholder={props.placeholder} name={props.nome} value={props.valor}  />
        </div>
    )
}

export default Input