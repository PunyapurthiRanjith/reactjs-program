import { Component } from "react";
import ItemCard from "../class/itemStyleCard";
import axios from "axios";

class 
PptTask extends Component {
  state = {
    products: [],
    clickedProduct: [],
  };
  componentDidMount() {
    this.fetchProductsData();
  }
  fetchProductsData = async () => {
    const { data, status } = await axios.get(
      "https://fakestoreapi.com/products"
    );
    if (status == 200) {
      this.setState({
        products: data,
      });
    }
  };
  clickHandler = (eachProduct) => {
    console.log(eachProduct);
    this.setState({
      clickedProduct: eachProduct,
    });
  };
  render() {
    const { products, clickedProduct } = this.state;
    return (
      <>
        <div className="d-flex flex-row">
          <div style={{width:"300px"}}>
            {this.state.products.map((each) => {
              return (
                <div
                  style={{ width:"800px", height:"auto" }}
                  key={each.id}
                  className="text-center"
                >
                  <div
                    key={each.id}
                    className="col-sm-4 p-3 "
                    onClick={() => {
                      this.clickHandler(each);
                    }}
                  >
                    <ItemCard
                      imageUrl={each.image}
                      title={each.title}
                      buttonText={`Price: $${each.price}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{width:"500px"}}>
            {this.state.clickedProduct && (
              <div>
                <img
                  src={clickedProduct.image}
                  alt=""
                  height={400}
                  style={{width:"100%"}}
                />
                <h1>{clickedProduct.title}</h1>
              </div>
            )} 
          </div>
        </div>
      </>
    );
  }
}
export default PptTask;
