import discoThumbnail from "../images/datas/disco/thumbnail.png";
import automataThumbnail from "../images/datas/automata/thumbnail.png";
import automata1 from "../images/datas/automata/1.png";
import automata2 from "../images/datas/automata/2.png";
import automata3 from "../images/datas/automata/3.png";
import automata4 from "../images/datas/automata/4.png";

export interface GameData {
  id: string;
  title: string;
  description: string;
  link: string;
  thumbnailPath: string;
  imagePaths: string[];
}

export const gameDatas: GameData[] = [
  {
    id: "memedisco",
    title: "MemeDisco",
    description: "MemeDisco Description",
    link: "https://disco.zkplay.app/",
    thumbnailPath: discoThumbnail,
    imagePaths: [discoThumbnail, discoThumbnail, discoThumbnail],
  },
  {
    id: "automata",
    title: "Automata",
    description: "Automata Description",
    link: "https://automata.zkplay.app/",
    thumbnailPath: automataThumbnail,
    imagePaths: [automata1, automata2, automata3, automata4],
  },
];
