import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function List() {
    const [list, setList] = useState(false)
    const [isSidebarHovered, setIsSidebarHovered] = useState(false)

    function handleClick() {
        if (isSidebarHovered) {
            setList(!list)
        }
    }

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
        <div>
            <ol>
                <ul>
                    <Link className="Link" to={'./Biography'}>
                        <p className="links">
                            <img className="icons" src="./src/assets/profile.svg" alt="Profile" />
                            Biography
                        </p>
                    </Link>
                </ul>
                <ul>
                    <p className="links">
                        <img className="icons" src="./src/assets/work.svg" alt="Experience" />
                        Experience
                    </p>
                </ul>
                <ul>
                    <span onClick={handleClick}>
                        <p className="links">
                            <img className="icons" src="./src/assets/project.svg" alt="Projects" />
                            Projects
                        </p>
                    </span>
                    {list && (
                        <ul className="list">
                           <Link  className="Link" to={'/nctimes'}><li>NC TIMES</li></Link> 
                          <Link className="Link" to={'/gigtastic'}><li>GIG'S TINDER</li></Link>
                           <Link className="Link" to={'/gifs'}>  <li>GIFS FINDER</li></Link>
                        </ul>
                    )}
                </ul>
                <ul>
                    <p className="links">
                        <img className="icons" src="./src/assets/hobbies.svg" alt="Hobbies" />
                        Hobbies
                    </p>
                </ul>
            </ol>
        </div>
    )
}

export default List