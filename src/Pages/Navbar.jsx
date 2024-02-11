import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Flex, IconButton, Menu, MenuButton, MenuItem ,MenuList, Spacer} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { saveAs } from 'file-saver';
import { UseSelector } from "react-redux";

const Navbar = () => {
  const login = useSelector((data) => {
    return data.login;
  });
  const name = useSelector((data) => {
    return data.name;
  });
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({
      type: "LOGGED_OUT",
    });
  };

const handleDownload=()=>{
login?

    axios.get("https://reachhub-l2zo.onrender.com/players/rating-history-csv", { responseType: 'blob' })
    .then((res) => {
      // Create a Blob containing the CSV data
      const blob = new Blob([res.data], { type: 'text/csv' });

      // Trigger file download
      saveAs(blob, 'rating-history.csv');
    })
    .catch((err) => {
      console.log(err);
    }):alert("login first to download file")
}

  return (
    <Flex
      // marginLeft="10%"
      align="center"
      justify={"space-between"}
      color={"white"}
      padding="1rem"
      bg=""
      width={"80%"}
      m="auto"
      
    >
      <Box display="flex" width="10%">
        <Button
          as={Link}
          to="/home"
          variant="ghost"
          mx="0.2rem"
          colorScheme="white"
        >
          <h3>REACHHUB</h3>
        </Button>
      </Box>

{/* //-----------------------------------------------------------------> */}

<Box  >
     
{/* //-----------------------------------------------------------------> */}
{/* margin="auto" */}
      <Box display={{ base: 'none', md: 'flex' }} margin="auto">
        <Button
          as={Link}
          to="/home"
          colorScheme="teal"
          variant="ghost"
          mx="0.5rem"
          textDecoration={"none"}
        >
          Home
        </Button>
        <Button
          as={Link}
          to="/home"
          colorScheme="teal"
          variant="ghost"
          mx="0.5rem"
          textDecoration={"none"}
          onClick={handleDownload}
        >
          Download Esv File
        </Button>
        
        <Button
          as={Link}
          to="/signup"
          colorScheme="teal"
          variant="ghost"
          mx="0.5rem"
          textDecoration={"none"}
        >
          Signup
        </Button>

        {login ? (
          <Button
            as={Link}
            to="/home"
            colorScheme="teal"
            variant="ghost"
            mx="0.5rem"
            textDecoration={"none"}
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <Button
            as={Link}
            to="/"
            colorScheme="teal"
            variant="ghost"
            mx="0.5rem"
            textDecoration={"none"}
            
          >
            Login
          </Button>
        )}
         
      </Box>
        </Box>
        <Box display={{base:"none",md:"flex"}} width="10%" >
        <Button
          as={Link}
          to="#"
          variant="ghost"
          mx="0.2rem"
          colorScheme="white"
          >
          <h5>Hi ! {name}</h5>
        </Button>
      </Box>
     
    </Flex>
  );
};

export default Navbar;
