
const News = ({article}) => {

    const {guid, imageurl, title, source, body, tags, categories} = article

    return (
        <article className="font-sans">
            <div className="container shadow-md hover:shadow-aside hover:shadow-lg bg-blanco mb-1 py-1 rounded-md">
                <div className="flex items-center">
                    <img src={imageurl} alt="Imagen noticia"  className="w-24 lg:w-32 m-2 rounded-lg p-0"/>
                    <h1 className="text-center px-2 lg:px-0 text-base lg:text-xl font-bold">{title}</h1>
                </div>
                <div className="p-2">
                    <h2 className="text-justify mb-1 lg:mb-3 p-3 lg:p-0">{body.substring(0, 130) + "..."}</h2>
                    <button>
                        <a className="p-1 bg-aluminium rounded-md shadow-sm shadow-aside" href={guid} target="_blank">Leer más</a>
                    </button>
                    <div className="flex items-center px-1 lg:justify-around justify-between mt-4">
                        <p className="text-textoAlt text-sm lg:text-base">Fuente: <span className="text-asideTwo font-bold">{source}</span></p>
                        <p className="text-textoAlt text-sm lg:text-base">Categoría: <span className="text-asideTwo font-bold">{categories}</span></p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default News