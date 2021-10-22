import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import loginUser from "../../context/actions/auth/loginUser";
import useGlobal  from "../../hooks";

const Logout = () => {
  const {
    
  } = useGlobal();

  useEffect(() => {
    loginUser()(authDispatch)
    return () => {};
  }, []);

  return <ActivityIndicator />;
};

export default Logout;

const styles = StyleSheet.create({});
