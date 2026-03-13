import React from 'react'

const ProductCard = ({datas}) => {

  return (
    <div style={{
            border: "1px solid gray",
            padding: "15px",
            borderRadius: "8px",
            width: "200px"
          }} >
        {datas.map((e) => (
            <div key={e.id}>
                <p>{e.productname}</p>
                <p>{e.price}</p>


            </div>
        ))}
      
    </div>
  )
}

export default ProductCard
