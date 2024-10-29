import React from 'react';
import { icons, statusImages } from "./assets/assets.js"

const CardUser = ({ ticket }) => {
    const statusImageMap = {
        "Todo": icons.ToDo,
        "In progress": icons.InProgress,
        "Backlog": icons.Backlog,
        "Done": icons.Done,
        "Cancelled": icons.Canceled,
    }
    const statusImgSrc = statusImageMap[ticket.status] || icons.ToDo;
    return (
        <div className='cardBox'>
            <div className='cardBoxrow'>
                <div className='cardBoxin'>
                    <p className='cardId'>{ticket.id}</p>
                    <p className='cardTitle'>
                        <img src={statusImgSrc} alt="status icon" />
                        {ticket.title}
                    </p>
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

export default CardUser;