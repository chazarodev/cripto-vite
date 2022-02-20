
import { useNavigate } from "react-router-dom"

const Coins = ({coinInfo}) => {

    const {Name, FullName, ImageUrl} = coinInfo.CoinInfo
    const {HIGHDAY, LOWDAY, CHANGEPCTHOUR} = coinInfo.DISPLAY.USD

    const navigate = useNavigate()

    return (
        <button 
            type="button"
            onClick={() => navigate(`/criptomonedas/${Name}`)}>
            <div className="container shadow-md hover:shadow-aside hover:shadow-lg bg-blanco mb-1 py-1 rounded-sm">
                <div className="flex flex-row m-1 items-center">
                    <div className="basis-1/6">
                        <img src={`https://cryptocompare.com/${ImageUrl}`} alt="Imagen criptocoins" className="w-20" />
                    </div>
                    <div className="pt-1 basis-2/6 mt-1">
                        <h1 className="text-xl font-bold text-aside">{Name}</h1>
                        <p className="text-sm text-asideTwo">{FullName}</p>
                    </div>
                    <div className="basis-3/6">
                        <p 
                            className={`text-2xl text-center ${CHANGEPCTHOUR > 0 ? 'text-maximo' : 'text-secundario'}`}>
                            {CHANGEPCTHOUR}%
                        </p>
                    </div>
                </div>
                <div className="container grid p-2 grid-cols-2 gap-2 font-sans text-center mt-2">
                    <div className="mb-3 p-1 mx-auto bg-maximo rounded-md w-full">
                        <h4 className="mb-2 font-sans text-aside text-sm">Máximo del día</h4>
                        <p className="font-bold text-asideTwo text-base">{HIGHDAY}</p>
                    </div>
                    <div className="mb-3 p-1 mx-auto bg-secundario rounded-md w-full">
                        <h4 className="mb-2 font-sans text-blanco text-sm">Mínimo del día</h4>
                        <p className="font-bold text-primario text-base">{LOWDAY}</p>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default Coins
