/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { icons, statusImages, userImages } from "./assets/assets.js"

const CardPriority = ({ ticket }) => {
    const statusImageMap = {
        "Todo": icons.ToDo,
        "In progress": icons.InProgress,
        "Backlog": icons.Backlog,
        "Done": icons.Done,
        "Cancelled": icons.Canceled,
    }
    const usrImageMap = {
        "usr-1": userImages.User1,
        "usr-2": userImages.User2,
        "usr-3": userImages.User3,
        "usr-4": userImages.User4,
        "usr-5": userImages.User5,
        "usr-6": userImages.User6,
        "usr-7": userImages.User7,
    };

    const usrImage = usrImageMap[ticket.userId] || userImages.User1;
    const statusImgSrc = statusImageMap[ticket.status] || icons.ToDo;

    const [available, setAvailable] = useState(false);

    return (
        <div className='cardBox'>
            <div className='cardBoxrow'>
                <div className='cardBoxin'>
                    <p className='cardId'>{ticket.id}</p>
                    <p className='cardTitle'>
                        <img src={statusImgSrc} alt="status icon" />
                        {ticket.title}
                    </p>
                </div >
                <div style={{ height: "38px", position: "relative" }}>
                    <img className='userImg' src={usrImage} alt='user avatar' />
                    <span
                        style={{
                            position: "absolute",
                            bottom: "2px",
                            right: "2px",
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: available ? "#44B700" : "#ff3333",
                            border: "2px solid white"
                        }}
                    />
                </div>
            </div>
            <div className='lowerBox'>
                <div className='tagBox'>
                    <img className='tagImg' src={statusImages.tag} alt='logo' />
                    <p className='tagText'>{ticket.tag}</p>
                </div>
            </div>
        </div>
    );
};

export default CardPriority;