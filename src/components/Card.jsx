export const Card = ({card, onClick}) => {
    return (
    <div className={`card ${card.isFlipped ? "flipped" : ""}`} onClick={() => onClick(card) // Applying the class name to the div if card is flipped
    }>
        <div className="card-front">?</div>
        <div className="card-back">{card.value}</div>
    </div>
    )
}