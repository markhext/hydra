import { Baloo_Bhaina_2 } from "next/font/google";

export type Btn = {
  label: string;
  short: string;
  action: string;
  walk: number;
  default: number;
  sprint: number;
  forceLevels: number[];
};

export type Data = {
  name: string;
  img: string;
  btn1: Btn;
  btn2: Btn;
  btn3: Btn;
  btn4: Btn;
};

export const data = [
  {
    name: "Assassin's Creed Odyssey",
    img: "/game-1.png",
    btn1: {
      label: "W",
      short: "ACO",
      action: "Forward",
      walk: 60,
      forceLevels: [10, 50, 40],
    },
    btn2: {
      label: "A",
      short: "ACO",
      action: "Left",
      walk: 20,
      forceLevels: [40, 20, 40],
    },
    btn3: {
      label: "S",
      short: "ACO",
      action: "Back",
      walk: 50,
      forceLevels: [20, 40, 40],
    },
    btn4: {
      label: "D",
      short: "ACO",
      action: "Right",
      walk: 30,
      forceLevels: [40, 10, 50],
    },
  },
  {
    name: "Assassin's Creed Valhalla",
    img: "/game-2.png",
    btn1: {
      label: "W",
      short: "ACV",
      action: "Forward",
      walk: 20,
      forceLevels: [40, 20, 40],
    },
    btn2: {
      label: "A",
      short: "ACV",
      action: "Left",
      walk: 30,
      forceLevels: [80, 10, 10],
    },
    btn3: {
      label: "S",
      short: "ACV",
      action: "Back",
      walk: 60,
      forceLevels: [60, 20, 20],
    },
    btn4: {
      label: "D",
      short: "ACV",
      action: "Right",
      walk: 35,
      forceLevels: [20, 60, 20],
    },
  },
  {
    name: "Call of Duty: Black Ops Cold War",
    img: "/game-3.png",
    btn1: {
      label: "W",
      short: "COD",
      action: "Forward",
      walk: 40,
      forceLevels: [50, 10, 40],
    },
    btn2: {
      label: "A",
      short: "COD",
      action: "Left",
      walk: 90,
      forceLevels: [35, 60, 5],
    },
    btn3: {
      label: "S",
      short: "COD",
      action: "Back",
      walk: 10,
      forceLevels: [40, 20, 40],
    },
    btn4: {
      label: "D",
      short: "COD",
      action: "Right",
      walk: 40,
      forceLevels: [10, 50, 40],
    },
  },
  {
    name: "Dirt Rally 2",
    img: "/game-4.png",
    btn1: {
      label: "W",
      short: "DR2",
      action: "Forward",
      walk: 10,
      forceLevels: [40, 20, 40],
    },
    btn2: {
      label: "A",
      short: "DR2",
      action: "Left",
      walk: 5,
      forceLevels: [10, 70, 20],
    },
    btn3: {
      label: "S",
      short: "DR2",
      action: "Back",
      walk: 20,
      forceLevels: [10, 20, 70],
    },
    btn4: {
      label: "D",
      short: "DR2",
      action: "Right",
      walk: 20,
      forceLevels: [50, 10, 40],
    },
  },
  {
    name: "Doom Eternal",
    img: "/game-5.png",
    btn1: {
      label: "W",
      short: "DE",
      action: "Forward",
      walk: 80,
      forceLevels: [40, 20, 40],
    },
    btn2: {
      label: "A",
      short: "DE",
      action: "Left",
      walk: 70,
      forceLevels: [30, 20, 50],
    },
    btn3: {
      label: "S",
      short: "DE",
      action: "Back",
      walk: 50,
      forceLevels: [50, 10, 40],
    },
    btn4: {
      label: "D",
      short: "DE",
      action: "Right",
      walk: 60,
      forceLevels: [10, 20, 70],
    },
  },
  {
    name: "Dying Light",
    img: "/game-6.png",
    btn1: {
      label: "W",
      short: "DL",
      action: "Forward",
      walk: 50,
      forceLevels: [70, 20, 10],
    },
    btn2: {
      label: "A",
      short: "DL",
      action: "Left",
      walk: 60,
      forceLevels: [40, 50, 10],
    },
    btn3: {
      label: "S",
      short: "DL",
      action: "Back",
      walk: 40,
      forceLevels: [60, 10, 30],
    },
    btn4: {
      label: "D",
      short: "DL",
      action: "Right",
      walk: 70,
      forceLevels: [20, 20, 60],
    },
  },
  {
    name: "FIFA 22",
    img: "/game-7.png",
    btn1: {
      label: "W",
      short: "FIFA",
      action: "Forward",
      walk: 80,
      forceLevels: [10, 30, 60],
    },
    btn2: {
      label: "A",
      short: "FIFA",
      action: "Left",
      walk: 90,
      forceLevels: [70, 20, 10],
    },
    btn3: {
      label: "S",
      short: "FIFA",
      action: "Back",
      walk: 80,
      forceLevels: [80, 10, 10],
    },
    btn4: {
      label: "D",
      short: "FIFA",
      action: "Right",
      walk: 70,
      forceLevels: [10, 85, 5],
    },
  },
] as Data[];
