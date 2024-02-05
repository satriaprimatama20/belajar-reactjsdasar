// Component ini berisi metode untuk mengubah state menjadi props
import React, { Component } from 'react'


export default class Operan extends Component {
    // gantiMakanan(makanan_baru) {
    //     this.setState({
    //         makanan: makanan_baru
    //     })
    // }
  render() {
    return (
      <div>
        <h2>Operan State yang menjadi Props : {this.props.makanan}</h2>
        {/* Button di bawah ini tidak dapat mengganti vaiable diatas karena sudah menjadi props */}
        {/* <button onClick={()=>this.setState({ makanan: "Soto"})}>Ganti Makanan</button>  */}

        {/* Tapi, button dibawah sudah bisa mengganti props dengan tambahan this.props*/}
        <button onClick={() => this.props.gantiMakanan("Sate")}>Ganti Makanan</button>
      </div>
    )
  }
}
