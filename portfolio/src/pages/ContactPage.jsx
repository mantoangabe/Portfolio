import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import bodyshot from "../assets/face.JPG";

function ContactPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Card>
        <CardContent>
          <Stack spacing={2} alignItems="center">
            <Box
              component="img"
              src={bodyshot}
              alt="Gabriel Mantoan"
            />

            <Typography variant="h3" component="h1" align="center">
              Contact
            </Typography>

            <Typography color="text.secondary" align="center">
              I’d love to connect about software development, IT support, or opportunities to build
              something meaningful.
            </Typography>

            <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap", justifyContent: "center" }}>
              <Button
                variant="contained"
                component="a"
                href="mailto:mantoangabe@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Email Me
              </Button>

              <Button
                variant="outlined"
                component="a"
                href="https://www.linkedin.com/in/gabriel-mantoan/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ContactPage;
