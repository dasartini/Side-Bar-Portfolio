import Profile from "./Profile";
import List from "./List";
import SideBar from "../styles/SideBar";
import { useContext } from "react";
import { VisibleContext } from "../contexts/Visible";
import { ThemeContext } from "../contexts/Theme";


function Sidebar() {
    const { setVisible } = useContext(VisibleContext)

    function handleOver() {

        setVisible(false)
    }

    function handleOut() {
        setVisible(true)
    }

    return (
        <aside onMouseOver={() => { handleOver() }}
            onMouseOut={() => { handleOut() }}>
            <SideBar  >
                <Profile />
                <List />
            </SideBar>
        </aside>

    )

}

export default Sidebar