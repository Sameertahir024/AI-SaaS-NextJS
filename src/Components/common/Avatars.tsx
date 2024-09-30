import React from "react";
import Avatar from "@mui/material/Avatar";

interface Props {
  name: string;
}

const Avatars: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <Avatar>{name}</Avatar>
    </div>
  );
};

export default Avatars;
