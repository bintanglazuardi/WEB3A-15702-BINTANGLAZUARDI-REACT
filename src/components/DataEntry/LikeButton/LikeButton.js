import React from 'react';

class LikeButton extends React.Component{
  state = {
      like:0,
      dislike:0
  }

  handleLike = () => {
    if(this.state.like == 0){
      this.setState({
          like: this.state.like + 1
      });   
    }
  }

  handleUnlike = () => {
    if(this.state.like > 0){
      this.setState({
          like: this.state.like - 1
      });
    }     
  }

  handleDislike = () => {
      this.setState({
          dislike: this.state.dislike + 1
      }); 
  }

  render(){
      return(
          <div className="card">
              <div >
                  <h3>Like : {this.state.like}</h3>
                  {/* <h3>Dislike : {this.state.dislike}</h3> */}
              </div>
              <div className="button">
                  <button style={{margin:"5px",backgroundColor:"#00adb5", color:"#ffffff"}} className="like" onClick={this.handleLike}>Like</button>
                  <button style={{margin:"5px",backgroundColor:"#f73859", color:"#ffffff"}} className="dislike" onClick={this.handleUnlike}>Unlike</button>
              </div>
          </div>
         
      )
  }
}

export default LikeButton;
