function RollBtn({handleClick, text}) {
    return(
        <div className="RollBtn">
            <button onClick={handleClick}>{text? 'New Game': 'Roll' }</button>
        </div>
    )
}

export default RollBtn;