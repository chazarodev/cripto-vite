import { useState, useEffect } from "react"
import News from "../components/News"
import Spinner from "../components/Spinner/Spinner"

const Articles = () => {

    const [articles, setarticles] = useState([])
    const [spin, setSpin] = useState(true)

    useEffect(() => {
        const getNews = async () => {
            try {
                const url = ' https://min-api.cryptocompare.com/data/v2/news/?lang=EN'
                const response = await fetch(url)
                const result = await response.json()
                setarticles(result.Data)
            } catch (error) {
                console.log(error);
            }
            setTimeout(() => {
                setSpin(!spin)
            }, 1000);
        }
        getNews()
    }, [])
    

    return (
        <main>
            <section>
                {spin ? (<Spinner />) : (
                    <>
                        <h1 className="text-2xl mb-2 text-center font-sans font-bold">Noticias recientes sobre el mundo cripto</h1>
                        <div className="container justify-center grid lg:grid-cols-2 gap-3">
                            {articles.map(article => (
                                <News 
                                    key={article.id}
                                    article={article}
                                />
                            ))}
                        </div>
                    </>
                )}
            </section>
        </main>
    )
}

export default Articles