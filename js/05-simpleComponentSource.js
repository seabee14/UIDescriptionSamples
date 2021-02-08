const DynamicLanguages = () => {
  return (
    <div className="pad">
      <h1 className="heading">Dynamic Languages (Component)</h1>
      <ul>
        <li>Javascript</li>
        <li>PHP</li>
        <li>Python</li>
      </ul>
    </div>
  );
};

ReactDOM.render(<DynamicLanguages />, document.getElementById("mount-point"));
