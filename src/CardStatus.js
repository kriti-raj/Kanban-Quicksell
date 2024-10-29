import React from 'react';
import './Card.css';
import { icons, statusImages, userImages } from "./assets/assets.js"


const CardStatus = ({ ticket }) => {
    const priorityImageMap = {
        0: icons.ThreeDotMenu,
        1: icons.LowPriority,
        2: icons.MediumPriority,
        3: icons.HighPriority,
        4: icons.UrgentPriorityColor,
    };

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
    const imgSrc = priorityImageMap[ticket.priority] || icons.ThreeDotMenu;

    return (
        <div className='cardBox'>
            <div className='cardBoxrow'>
                <div className='cardBoxin'>
                    <p className='cardId'>{ticket.id}</p>
                    <p className='cardTitle'>
                        {ticket.title}</p>
                </div >
                <div style={{ height: "38px" }}>
                    <img className='userImg' src={usrImage} alt='' />
                </div>
            </div>

            <div className='lowerBox'>
                <div className='priorityBox'><img className='priorityImg' src={imgSrc} alt='logo' /></div>
                <div className='tagBox'>
                    <img className='tagImg' src={statusImages.tag} alt='logo' />
                    <p className='tagText'>{ticket.tag}</p>
                </div>
            </div>
        </div>
    );
};

export default CardStatus;