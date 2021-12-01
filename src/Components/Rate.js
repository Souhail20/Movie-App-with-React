import React  from 'react';
const Rate = ({rating,setSearchByRate}) =>{
    const Stars = (x)=>{
        let starsArray = []
        for(let i=1; i<=5; i++){
            if (i<= x){
                starsArray.push(<span style={{color:'#f6cd61',cursor:'pointer'}} onClick={()=> setSearchByRate(i)}>★</span>)
            }
            else{
                starsArray.push(<span onClick={()=> setSearchByRate(i)}>☆</span>)
            }
        }
        return starsArray
    };

return (
    <div>
      {Stars(rating)}  
    </div>
)
};
export default Rate;
