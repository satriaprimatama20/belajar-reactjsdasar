import { Row, Col, Form, Button } from "react-bootstrap";

const FormCrud = ({ nama, deskripsi, harga, handleChange, handleSubmit,id }) => {
  return (
    <>
      <>
        <Row>
          <Col>
            <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
          </Col>
        </Row>
      </>
      <>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="nama.control">
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={1}
                  name="nama"
                  value={nama}
                  onChange={(event) => handleChange(event)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="deskripsi.control">
                <Form.Label>Deskripsi</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={3}
                  name="deskripsi"
                  value={deskripsi}
                  onChange={(event) => handleChange(event)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="harga.control">
                <Form.Label>Harga</Form.Label>
                <Form.Control
                  typea="number"
                  s="textarea"
                  rows={1}
                  name="harga"
                  value={harga}
                  onChange={(event) => handleChange(event)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </>
    </>
  );
};

export default FormCrud;
