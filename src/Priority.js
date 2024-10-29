import React, { useEffect, useState, useCallback } from 'react';
import CardPriority from './CardPriority';
import { icons } from "./assets/assets.js"

const Priority = () => {
    const [tick, setTick] = useState([]);
    const [priorityGroups, setPriorityGroups] = useState({
        nopriority: [],
        lowpriority: [],
        mediumpriority: [],
        hightpriority: [],
        urgent: []
    });

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
            const result = await response.json();
            setTick(result.tickets);
        } catch (error) {
            console.error("Error:", error);
        }
    }, []);

    const groupTickets = useCallback(() => {
        const groupedTickets = tick.reduce((acc, ticket) => {
            switch (ticket.priority) {
                case 0:
                    acc.noprioritypre.push(ticket);
                    break;
                case 1:
                    acc.lowprioritypre.push(ticket);
                    break;
                case 2:
                    acc.mediumprioritypre.push(ticket);
                    break;
                case 3:
                    acc.hightprioritypre.push(ticket);
                    break;
                case 4:
                    acc.urgetnpre.push(ticket);
                    break;
                default:
                    break;
            }
            return acc;
        }, {
            noprioritypre: [],
            lowprioritypre: [],
            mediumprioritypre: [],
            hightprioritypre: [],
            urgetnpre: []
        });

        Object.keys(groupedTickets).forEach(key => {
            groupedTickets[key].sort((a, b) => a.title.localeCompare(b.title));
        });

        setPriorityGroups({
            nopriority: groupedTickets.noprioritypre,
            lowpriority: groupedTickets.lowprioritypre,
            mediumpriority: groupedTickets.mediumprioritypre,
            hightpriority: groupedTickets.hightprioritypre,
            urgent: groupedTickets.urgetnpre
        });
    }, [tick]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        groupTickets();
    }, [groupTickets]);

    const renderBoard = ({ title, image, tickets, style = {} }) => (
        <div className='Board'>
            <div className='boardHeading'>
                <img src={image} className='headingImg' alt={`${title} icon`} />
                <p className='cText' style={style}>{title}</p>
                <p className='cText'>{tickets.length}</p>
                <div className='boardHeading' id='pluske'>
                    <img src={icons.Add} className='headingImg' alt="Add more" />
                    <img src={icons.ThreeDotMenu} className='headingImg' alt="add more" />
                </div>
            </div>
            <div className='Cards'>
                {tickets.map((ticket) => (
                    <CardPriority
                        key={ticket.id}
                        ticket={ticket}
                    />
                ))}
            </div>
        </div>
    );

    const boards = [
        {
            title: 'No-Priority',
            image: icons.ThreeDotMenu,
            tickets: priorityGroups.nopriority,
            style: { width: "190px" }
        },
        {
            title: 'Urgent',
            image: icons.UrgentPriorityColor,
            tickets: priorityGroups.urgent
        },
        {
            title: 'High',
            image: icons.HighPriority,
            tickets: priorityGroups.hightpriority
        },
        {
            title: 'Medium',
            image: icons.MediumPriority,
            tickets: priorityGroups.mediumpriority
        },
        {
            title: 'Low',
            image: icons.LowPriority,
            tickets: priorityGroups.lowpriority
        }
    ];

    return (
        <div className='Boards'>
            {boards.map((board, index) => (
                <React.Fragment key={board.title}>
                    {renderBoard(board)}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Priority;
