import React, { Component, useState } from "react";
import { sampleData } from "../data";
import SearchBar from "./SearchBar";
import Table from "./Table";
import Drop from "./Drop";

class Main extends Component {
  state = {
    data: sampleData,
    name: "",
    age: 0,
  };
  //  const [data,setData] = useState(sampleData)
  //  const [name,setName] = useState()
  //  const [age,setAge] = useState()

  handleNameFilter = (input) => {
    let a = this.state.data.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    //  console.log(input);
    if (a.length != 0) {
      this.setState({ data: a });
    } else {
      this.setState({ data: sampleData });
    }
    console.log(a);
  };

  handleAgeFilter = (input) => {
    input = parseInt(input);
    let a = this.state.data.filter((item) => {
      return item.age == input;
    });

    if (a.length != 0) {
      this.setState({ data: a });
    } else {
      this.setState({ data: sampleData });
    }
    //  setData(a)

    console.log(a);
  };

  render() {
    return (
      <>
        <SearchBar label={"Name"} handle={this.handleNameFilter} />
        <SearchBar label={"Age"} handle={this.handleAgeFilter} />
        <Drop sort={"City"}/>
        <Drop sort={"Occupation"}/>
        <Table data={this.state.data} />
      </>
    );
  }
}

export default Main;
