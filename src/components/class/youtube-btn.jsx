import { Component } from "react";
import FirstCompo from "../bootstrap/first-compo";

class YoutubeButton extends Component {
    state={
        isSubscribe:false,
        text1:"Subscribe",
        text2:"Subscribed"
    }
    clickHandler=()=>{
      this.setState({
        isSubscribe: !this.state.isSubscribe
      })
    }
  render() {
    return (
      <>
      <button style={{background:"red"}} onClick={this.clickHandler}>{this.state.isSubscribe?this.state.text2:this.state.text1}</button>
      {
        this.state.isSubscribe?<div>
          <FirstCompo/>
        </div>:<div>
          <h1>Please Subscribe to Access the content</h1>
        </div>
      }
      </>
    )
  }
}
export default YoutubeButton;
