import "./ListHeader.css";

const ListHeader = ({currentState, onClick}) => {
    return (
        <header className="layout">
            <h1 className="state-count">State: <span className="count">{currentState}</span></h1>
            <button 
                className="state-button"
                onClick={onClick}
            >
                Next State
            </button>
        </header>
    )
}

export default ListHeader;