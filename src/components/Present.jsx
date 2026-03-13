import React from 'react'

const Present = ({user}) => {
  return (
    <div style={{ display: "flex", justifyContent:"center",alignItems:"center",color:"blue", gap: "20px" }}>
       <div 
          style={{
            border: "1px solid gray",
            padding: "15px",
            borderRadius: "8px",
            width: "200px"
          }}>
         {user.map((e)=>(
            <div key={e.id}>
                <h4>Name:{e.name}</h4>
                <h4>Age:{e.age}</h4>
            </div>

        ))}
      
       </div>
       
    </div>
  )
}

export default Present
