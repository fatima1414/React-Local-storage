const CounterUi = ({ count, plus, minus }) => {

    return (
        <>
        <div className="col-lg-6 mx-auto my-5 shadow p-5 text-center">
            <h2>{count}</h2>
            <div className="btn-group">
                <button onClick={plus} className="btn btn-outline-info">plus</button>
                <button onClick={minus} className="btn btn-outline-danger">minus</button>
            </div>
        </div>
      </>
    )
}

export default CounterUi