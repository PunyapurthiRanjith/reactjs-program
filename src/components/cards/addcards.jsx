import { Component } from "react";
import CustomCard from "../bootstrap/bootstrap-card";

class AddCard extends Component {
  state = {
    cardsData: [{ name: "Nikhil", role: "Kooli Panodu" }],
  };
  onclickHandler = () => {
    const myData = { name: "Ranjith", role: "React Developer" };
    const finalData = [...this.state.cardsData, myData];
    this.setState({
      cardsData: finalData,
    });
  };
  removeCard = (ind) => {
    const filteredData = this.state.cardsData.filter((_, id) => id !== ind);

    this.setState({
      cardsData: filteredData,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.onclickHandler}>Add A Card</button>
        <div className="container mt-5 ">
          <div className="row">
            {this.state.cardsData.map((each, index) => {
              return (
                <div className="col-sm-4">
                  <CustomCard
                    removeHandler={this.removeCard}
                    title={each.name}
                    text={each.role}
                    ind={index}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
export default AddCard;
