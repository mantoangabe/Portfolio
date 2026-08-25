import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import headshot from "../assets/headshot.JPG";

function AboutPage() {
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
            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Typography variant="h3" component="h1">
                    About Me:
                  </Typography>
                  <Typography color="text.secondary">
                    I am a 22 year old Brazilian-American. A member of the
                    Church of Jesus Christ of Latter-day Saints, I served a
                    mission in Fortaleza, Brazil from 2020 to 2022. I currently
                    live in Spanish Fork, Utah with my wife.
                  </Typography>
                  <Typography color="text.secondary">
                    I enjoy spending time with my family, building legos,
                    watching movies, watching sports, playing video games, and
                    exploring new technologies.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
            <Card sx={{ mt: 4 }}>
              <CardContent>
                <Stack spacing={2}>
                  <Typography variant="h3" component="h1">
                    Professional Interests:
                  </Typography>
                  <Typography color="text.secondary">
                    I am a software developer and IT support professional with a
                    strong interest in building practical, user-focused
                    technology solutions. My background combines technical
                    troubleshooting, development, and problem-solving in
                    real-world environments.
                  </Typography>
                  <Typography color="text.secondary">
                    I enjoy creating tools and applications that make
                    complicated work easier, faster, and more reliable. I’m
                    especially interested in software engineering, support
                    systems, and technology that improves people’s everyday
                    experience.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ flex: "1 1 420px" }}>
            <Box
              component="img"
              src={headshot}
              alt="Headshot"
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
        </Box>
      </Container>
    </Box>
  );
}

export default AboutPage;
