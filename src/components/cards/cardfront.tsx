import { Component } from "react";
import { Link } from "react-router-dom";
interface CardsfrontProps {
  imageName: string;
}
export default class Cardfront extends Component<CardsfrontProps> {
  render() {
    const { imageName } = this.props;
    return (
      <img
        src={"https://image.tmdb.org/t/p/w500" + imageName}
        className="card-img-top img-fluid"
        alt=""
        style={{
          cursor: "pointer",
          borderRadius: "20px",
          boxShadow: "7px 10px 30px black",
        }}
      />
    );
  }
}
