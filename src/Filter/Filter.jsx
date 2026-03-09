import "./Filter.css";

function Filter({ onChartChange }) {
  const handleChartChange = (e) => {
    onChartChange(e.target.value);
  };

  return (
    <div className="filter">
      <div>
        <input
          type="radio"
          name="chart"
          id="bar"
          value="bar"
          onChange={handleChartChange}
        />
        <label htmlFor="bar">Bar (teams)</label>
      </div>
      <div>
        <input
          type="radio"
          name="chart"
          id="bubbleGender"
          value="bubble-gender"
          onChange={handleChartChange}
        />
        <label htmlFor="bubbleGender">Bubble (gender)</label>
      </div>
      <div>
        <input
          type="radio"
          name="chart"
          id="bubbleTeams"
          value="bubble-team"
          onChange={handleChartChange}
        />
        <label htmlFor="bubbleTeams">Bubble (teams)</label>
      </div>
      {/* <div>
        <input
          type="radio"
          name="chart"
          id="pieChart"
          value="pie"
          onChange={handleChartChange}
        />
        <label htmlFor="pieChart">Pie (team)</label>
      </div> */}
    </div>
  );
}

export default Filter;
