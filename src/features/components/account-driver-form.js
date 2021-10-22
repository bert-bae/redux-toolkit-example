import React from "react";
import { useDispatch } from "react-redux";
import { removeDriver, updateDriver } from "../account.slice";

export const AccountDriverForm = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="data-container">
      <h6>Driver {props.count}</h6>
      <input
        type="text"
        value={props.name}
        onChange={(e) =>
          dispatch(
            updateDriver({
              id: props.id,
              name: e.target.value
            })
          )
        }
      />
      <input
        type="text"
        value={props.licenseNumber}
        onChange={(e) =>
          dispatch(
            updateDriver({
              id: props.id,
              licenseNumber: e.target.value
            })
          )
        }
      />
      <button onClick={() => dispatch(removeDriver(props.id))}>
        Remove Driver
      </button>
    </div>
  );
};
