import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Stack,
  LinearProgress,
  Tooltip,
  Alert,
} from "@mui/material";
import { grey, green } from "@mui/material/colors";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function RecoveryConfidenceWidget({ data }) {
  const confidenceScore = data?.score ?? 93;
  const trend = data?.trend ?? "2";
  const [displayPercent, setDisplayPercent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setDisplayPercent(confidenceScore), 100);
    return () => clearTimeout(timer);
  }, [confidenceScore]);

  // Design tokens sampled from the image
  const BORDER_GRAY = "#e6e6e6";
  const GRADIENT_TOP = "#16f016"; // Bright highlight green
  const GRADIENT_BOTTOM = "#0cb80c"; // Richer base green

  const factors = [
    { label: "SLA Compliance", value: 40, weight: "40%", color: "#2e7d32" },
    { label: "Immutability", value: 23, weight: "30%", color: "#4caf50" },
    { label: "Restore Tests", value: 30, weight: "30%", color: "#1b5e20" },
  ];

  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        title={
          <Typography variant="h6" fontWeight="bold">
            Recovery Confidence
          </Typography>
        }
        subheader="Based on SLA, Immutability, and Restore success"
      />
      <CardContent sx={{ flexGrow: 1, mt: 3 }}>
        <Stack direction={{ xs: "column", md: "row" }} alignItems="center">
          {/* Shield Section with Gradient */}
          <Box sx={{ width: 500, textAlign: "center" }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <svg
                width="180"
                height="170"
                viewBox="0 0 200 220"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Exact Shield Shape Clip */}
                  <clipPath id="shieldInner">
                    <path d="M20 30 L100 10 L180 30 V110 C180 170 100 210 100 210 C100 210 20 170 20 110 V30Z" />
                  </clipPath>

                  {/* Linear Gradient Definition */}
                  <linearGradient
                    id="shieldGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: GRADIENT_TOP, stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: GRADIENT_BOTTOM, stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>

                {/* Outer Border Layer */}
                <path
                  d="M10 25 L100 2 L190 25 V110 C190 180 100 220 100 220 C100 220 10 180 10 110 V25Z"
                  fill={BORDER_GRAY}
                />

                {/* Inner White Background */}
                <path
                  d="M20 30 L100 10 L180 30 V110 C180 170 100 210 100 210 C100 210 20 170 20 110 V30Z"
                  fill="white"
                />

                {/* Animated Gradient Fill */}
                <g clipPath="url(#shieldInner)">
                  <rect
                    x="0"
                    y={`${100 - displayPercent * 0.9}%`}
                    width="200"
                    height="220"
                    fill="url(#shieldGradient)"
                    style={{
                      transition: "all 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />
                  {/* Surface Curve with Gradient */}
                  <path
                    d={`M 20 ${100 - displayPercent * 0.9}% Q 100 ${95 - displayPercent * 0.9}% 180 ${100 - displayPercent * 0.9}%`}
                    fill="url(#shieldGradient)"
                    style={{
                      transition: "all 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />
                </g>

                {/* Percentage Text */}
                <text
                  x="100"
                  y="125"
                  textAnchor="middle"
                  fill="white"
                  style={{
                    fontSize: "48px",
                    fontWeight: "800",
                    filter: "drop-shadow(0px 2px 3px rgba(0,0,0,0.2))",
                    opacity: displayPercent > 0 ? 1 : 0,
                    transition: "opacity 0.6s ease-in",
                  }}
                >
                  {confidenceScore}%
                </text>
              </svg>
            </Box>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <span style={{ color: green[500] }}>
                +{trend}% changed last 7 days
              </span>
            </Typography>
          </Box>

          {/* Breakdown Section */}
          <Box
            sx={{
              flexGrow: 1,
              width: "100%",
              justifyContent: "center",
            }}
            p={4}
          >
            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
              Confidence Factors
            </Typography>
            <Stack spacing={2}>
              {factors.map((factor) => (
                <Box key={factor.label}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    mb={0.5}
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      {factor.label}
                      <Tooltip title={`Weight: ${factor.weight}`}>
                        <InfoOutlinedIcon
                          sx={{ fontSize: 14, cursor: "help" }}
                        />
                      </Tooltip>
                    </Typography>
                    <Typography variant="caption" fontWeight="bold">
                      {factor.value}%
                    </Typography>
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    value={(factor.value / parseInt(factor.weight)) * 100}
                    sx={{
                      height: 6,
                      borderRadius: 3,
                      bgcolor: grey[200],
                      "& .MuiLinearProgress-bar": { bgcolor: factor.color },
                    }}
                  />
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>
      </CardContent>
      <Box sx={{ p: 2, pt: 0 }}>
        <Alert
          severity="success"
          sx={{
            py: 0.5,
            "& .MuiAlert-message": { fontSize: "0.75rem", color: "#1b5e20" },
            bgcolor: "#f0fdf4",
            border: "1px solid #dcfce7",
            alignItems: "center",
          }}
        >
          No critical gaps detected in the last 24 hours.
        </Alert>
      </Box>
    </Card>
  );
}
