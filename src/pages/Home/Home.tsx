import hero from '../../assets/home_hero.png'
import './Home.css'

export const Home = () => {
  return (
    <div className="home__container">
      <div className="home__description">
        <h1>Unlocking the potential of digital tranquility</h1>
        <p>
          Relax, we'll navigate together to find the best digital solution for
          you. Say goodbye to headaches, and hello to seamless solutions."
        </p>
      </div>

      <img
        className="home__hero"
        src={hero}
        alt="find your digital tranquility"
        height={700}
      />
    </div>
  )
}
