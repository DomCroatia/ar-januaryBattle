import { teams, palette } from "../data/data";

const members = teams.flatMap((t) => t.members);
const mapMembersToBubble = (member) => ({
  x: member.km,
  y: member.points,
  r: 5,
  name: member.name,
});

export function getBarChartData() {
  return {
    labels: teams.map((team) => team.name),
    datasets: [
      {
        label: "points",
        data: teams.map((team) =>
          team.members.reduce((a, c) => a + c.points, 0),
        ),
        backgroundColor: palette[5],
        yAxisID: "y",
      },
      {
        label: "distance",
        data: teams.map((team) =>
          Math.round(team.members.reduce((a, c) => a + c.km, 0)),
        ),
        backgroundColor: palette[8],
        yAxisID: "y1",
      },
    ],
  };
}

export const barOptions = {
  scales: {
    y: {
      type: "linear",
      position: "left",
      ticks: {
        color: palette[5],
      },
    },
    y1: {
      type: "linear",
      position: "right",
      ticks: {
        color: palette[8],
      },
    },
  },
};

export function getBubbleChartData(groupBy) {
  if (groupBy === "team") {
    return {
      datasets: teams.map((team, i) => ({
        label: team.name,
        backgroundColor: palette[i % palette.length],
        borderWidth: 0,
        data: team.members.map(mapMembersToBubble),
      })),
    };
  } else {
    return {
      datasets: [
        {
          label: "M",
          backgroundColor: palette[5],
          borderWidth: 0,
          data: members.filter((m) => m.gender === "M").map(mapMembersToBubble),
        },
        {
          label: "Z",
          backgroundColor: palette[8],
          borderWidth: 0,
          data: members.filter((m) => m.gender === "Z").map(mapMembersToBubble),
        },
      ],
    };
  }
}

export const bubbleOptions = {
  scales: {
    x: {
      min: 0,
      max: 600,
      title: {
        display: true,
        text: "distance",
        color: palette[0],
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
    y: {
      min: 200,
      max: 800,
      title: {
        display: true,
        text: "points",
        color: palette[0],
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: (ctx) => {
          const { x, y, name } = ctx.raw;
          return `${name}: ${x} km, ${y} pts`;
        },
      },
    },
  },
};
