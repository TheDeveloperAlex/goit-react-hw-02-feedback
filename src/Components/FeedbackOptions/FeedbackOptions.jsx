const FeedbackOptions = ({ good, neutral, bad }) => {
    return (
        <>
            <div>
                <button type="button" onClick={good }>good</button>
                <button type="button" onClick={ neutral}>neutral</button> 
                <button type="button" onClick={bad}>bad</button>
            </div>
        </>
    );
}

export default FeedbackOptions;