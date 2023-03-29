import React from "react";
import ActionCompleted from "../../Completed/ActionCompleted";
import Completed from "../../Completed/ActionCompleted";
import ControlledModal from "../../Modals/ControlledModal";

const WithdrawalCompleted = () => {
  return (
    <ControlledModal open={open} closeModal={closeModal}>
      <ActionCompleted
        description='you will be credited within
the next 24 Hours'
        title='Withdrawal Completed'
      />
    </ControlledModal>
  );
};

export default WithdrawalCompleted;
