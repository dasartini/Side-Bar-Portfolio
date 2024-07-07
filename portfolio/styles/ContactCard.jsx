import './resourcesStyles/ContactCard.css';

function ContactCard(props) {
    const { children } = props
    return (
        <div className="cardCard"> {children}</div>

    )

}
export default ContactCard