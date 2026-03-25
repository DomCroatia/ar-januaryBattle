import { teams } from "../../data/data";
import Team from "./Team";
import "./styles.css";

export default function TeamCardList() {
  return (
    <div className="teamCardList">
      {teams.map((team, i) => (
        <Team team={team} key={i} />
      ))}
    </div>
  );
}
