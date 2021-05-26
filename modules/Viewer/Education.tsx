import { Box, Text, TextProps } from "@chakra-ui/layout";
import { ColorProps } from "@chakra-ui/styled-system";
import React from "react";
import TextViewer from "../../plugins/Tiptap/TextViewer";
import useEducationStore from "../UserInput/Education/store";

interface Props {}

const Education = (props: Props) => {
  const data = useEducationStore((state) => state.data).filter(
    (item) => !item.isHidden
  );

  const PRIMARY_COLOR: ColorProps["color"] = "purple";

  const headerStyle: TextProps = {
    color: `${PRIMARY_COLOR}.600`,
    fontSize: "xl",
    fontWeight: "bold",
    mb: "2",
  };

  const titleStyle: TextProps = {
    fontSize: "md",
    color: `${PRIMARY_COLOR}.600`,
    fontWeight: "medium",
    mb: "0.5",
  };

  const subtitleStyle: TextProps = {
    fontSize: "sm",
    color: "gray.500",
    mb: "1",
  };

  const parseDate = (date: Date, view: "Y" | "YM" = "Y") => {
    if (date === undefined) return "";
    if (date === null) return "Present";
    if (view === "Y") return date.getFullYear();
    if (view === "YM") return `${date.getMonth()} ${date.getFullYear()}`;
  };

  return (
    <Box p="2">
      <Text {...headerStyle}>Education</Text>
      {data.map((item) => (
        <Box
          display="flex"
          alignContent="flex-start"
          flexDir="column"
          key={item._id}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Text {...titleStyle}>{item.institute}</Text>
            <Text {...titleStyle}>
              {parseDate(item.start)} - {parseDate(item.end)}
            </Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            mb="1"
          >
            <Text {...subtitleStyle}>
              {item.degree} {item.stream}, {item.gradeObtained}/{item.gradeMax}
            </Text>
            <Text {...subtitleStyle}>{item.location}</Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <TextViewer content={item.description} />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Education;
