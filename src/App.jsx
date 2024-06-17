const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>{props.data.part} {props.data.exercises}</p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part data={props.parts[0]}/>
      <Part data={props.parts[1]}/>
      <Part data={props.parts[2]}/>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.total}
      </p>
    </div>
  );
}



const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;
  const parts = [
    {part: part1, exercises: exercises1},
    {part: part2, exercises: exercises2},
    {part: part3, exercises: exercises3}
    ];

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  );

};

export default App;
