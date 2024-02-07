import React from 'react'

const makanans = [
    {
        nama: 'Soto',
        harga: 12000
    },
    {
        nama: 'Bakso',
        harga: 15000
    },
    {
        nama: 'Mie Ayam',
        harga: 7000
    },
    {
        nama: 'Bubur Jakarta',
        harga: 10000
    },

]

// reduce

const total_bayar = makanans.reduce((total_harga, makanan) => {
    // total_harga+makanan.harga adalah looping sehingga menghasilkan hasil penjumlahan harga makanan
    return total_harga+makanan.harga;
},0)

const MAP = () => {
    return (
        <div>
            <h2>MAP</h2>
            <ul>
                {makanans.map((makanan, index) => (
                    <li>{index + 1} {makanan.nama} - harga Rp.{makanan.harga}</li>
                ))}
            </ul>
            <h2>Filter harga yang lebih dari sama dengan Rp. 12000</h2>
            <ul>
                {makanans
                    .filter((makanan) => makanan.harga > 11000)
                    .map((makanan, index) => (
                        <li>{index + 1} {makanan.nama} - harga Rp.{makanan.harga}</li>
                    ))}
            </ul>
            <h3>Total Harga : {total_bayar}</h3>
        </div>
    )
}

export default MAP

