import React from "react";

interface ISkill {
  skill: string;
}

const Skill: React.FC<ISkill> = ({ skill }) => {
  return (
    <div className="bg-white rounded-lg p-4 text-center shadow text-black">
      <p className="font-semibold">{skill}</p>
    </div>
  );
};

export default Skill;
