import React from "react";

const Player = props => {
  if (!props.player) {
    return <div className="text-center" />;
  } else {
    console.log(props.player);
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={props.player.data.children[0].metadata.icon}
          alt="Player Image"
        />
        <h2 className="card-title text-center">
          {props.player.data.metadata.platformUserHandle}
        </h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h5>Level:</h5>
            {props.player.data.stats[0].value}
          </li>
          <li className="list-group-item">
            <h5>Kills:</h5>
            {props.player.data.stats[1].value}
          </li>
          <li className="list-group-item">
            <h5>Damage:</h5>
            {props.player.data.stats[2].value}
          </li>
        </ul>
      </div>
    );
  }
};

export default Player;
