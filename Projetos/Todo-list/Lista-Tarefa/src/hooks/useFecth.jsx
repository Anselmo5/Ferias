// divição de funções, aqui e onde vai ficar as ações de adicionar ou excluir tarefa    
import React,{ useState,useEffect } from 'react'

const useFecth = (url) => {
    const [data,setData] = useState(null)
    const [config,setConfig] = useState(null) // configuração da requisição
    const [method, setMethod] = useState(null) //metodo da requisição "get, post"
    const [callfetch,setCallfetch] = useState(false) // atualização dos dados
    const [loading,setloading] = useState(false)
    const [error,setError] = useState(null)


    const httpconfig = (data,method) => {
        if(method === "POST"){
            setConfig({
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            setMethod("POST")
        }
    }

    useEffect(() =>{
        const fectData = async () => {
            setloading(true)
            try {
                const res = await fetch.url
                const data = await res.json()
                setData(data)
            } catch (error) {
            
                setError('Houve um Erro')
            }
            setloading(false)           
        }
        fectData()
    },[url,callfetch])


    
    useEffect(() =>{
        const httpRequest = async () =>{
            if (method === "POST"){
                let fetchOptions = [url,config];
                const res = await fetch(...fetchOptions)
                const data = await res.json()
                setCallfetch(data)
            }
        }
        httpRequest()
    },[config,method,url])


    return{data,httpconfig,loading,error}
}

export default useFecth
