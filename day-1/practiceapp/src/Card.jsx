import React from "react";


export default function Card(props){
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgSrc} alt="Bhoot Police" className="card_img"/>
                    <div className="card_info">
                        <span className="card_category">{props.sname}</span>
                        <h3 className="card_title">{props.title}</h3>
                        <a href={props.link}>
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}


