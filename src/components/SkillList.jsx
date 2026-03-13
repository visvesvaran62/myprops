import React from "react";

function SkillList(Developers) {
  return (
    <div>
      <h2>Developer Skills</h2>

      {Developers.map((e,i) => (
        <div key={i}>
          <h3>{e.name}</h3>

          <ul>
            {e.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>

          <hr />
        </div>
      ))}
    </div>
  );
}
export default SkillList;