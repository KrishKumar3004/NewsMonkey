import React, { Component } from "react";
import PropTypes from "prop-types";

export class NewsItem extends Component {
  static propTypes = {};

  render() {
    let { title, description, newsUrl, imageUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card">
          <div className="img-div">
            <span
              class="badge rounded-pill bg-dark"
              style={{ position: "absolute", right: "0", top: "0" }}
            >
              {source}
            </span>
            <img src={imageUrl} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn btn-dark">
              Read More
            </a>
            <p className="card-text text-muted">
              <small>
                By:{author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
