import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

class MyLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    const blue = "#a2f6e8";
    const { loading } = this.state;
    return (
      <div className="loader__container">
        <BeatLoader sizeUnit="px" size={30} color={blue} loading={loading} />
      </div>
    );
  }
}

export default MyLoader;
