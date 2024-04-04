import React from "react";
// clasa UserItemClass extinde React.Component, adica clasa mea o sa preia toata functionalitatea de componennta a React
class UserItemClass extends React.Component{
 render(){
    // in cadrul claselor, putem accesa props folosind cuvantul cheie this: this.props
    const {name, email} = this.props;
    return(
      <div>
            <h2>Nume: {name}</h2>
            <p>Email: {email}</p>
        </div>
    );
 }
}
export default UserItemClass;