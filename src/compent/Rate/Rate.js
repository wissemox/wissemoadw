import React from 'react'

const Rate0 = ({Rate}) => {
    const stars = (x)=>{
        let starsArray =[]
        for(let i=0 ; i<=5 ;i++){
            if(i<=x){
                starsArray.push(<span>★</span>);
            }else{
                starsArray.push(<span>☆</span>)
            }
        }
        return starsArray;
    }

    return (
        <div>
            {stars(Rate)}
        </div>
    )
}

export default Rate0
