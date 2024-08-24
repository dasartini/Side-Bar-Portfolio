import './resourcesStyles/CardStyle.css';

function CardStyle(props) {
    const { children } = props
    return (
        <div className="container"> {children}</div>

    )

}
export default CardStyle