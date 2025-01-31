import disco from "../images/datas/disco/thumbnail.png";
import automata from "../images/datas/automata/thumbnail.png";

interface GameData {
  title: string;
  description: string;
  link: string;
  thumbnailPath: string;
  imagePaths: string[];
}

export const gameDatas: GameData[] = [
  {
    title: "MemeDisco",
    description: "MemeDisco Description",
    link: "https://disco.zkplay.app/",
    thumbnailPath: disco,
    imagePaths: [disco, disco, disco],
  },
  {
    title: "Automata",
    description: "Automata Description",
    link: "https://automata.zkplay.app/",
    thumbnailPath: automata,
    imagePaths: [automata, automata, automata],
  },
];
