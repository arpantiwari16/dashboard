import React, { Component } from 'react'
import Chart from "react-apexcharts";
export class ChartSection extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          
        };
      }
    render() {
        return (
            <div><div className="app">
            <div className="row">
              <div className="mixed-chart">
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="bar"
                  width="500"
                />
              </div>
            </div>
          </div></div>
        )
    }
}

export default ChartSection