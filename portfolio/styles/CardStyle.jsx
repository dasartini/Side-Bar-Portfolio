import './resourcesStyles/CardStyle.css'
function CardStyle (props){
const { children} = props
return(
<div className="cardStyle"> {children}</div>

)

}
export default CardStyle