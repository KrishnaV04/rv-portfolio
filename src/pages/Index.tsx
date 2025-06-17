
import { useState, useEffect } from 'react';
import { Moon, Sun, Mail, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import ProjectCard from '@/components/ProjectCard';
import { toast } from 'sonner';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const descriptiveWords = [
    "Software Engineer",
    "Full Stack Developer", 
    "Problem Solver",
    "Tech Enthusiast",
    "Code Architect",
    "Innovation Driver",
    "Digital Creator"
  ];

  // Sample projects data - you can easily modify these
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      githubLink: "https://github.com/yourusername/ecommerce",
      liveLink: "https://your-ecommerce-demo.com",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      technologies: ["Vue.js", "Firebase", "TypeScript", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/taskmanager",
      liveLink: "https://your-taskmanager-demo.com",
      imageUrl: "/placeholder.svg"
    },
    {
      id: 3,
      title: "AI Chat Application",
      description: "An intelligent chatbot application integrated with OpenAI's GPT API, featuring conversation history and custom personality settings.",
      technologies: ["React", "OpenAI API", "Express.js", "MongoDB"],
      githubLink: "https://github.com/yourusername/ai-chat",
      liveLink: "https://your-ai-chat-demo.com",
      imageUrl: "/placeholder.svg"
    }
  ];

  // Rotate words every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % descriptiveWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [descriptiveWords.length]);

  // Apply theme to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleEmailClick = () => {
    navigator.clipboard.writeText('vempatir@uci.edu');
    toast.success('Email copied to clipboard!');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <div className="flex items-center space-x-3 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg border border-gray-200 dark:border-gray-700">
          <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          <Switch
            checked={isDarkMode}
            onCheckedChange={setIsDarkMode}
            className="data-[state=checked]:bg-blue-600"
          />
          <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Radhakrishna Vempati
            </span>
          </h1>
          <div className="text-3xl md:text-5xl font-semibold mb-8 text-gray-700 dark:text-gray-300 h-16 flex items-center justify-center">
            <span>I am a </span>
            <span className="ml-3 text-blue-600 dark:text-blue-400 animate-fade-in">
              {descriptiveWords[currentWordIndex]}
            </span>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Passionate about creating innovative solutions and bringing ideas to life through code. 
            I specialize in building scalable applications and love exploring new technologies 
            to solve complex problems.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
            <p>
              I'm a dedicated software engineer with a passion for creating impactful digital experiences. 
              My journey in technology began with curiosity and has evolved into a deep commitment to 
              crafting elegant solutions that make a difference.
            </p>
            <p>
              With expertise spanning multiple programming languages and frameworks, I enjoy tackling 
              challenging problems and turning complex requirements into intuitive, user-friendly applications. 
              I believe in continuous learning and staying at the forefront of technological innovation.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community. I'm always excited to collaborate 
              on projects that push boundaries and create meaningful impact.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            My Projects
          </h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate or just want to say hello!
          </p>
          
          <Card className="max-w-md mx-auto bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email me at</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    vempatir at uci dot edu
                  </p>
                </div>
              </div>
              <Button 
                onClick={handleEmailClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Copy Email Address
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Radhakrishna Vempati.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
