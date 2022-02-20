import { Link, useLocation, Outlet } from "react-router-dom"

const Layout = () => {

    const location = useLocation()

    const urlActual = location.pathname

    return (
        <aside className="md:flex md:min-h-screen">
            <div className="md:w-1/5 bg-gradient-to-tr from-aside to-asideTwo px-5 py-10">
                <h2 className="text-4xl font-sans text-center text-blanco">
                    CriptoCoins
                </h2>
                <nav className="mt-10">
                    <Link
                        className={`${urlActual === '/criptomonedas' ? 'text-aluminium' : 'text-blanco'} text-2xl block mt-2 text-center transition ease-in-out hover:text-aluminium delay-150 duration-300`}
                        to='/criptomonedas'
                    >
                        TopList
                    </Link>
                </nav>
            </div>
            <div className="md:w-4/5 p-10 md:h-screen overflow-scroll">
                <Outlet />
            </div>
        </aside>
    )
}

export default Layout
