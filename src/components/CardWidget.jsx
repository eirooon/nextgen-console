import PropTypes from "prop-types";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function CardWidget({
  title,
  description,
  action,
  children,
  sx,
  contentSx,
  ...rest
}) {
  return (
    <Card
      variant="outlined"
      sx={{
        ...sx,
      }}
      {...rest}
    >
      <CardHeader
        title={
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
        }
        action={action}
        subheader={description}
      ></CardHeader>
      <CardContent sx={{ ...contentSx }}>{children}</CardContent>
    </Card>
  );
}

CardWidget.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  action: PropTypes.node,
  children: PropTypes.node,
  sx: PropTypes.object,
  contentSx: PropTypes.object,
};
