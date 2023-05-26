import React, { Component } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c257cbe3e4b64a21923bc66b5b0836e9&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  handlePrev = async () => {
    if (this.state.page > 1) {
      this.setState({ loading: true });
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c257cbe3e4b64a21923bc66b5b0836e9&pageSize=${
        this.props.pageSize
      }&page=${this.state.page - 1}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  handleNext = async () => {
    if (
      this.state.page + 1 <=
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      this.setState({ loading: true });
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c257cbe3e4b64a21923bc66b5b0836e9&pageSize=${
        this.props.pageSize
      }&page=${this.state.page + 1}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h2>NewsMonkey - Top Headlines</h2>
        {this.state.loading && (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        )}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrev}
            disabled={this.state.page <= 1}
          >
            &larr; Prev
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
