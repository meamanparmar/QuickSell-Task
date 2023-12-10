import { useEffect, useState } from "react";
import { Topbar } from "./components/Topbar";
import { Card } from "./components/Card";
import styles from "./styles/App.module.css";

export function App() {
    const [cardData, setCardData] = useState({});
    const [isGrouping, setIsGrouping] = useState(true);
    const [groupBy, setGroupBy] = useState("status");
    const [orderBy, setOrderBy] = useState("priority");
    const childToTopbar = {isGrouping, setIsGrouping, groupBy, setGroupBy, orderBy, setOrderBy}

    useEffect(() => {
        fetchData();
    }, [])
    
    async function fetchData() {
        const data = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
        const json = await data.json();
        setCardData(json);
        console.log(json);
    }

    return (
        <div className={styles.bg}>
            <Topbar {...childToTopbar} />
            {cardData["tickets"] ? cardData["tickets"].map((data) => (
                <Card id={data.id} title={data.title} tags={data.tags} userId={data.userId} priority={data.priority} status={data.status}/>
            )) : null}
        </div>
    );
}