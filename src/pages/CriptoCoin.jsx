import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Coin from '../components/Coin'
import Spinner from "../components/Spinner/Spinner"

const CriptoCoin = () => {

    const [coinInfo, setCoinInfo] = useState({})
    const [spin, setSpin] = useState(true)

    const {Name} = useParams()

    useEffect(() => {
        const getCoin = async () => {
            try {
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${Name}&tsyms=USD`
                const response = await fetch(url)
                const result = await response.json()
                setCoinInfo(result.DISPLAY[Name].USD)
            } catch (error) {
                console.log(error);
            }
            setTimeout(() => {
                setSpin(!spin)
            }, 1000);
        }
        getCoin()
    }, [])
    
    return (
        <main>
            {spin ? (<Spinner />) : (
                <section>
                <Coin 
                    coinInfo={coinInfo}
                    Name={Name}
                />
                </section>
            )}
        </main>
    )
}

export default CriptoCoin