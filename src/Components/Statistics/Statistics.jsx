const Statistics = ({ good, neutral, bad, total, percentage, message }) => {
    const renderContent = () => {
        
        if (total !== 0) {
            return (<section>
                <h2>Statistics</h2>
                <p>good: {good}</p>
                <p>neutral: {neutral}</p>
                <p>bad: {bad}</p>
                <p>total: {total}</p>
                <p>Good: {percentage}% </p>
            </section>)
            
        } else if (total === 0) {
            return ( <h3>{message}</h3>)
               
            };
        
    }
return (
    renderContent()
        
    );
}

export default Statistics;