
import style from './country.module.css'

const Country = (props) => {
    const {name, flags, capital, population, area} = props.country;

    const handleRemoveContryClick = (name) =>{
        props.onRemoveItem(name)
    }

  return (
    <article className={style.country} >
        <div>
            <img src={flags.png} alt={name.common} className={style.flag} />
            <h3>Name: {name.common}</h3>
            <h3>Population: {population}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Area: {area}</h3>
            <button onClick={() =>{handleRemoveContryClick(name.common)}} className={style.btn}>Remove Country</button>
        </div>
    </article>
  )
}

export default Country