import React, { Component } from 'react';
import NavbarCrud from './components/navbar';
import TableCrud from './components/tablecrud';
import FormCrud from './components/formcrud';

export default class Crud extends Component {
    constructor(props) {
        super(props)

        this.state = {
            makanans: [],
            nama: '',
            deskripsi: '',
            harga: 0,
            id: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        // preventDefault() ini menghilangkan reload pada page kita
        event.preventDefault();
        this.setState({
            makanans: [
                ...this.state.makanans,
                {
                    id: this.state.makanans.length+1,
                    nama: this.state.nama,
                    deskripsi: this.state.deskripsi,
                    harga: this.state.harga
                }
            ]
        })
    }

    render() {
        console.log(this.state.makanans);
        return (
            <div>
                <NavbarCrud />
                <div className='container mt-4'>
                    <h2>CRUD REACT JS</h2>
                </div>
                <div className='container mt-6 p-4'>
                    <TableCrud makanans={this.state.makanans} />
                    <FormCrud {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}
