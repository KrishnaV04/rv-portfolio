
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  imageUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <div className="md:flex">
        {/* Project Image */}
        <div className="md:w-1/3">
          <div className="h-48 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute text-white text-2xl font-bold">
              {project.title.split(' ').map(word => word[0]).join('')}
            </div>
          </div>
        </div>
        
        {/* Project Content */}
        <div className="md:w-2/3 p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {project.title}
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              {project.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-0">
            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={() => window.open(project.githubLink, '_blank')}
              >
                <Github className="h-4 w-4" />
                View Code
              </Button>
              <Button
                size="sm"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open(project.liveLink, '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
