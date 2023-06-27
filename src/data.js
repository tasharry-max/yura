import { v4 as uuidv4 } from "uuid";
import yura1 from "./assets/covers/yura1.jpg";
import yura2 from "./assets/covers/yura2.jpg";
import yura3 from "./assets/covers/yura3.jpg";
import ruta from "./assets/songs/Ruta.mp3";
import greenGrove from "./assets/songs/GreenGrove.mp3";
import onFastTrains from "./assets/songs/OnFastTrains.mp3";

function chillHop() {
  return [
    {
      name: "On high-speed trains",
      cover: yura1,
      artist: "Volodymyr Ivasyuk",
      audio: onFastTrains,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Red Ruth",
      cover:
        yura3,
      artist: "Vasyl Zinkevych",
      audio: ruta,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "The grove, the green grove",
      cover: yura3,
      artist: "Nazarii Yaremchuk",
      audio: greenGrove,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
