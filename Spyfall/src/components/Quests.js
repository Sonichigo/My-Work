import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import questData from "../data/quests";
import Quest from "./Quest";
import "../styles/Quests.css";
import { SettingsInputAntennaTwoTone } from "@material-ui/icons";

const Quests = () => {
  const [quests, setQuests] = useState(questData.task);

  const getQuests = async () => {
    try {
      const data = await axios
        .get(`https://datastax-hackathon-api.herokuapp.com/tasks`)
        .then((res) => {
          console.log(res.data);
          setQuests(res.data.json());
        });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getQuests();
  }, []);

  return (
    <div className="main">
      <div className="header">
        <h1>Quests</h1>
      </div>
      <ul>
        {quests.map((quest, key) => (
          <Quest data={quest} />
        ))}
      </ul>
    </div>
  );
};

export default Quests;
