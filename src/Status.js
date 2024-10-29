import './Status.css';
import React, { useEffect, useState, useCallback } from 'react';
import CardStatus from './CardStatus';
import { icons } from "./assets/assets.js"
const Status = () => {
    const [tick, setTick] = useState([]);
    const [inProgressno, setinProgressno] = useState([]);
    const [doneno, setdoneno] = useState([]);
    const [cancelled, setcancelled] = useState([]);
    const [backlog, setbacklog] = useState([]);
    const [order, setOrder] = useState(localStorage.getItem('order'));
    const [users, setUsers] = useState([]);
    const [todonum, setTodonum] = useState([]);

    const hello = useCallback(async () => {
        try {
            const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
            const result = await response.json();
            setTick(result.tickets);
            setUsers(result.users);
        } catch (error) {
            console.error("Error:", error);
        }
    }, []);

    const count = useCallback(() => {
        const groupedTickets = tick.reduce((acc, ticket) => {
            switch (ticket.status) {
                case "Todo":
                    acc.todopre.push(ticket);
                    break;
                case "Done":
                    acc.donepre.push(ticket);
                    break;
                case "cancelled":
                    acc.cancelledpre.push(ticket);
                    break;
                case "Backlog":
                    acc.backlogpre.push(ticket);
                    break;
                case "In progress":
                    acc.inprogresspre.push(ticket);
                    break;
                default:
                    break;
            }
            return acc;
        }, {
            todopre: [],
            donepre: [],
            cancelledpre: [],
            backlogpre: [],
            inprogresspre: []
        });

        const { todopre, donepre, cancelledpre, backlogpre, inprogresspre } = groupedTickets;

        const sortedGroups = order === "Title"
            ? {
                todopre: [...todopre].sort((a, b) => a.title.localeCompare(b.title)),
                inprogresspre: [...inprogresspre].sort((a, b) => a.title.localeCompare(b.title)),
                backlogpre: [...backlogpre].sort((a, b) => a.title.localeCompare(b.title)),
                donepre: [...donepre].sort((a, b) => a.title.localeCompare(b.title)),
                cancelledpre: [...cancelledpre].sort((a, b) => a.title.localeCompare(b.title))
            }
            : {
                todopre: [...todopre].sort((a, b) => b.priority - a.priority),
                inprogresspre: [...inprogresspre].sort((a, b) => b.priority - a.priority),
                backlogpre: [...backlogpre].sort((a, b) => b.priority - a.priority),
                donepre: [...donepre].sort((a, b) => b.priority - a.priority),
                cancelledpre: [...cancelledpre].sort((a, b) => b.priority - a.priority)
            };

        setTodonum(sortedGroups.todopre);
        setbacklog(sortedGroups.backlogpre);
        setcancelled(sortedGroups.cancelledpre);
        setdoneno(sortedGroups.donepre);
        setinProgressno(sortedGroups.inprogresspre);
    }, [tick, order]);

    useEffect(() => {
        hello();
    }, [hello]);

    useEffect(() => {
        count();
    }, [count]);

    useEffect(() => {
        const newOrder = localStorage.getItem('order');
        if (newOrder !== order) {
            setOrder(newOrder);
        }
    }, [order]);

    const renderCards = (tickets, status) => {
        return tickets.map((ticket) => {
            const user = users.find(item => item.id === ticket.userId);
            const available = user ? user.available : false;

            return (
                <CardStatus
                    key={ticket.id}
                    ticket={ticket}
                    available={available}
                />
            );
        });
    };

    const renderBoard = (title, image, tickets, status) => (
        <div className='Board'>
            <div className='boardHeading'>
                <img src={image} className='headingImg' alt={title} />
                <p className='cText'>{title}</p>
                <p className='cText'>{tickets.length}</p>
                <div className='boardHeading' id='pluske'>
                    <img src={icons.Add} className='headingImg' alt="add more" />
                    <img src={icons.ThreeDotMenu} className='headingImg' alt="add more" />
                </div>
            </div>
            <div className='Cards'>
                {renderCards(tickets, status)}
            </div>
        </div>
    );

    return (
        <div className='Boards'>
            {renderBoard('Backlog', icons.Backlog, backlog, 'Backlog')}
            {renderBoard('Todo', icons.ToDo, todonum, 'Todo')}
            {renderBoard('InProgress', icons.InProgress, inProgressno, 'In progress')}
            {renderBoard('Done', icons.Done, doneno, 'Done')}
            {renderBoard('Canceled', icons.Canceled, cancelled, 'cancelled')}
        </div>
    );
};

export default Status;
