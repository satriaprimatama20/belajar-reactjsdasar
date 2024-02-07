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
        // fungsi ini berguna untuk mengupdate data makanan, apabila tanpa fungsi ini data makanan akan ditambahkan dan dianggap sebagai data baru
        if (this.state.id === "") {
            this.setState({
                makanans: [
                    ...this.state.makanans,
                    {
                        id: this.state.makanans.length + 1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    }
                ]
            })
        } else {
            const makananselainTerpilih = this.state.makanans
                .filter((makanan) => makanan.id !== this.state.id)
                .map((filterMakanan) => {
                    return filterMakanan
                })
            this.setState({
                makanans: [
                    ...makananselainTerpilih,
                ]
            })
            this.updateData();
        }

        this.setState({
            nama: "",
            deskripsi: "",
            harga: 0,
            id: ""
        })
    }

    editData = (id) => {
        const makananTerpilih = this.state.makanans
            .filter((makanan) => makanan.id === id)
            .map((filterMakanan) => {
                return filterMakanan
            })

        this.setState({
            nama: makananTerpilih[0].nama,
            deskripsi: makananTerpilih[0].deskripsi,
            harga: makananTerpilih[0].harga,
            id: makananTerpilih[0].id
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
                    <TableCrud makanans={this.state.makanans} editData={this.editData} />
                    <FormCrud {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}
