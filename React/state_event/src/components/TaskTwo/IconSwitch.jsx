import './css/IconSwitch.css';


// Иконка переключения сортировки
export default function IconSwitch(props) {
    const { icon, onSwitch } = props;
    return (
        <i className="material-icons" onClick={onSwitch}>
            {icon}
        </i>
    )
}