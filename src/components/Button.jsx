import "./Button.scss";

const Button = ({settings, styles}) => {
    return <input style={styles} className="button" type="button" value={settings.text} onClick={settings.onClick}/>;
};

export default Button;