import Order from '../../Components/Home/Order';
import ScrollTop from '../../Context/Context'
import {useParams} from 'react-router-dom'
import NotFound from '../../Components/Home/NotFound'

const Manage = () => {
  const { param } = useParams()
  const AllRoutes = {
    order: <Order />,
  }

  let component = AllRoutes[param] || <NotFound/>
  return (
    <div>
      <ScrollTop />
      {component}
    </div>
  )
}

export default Manage