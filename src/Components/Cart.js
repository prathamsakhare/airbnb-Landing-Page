import React from 'react'
import Image from './image/sundar.jfif'
import Image2 from './smlogo.png'
import Image3 from './email.png'
export default function Cart(props) {
  let badgeText
  if(props.item.openSpots === 0){
    badgeText = "BUSY"
  } else if(props.item.location === 'online'){
    badgeText = "ONLINE"
  }


  
  return (
    <div className='card'>

      {/* ##################################################################################################
      
      PS. This is HardCoded part */}


        {/* <img src={Image2} className="photo"></img>
        <h3 className='name'>{props.name}</h3>
        <div className='bottomLine'>
            <img src={Image3} className="smlogo"></img>
            <p className='country'>{props.country}</p>
        </div>
        <div className='einf'>
        <img src={Image4} className="email"></img>
        <p className='pem'>sundarpichai@gmail.com</p> 
        </div>  */}
        {/* ############################################################################################## */}

        {/* PS. This is softcoded part */}

        {/* {badgeText && <div className="badge">{badgeText}</div>} */}

        
        {/* so at this time we have given a condition in short form, that IF props.openSpots is equal to zero then it will render that badge BUSY, ELSE it will not render that badge */}
        {/* PS ==>> THIS STATEMENT IS ONLY RENDERING ONE PROP */}


        {badgeText && <div className='card--badge'>{badgeText}</div>}
        {/* PS ==>> THIS STATEMENT WILL RENDER BOTH THE BUSY AND ONLINE TAG AND IT WILL PREFER TO PRINT BUSY TAG IF BOTH ARE APPLICABLE TO ANY SPECIFIC CARD */}

        <img src={Image} className="photo"></img>
        <div className='name'>
          <img src={Image2} className="man"></img>
          <h3 className='nc'>{props.item.name}</h3>
        </div>
        <p className='post'>{props.item.post}</p>
        <div className='imgmail'>
          <img src={Image3} className="email"></img>
          <p>{props.item.email}</p>
        </div>
        
        

    </div>
  )
}
