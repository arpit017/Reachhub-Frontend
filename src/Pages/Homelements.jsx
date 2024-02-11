import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { UseDispatch, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Homelements = ({ ele }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHistory = (name) => {
    console.log(name);
    axios
      .get(`https://reachhub-l2zo.onrender.com/player/${name}/rating-history`)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "HISTORY", payload: res.data });
        navigate("/history");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card bg="rgba(255, 255, 255, 0.1)" color="white" boxShadow={"md"}>
      <CardHeader>
        <Heading size="md"> {ele.name}</Heading>
      </CardHeader>
      <CardBody>
        <Text> Rating : {ele.rating}</Text>
      </CardBody>
      <CardFooter>
        
        <Button
        m="auto"
          onClick={(e) => {
            handleHistory(ele.name);
          }}
        >
         Get 30 day rating
        </Button>
       
      </CardFooter>
    </Card>
  );
};
