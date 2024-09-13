import { Component } from "react";
import ItemCard from "./itemStyleCard";
import CustomOval from "../loaders/loader";

class ProductsData extends Component {
  state = {
    recipes: [],
    loader: true,
    error: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/recipes");
      const { recipes } = await data.json();
      this.setState({
        recipes: recipes,
        loader: false,
      });
    } catch (err) {
      console.log(err);
      this.setState({
        error: true,
      });
    }
  };

  render() {
    return (
      <>
        <h1>Recipes of Dummy Json API</h1>
        {this.state.loader ? (
          <CustomOval color={"black"} />
        ) : (
          <>
            <h2>Recipe....</h2>
            <div className="container-fluid  text-center">
              <div className="d-flex flex-row justify-content-center flex-wrap">
                {this.state.recipes.map((each) => {
                  return (
                    <div key={each.id} className="p-3">
                      <ItemCard
                        imageUrl={each.image}
                        title={each.name}
                        rating={`Rating :  ${each.rating}`}
                        reviewCount={`Review Counts : ${each.reviewCount}`}
                        buttonText={"Add to Cart"}
                        height={"250px"}
                        width={"300px"}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
export default ProductsData;
