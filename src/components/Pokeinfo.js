import React from 'react'
import {Link} from 'react-router-dom'
const Pokeinfo = ({image,name,stats,check,setCheck,height,abilities,type}) => {
  // height abilities weight stats
  var myMap=[]
  for (let i= 0; i< stats.length; i++) {
    myMap.push(stats[i].stat.name,stats[i].base_stat)
  }
  function toCapital(s)
  {
    return s.charAt(0).toUpperCase()+s.substr(1);
  }
  return (
    <div>
        <h1 className='info-heading'>{name.charAt(0).toUpperCase()+name.substr(1)}</h1>
        <div class="d-flex flex-row big-card">
  <div class="p-3">
      <div class="card info-image">
        <img src={image} alt=""/>
        <span style={{position:'absolute',bottom:'8px',right:'10px'}}>{` `}
      <button disabled="disabled" className={`poke disable-card poke-${type}`} style={{width:'100px',height:'25px'}}>{type}</button>
      </span>
      <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={()=>{
        setCheck(check?false:true)
      }} checked/>
    </div>
        </div>
      </div>
      <div className='p-3'>
    <div className={`card card-desc poke-${type}`}>
      <h5 style={{color:'white'}}>Height: 
      <span>{` `}{height}'</span>
      </h5>
      <h5 style={{color:'white'}}>Abilities: 
      <span>{` `}{toCapital(abilities)} </span>
      </h5>
    </div>
    </div>
      </div>
      </div>
  )
}

export default Pokeinfo