import { useState, useEffect } from 'react';
import { LayoutGroup } from "framer-motion"
import './ListContainer.css';
import ListHeader from '../ListHeader/ListHeader';
import ListItem from '../ListItem/ListItem';
import Data from '../../data/people.json';
import { sortData } from '../../utils/listUtils';

const ListContainer = () => {
    const [peopleData, setPeopleData] = useState([]);
    const [currentState, setCurrentState] = useState(1);

    useEffect(() => {
        setPeopleData(Data.people);
    },[]);

    const handleStateChange = () => {
        if (currentState === Object.keys(peopleData[0].states).length) {
            setCurrentState(1);
            setPeopleData(sortData(peopleData, 1));
        } else {
            const newState = currentState + 1;
            setCurrentState(newState);
            setPeopleData(sortData(peopleData, newState));
        }
    };
    
    return (
        <main className="container">
            <ListHeader
                currentState={currentState}
                onClick={handleStateChange}
            />
            <LayoutGroup>
                <ul>
                    {peopleData.map((item) => 
                        <ListItem 
                            data={item}
                            currentState={currentState}
                            key={item.name}
                        />
                    )}
                </ul>
            </LayoutGroup>
        </main>
    )
}

export default ListContainer;