import React from "react";
import { ControlPosition, Map, MapControl } from "@vis.gl/react-google-maps";

import { UndoRedoControl } from "./undo-redo-control";
import { useDrawingManager } from "./use-drawing-manager";

interface DrawingManagerProps {
  onDrawingComplete: (
    coords: google.maps.LatLng[],
    computedArea: number,
  ) => void;
}

const DrawingManager: React.FC<DrawingManagerProps> = ({
  onDrawingComplete,
}) => {
  const drawingManager = useDrawingManager();

  drawingManager?.addListener(
    "polygoncomplete",
    (polygon: google.maps.Polygon) => {
      const path = polygon.getPath().getArray();
      const computedArea = google.maps.geometry.spherical.computeArea(
        polygon.getPath(),
      );
      onDrawingComplete(path, computedArea);
      polygon.setMap(null);
    },
  );

  return (
    <>
      <Map
        defaultZoom={20}
        defaultCenter={{ lat: 3.1319, lng: 101.6841 }}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapTypeId={"satellite"}
      />

      <MapControl position={ControlPosition.TOP_CENTER}>
        <UndoRedoControl drawingManager={drawingManager} />
      </MapControl>
    </>
  );
};

export default DrawingManager;
