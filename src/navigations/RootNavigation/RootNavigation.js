import React, { createRef } from "react";

export const navigatiobRef = createRef(null);

export const navigate = (name, params) => {
  if (navigatiobRef.current) {
    navigatiobRef.current.navigate(name, params);
  }
};
