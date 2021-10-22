import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    name: "",
    vehicles: {
      1: {
        id: 1,
        make: "Honda",
        model: "CRV",
        licensePlate: "H1H1H1"
      }
    },
    drivers: {
      1: {
        id: 1,
        name: "Dave",
        licenseNumber: "f21efaedg3r"
      }
    }
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    addVehicle: (state, action) => {
      const id = v4();
      state.vehicles[id] = action.payload;
      state.vehicles[id].id = id;
    },
    removeVehicle: (state, action) => {
      delete state.vehicles[action.payload];
    },
    updateVehicle: (state, action) => {
      const { id, ...updated } = action.payload;
      const vehicle = state.vehicles[id];
      for (const key in updated) {
        vehicle[key] = updated[key];
      }
    },
    addDriver: (state, action) => {
      const id = v4();
      state.drivers[id] = action.payload;
      state.drivers[id].id = id;
    },
    removeDriver: (state, action) => {
      delete state.drivers[action.payload];
    },
    updateDriver: (state, action) => {
      const { id, ...updated } = action.payload;
      for (const key in updated) {
        state.drivers[id][key] = updated[key];
      }
    }
  }
});

export const {
  addDriver,
  addName,
  addVehicle,
  removeDriver,
  removeVehicle,
  updateDriver,
  updateName,
  updateVehicle
} = accountSlice.actions;

export default accountSlice.reducer;
