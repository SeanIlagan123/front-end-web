import React from 'react';
import axios from 'axios';

class Home extends React.Component {

    state = {};
    componentDidMount() {

    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    };

    axios.get('./users', config)
      .then(
        res => {
          this.setState({
            user: res.data
          });
        },
        err => {
          console.log(err)
        }
      )
  }

    render() {
        console.log();
        if(this.state.user){
            return (
                <h2>Hello {localStorage.getItem('username')}</h2>
            )
        }

        return(
          <div>
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;