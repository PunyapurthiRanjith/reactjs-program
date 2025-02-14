import axios from "axios";
import { Component } from "react";

class DynamicTable extends Component {
  state = {
    products: [],
    finalData: [],
    count: 0,
    error: false,
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    try {
      const { data, status } = await axios.get(
        "https://fakestoreapi.com/products"
      );
      if (status == 200) {
        this.setState({
          products: data,
        });
      }
    } catch {
      console.error(err);
      this.setState({
        error: true,
      });
    }
  };
  addHandler = () => {
    const { products, finalData, count } = this.state;
    const newData = [...finalData, products[count]];
    this.setState({
      finalData: newData,
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <>
        <h2>Click the Add button add the data in Table</h2>
        <button onClick={this.addHandler}>Add</button>
        <table className="table-bordered table table-hover">
          <thead>
            <tr>
              <th>Sl.No.</th>
              <th>Title</th>
              <th>Category</th>
              <th>Description</th>
              <th>Image</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.finalData.map((each) => {
              return (
                <tr>
                  <td>{each.id}</td>
                  <td>{each.title}</td>
                  <td>{each.category}</td>
                  <td>{each.description}</td>
                  <td>
                    <img src={each.image} alt="" width={100} />
                  </td>
                  <td>
                    <button>{each.price}</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
export default DynamicTable;
