import {useEffect, useState} from 'react'
import {token} from '../../config'
// import {toast} from 'react-toastify'
const useFetchData = url => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true)
            try{
                const res = await fetch(url, {
                    headers: {Authorization: ` Bearer ${token}`}
                })
                    console.log(token)
                const result = await res.json()
                
                console.log("result",result);
    
                if(!res.ok){
                    throw new Error(result.message + 'fail')
                }

                setData(result.data)
                setLoading(false)

            }catch(err){
                setLoading(false)
                setError(err.messages)
            }
        }
        fetchData()
    },[url])
  return {
    data, loading, error
  
  }
 
}

export default useFetchData
