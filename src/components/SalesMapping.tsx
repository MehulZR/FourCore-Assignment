"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const getColorBasedOnCountry = (countryName: string) => {
  switch (countryName) {
    case "China":
      return "#8950FC";
    case "United States of America":
      return "#FFA800";
    case "Brazil":
      return "#F64E60";
    case "Dem. Rep. Congo":
      return "#6993FF";
    case "Saudi Arabia":
      return "#00AB9A";
    case "Indonesia":
      return "#0BB783";
    default:
      return "#ECECEC";
  }
};

const SalesMappingCard = () => {
  return (
    <div className="p-8 col-start-4 col-end-6 bg-white rounded-[20px]">
      <h2 className="font-semibold text-[20px]">Sales Mapping by Country</h2>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter((geo) => geo.properties.name !== "Antarctica")
              .map((geo) => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={getColorBasedOnCountry(geo.properties.name)}
                  />
                );
              })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default SalesMappingCard;
