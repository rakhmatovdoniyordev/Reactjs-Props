import React from 'react'
import "./Props.scss"

const Props = ({clasN, title, items, desc, model, btnone, btntwo, color, btncolor, btnbg}) => {
    const type = items?.map((element, inx)=>(
        <li className="props__item" key={inx}>
               <a href="#">
                    <span>{element}</span>
                </a>
        </li>
    ))
  return (
    <section className='props'>
        <div className="container">
            <div className={`props__wrapper ${clasN}`} style={{color: color}}>
                <div className="props__top">
                    <h2>{title}</h2>
                    <ul className="props__collection">
                        {type}
                    </ul>
                </div>
                <div className="props__bottom">
                    <h3>{model}</h3>
                    <p>{desc}</p>
                    <div className="props__buttons">
                        <button className='btn__one'>{btnone}</button>
                        <button className='btn__two' style={{background: btncolor, color: btnbg}}>{btntwo}</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Props