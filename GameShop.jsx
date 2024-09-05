import { useEffect, useRef, useState } from "react";
import Phaser from "phaser";
import create from "../game/create";
import preload from "../game/preload";
import playerMove from "../game/playerMove";

import joconde from "../assets/joconde.jpeg";
import perle from "../assets/perle.jpg";
import cri from "../assets/cri.jpg";

import Picture from "../components/Picture";

export default function GameShop() {
  const phaserGame = useRef(null);

  const [message, setMessage] = useState("");

  const pictures = [joconde, perle, cri];

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      parent: "gameContainer",
      width: 800,
      height: 800,
      backgroundColor: "#179ac5",
      scene: {
        preload() {
          preload.call(this);
        },
        create() {
          create.call(this, setMessage);
        },
        update() {
          playerMove.call(this, setMessage, message);
        },
      },
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
          debug: false,
        },
      },
    };

    console.info(pictures[0]);
    phaserGame.current = new Phaser.Game(config);

    return () => {
      if (phaserGame.current) {
        phaserGame.current.destroy(true);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Picture message={message} pictures={pictures[message]} />;
}
