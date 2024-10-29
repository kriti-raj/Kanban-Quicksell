import React, { useEffect, useState, useCallback } from 'react';
import CardUser from './CardUser.js';
import { icons, userImages } from "./assets/assets.js"

const usrImageMap = {
    "usr-1": userImages.User1,
    "usr-2": userImages.User2,
    "usr-3": userImages.User3,
    "usr-4": userImages.User4,
    "usr-5": userImages.User5,
    "usr-6": userImages.User6,
    "usr-7": userImages.User7,
};

const User = ({ order }) => {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const [userGroups, setUserGroups] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
            const result = await response.json();
            setTickets(result.tickets);
            setUsers(result.users);
        } catch (error) {
            console.error("Error:", error);
        }
    }, []);

    const groupTicketsUser = useCallback(() => {
        const groupedTickets = users.map(user => {
            const userTickets = tickets.filter(ticket => ticket.userId === user.id);

            return {
                user,
                tickets: userTickets.sort((a, b) =>
                    order === "Title"
                        ? a.title.localeCompare(b.title)
                        : b.priority - a.priority
                )
            };
        });

        setUserGroups(groupedTickets);
    }, [tickets, users, order]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        groupTicketsUser();
    }, [groupTicketsUser]);

    const renderUserBoard = ({ user, tickets }) => {
        if (!user || tickets.length === 0) return null;

        return (
            <div className='Board' key={user.id}>
                <div className='boardHeading'>
                    <div style={{ position: 'relative' }}>
                        <img
                            src={usrImageMap[user.id] || userImages.User1}
                            className='headingImg2'
                            alt={`${user.name}'s avatar`}
                        />
                        <span
                            style={{
                                position: 'absolute',
                                bottom: '5px',
                                right: '0',
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                backgroundColor: user.available ? '#4BB543' : '#FF0000',
                                border: '1px solid white'
                            }}
                        />
                    </div>
                    <p className='cText' style={{ width: "500px" }}>{user.name}</p>
                    <p className='cText'>{tickets.length}</p>
                    <div className='boardHeading' id='pluske'>
                        <img src={icons.Add} className='headingImg' alt='More options' />
                        <img src={icons.ThreeDotMenu} className='headingImg' alt="add more" />
                    </div>
                </div>
                <div className='Cards'>
                    {tickets.map(ticket => (
                        <CardUser
                            key={ticket.id}
                            ticket={ticket}
                            available={user.available}
                        />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className='Boards'>
            {userGroups.map(group => renderUserBoard(group))}
        </div>
    );
};

export default User;