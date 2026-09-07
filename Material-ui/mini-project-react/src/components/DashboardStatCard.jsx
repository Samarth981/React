import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function DashboardStatCard({
  label,
  value,
  icon: Icon,
  loading,
}) {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        {loading ? (
          <Skeleton variant="text" width="70%" height={30} />
        ) : (
          <Typography
            variant="statLabel"
            component="p"
            sx={{ color: "#4A5568" }}
          >
            {label}
          </Typography>
        )}

        {loading ? (
          <Skeleton variant="circular" width={24} height={24} />
        ) : (
          <Icon aria-hidden="true" />
        )}
      </Stack>

      {loading ? (
        <Skeleton
          variant="text"
          width="45%"
          height={45}
          sx={{ mt: "30px" }}
        />
      ) : (
        <Typography variant="statValue" component="p">
          {value}
        </Typography>
      )}
    </Box>
  );
}