import React from "react";
import SkillList from "./SkillLIst";


function SkillContainer() {

  const developers = [
    {
      name: "vishva",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      name: "vis",
      skills: ["React", "NodeJS", "MongoDB"]
    },
    {
      name: "visvesvaran",
      skills: ["Python", "Django", "SQL"]
    }
  ];

  return (
    <div>
      <SkillList developers={developers}/>
    </div>
  );
}

export default SkillContainer;