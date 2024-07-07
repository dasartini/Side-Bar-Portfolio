import './resourcesStyles/Button.css';

function Button(props) {
    const { children } = props
    return (
        <div className="button"> {children}</div>

    )

}
export default Button