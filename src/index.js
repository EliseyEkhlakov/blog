// import React, {Component} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';

// class WhoAmI extends Component {
//   // constructor(props) {
//   //   super(props);
//     // this.state = {
//     //   years: 26,
//     //   nation: 'ru'
//     // }
//     // this.nextYear = this.nextYear.bind(this);
//     // this.nextYear = () => {
//     //   this.setState(state => ({
//     //       years: ++state.years
//     //    }));
//     // }
//   // }
//   state = {
//     years: 26,
//     nation: 'ru'
//   }

//   nextYear = () => {
//     this.setState(state => ({
//         years: ++state.years
//      }));
//   }

//   // nextYear() {
//   //   this.setState(state => ({
//   //     years: ++state.years
//   //   }));
//   // }

//   render() {
//     const {name, surname, link} = this.props;
//     const {years} = this.state;
//     return (
//       <>
//       <button onClick={this.nextYear} >++</button>
//       <h1>My name is {name}, surname - {surname}, years = {years}</h1>
//       <a href={link}>My profile</a>
//       </>  
//     )  
//   }
// }


// const All = () => {
//   return (
//     <>
// <WhoAmI name="John" surname="Owen" link="facebook.com" />
// <WhoAmI name="Ivan" surname="Owen" link="facebook.com" />
// <WhoAmI name="Peter" surname="Owen" link="facebook.com" />
//     </>
//   )
// }

ReactDOM.render(
  <App />,  document.getElementById('root')
);

