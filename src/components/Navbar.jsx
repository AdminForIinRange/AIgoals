import {
  Flex,
  Button,
  Box,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Wrap,
  Grid,
  GridItem,
  Text,
  Image,
  Stack,
  InputLeftElement,
  InputLeftAddon,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  MenuItemOption,
  MenuOptionGroup,
  HStack,
  VStack,
  InputGroup,
  Select,
  Container,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <Stack bgColor={"#050A30"}>
      <HStack justify={"end"}>
        <NavLink to="pagetwo">
          <Button fontSize="sm" color={"black"} variant="solid" w="auto">
            pagetwo
          </Button>
        </NavLink>

        <NavLink to="/">
          <Button fontSize="sm" color={"black"} variant="solid" w="auto">
            Home
          </Button>
        </NavLink>
      </HStack>
    </Stack>
  );
}
