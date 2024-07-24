"use client";

import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";

const allStates = [
  { id: "AL", val: "01" },
  { id: "AK", val: "02" },
  { id: "AS", val: "60" },
  { id: "AZ", val: "04" },
  { id: "AR", val: "05" },
  { id: "CA", val: "06" },
  { id: "CO", val: "08" },
  { id: "CT", val: "09" },
  { id: "DE", val: "10" },
  { id: "DC", val: "11" },
  { id: "FL", val: "12" },
  { id: "FM", val: "64" },
  { id: "GA", val: "13" },
  { id: "GU", val: "66" },
  { id: "HI", val: "15" },
  { id: "ID", val: "16" },
  { id: "IL", val: "17" },
  { id: "IN", val: "18" },
  { id: "IA", val: "19" },
  { id: "KS", val: "20" },
  { id: "KY", val: "21" },
  { id: "LA", val: "22" },
  { id: "ME", val: "23" },
  { id: "MH", val: "68" },
  { id: "MD", val: "24" },
  { id: "MA", val: "25" },
  { id: "MI", val: "26" },
  { id: "MN", val: "27" },
  { id: "MS", val: "28" },
  { id: "MO", val: "29" },
  { id: "MT", val: "30" },
  { id: "NE", val: "31" },
  { id: "NV", val: "32" },
  { id: "NH", val: "33" },
  { id: "NJ", val: "34" },
  { id: "NM", val: "35" },
  { id: "NY", val: "36" },
  { id: "NC", val: "37" },
  { id: "ND", val: "38" },
  { id: "MP", val: "69" },
  { id: "OH", val: "39" },
  { id: "OK", val: "40" },
  { id: "OR", val: "41" },
  { id: "PW", val: "70" },
  { id: "PA", val: "42" },
  { id: "PR", val: "72" },
  { id: "RI", val: "44" },
  { id: "SC", val: "45" },
  { id: "SD", val: "46" },
  { id: "TN", val: "47" },
  { id: "TX", val: "48" },
  { id: "UM", val: "74" },
  { id: "UT", val: "49" },
  { id: "VT", val: "50" },
  { id: "VA", val: "51" },
  { id: "VI", val: "78" },
  { id: "WA", val: "53" },
  { id: "WV", val: "54" },
  { id: "WI", val: "55" },
  { id: "WY", val: "56" }
];

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets: { [key: string]: number[] } = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};

const markers: {
  markerOffset: number;
  name: string;
  coordinates: number[];
}[] = [
  {
    markerOffset: -30,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037]
  },
  { markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
  { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
  { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
  { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
  { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
  { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] }
];

export default function FavoriteMarriott() {
  return (
    <section className="mt-[150px] text-center">
      <h2 className="font-hg text-[36px] font-[700] text-[#048BC4]">
        Our Favorite Marriott Vacation Club Resorts
      </h2>

      <h5 className="font-hg my-[12px] text-[20px] font-[500] text-[#4F4F4F]">
        The best resorts in the US and Hawaii/Caribbean
      </h5>

      <div>
        <ComposableMap projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
            {({ geographies }) => (
              <>
                {geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    stroke="#FFF"
                    geography={geo}
                    fill="#DDD"
                  />
                ))}

                {geographies.map((geo) => {
                  const centroid = geoCentroid(geo);
                  const cur = allStates.find((s) => s.val === geo.id);

                  return (
                    <g key={`${geo.rsmKey}-name`}>
                      {cur &&
                        centroid[0] > -160 &&
                        centroid[0] < -67 &&
                        (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                          <Marker coordinates={centroid}>
                            <text y="2" fontSize={14} textAnchor="middle">
                              {cur.id}
                            </text>
                          </Marker>
                        ) : (
                          <Annotation
                            connectorProps={{}}
                            subject={centroid}
                            dx={offsets[cur.id][0]}
                            dy={offsets[cur.id][1]}
                          >
                            <text
                              x={4}
                              fontSize={14}
                              alignmentBaseline="middle"
                            >
                              {cur.id}
                            </text>
                          </Annotation>
                        ))}
                    </g>
                  );
                })}

                {geographies.map((_geo) => {
                  markers.map(({ name, coordinates, markerOffset }) => (
                    <Marker
                      key={name}
                      coordinates={[coordinates[0], coordinates[1]]}
                    >
                      <text
                        textAnchor="middle"
                        y={markerOffset}
                        style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                      >
                        {name}
                      </text>
                    </Marker>
                  ));

                  return null;
                })}
              </>
            )}
          </Geographies>
        </ComposableMap>
      </div>
    </section>
  );
}
