import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Files from "./Files";
import Comment from "../Comment";

import { ROW_STYLES } from "@/const/styles";
import { fakerKO as faker } from "@faker-js/faker";

export default function Overview() {
  return (
    <Box>
      <Files />
      <Box sx={{ mt: 1 }}>
        <Box sx={{ ...ROW_STYLES }}>
          <Typography>{faker.person.firstName()}:</Typography>
          <Typography>{faker.person.jobTitle()}</Typography>
        </Box>
        <Box sx={{ ...ROW_STYLES }}>
          <Typography>{faker.commerce.department()}:</Typography>
          <Typography>{faker.commerce.productName()}</Typography>
        </Box>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Comment />
      </Box>
    </Box>
  );
}
