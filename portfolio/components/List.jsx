import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import profile from '../src/assets/profile.svg';
import work from '../src/assets/work.svg';
import project from '../src/assets/project.svg';
import hot from '../src/assets/hot.png';
import hobbies from '../src/assets/hobbies.svg';
import contact from '../src/assets/contact.svg';





function List() {
    const [list, setList] = useState(false)
    const [isSidebarHovered, setIsSidebarHovered] = useState(false)

    function handleClick() {
        if (isSidebarHovered) {
            setList(!list)
        }
    }

    useEffect(() => {
        const listItems = document.querySelectorAll('.cardStyle');
        listItems.forEach((item, index) => {
            item.style.setProperty('--animation-order', index);
        });
    }, []);
    useEffect(() => {
        const sidebar = document.querySelector('.sidebar')

        function handleMouseEnter() {
            setIsSidebarHovered(true)
        }

        function handleMouseLeave() {
            setIsSidebarHovered(false);
            setList(false)
        }

        sidebar.addEventListener('mouseenter', handleMouseEnter)
        sidebar.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            sidebar.removeEventListener('mouseenter', handleMouseEnter)
            sidebar.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, []);

    return (
        <div className="sidebarList">
            <ol>
                <ul>
                    <Link className="Link" to={'./biography'}>
                        <p className="links">
                            <img className="icons" src={profile} />
                            Biography
                        </p>
                    </Link>
                </ul>
                <ul>
                    <Link className="external" to={'/experience'}>
                        <p className="links">
                            <img className="icons" src={work} />
                            Experience
                        </p>
                    </Link>
                </ul>
                <ul><Link className="external">
                    <span onClick={handleClick}>
                        <p className="links">
                            <img className="icons" src={project} />
                            Projects
                        </p>
                    </span>
                    {list && (
                        <ul className="list">
                            <Link className="Link" to={'/nctimes'}><li>NC TIMES</li></Link>
                            <Link className="Link" to={'/gigtastic'}><li><img className="iconFire" src={hot} />GIGS TINDER<img className="icons" src={hot} /></li></Link>
                            <Link className="Link" to={'/gifs'}>  <li>GIFS FINDER</li></Link>
                        </ul>
                    )}
                </Link>
                </ul>
                <ul>
                    <Link className="external" to={'/hobbies'}>
                        <p className="links">
                            <img className="icons" src={hobbies} />
                            Hobbies
                        </p>
                    </Link>
                </ul>
                <ul>
                    <Link className="external" to={'/contact'}>
                        <p className="links">
                            <img className="icons" src={contact} />
                            Contact
                        </p>
                    </Link>
                </ul>
            </ol>
        </div>
    )
}

export default List