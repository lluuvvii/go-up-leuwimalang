import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Avatar,
  Box,
  Menu,
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Stack,
} from "@mui/material";

import { IconUser } from "@tabler/icons-react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Profile = () => {
  const { data: session } = useSession()
  const userImage: string | undefined = session?.user?.image as string
  // const [anchorEl2, setAnchorEl2] = useState(null);
  // const [token, setToken] = useState<any>(null)
  // const handleClick2 = (event: any) => {
  //   setAnchorEl2(event.currentTarget);
  // };
  // const handleClose2 = () => {
  //   setAnchorEl2(null);
  // };

  // useEffect(() => {
  //   setToken(localStorage?.getItem('token'))
  // }, [])


  return (
    <>
      {session?.user ?
        <Box mt={1} py={1} px={2}>
          <Stack direction='row' gap={1}>
            <LogoutButton />
            <Link href='/'>
              <Image src={userImage} alt='Profile' width={37} height={37} style={{ borderRadius: '50%' }} />
            </Link>
          </Stack>
          {/* <IconButton
            size="large"
            aria-label="show 11 new notifications"
            color="inherit"
            aria-controls="msgs-menu"
            aria-haspopup="true"
            sx={{
              ...(typeof anchorEl2 === "object" && {
                color: "primary.main",
              }),
            }}
            onClick={handleClick2}
          >
            <Avatar src="/images/profile/user-1.jpg" alt="image" sx={{ width: 35, height: 35, }} />
            <Avatar sx={{ width: 35, height: 35 }} src="https://source.boringavatars.com/beam" alt="user-profile" />
          </IconButton> */}
          {/* ------------------------------------------- */}
          {/* Message Dropdown */}
          {/* ------------------------------------------- */}
          {/* <Menu
            id="msgs-menu"
            anchorEl={anchorEl2}
            keepMounted
            open={Boolean(anchorEl2)}
            onClose={handleClose2}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            sx={{
              "& .MuiMenu-paper": {
                width: "200px",
              },
            }}
          >
            <ListItemButton href="/profile" LinkComponent={Link}>
              <ListItemIcon>
                <IconUser width={20} />
              </ListItemIcon>
              <ListItemText>
                Profil Saya
              </ListItemText>
            </ListItemButton>
            <Box mt={1} py={1} px={2}>
              <LogoutButton />
            </Box>
          </Menu> */}
        </Box>
        :
        <Box mt={1} py={1} px={2}>
          <LoginButton />
        </Box>
      }
    </>
  );
};

export default Profile;
