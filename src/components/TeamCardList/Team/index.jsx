import { useState } from "react";
import "./styles.css";

function Member({ member }) {
  const genderColor = {
    M: "#6DB6FF",
    Z: "#FF6DB6",
  };

  const selectedGender = genderColor[member.gender];

  return (
    <li style={{ color: selectedGender }}>
      {member.name}
      <div className="stats">
        <div>{member.km} km</div>
        <div>{member.points} pts</div>
      </div>
    </li>
  );
}

export default function Team({ team }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div
      className="team"
      onMouseEnter={() => setDropdownVisible(true)}
      onMouseLeave={() => setDropdownVisible(false)}
    >
      <h3>{team.name}</h3>
      {isDropdownVisible && (
        <ul className="list">
          {team.members.map((member, i) => (
            <Member key={i} member={member} />
          ))}
        </ul>
      )}
    </div>
  );
}
