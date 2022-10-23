import { PropaneSharp } from "@mui/icons-material";
import React from "react";
import Card from "./cards";


const Gallery = (props) => {
    return <section className="gallery">
        <div className="gallery-info">
            <h2>WELCOME TO THE JUNGLE</h2>
            <p>When you buy a Jungle Ox (Bos sauveli), you are buying a part of Khmer history and a rare piece of art. Jungle Ox | Kouprey is the national animal of Cambodia and a historic national heritage. Once you own a an Ox you are becoming part of a social club which will offer many benefits over time activated by our timeline. Our Jungle Ox NFT collection is the first ever NFT collection done in Cambodia and will make history, and owning a NFT in our collection will be a great future investment as well. Additionally, your Ox can serve as your digital identity, and open digital doors for you.</p>
        </div>

        <div className="gallery-images">
            {Card.map((singleCard) => {
                const { id, img, des, name } = singleCard;
                return <div className="single-card" key={id} >
                    <div className="g-container">
                        <img className="g-img" src={img} alt={name}></img>

                    </div>
                    <div className="g-text">
                        <img src={props.glry} alt={props.alt} className="glry"></img>
                        <p>{des}</p>
                    </div>

                </div>
            })}
        </div>
    </section>
}
export default Gallery;