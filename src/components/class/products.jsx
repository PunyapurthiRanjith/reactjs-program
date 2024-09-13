import { Component } from "react";
import axios from "axios";
import ItemCard from "./itemStyleCard";
import CustomRoundLoader from "../loaders/loader2";

class FakeStoreProducts extends Component {
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
                <div className="d-flex flex-row justify-content-center flex-wrap">
                  {this.state.products.map((each) => {
                    return (
                      <div key={each.id} className="p-3">
                        <ItemCard
                          imageUrl={each.image}
                          title={each.title}
                          category={each.category}
                          // description={each.description}
                          buttonText={`Price: $${each.price}`}
                          rating={each.rating.rate}
                          reviewCount={each.rating.count}
                          cardHeight={"300px"}
                          cardWidth={"300px"}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </>
    );
  }
}
export default FakeStoreProducts;
