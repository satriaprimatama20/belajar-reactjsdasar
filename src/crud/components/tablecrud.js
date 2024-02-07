import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
const TableCrud = ({ makanans, editData, hapusData }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nama Makanan</th>
                    <th>Deskripsi</th>
                    <th>Harga</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {makanans.map((makanan, index) => {
                    return (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{makanan.nama}</td>
                            <td>{makanan.deskripsi}</td>
                            <td>Rp.{makanan.harga}</td>
                            <td>
                                <Button className='btn btn-warning' onClick={() => editData(makanan.id)}>Edit</Button>
                                <Button className='btn btn-danger' onClick={() => editData(makanan.id)}>Delete</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
}

export default TableCrud;