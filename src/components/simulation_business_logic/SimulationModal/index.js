import React from "react";
import CustomModal from "../../CustomModal";
import { useDispatch, useSelector } from "react-redux";
import { setModalSimulationIsOpened } from "../../../reducers/applicationService/applicationSlice";

const SimulationModal = () => {
  const openModalSimulation = useSelector(
    (state) => state.application.modalSimulationIsOpened
  );
  const dispatch = useDispatch();

  return (
    <CustomModal
      open={openModalSimulation}
      close={() => dispatch(setModalSimulationIsOpened(false))}
    />
  );
};

export default SimulationModal;
