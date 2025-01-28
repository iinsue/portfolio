import { Header } from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "프로젝트 1",
    description: "React와 Next.js를 사용한 웹 애플리케이션",
    link: "#",
  },
  {
    title: "프로젝트 2",
    description: "TypeScript와 Redux를 활용한 상태 관리 시스템",
    link: "#",
  },
  {
    title: "프로젝트 3",
    description: "반응형 디자인의 포트폴리오 웹사이트",
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              프로젝트
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={project.link}
                      className="text-blue-500 hover:underline"
                    >
                      자세히 보기
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
