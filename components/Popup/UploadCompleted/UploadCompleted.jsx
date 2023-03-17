import React from "react";
import ActionCompleted from "../../Completed/ActionCompleted";
import ControlledModal from "../../Modals/ControlledModal";

const UploadCompleted = ({ open }) => {
  return (
    <ControlledModal open={open}>
      <ActionCompleted
        description='you will be credited within
the next 24 Hours'
        title='Upload Completed'
      />
    </ControlledModal>
  );
};

export default UploadCompleted;
