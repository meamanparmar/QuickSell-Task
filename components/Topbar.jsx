import { useState } from 'react';
import styles from '../styles/Topbar.module.css';

export function Topbar(props) {
    const [clicked, setClicked] = useState(false);
    const {isGrouping, setIsGrouping, groupBy, setGroupBy, orderBy, setOrderBy} = props;

    return ( 
        <div className={styles.size}>
            <div className={styles.interactives}>
                <div className={styles.mainbutton} onClick={() => setClicked(!clicked)}>
                    <img src="https://www.seekpng.com/png/detail/289-2897562_poziome-ustawienia-miiksera-icon-sliders-icon.png" alt="Poziome Ustawienia Miiksera Icon - Sliders Icon@seekpng.com" className={styles.modify} />
                    <div>Display</div>
                </div>
                {clicked ? <div className={styles.choices}>
                    <Dropdown label="Grouping" options={["Status", "User", "Priority"]}  />
                    <Dropdown label="Ordering" options={["Priority", "Title"]}  />
                </div> : null}
            </div>
        </div>
    );
};


function Dropdown(props) {
    const {label, options} = props;

    return (
        <div className={styles.dropdown}>
            <div>{label}</div>
            <select>
                {options.map(option => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}