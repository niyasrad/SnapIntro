import React, { useState } from "react";
import './navbar.css'
import logo from '../../assets/images/logo.svg';
import todo from '../../assets/images/icon-todo.svg';
import calendar from '../../assets/images/icon-calendar.svg';
import reminders from '../../assets/images/icon-reminders.svg';
import planning from '../../assets/images/icon-planning.svg';
import up from '../../assets/images/icon-arrow-up.svg';
import down from '../../assets/images/icon-arrow-down.svg';
import menu from '../../assets/images/icon-menu.svg';
import close from '../../assets/images/icon-close-menu.svg';

export default function Navbar(props) {
    const [active1, handleClick1] = useState(false)
    const [active2, handleClick2] = useState(false)
    const [active3, handleClick3] = useState(false)
    const [active4, handleClick4] = useState(false)
    const [active5, handleClick5] = useState(false)
    return (
        <div className="navbar">
            <div className="nav-first">
                <img className="logo" src={logo} alt="logo" />
                <div className="features" onClick={() => handleClick1(!active1)}>
                    Features&nbsp;
                    {active1 ? <img src={up} alt="up" /> : <img src={down} alt="down" />}
                    {active1 && <div>
                        <a href="#">
                            <img src={todo} alt="" />
                            <p> Todo List</p>
                        </a>
                        <a href="#">
                            <img src={calendar} alt="" />
                            <p> Calendar</p>
                        </a>
                        <a href="#">
                            <img src={reminders} alt="" />
                            <p> Reminders</p>
                        </a>
                        <a href="#">
                            <img src={planning} alt="" />
                            <p> Planning</p>
                        </a>
                    </div>}


                </div>
                <div className="company" onClick={() => handleClick2(!active2)}>
                    Company&nbsp;
                    {active2 ? <img src={up} alt="up" /> : <img src={down} alt="down" />}
                    {active2 && <div>
                        <a href='#'>History</a>
                        <a href='#'>Our Team</a>
                        <a href='#'>Blog</a>
                    </div>}


                </div>
                <a href="#">Careers</a>
                <a href="#">About</a>

            </div>
            <div className="nav-second">
                <button>Login</button>
                <button>Register</button>
                {active3 ? <img src={close} className="men" alt="navig" onClick={() => handleClick3(!active3)} /> : <img src={menu} className="men" alt="navigation" onClick={() => handleClick3(!active3)} />}
                {active3 && <div className="newbar">
                    <div className="features" onClick={() => handleClick4(!active4)}>
                        <div className="smallman">
                        <p>Features&nbsp;</p>
                        {active4 ? <img src={up} className="waht" alt="up" /> : <img src={down} className="waht" alt="down" />}
                        </div>
                        
                        {active4 && <div className="bigman">
                            <a href="#">
                                <img src={todo} alt="" />
                                <p> Todo List</p>
                            </a>
                            <a href="#">
                                <img src={calendar} alt="" />
                                <p> Calendar</p>
                            </a>
                            <a href="#">
                                <img src={reminders} alt="" />
                                <p> Reminders</p>
                            </a>
                            <a href="#">
                                <img src={planning} alt="" />
                                <p> Planning</p>
                            </a>
                        </div>}
                    </div>
                    <div className="company" onClick={() => handleClick5(!active5)}>
                        <div className="smallman">
                            <p>Company&nbsp;</p>
                            {active5 ? <img src={up} className="waht" alt="up" /> : <img src={down} className="waht" alt="down" />}
                        </div>
                        
                        {active5 && <div className="bigman">
                            <a href='#'>History</a>
                            <a href='#'>Our Team</a>
                            <a href='#'>Blog</a>
                        </div>}
                    </div>
                    <a href="#">Careers</a>
                    <a href="#">About</a>
                    <button>Login</button>
                    <button>Register</button>
                </div>}
            </div>
        </div>
    )
}