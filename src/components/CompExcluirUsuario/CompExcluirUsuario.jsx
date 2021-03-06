import { Button,Alert } from 'antd';
import axios from 'axios';
import { useContext,useState} from 'react';
import LoginContext from '../../context/ContextLogin';
import { Navigate, useNavigate } from 'react-router-dom';


export const CompExcluirUsuario = () => {
    const {login, setLogin} = useContext(LoginContext)
    const [status, setStatus] = useState()
  
    const deletar = async (values) => { 
       
        console.log(login.id)
        try{
          const Result = await axios.delete(`http://localhost:5000/api/usuario/${login.id}`)
          setStatus(Result.status);
          setLogin(null)
      
        }catch(error){
          setStatus(error.request.status)
        }
    
        };
    return(
        
        <>
         <>
          {
             status === 409 ? <Alert style={{marginBottom:10 }} type='error' message="Não é possivel excluir, apague seus funkos para excluir esse usuario" showIcon/> : null
          }
        </>
         <Button onClick={deletar} type="primary">Excluir Usuário</Button>
        </>
    )
};