import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
function Contact(props) {
  return (
    <YMaps>
      <div>
        <Map
          defaultState={{
            center: [43.324675, 45.692376],
            zoom: 17,
          }}
          width={"1000px"}
          height={"600px"}
        >
          <Placemark geometry={[43.324675, 45.692376]} />
        </Map>
      </div>
    </YMaps>
  );
}

export default Contact;
