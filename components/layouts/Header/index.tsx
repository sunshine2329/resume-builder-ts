import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React from "react";
import useResumeStore from "../../../store/resume.store";
import { LogoSquare } from "../Logos";
import NavTabs from "../NavTabs";
import UserAvatar from "./UserAvatar";

const Header = () => {
  const router = useRouter();
  const savedState = useResumeStore((state) => state._id);
  const id = router.query.id ? router.query.id : savedState;

  return (
    <Box
      my={{ base: "1rem" }}
      px={{ md: "4rem", lg: "7rem" }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <LogoSquare />
      <NavTabs id={id} currentRoute={router.pathname} />
      <UserAvatar src="https://www.gravatar.com/avatar/516fd0624a35f74e54802fea778abf41" />
    </Box>
  );
};

export default Header;
