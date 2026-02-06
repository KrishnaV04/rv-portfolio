
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  imageUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const hasImage = project.imageUrl && project.imageUrl !== "/placeholder.svg";
  const isValidImage = hasImage && (project.imageUrl?.endsWith('.png') || project.imageUrl?.endsWith('.jpg') || project.imageUrl?.endsWith('.jpeg') || project.imageUrl?.endsWith('.webp'));

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.01] bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <div className={isValidImage ? "md:flex" : ""}>
        {/* Project Image - only show if valid image exists */}
        {isValidImage && (
          <div className="md:w-1/3">
            <div className="h-32 md:h-full">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
        
        {/* Project Content */}
        <div className={`${isValidImage ? 'md:w-2/3' : 'w-full'} p-4`}>
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
            
            {/* Action Button - only show if live link exists */}
            {project.liveLink && (
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs"
                  onClick={() => window.open(project.liveLink, '_blank')}
                >
                  <ExternalLink className="h-3 w-3" />
                  Link
                </Button>
              </div>
            )}
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
