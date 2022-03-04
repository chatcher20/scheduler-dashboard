import React, { Component } from "react";
import classnames from "classnames";
import Loading from "components/Loading.js";
import Panel from "components/Panel.js";

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];

class Dashboard extends Component {

  state = {
    loading: false,
    focused: null         //initial value of focused can be null, 1, 2, 3 or 4
  };

  /* Instance Method */
  selectPanel(id) {
    this.setState((previousState) => ({
      focused: previousState.focused !== null ? null : id
    }))
  };

  /* Class Property with Arrow Function */
  // selectPanel = id => {
  //   this.setState({
  //     focused: id
  //   });
  // }




  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused
    });

    if (this.state.loading) {
      return <Loading />;
    }

    const panels = data
      .filter((panel) => (
        this.state.focused === null || this.state.focused === panel.id
      ))
      .map((panel) => (
        <Panel
          key={panel.id}
          // id={panel.id}
          label={panel.label}
          value={panel.value}
          onSelect={(event) => this.selectPanel(panel.id)}
        />
      ));

    return <main className={dashboardClasses}>{panels}</main>;
  }
}

export default Dashboard;





// There is only a single component in the project at 
// the moment - the Dashboard. We chose this name instead 
// of Application (which is typical in many React projects) 
// because the dashboard IS the application.

// The Dashboard class extends the Component class.

// The only function that a component needs to declare is the 
// render function. This render function is equivalent to the body 
// of the components that we declare as functions.





// If we wrote the same component without classes, it would perform 
// the equivalent behaviour and return the same value.

// function Dashboard(props) {
//   const dashboardClasses = classnames("dashboard");
//   return <main className={dashboardClasses} />;
// }