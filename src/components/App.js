import React from "react";

const App = () => {
  const arr = ["A", "B", "C", "D", "E"];
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <ol key={"relativeList"}>
        {arr.map((val, index) => (
          <li key={`relativeListItem${index + 1}`}>{val}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
