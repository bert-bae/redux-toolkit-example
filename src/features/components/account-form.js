import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addDriver, addVehicle, updateName } from "../account.slice";
import { AccountDriverForm } from "./account-driver-form";
import { AccountVehicleForm } from "./account-vehicle-form";

export const AccountForm = () => {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);

  const driverList = Object.keys(account.drivers).map((id, i) => {
    const driver = account.drivers[id];
    return <AccountDriverForm {...driver} count={i + 1} key={driver.id} />;
  });

  const vehicleList = Object.keys(account.vehicles).map((id, i) => {
    const vehicle = account.vehicles[id];
    return <AccountVehicleForm {...vehicle} count={i + 1} key={vehicle.id} />;
  });

  return (
    <div>
      <hr />
      <h5>Update Name</h5>
      <input
        type="text"
        value={account.name}
        onChange={(e) => dispatch(updateName(e.target.value))}
      />

      <h5>Drivers</h5>
      <button
        onClick={() => dispatch(addDriver({ name: "", licenseNumber: "" }))}
      >
        Add Driver
      </button>
      {driverList}

      <h5>Vehicles</h5>
      <button
        onClick={() =>
          dispatch(addVehicle({ make: "", model: "", licensePlate: "" }))
        }
      >
        Add Vehicle
      </button>
      {vehicleList}
    </div>
  );
};
