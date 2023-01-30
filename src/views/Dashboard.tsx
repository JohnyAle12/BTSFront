import { CardWeather } from '../components/CardWeather'
import { Navbar } from '../components/NavBar'

export const Dashboard = () => {
  return (
    <div className="container">
        <div className="row">
          <div className="col">
            <Navbar />
            <div className="card text-center">
              <div className="card-header">
                Consultar climas
              </div>
              <CardWeather />
              <div className="card-footer text-muted"></div>
            </div>
          </div>
        </div>
    </div>
  )
}
