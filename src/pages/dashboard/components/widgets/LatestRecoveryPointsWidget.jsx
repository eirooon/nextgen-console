import CardWidget from "../../../../components/CardWidget";
import SharedBarChart from "../SharedBarChart";
import {
  Typography,
  Select,
  MenuItem,
  Stack,
  FormControl,
} from "@mui/material";

export default function OldestRecoveryPointsWidget({
  title,
  description,
  data,
}) {
  return (
    <CardWidget title={title} description={description}>
      <SharedBarChart
        height={400}
        series={data}
        showLegend={false}
      ></SharedBarChart>
    </CardWidget>
  );
}
