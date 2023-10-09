import { Box, Grid, GridItem } from "@chakra-ui/react"
import Hamburger from "./Hambuger"
import Logo from "./Logo"
import { revalidatePath } from "next/cache"

export default function NavBar() {
  return (
    <div>
        <nav>
          <Grid 
          bg="tomato" 
          h="4em"
          templateColumns="repeat(5, 1fr)" gap={6}
          alignItems={"center"}
          >
            <GridItem></GridItem>
            <GridItem></GridItem>
            <GridItem textAlign={"center"}>
              <span>
              <Logo />
              </span>
            </GridItem>
            <GridItem></GridItem>
            <GridItem>
              <Hamburger />
            </GridItem>
          </Grid>
        </nav>
    </div>
  )
}