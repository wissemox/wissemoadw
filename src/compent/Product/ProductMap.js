import React, { useState } from 'react'
import Rate0 from '../Rate/Rate'
import Register from '../Model/Model02'
const ProductMap = ({ el: { name, image, Rate, Descrpation, Prix } }) => {
    const [Bloen, setBloen] = useState(false)
    const Test = () => {
        setBloen(!Bloen)
    }
    return (
        <div className="OneForAll02">



            <div className="OneForall">

                <div className="FlexBox">

                    <div className="ImageFlex02">
                        <div className="Rate0">
                            <div className="ImageRating">
                                <img src={image} />
                            </div>


                            <div className="Rateing">
                                <Rate0 Rate={Rate} />
                            </div>
                        </div>
                        <div className="AllProductThink">

                            <div className="FlexBoxButton">
                                <button className="Button55" onClick={Test}>>></button>
                                {Bloen ? <div className="Descrrpation">
                                    <div className="DescrrpationText">
                                        <p>Product Name <p hidden></p>:<p hidden></p> {name}</p>
                                        <p>Product Prix <p hidden></p>:<p hidden></p> {Prix}</p>
                                        <div className="Rate00">
                                            <div className="TextBitcoin">
                                                <p>Product BitCoine: {Rate}</p>
                                            </div>

                                            <img src="BinCoin.png" />
                                        </div>

                                        <Register />
                                    </div>

                                </div> : null}
                            </div>


                        </div>

                        {/* <div className="Rate02"> */}
                        {/* <div className="NameProdiuct">
                <p>{name}</p>
                <div className="Prix">
                <span>{Prix}$ =</span>
               <img src="BinCoin.png"/>
               <p>500</p>
               </div>
                </div>

                <div className="Rate">
                <Rate0 Rate={Rate}/>
                </div>

                <div className="Widht">  
                <p id="Descripation">{Descrpation}</p>
                </div>
                </div> */}

                    </div>


                </div>
            </div>
        </div>
    )
}

export default ProductMap
