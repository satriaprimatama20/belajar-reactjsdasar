import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class Submitbtn extends Component {
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

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
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const makananselainTerpilih = this.state.makanans
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filterMakanan) => {
          return filterMakanan;
        });
      this.setState({
        makanans: [
          ...makananselainTerpilih,
          {
            id: this.state.makanans.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    }

    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    });
  };
  render() {
    return (
      <div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    );
  }
}
