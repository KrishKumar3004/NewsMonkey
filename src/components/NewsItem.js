import React from "react";

const NewsItem = (props) => {
  let { title, description, newsUrl, imageUrl, author, date, source } = props;
  const len = description.length;
  const sliceLen = len > 150 ? 150 : len;
  return (
    <div>
      <div
        className="card my-2"
        style={{
          backgroundColor: "#42414d",
          color: "white",
          width: "350px",
          height: "500px",
          margin: "auto",
        }}
      >
        <div className="img-div">
          <span
            className="badge rounded-pill bg-dark"
            style={{ position: "absolute", right: "0", top: "0" }}
          >
            {source}
          </span>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "200px", width: "350px" }}
          />
        </div>
        <div className="card-body">
          <a href={newsUrl}>
            <h5 className="card-title">{title}</h5>
          </a>
          <p className="card-text text" style={{ color: "#c3c3c9" }}>
            <small>
              By:{author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <p className="card-text">
            {description.slice(0, sliceLen)} {len > 150 ? "..." : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
