import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const FEATURES = [
  "Live order tracking",
  "Donor management",
  "One-click payouts",
];

export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <Stack
      component="main"
      direction={{ xs: "column", md: "row" }}
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "background.auth",
      }}
    >
      <Stack
        component="section"
        direction="column"
        justifyContent="center"
        sx={{
          width: { xs: "100%", md: "42%" },
          minWidth: { md: "380px" },
          p: {
            xs: "28px 20px",
            sm: "40px",
            md: "64px 56px",
          },
          background: (theme) =>
            `linear-gradient(160deg, ${theme.palette.accent.main} 0%, ${theme.palette.accent.dark} 100%)`,
          color: "common.white",
        }}
      >
        <Box sx={{ maxWidth: { xs: "100%", md: "420px" } }}>
          <Typography
            variant="authHeroTitle"
            component="h1"
            sx={{
              mt: { xs: 0, sm: "20px", md: "40px" },
              fontSize: {
                xs: "26px",
                sm: "34px",
                md: undefined,
              },
              lineHeight: {
                xs: "36px",
                sm: "46px",
                md: undefined,
              },
              color: "common.white",
            }}
          >
            <Typography component="span" display="block" inherit>
              Raise more.
            </Typography>

            <Typography component="span" display="block" inherit>
              Manage less.
            </Typography>
          </Typography>

          <Typography
            variant="authBody"
            component="p"
            sx={{
              mt: "20px",
              color: "common.white",
              opacity: 0.88,
            }}
          >
            Track fundraisers, orders and donors in one dashboard built for
            your team.
          </Typography>

          <Stack
            component="ul"
            spacing={2.5}
            sx={{
              mt: { xs: "24px", md: "40px" },
              p: 0,
              listStyle: "none",
            }}
          >
            {FEATURES.map((feature) => (
              <Box component="li" key={feature} sx={{ opacity: 0.92 }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                >
                  <Box
                    component="span"
                    aria-hidden="true"
                    sx={{
                      width: "8px",
                      height: "8px",
                      flexShrink: 0,
                      borderRadius: "50%",
                      bgcolor: "common.white",
                    }}
                  />

                  <Typography
                    component="span"
                    sx={{
                      fontSize: "16px",
                      lineHeight: 1.5,
                    }}
                  >
                    {feature}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>

      <Stack
        component="section"
        alignItems="center"
        justifyContent="center"
        sx={{
          flex: 1,
          p: {
            xs: "20px 16px 32px",
            sm: "32px 24px 48px",
            md: "48px 24px",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: {
              xs: "100%",
              sm: "620px",
              md: "560px",
            },
            p: {
              xs: "24px 20px",
              sm: "36px",
              md: "48px",
            },
            bgcolor: "common.white",
            border: {
              xs: "none",
              sm: "1px solid rgba(33, 14, 50, 0.08)",
            },
            borderRadius: {
              xs: 0,
              sm: "16px",
            },
            boxShadow: {
              xs: "none",
              sm: "0 12px 50px rgba(0, 0, 0, 0.06)",
            },
          }}
        >
          <Typography
            variant="authPageTitle"
            component="h2"
            sx={{
              fontSize: {
                xs: "26px",
                sm: "30px",
                md: undefined,
              },
              lineHeight: {
                xs: "36px",
                sm: "42px",
                md: undefined,
              },
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="authSubtitle"
            component="p"
            sx={{ mt: "8px" }}
          >
            {subtitle}
          </Typography>

          <Box sx={{ mt: "32px" }}>{children}</Box>

          {footer && (
            <Box component="footer" sx={{ mt: "28px" }}>
              {footer}
            </Box>
          )}
        </Box>
      </Stack>
    </Stack>
  );
}