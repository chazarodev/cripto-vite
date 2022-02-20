
const Coin = ({coinInfo, Name}) => {

    const {IMAGEURL, PRICE, OPENDAY, HIGHDAY, LOWDAY, CIRCULATINGSUPPLY, MKTCAP, CHANGEPCT24HOUR, VOLUME24HOUR} = coinInfo

    return (
        Object.keys(coinInfo).length === 0 ? <p className="bg-blanco rounded-sm shadow-md p-4 text-center text-4xl">No hay resultados</p> : (
            <>
                <div className="flex flex-col xl:flex-row items-center justify-evenly bg-blanco rounded-sm shadow-md p-4">
                    <div>
                        <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen criptomoneda" className="w-32 mb-3 md:mb-0 animate-pulse" />
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl mb-2">1 {Name} = <span className="font-bold">{PRICE}</span></h1>
                    </div>
                    <div>
                        <p
                        className="tex-lg text-textoAlt">
                            Var 24hrs{'  '}<span className={`text-2xl font-bold ${CHANGEPCT24HOUR > 0 ? 'text-maximo' : 'text-secundario'}`}>({CHANGEPCT24HOUR}%)</span>
                        </p>
                    </div>
                </div>
                <div className="font-sans mt-2 rounded-sm shadow-md p-4 text-xl md:text-base lg:text-xl flex flex-col xl:flex-row items-center justify-between bg-blanco text-center">
                    <div className="p-2">
                        <p className="text-xl md:text-sm lg:text-base text-textoAlt">Precio de Apertura:</p>
                        <p>{OPENDAY} </p>
                    </div>
                    <div className="p-2">
                        <p className="text-xl md:text-sm lg:text-base text-textoAlt">Rango Diario:</p>
                        <p>{LOWDAY} - {HIGHDAY}</p>
                    </div>
                    <div className="p-2">
                        <p className="text-xl md:text-sm lg:text-base text-textoAlt">Vol. (24h):</p>
                        <p>{VOLUME24HOUR}</p>
                    </div>
                    <div className="p-2">
                        <p className="text-xl md:text-sm lg:text-base text-textoAlt">Oferta en Circulación:</p>
                        <p>{CIRCULATINGSUPPLY}</p>
                    </div>
                    <div className="p-2">
                        <p className="text-xl md:text-sm lg:text-base text-textoAlt">Cap. Mercado:</p>
                        <p>{MKTCAP}</p>
                    </div>
                </div>
            </>
        )
    )
}

export default Coin