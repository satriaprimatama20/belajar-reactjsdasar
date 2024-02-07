import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class Editbtn extends Component {
  editData = (id) => {
    const makananTerpilih = this.state.makanans
      .filter((makanan) => makanan.id === id)
      .map((filterMakanan) => {
        return filterMakanan;
      });

    this.setState({
      nama: makananTerpilih[0].nama,
      deskripsi: makananTerpilih[0].deskripsi,
      harga: makananTerpilih[0].harga,
      id: makananTerpilih[0].id,
    });
  };
  render({ editData, makanan}) {
    return (
      <div>
        <Button
          className="btn btn-warning"
          onClick={() => editData(makanan.id)}
        >
          Edit
        </Button>
      </div>
    );
  }
}
