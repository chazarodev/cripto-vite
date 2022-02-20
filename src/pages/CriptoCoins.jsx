import { useState, useEffect } from "react"
import Coins from "../components/Coins"
import Spinner from "../components/Spinner/Spinner"

const CriptoCoins = () => {

    const [criptoCoinsInfo, setcriptoCoinsInfo] = useState([])
    const [spin, setSpin] = useState(true)

    useEffect(() => {
      const getCoins = async () => {
          try {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD'
            const response = await fetch(url)
            const result = await response.json()
            setcriptoCoinsInfo(result.Data);
        } catch (error) {
            console.log(error);
        }
        setTimeout(() => {
            setSpin(!spin)
        }, 1000);
      }
      getCoins()
    }, []);

    return (
        <main>
            {spin ? (
                <Spinner />
            ) : (
                <>
                    <h1 className="text-4xl text-center text-asideTwo font-bold mb-4">Top List por Capitalización de Mercado</h1>
                    <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {criptoCoinsInfo.map(coinInfo => (
                            <Coins
                                key={coinInfo.CoinInfo.Id} 
                                coinInfo={coinInfo}
                            />
                        ))}
                    </section>
                </>
            )}
        </main>
    )
}

export default CriptoCoins
