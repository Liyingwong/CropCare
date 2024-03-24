import React, { useEffect, useState } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import DrawingManager from "../components/drawing-manager";
import { Button, Col, Container, Row, Table } from "react-bootstrap";

const Main = () => {
  const [coordinates, setCoordinates] = useState<google.maps.LatLng[]>([]);
  const [area, setArea] = useState<number | null>(null);

  const handleDrawingComplete = (
    coords: google.maps.LatLng[],
    computedArea: number,
  ) => {
    setCoordinates(coords);
    setArea(computedArea);
  };

  const handleCancel = () => {
    setCoordinates([]);
    setArea(null);
  };

  return (
    <Container fluid className={"w-100 h-100 p-0"}>
      <Row className={"w-100 h-100 g-0"}>
        <Col lg={6}>
          <div className={"d-flex flex-column h-100"}>
            <div
              className={
                "d-flex flex-column justify-content-center align-items-center py-5"
              }
            >
              <h1 className={"text-primary fw-bold mb-4 mt-5"}>
                Select your location
              </h1>
              <h2 className={"fs-5 text-secondary mb-4"}>Area information</h2>
              {coordinates.length >= 0 && (
                <div className={"d-flex justify-content-center flex-column align-items-center"}>
                  <Table
                    striped
                    bordered
                    hover
                    className={"mb-4"}
                    style={{
                      minWidth: "50%",
                      width: "50%",
                      tableLayout: "fixed",
                    }}
                  >
                    <thead>
                      <tr>
                        <th className={"text-secondary"}>Latitude</th>
                        <th className={"text-secondary"}>Longitude</th>
                      </tr>
                    </thead>
                    <tbody>
                      {coordinates.map((coord, index) => (
                        <tr key={index}>
                          <td>{coord.lat().toFixed(4)}</td>
                          <td>{coord.lng().toFixed(4)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <p>Computed Area: {area}</p>
                </div>
              )}
            </div>
            <Row className={"w-100 mt-auto g-0"}>
              <Col lg={6}>
                <Button className={"w-100 rounded-0"}>Confirm</Button>
              </Col>
              <Col lg={6}>
                <Button
                  className={"w-100 rounded-0 btn-warning"}
                  onClick={handleCancel}
                  type={"button"}
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={6}>
          <APIProvider apiKey={"AIzaSyAqcGJE9whlEyjLw-rCdN_uRvzEl0Omekc"}>
            <DrawingManager onDrawingComplete={handleDrawingComplete} />
          </APIProvider>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
