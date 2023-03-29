import React, { useState } from "react";
import style from "./GenreTab.module.css";

const tabOptions = ["All", "Afro Beats", "World", "Juju"];

const GenreTab = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div>
      <h1>My Uploads</h1>
      <ul className={style.tabContainer}>
        {tabOptions.map((item) => (
          <li
            className={`${style.tabItem} 
              ${activeTab === item ? style.activeTab : ""}`}
            key={item}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreTab;
