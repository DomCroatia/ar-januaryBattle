import { teams } from "../../data/data";
import Team from "../Team/Team";
import "./Teams.css";

export default function Teams() {
  console.log(teams);
  return (
    <div className="teams">
      {teams.map((team, i) => (
        <Team team={team} key={i} />
      ))}
      {/* <div onMouseEnter={() => console.log("pipi")}>pipi</div> */}
    </div>
  );
}
