import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ellaRises from "../assets/EllaRises.png";
import lingoQuest from "../assets/LingoQuest.png";
import riverOfLife from "../assets/RiverOfLife.png";

const projects = [
  {
    title: "Ella Rises",
    shortDescription:
      "An Application built to support a nonprofit organization focused on empowering women and girls.",
    fullDescription: (
      <>
        <Typography paragraph color="text.secondary">
          This project is a web application designed to support the mission of
          Ella Rises, a nonprofit organization dedicated to empowering women and
          girls. The application provides tools for managing events, resources,
          and community engagement, aiming to enhance the organization's
          outreach and impact.
        </Typography>
        <Typography paragraph color="text.secondary">
          This web app was hosted on AWS and built using React, Node.js, and
          Postgres, with a focus on user experience and accessibility. The
          president of Ella Rises came to us and expressed a need for a web
          application that could help them manage their events, resources, and
          community engagement more effectively.
        </Typography>
        <Typography paragraph color="text.secondary">
          We worked closely with the organization to understand their needs and
          designed a solution that would streamline their operations and enhance
          their outreach efforts. Tableau was used to create a dashboard for the
          organization to visualize their data and track their progress over
          time.
        </Typography>
      </>
    ),
    image: ellaRises,
    githubLink: "https://github.com/mantoangabe/Intex-Ella-Rises",
    canvaLink: "https://canva.link/c9z3yjghokhsiis",
  },
  {
    title: "Language Learning Adventure",
    shortDescription:
      "An application to help users learn to read through interactive exercises and gamification.",
    fullDescription: (
      <>
        <Typography paragraph color="text.secondary">
          During my time as a missionary in Brazil, I noticed that many people
          struggled with reading comprehension and vocabulary acquisition. To
          address this challenge, I developed a web application called Language
          Learning Adventure. This application is designed to help users learn
          to read through interactive exercises and gamification. Language
          Learning Adventure is a gamified language learning platform designed
          to make vocabulary acquisition and reading practice engaging and
          interactive. The application targets language learners who want to
          supplement their studies with daily challenges, reading comprehension
          exercises, and an immersive text-based adventure game.
        </Typography>
        <Typography paragraph color="text.secondary">
          Users can track their progress through daily streaks, learn new words
          with flashcards, and practice reading with level-appropriate
          passages.The product uniquely combines traditional learning tools with
          AI-driven voice interaction in its Adventure mode to simulate
          real-world language usage. This application was built using React,
          DotNet 10, and Postgres. It was hosted on a local server and managed
          by me, with a focus on user experience and accessibility.
        </Typography>
      </>
    ),
    image: lingoQuest,
    githubLink: "https://github.com/mantoangabe/LanguageAdventure",
    canvaLink: null,
  },
  {
    title: "River of Life",
    shortDescription:
      "An Application built to support a nonprofit organization focused helping Sexual Abuse Survivors.",
    fullDescription: (
      <>
        <Typography paragraph color="text.secondary">
          This project is a web application designed to support the mission of
          River of Life, a nonprofit organization dedicated to helping Sexual
          Abuse Survivors. The application provides tools for managing
          resources, support services, and community engagement, aiming to
          enhance the organization's outreach and impact.
        </Typography>
        <Typography paragraph color="text.secondary">
          This web app was hosted on locally and managed by me; it was built
          using React, DotNet 10, and Postgres, with a focus on user experience
          and accessibility. The president of River of Life came to us and
          expressed a need for a web application that could help them manage
          their resources, support services, and community engagement more
          effectively.
        </Typography>
        <Typography paragraph color="text.secondary">
          We worked closely with the organization to understand their needs and
          designed a solution that would streamline their operations and enhance
          their outreach efforts. A Machine learning model was used to create a
          dashboard for the organization to visualize their data, track their
          progress over time, and show future trends.
        </Typography>
      </>
    ),
    image: riverOfLife,
    githubLink: "https://github.com/mantoangabe/Intex2ElectricBoogaloo",
    canvaLink: "https://canva.link/8xdbyl0vjqhezu8",
  },
];

function ProjectsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Stack spacing={3}>
        <Typography variant="h3" component="h1">
          Projects
        </Typography>

        {projects.map((project) => (
          <Accordion
            key={project.title}
            sx={{ borderRadius: 2, overflow: "hidden" }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Stack spacing={0.5}>
                <Typography variant="h5">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.shortDescription}
                </Typography>
              </Stack>
            </AccordionSummary>

            <AccordionDetails sx={{ bgcolor: "background.paper", p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 3,
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    flex: "1 1 480px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      maxWidth: 560,
                      height: "auto",
                      display: "block",
                      borderRadius: 2,
                      boxShadow: "none",
                      mx: "auto",
                    }}
                  />
                </Box>

                <Box sx={{ flex: "1 1 420px", textAlign: "left" }}>
                  <Stack spacing={2}>
                    <Box sx={{ color: "text.secondary" }}>
                      {project.fullDescription}
                    </Box>

                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ flexWrap: "wrap" }}
                    >
                      <Button
                        variant="contained"
                        component="a"
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub Repo
                      </Button>

                      {project.canvaLink && (
                        <Button
                          variant="outlined"
                          component="a"
                          href={project.canvaLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Canva Deck
                        </Button>
                      )}
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Container>
  );
}

export default ProjectsPage;
