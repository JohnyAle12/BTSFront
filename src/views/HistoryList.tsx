import { HistoryCard } from '../components/HistoryCard'
import { Navbar } from '../components/NavBar'
import { useState, useEffect } from 'react';
import { getHistory } from '../services/historyService';
import { History } from '../interfaces/types';

export const HistoryList = () => {
    const [history, setHistory] = useState<History[]>();

    const getHistoryList = async() => {
        const data = await getHistory();
        setHistory(data);
    }

    useEffect(() => {
        getHistoryList();
    }, [])
    

    return (
        <div className="container">
            <div className="row">
            <div className="col">
                <Navbar />
                <div className="card text-center">
                    <div className="card-header">
                        Historial de consultas
                    </div>
                    <div className="row">
                        {history?.map((item) => <HistoryCard key={item.id} {...item} />)}
                    </div>
                    <div className="card-footer text-muted"></div>
                </div>
            </div>
            </div>
        </div>
    )
}
