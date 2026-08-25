import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import weddingImage from "../assets/wedding.JPG";

function HomePage() {
  return (
    <Box component="main" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ flex: "1 1 420px" }}>
            <Box
              component="img"
              src={weddingImage}
              alt="Wedding"
              sx={{
                width: "100%",
                maxWidth: 520,
                height: "auto",
                display: "block",
                borderRadius: 3,
                objectFit: "cover",
                boxShadow: 3,
              }}
            />
          </Box>

          <Box sx={{ flex: "1 1 420px" }}>
            <Stack spacing={4}>
              <Typography variant="h1" component="h1">
                Gabriel Mantoan
              </Typography>

              <Typography variant="h5" color="text.secondary">
                BYU MISM April 2028 | Software Developer | IT Support &
                Troubleshooting | Tech Enthusiast
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button variant="contained" size="large">
                  View My Work
                </Button>

                <Button variant="outlined" size="large">
                  Contact Me
                </Button>
              </Stack>

              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Skills:
                  </Typography>

                  <Typography color="text.secondary">
                    - Programming Languages: Python, JavaScript, TypeScript, C#,
                    SQL
                    <br />
                    - Frameworks & Libraries: React, Node.js, Express, Dotnet
                    <br />
                    - Tools & Technologies: Git, Docker, AWS, Self-hosting
                    <br />
                    - Soft Skills: Problem Solving, Team Collaboration,
                    Communication
                    <br />- Languages: English (Native), Portuguese (Fluent)
                  </Typography>
                </CardContent>
              </Card>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
