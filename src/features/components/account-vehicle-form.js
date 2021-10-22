import React from "react";
import { useDispatch } from "react-redux";
import { removeVehicle, updateVehicle } from "../account.slice";

export const AccountVehicleForm = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="data-container">
      <h6>Vehicle {props.count}</h6>
      <input
        type="text"
        value={props.make}
        onChange={(e) =>
          dispatch(
            updateVehicle({
              id: props.id,
              make: e.target.value
            })
          )
        }
      />
      <input
        type="text"
        value={props.model}
        onChange={(e) =>
          dispatch(
            updateVehicle({
              id: props.id,
              model: e.target.value
            })
          )
        }
      />
      <input
        type="text"
        value={props.licensePlate}
        onChange={(e) =>
          dispatch(
            updateVehicle({
              id: props.id,
              licensePlate: e.target.value
            })
          )
        }
      />
      <button onClick={() => dispatch(removeVehicle(props.id))}>
        Remove Vehicle
      </button>
    </div>
  );
};
