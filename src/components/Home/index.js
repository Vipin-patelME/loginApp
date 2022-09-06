// Write your code here
import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {isLogin: true}

  onLogin = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {isLogin: false}
    })
  }

  onLoguot = () => {
    this.setState(prevState => {
      console.log(prevState)
      return {isLogin: true}
    })
  }

  render() {
    const {isLogin} = this.state

    let loginCont
    if (isLogin) {
      loginCont = (
        <div className="bg-container">
          <div>
            <h1>Please Login</h1>
            <button className="btnStyle" type="button" onClick={this.onLogin}>
              Login
            </button>
          </div>
        </div>
      )
    } else {
      loginCont = (
        <div className="bg-container">
          <div>
            <h1>Welcome User</h1>
            <button className="btnStyle" type="button" onClick={this.onLoguot}>
              Logout
            </button>
          </div>
        </div>
      )
    }

    return <div> {loginCont}</div>
  }
}

export default Home
