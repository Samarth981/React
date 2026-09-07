import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import DashboardStatCard from "../components/Dashboard/DashboardStatCard";
import { dashboardCards } from "../components/Dashboard/Dashboard.constants";
// import { getAllDashboardData } from "../redux/actions/dashboard";
import PageHeading from "../components/common/PageHeading";
import { getOrderFilterOptions } from "../redux/actions/orders";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { dashboardStats, filterOptions } = useSelector(
    (state) => state.orders,
  );

  useEffect(() => {
    dispatch(getOrderFilterOptions());
  }, [dispatch]);

  const isLoading =
    filterOptions.status === "loading" || filterOptions.status === "idle";

  return (
    <Box>
      <PageHeading title="Dashboard" />

      <Box className="d-flex flex-wrap gap-40 mt-60 dashboard-cards-container">
        {dashboardCards.map(({ statKey, label, icon, format }) => (
          <DashboardStatCard
            key={statKey}
            label={label}
            icon={icon}
            loading={isLoading}
            value={
              !isLoading && dashboardStats
                ? format(dashboardStats[statKey])
                : null
            }
          />
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
