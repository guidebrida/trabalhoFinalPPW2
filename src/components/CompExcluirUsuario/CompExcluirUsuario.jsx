import { Button } from 'antd';
import axios from 'axios';
import { useContext,useState} from 'react';
import LoginContext from '../../context/ContextLogin';
import { Navigate, useNavigate } from 'react-router-dom';


export const CompExcluirUsuario = () => {
    const {login} = useContext(LoginContext)
    const [status, setStatus] = useState()
    const navegacao = useNavigate()
    const deletar = async (values) => {  
        console.log(login.id)
        try{
          const Result = await axios.delete(`http://localhost:5000/api/usuario/${login.id}`)
          setStatus(Result.status);
          navegacao('/Login')
        }catch(error){
          setStatus(error.request.status)
        }
    
        };
    return(
        <>
         <Button onClick={deletar} type="primary">Excluir Usuário</Button>
        </>
    )
};