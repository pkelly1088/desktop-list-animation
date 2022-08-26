import { motion } from "framer-motion"
import './ListItem.css';
import { objectStateKey } from "../../utils/listUtils";

const ListItem = ({data, currentState}) => {
    const name = data.name;
    const stateKey = objectStateKey(data, currentState);
    const state = data.states[stateKey];

    return (
        <motion.li 
            layout
            className="item-container"
        >
            <p className="name">{name}</p>
            <p className="state">{state}</p>
        </motion.li>
    )
}

export default ListItem;