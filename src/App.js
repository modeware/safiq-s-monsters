import React from 'react';
import './App.css';
import {CardList}  from './components/card-list/card-list.components'
import { SearchBox } from './components/search-box/search-box.component';


class App extends React.Component {
constructor(){ 
  super()
  this.state={
    monsters:[],
    searchField:''

              }
}

 componentDidMount(){
  //  fetch('https://jsonplaceholder.typicode.com/users')
  //  .then(response=>
  //     response.json())
  //   .then(users=>this.setState({monsters:users}));

  this.users()
 }

users=async ()=>{
  let allUsers=await this.fetchUsersAsync()
  this.setState({monsters:allUsers})

}

fetchUsersAsync=async () =>{
  let users=await fetch('https://jsonplaceholder.typicode.com/users')
  let response=users.json()
  return response
  
}
handleChange=(e)=>{
  this.setState({searchField:e.target.value})
}

render(){
  const {monsters,searchField } = this.state;
  const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return (
    <div className="App">
      <h1 className="head">Monsters Rolodex</h1>
      {/* <input type='search' placeholder='search' onChange={e=>this.setState({searchField:e.target.value})}/> */}
      <SearchBox placeholder={'search-monsters'} handleChange={this.handleChange}/>
      <CardList monsters={filteredMonsters} />  
   
    </div>
  );
}

}

export default App;
