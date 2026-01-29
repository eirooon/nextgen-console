import React, { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Divider,
  Pagination,
  IconButton,
  useTheme,
} from "@mui/material";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import CardWidget from "../../../../components/CardWidget";

export default function PriorityQueueWidget({
  data,
  pageSize = 5,
  title,
  description,
  onReviewItem,
  getItemKey,
  emptyState,
}) {
  const theme = useTheme();
  const [page, setPage] = useState(1);

  const safeItems = useMemo(() => {
    return Array.isArray(data) ? data : [];
  }, [data]);

  const totalPages = Math.max(1, Math.ceil(safeItems.length / pageSize));
  const clampedPage = Math.min(page, totalPages);

  const pageItems = useMemo(() => {
    const start = (clampedPage - 1) * pageSize;
    return safeItems.slice(start, start + pageSize);
  }, [safeItems, clampedPage, pageSize]);

  const dotColor = (severity) => {
    switch (severity) {
      case "warning":
        return theme.palette.warning.main;
      case "info":
        return theme.palette.info.main;
      case "critical":
      default:
        return theme.palette.error.main;
    }
  };

  const onPageChange = (_, value) => setPage(value);

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <CardWidget title={title} description={description}>
      <Box
        sx={{
          border: "1px solid rgba(0,0,0,0.08)",
          borderRadius: 3,
          overflow: "hidden",
          bgcolor: "background.paper",
        }}
      >
        {pageItems.length === 0 ? (
          <Box sx={{ p: 3 }}>
            {emptyState ?? (
              <Typography color="text.secondary">
                No priority items right now.
              </Typography>
            )}
          </Box>
        ) : (
          pageItems.map((item, idx) => {
            const key = getItemKey
              ? getItemKey(item)
              : (item?.id ?? `${clampedPage}-${idx}`);

            return (
              <React.Fragment key={key}>
                <Box
                  sx={{
                    p: 2,
                    display: "grid",
                    gridTemplateColumns: "28px 1fr auto",
                    alignItems: "start",
                    columnGap: 2,
                  }}
                >
                  {/* severity dot */}
                  <Box sx={{ p: 1 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "999px",
                        bgcolor: dotColor(item?.severity),
                        boxShadow: `0 0 0 6px ${theme.palette.error.main}1A`, // subtle halo
                      }}
                    />
                  </Box>

                  {/* text */}
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 600, lineHeight: 1.2, mb: 0.75 }}
                    >
                      {item?.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {item?.message}
                    </Typography>
                  </Box>

                  {/* action */}
                  <Box sx={{ pt: 0.4 }}>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        item?.onReview?.(item);
                        onReviewItem?.(item);
                      }}
                      sx={{
                        textTransform: "none",
                      }}
                      size="small"
                      color="secondary"
                    >
                      Review
                    </Button>
                  </Box>
                </Box>

                {idx !== pageItems.length - 1 ? <Divider /> : null}
              </React.Fragment>
            );
          })
        )}
      </Box>

      {/* Pagination row */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
        sx={{ mt: 2 }}
      >
        <IconButton
          aria-label="previous page"
          onClick={handlePrev}
          disabled={clampedPage <= 1}
          size="small"
        >
          <ChevronLeftRounded />
        </IconButton>

        <Pagination
          count={totalPages}
          page={clampedPage}
          onChange={onPageChange}
          hidePrevButton
          hideNextButton
          siblingCount={1}
          boundaryCount={1}
          shape="circular"
        />

        <IconButton
          aria-label="next page"
          onClick={handleNext}
          disabled={clampedPage >= totalPages}
          size="small"
        >
          <ChevronRightRounded />
        </IconButton>
      </Stack>
    </CardWidget>
  );
}
