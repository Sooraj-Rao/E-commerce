import Card from '../../Components/Home/Card'
import Category from '../../Components/Home/Category'
import Hero from '../../Components/Home/Hero'
import Latest from '../../Components/Home/Latest'
import ScrollTop from '../../Constant/ScrollTo/ScrollTop'

const Home = () => {

    return (
        <div>
            <ScrollTop />
            <Hero />
            <Category />
            <Latest />
            <Card />
        </div>
    )
}

export default Home