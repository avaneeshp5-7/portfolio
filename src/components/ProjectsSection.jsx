import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "DNI-Admin",
    description:
      "Drug Nutrition Interactions dashboard for handle the Drug Nutrition Interactions website.",
    image: "/projects/dni-admin.png",
    tags: ["React", "Bootstrap", "JavaScript", " Node"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "DNI-Web",
    description:
      "Drug Nutrition Interactions expertly curated and up to date, supporting busy dietitians to make sense of the nutritional impact of increasingly complicated medication regimens",
    image: "/projects/DNI-Web.png",
    tags: ["React", "Bootstrap", "Stripe", "Node"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Ourtho Report",
    description: `An "Ortho Report" typically refers to a medical report or record related to orthopedics, the branch of medicine that deals with the musculoskeletal system.`,
    image: "/projects/report.png",
    tags: ["React", "Bootstrap", "Redux"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 1,
    title: "Finance Calculator",
    description:
      "A financial calculator is a specialized tool, often a device or software application, used to perform calculations related to personal or business finance.",
    image: "/projects/cal.png",
    tags: ["React", "Bootstrap", "Redux", "Node"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Warum Leer",
    description:
      "A travel agency is a business that assists individuals or groups in planning and booking travel arrangements.",
    image: "/projects/wrumleer.png",
    tags: ["React", "Bootstrap", "CSS", "Node", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "TSL-Admin",
    description:
      "This project is a dashboard for the TSL(TATA-Steel-Limited) where project maneger an work package manger update the daily progress of the project.",
    image: "/projects/tls.png",
    tags: ["React", "TailwindCSS", ".Net", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                {/* <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div> */}
      </div>
    </section>
  );
};
