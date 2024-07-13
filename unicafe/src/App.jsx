import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticsLine = ({ text, value }) => {
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  );
};
const Statistics = ({ feedback }) => {
  console.log(feedback);

  const totalScores =
    feedback.good.score + feedback.neutral.score + feedback.bad.score;

  if (totalScores === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <div>No feedback given</div>
      </div>
    );
  }

  const positivePercentage = () => (feedback.good.score / totalScores) * 100;
  const average = () =>
    (feedback.good.score - feedback.bad.score) / totalScores;

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <StatisticsLine text={feedback.good.name} value={feedback.good.score} />
        <StatisticsLine
          text={feedback.neutral.name}
          value={feedback.neutral.score}
        />
        <StatisticsLine text={feedback.bad.name} value={feedback.bad.score} />
        <StatisticsLine text={"all"} value={totalScores} />
        <StatisticsLine text={"average"} value={average()} />
        <StatisticsLine text={"positive"} value={positivePercentage() + " %"} />
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = {
    good: { name: "good", score: good },
    neutral: { name: "neutral", score: neutral },
    bad: { name: "bad", score: bad },
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"bad"} />
      <Statistics feedback={feedback} />
    </div>
  );
};

export default App;
