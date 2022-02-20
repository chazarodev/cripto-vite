import { Link, useLocation, Outlet } from "react-router-dom"

const Layout = () => {

    const location = useLocation()

    const urlActual = location.pathname

    return (
        <aside className="md:flex md:min-h-screen">
            <div className="md:w-1/5 font-sans bg-gradient-to-tr from-aside to-asideTwo/75 px-5 py-10">
                <h1 className="text-3xl md:text-xl xl:text-4xl font-bold mb-3 text-center text-blanco">CriptoWorld</h1>
                <nav className="mt-10">
                    <Link to={'/'}>
                        <h2 className={`${urlActual === '/' ? 'text-aluminium' : 'text-blanco'} text-2xl lg:text-3xl text-center text-blanco transition ease-in-out hover:text-aluminium delay-150 duration-300`}>
                            Noticias
                        </h2>
                    </Link>
                    <Link
                        className={`${urlActual === '/criptomonedas' ? 'text-aluminium' : 'text-blanco'} text-2xl lg:text-3xl block mt-2 text-center transition ease-in-out hover:text-aluminium delay-150 duration-300`}
                        to='/criptomonedas'
                    >
                        <h2>
                            TopList
                        </h2>
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
