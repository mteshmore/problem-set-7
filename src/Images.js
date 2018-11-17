import React, { Component } from 'react';
import * as d3 from 'd3';
import { Card, Button, CardBody, CardTitle, CardText, Col } from 'reactstrap';

export class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        d3.csv("data/NatureImages.csv").then(d => {
            this.setState({data: d});
        })
        
    }
    render() {
        console.log(this.state.data)
        return <div className="container">
            {this.state.data.map((d, i) => {
                return (
                    <Card key = {"picture" + i}>
                    <CardBody>
                        <CardText> 
                            <a href={d.Source}>
                                {d.Subject}
                            </a>
                        </CardText>
                    </CardBody>
                    </Card>
                )
            })}
        </div>
    }

}