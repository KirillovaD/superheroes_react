import "./createHero.css";
import Rating from "../ratingHero/rating";

function Hero(props){
  return(
    <div className={ `hero ${props.id}`}>
      <h2 className="hero__name">{props.name}</h2>
      <p className="hero__rating">Рейтинг: {props.rate}</p>
      <Rating />
      <p className="hero__universe">{props.universe}</p>
      <p className="hero__alterEgo">{props.alterEgo}</p>
      <p className="hero__work">{props.work}</p>
      <p className="hero__friend">{props.friends}</p>
      <p className="hero__superpower">{props.superpower}</p>
      <img className="hero__img" alt={props.name} src={props.src} />
    </div>
  )
}
export default Hero;