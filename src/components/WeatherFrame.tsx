"use client";

import "../styles/weatherstar.css";
import data from "../data/status.json";

export default function WeatherFrame() {
  const tickerText = data.ticker.join("     •••••     ");

  return (
    <div className="crt">
      <div className="weatherFrame">

        <div className="topBar">

          <div className="logoBox">
            STATUS
            <br />
            STAR
            <br />
            4000+
          </div>

          <div className="headerTitle">
            {data.headline}
          </div>

          <div className="clockBox">
            {data.updatedAt}
            <br />
            MON MAY 18
          </div>

        </div>

        <div className="mainPanel">

          {data.nodes.map((node, idx) => (
            <div className="row" key={idx}>

              <div className="city">
                {node.city}
              </div>

              <div className="icon">
                {node.icon}
              </div>

              <div className="status">
                {node.status}
              </div>

            </div>
          ))}

        </div>

        <div className="bottomTicker">
          <div className="tickerTrack">
            {tickerText}
          </div>
        </div>

      </div>
    </div>
  );
}
