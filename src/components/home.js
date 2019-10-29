import React from 'react'

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>LED Lights</h1>
                    <h5>Type in the rate</h5>
                </div>
                <div>
                    <input></input>
                    <button>Submit</button>
                </div>
            </React.Fragment>
        )
    }
}