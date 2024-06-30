import './resourcesStyles/SideBar.css'
function Sidebar(props){
const { children} = props
return(
<div className="sidebar"> {children}</div>

)

}
export default Sidebar