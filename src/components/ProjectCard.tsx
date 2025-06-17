
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  imageUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const hasImage = project.imageUrl && project.imageUrl !== "/placeholder.svg";

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.01] bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <div className={hasImage ? "md:flex" : ""}>
        {/* Project Image - only show if image exists */}
        {hasImage && (
          <div className="md:w-1/3">
            <div className="h-32 md:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute text-white text-xl font-bold">
                {project.title.split(' ').map(word => word[0]).join('')}
              </div>
            </div>
          </div>
        )}
        
        {/* Project Content */}
        <div className={`${hasImage ? 'md:w-2/3' : 'w-full'} p-4`}>
          <CardHeader className="p-0 mb-3">
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {project.title}
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {project.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-0">
            {/* Technologies */}
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 text-xs px-2 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Action Buttons - only show if links exist */}
            {(project.githubLink || project.liveLink) && (
              <div className="flex gap-2">
                {project.githubLink && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1.5 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-xs"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github className="h-3 w-3" />
                    View Code
                  </Button>
                )}
                {project.liveLink && (
                  <Button
                    size="sm"
                    className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs"
                    onClick={() => window.open(project.liveLink, '_blank')}
                  >
                    <ExternalLink className="h-3 w-3" />
                    Live Demo
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
