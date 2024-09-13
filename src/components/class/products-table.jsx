import { Component } from "react";
import axios from "axios";
import CustomRoundLoader from "../loaders/loader2";

class ProductsTable extends Component {
  state = {
    products: [],
    loader: true,
    error: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const { status, data } = await axios.get(
        "https://fakestoreapi.com/products"
      );
      if (status === 200) {
        this.setState({
          products: data,
          loader: false,
        });
      }
    } catch (err) {
      console.error(err);
      this.setState({
        error: true,
      });
    }
  };
  render() {
    return (
      <>
        <h1>Products of FakeStore API</h1>
        {this.state.error ? (
          <h1>Something Error</h1>
        ) : (
          <>
            {this.state.loader ? (
              <CustomRoundLoader />
            ) : (
              <div className="container-fluid  text-center">
                <table className="table-bordered table table-hover">
                  <thead>
                    <tr>
                      <th>Sl.No.</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>category</th>
                      <th>Price</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.products.map((each) => {
                      return (
                        <tr key={each.id}>
                          <td>{each.id}</td>
                          <td>{each.title}</td>
                          <td>{each.description}</td>
                          <td>{each.category}</td>
                          <td>
                            <button>{each.price}</button>
                          </td>
                          <td>
                            <img
                              src={each.image}
                              alt=""
                              width={"150px"}
                              height={"150px"}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </>
    );
  }
}
export default ProductsTable;
