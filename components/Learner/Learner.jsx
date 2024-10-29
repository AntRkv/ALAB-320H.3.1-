import React from "react";
import Score from "../Score/Score";

function Learner({ name, bio, scores }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{bio}</p>
      <h3>Scores:</h3>
      {scores.map((score, index) => (
        <Score key={index} date={score.date} score={score.score} />
      ))}
    </div>
  );
}

export default Learner;
