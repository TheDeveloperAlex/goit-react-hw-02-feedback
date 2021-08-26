const FeedbackOptions = ({ good, neutral, bad }) => {
    return (
        <>
            <h2>Leave feedback</h2>
            <div>
                <button type="button" onClick={good }>good</button>
                <button type="button" onClick={ neutral}>neutral</button> 
                <button type="button" onClick={bad}>bad</button>
            </div>
        </>
    );
}

export default FeedbackOptions;