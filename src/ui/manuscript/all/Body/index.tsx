import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Toolbar from "./Toolbar";
import DataTable from "./DataTable";

import { getManuscriptList } from "@/lib/api/submission";

export default async function Body() {
  const manuscriptList = await getManuscriptList();
  console.log("manuscriptList", manuscriptList);

  return (
    <>
      <DataTable data={manuscriptList.rows} />
    </>
  );
}
