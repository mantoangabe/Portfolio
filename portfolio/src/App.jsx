import {
  BrowserRouter,
  Routes,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

const footerLinks = [
  { label: "Email", href: "mailto:mantoangabe@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gabriel-mantoan/" },
  { label: "GitHub", href: "https://github.com/mantoangabe" },
];

function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Gabriel Mantoan
            </Typography>

            <Button component={RouterLink} to="/" color="inherit">
              Home
            </Button>
            <Button component={RouterLink} to="/about" color="inherit">
              About
            </Button>
            <Button component={RouterLink} to="/projects" color="inherit">
              Projects
            </Button>
            <Button component={RouterLink} to="/contact" color="inherit">
              Contact
            </Button>
          </Toolbar>
        </AppBar>

        <Box component="main" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Box>

        <Box
          component="footer"
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            py: 3,
            px: 2,
            backgroundColor: "background.paper",
          }}
        >
          <Box
            sx={{
              maxWidth: 1200,
              mx: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            {footerLinks.map((link) => (
              <Button
                key={link.label}
                component="a"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                color="inherit"
                sx={{ textTransform: "none" }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
