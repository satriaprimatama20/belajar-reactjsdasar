import React, { Component } from 'react'
import Sublifecycle from './sublifecycle'

// Lifecycle components digunakan untuk komponen dengan data yang terus berubah atau diupdate

export default class Lifecycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            makanan: 'Bakso',
            data: {},
            tampilanHalamanSub : false,
        }
    }

    // Kegunaan componentDidMOunt untuk fetch data dari API kemudian dimasukkan datanya kedalam setState
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            // .then(response => console.log("Hasil:", response.json()))
            // .then(json => {console.log("Hallo  :", json)})
            .then(json => 
                this.setState({data : json}))
    }

    ubahMakanan(value) {
        this.setState({
            makanan: value
        }) 
    }

    render() {
        // console.log("Data:", this.state.data);
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                {this.state.tampilanHalamanSub && <Sublifecycle ubahMakanan={(value) => this.ubahMakanan(value)}/>}
                <button onClick={() => {this.setState({tampilanHalamanSub : !this.state.tampilanHalamanSub})}}>Click Me to got to Sub lifecycle</button>
            </div>
        )
    }
}
