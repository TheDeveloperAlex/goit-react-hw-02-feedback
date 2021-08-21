const Statistics = ({ good, neutral, bad, total }) => {
    return (
        <section>
            <h2>Statistics</h2>
            <p>good: {good}</p>
            <p>neutral: {neutral}</p>
            <p>bad: {bad}</p>
            <p>total: {total}</p>
        </section>
        
    );
}

export default Statistics;