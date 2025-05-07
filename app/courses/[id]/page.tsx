import { CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, CheckCircle, Clock, GraduationCap, Play, Star, User } from "lucide-react"

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  // This would normally come from a database
  const course = {
    id: params.id,
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of HTML, CSS, and JavaScript to build responsive websites from scratch.",
    instructor: "Sarah Johnson",
    level: "Beginner",
    modules: 12,
    duration: "10 hours",
    category: "Web Development",
    rating: 4.8,
    students: 1245,
    lastUpdated: "April 2023",
    price: 49.99,
    image: `/placeholder.svg?height=400&width=800&text=Web+Development`,
    whatYouWillLearn: [
      "Build responsive websites using HTML5, CSS3, and JavaScript",
      "Understand core web development concepts",
      "Create interactive user interfaces",
      "Deploy websites to production environments",
      "Implement modern CSS frameworks",
      "Debug web applications effectively",
    ],
    modules: [
      {
        title: "Getting Started with HTML",
        lessons: [
          { title: "Introduction to HTML", duration: "15 min", type: "video" },
          { title: "HTML Document Structure", duration: "20 min", type: "video" },
          { title: "Working with Text Elements", duration: "25 min", type: "video" },
          { title: "HTML Quiz", duration: "15 min", type: "quiz" },
        ],
      },
      {
        title: "CSS Fundamentals",
        lessons: [
          { title: "Introduction to CSS", duration: "18 min", type: "video" },
          { title: "Selectors and Properties", duration: "22 min", type: "video" },
          { title: "Box Model and Layout", duration: "30 min", type: "video" },
          { title: "CSS Assignment", duration: "45 min", type: "assignment" },
        ],
      },
      {
        title: "JavaScript Basics",
        lessons: [
          { title: "Introduction to JavaScript", duration: "20 min", type: "video" },
          { title: "Variables and Data Types", duration: "25 min", type: "video" },
          { title: "Functions and Control Flow", duration: "35 min", type: "video" },
          { title: "DOM Manipulation", duration: "40 min", type: "video" },
          { title: "JavaScript Quiz", duration: "20 min", type: "quiz" },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-emerald-600" />
            <h1 className="text-2xl font-bold text-gray-900">CorporateLearning</h1>
          </div>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Course Hero */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <div className="mb-6">
                <Link href="/courses" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to Courses
                </Link>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
                <p className="text-lg text-gray-600 mb-6">{course.description}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-gray-500">({course.students} students)</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.modules.length} modules</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <User className="h-4 w-4" />
                    <span>{course.instructor}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full">
                    {course.level}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
                    {course.category}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
                    Updated {course.lastUpdated}
                  </span>
                </div>
              </div>

              <div className="lg:hidden mb-8">
                <Card>
                  <CardContent className="p-0">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="text-3xl font-bold mb-4">${course.price}</div>
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 mb-4">Enroll Now</Button>
                      <Button variant="outline" className="w-full mb-6">
                        Try for Free
                      </Button>
                      <div className="text-sm text-gray-500">
                        <p className="mb-2">This course includes:</p>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{course.duration} of on-demand video</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4" />
                            <span>
                              {course.modules.reduce((acc, module) => acc + module.lessons.length, 0)} lessons
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            <span>Certificate of completion</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="curriculum" className="mb-12">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                </TabsList>

                <TabsContent value="curriculum" className="mt-6">
                  <div className="space-y-4">
                    {course.modules.map((module, moduleIndex) => (
                      <Card key={moduleIndex}>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">
                            Module {moduleIndex + 1}: {module.title}
                          </CardTitle>
                          <CardDescription>
                            {module.lessons.length} lessons •{" "}
                            {module.lessons.reduce((acc, lesson) => {
                              const [min] = lesson.duration.split(" ")
                              return acc + Number.parseInt(min)
                            }, 0)}{" "}
                            min
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <div
                                key={lessonIndex}
                                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
                              >
                                <div className="flex items-center gap-3">
                                  {lesson.type === "video" ? (
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                                      <Play className="h-4 w-4 text-emerald-600" />
                                    </div>
                                  ) : lesson.type === "quiz" ? (
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-4 w-4 text-blue-600"
                                      >
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                        <path d="M12 17h.01" />
                                      </svg>
                                    </div>
                                  ) : (
                                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-4 w-4 text-purple-600"
                                      >
                                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                        <polyline points="14 2 14 8 20 8" />
                                      </svg>
                                    </div>
                                  )}
                                  <div>
                                    <p className="font-medium">{lesson.title}</p>
                                    <p className="text-sm text-gray-500">
                                      {lesson.duration} • {lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)}
                                    </p>
                                  </div>
                                </div>
                                <Button variant="ghost" size="sm" className="text-gray-500">
                                  Preview
                                </Button>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>What You'll Learn</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.whatYouWillLearn.map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="instructor" className="mt-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xl font-medium">
                            {course.instructor
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <CardTitle>{course.instructor}</CardTitle>
                          <CardDescription>Web Development Instructor</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Sarah Johnson is a seasoned web developer with over 10 years of experience in the industry. She
                        has worked with numerous startups and Fortune 500 companies, helping them build responsive and
                        user-friendly web applications.
                      </p>
                      <p>
                        Sarah is passionate about teaching and has helped over 10,000 students master web development
                        through her courses. Her teaching style focuses on practical, hands-on learning that prepares
                        students for real-world development challenges.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="hidden lg:block lg:w-1/3">
              <div className="sticky top-8">
                <Card>
                  <CardContent className="p-0">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="text-3xl font-bold mb-4">${course.price}</div>
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 mb-4">Enroll Now</Button>
                      <Button variant="outline" className="w-full mb-6">
                        Try for Free
                      </Button>
                      <div className="text-sm text-gray-500">
                        <p className="mb-2">This course includes:</p>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{course.duration} of on-demand video</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4" />
                            <span>
                              {course.modules.reduce((acc, module) => acc + module.lessons.length, 0)} lessons
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            <span>Certificate of completion</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Courses */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((course) => (
            <Card key={course} className="overflow-hidden">
              <img
                src={`/placeholder.svg?height=200&width=400&text=Related+${course}`}
                alt={`Related Course ${course}`}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>CSS Frameworks Masterclass</CardTitle>
                <CardDescription>Learn Bootstrap, Tailwind, and more</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <BookOpen className="h-4 w-4" />
                  <span>8 Modules • 6 hours</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/courses/${course + 10}`} className="w-full">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Course</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-8 w-8 text-emerald-400" />
                <h2 className="text-2xl font-bold">EduLearn</h2>
              </div>
              <p className="text-gray-400 max-w-md">
                Empowering learners worldwide with accessible, high-quality education.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Platform</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/courses" className="text-gray-400 hover:text-white">
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link href="/instructors" className="text-gray-400 hover:text-white">
                      Instructors
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-gray-400 hover:text-white">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-gray-400 hover:text-white">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/terms" className="text-gray-400 hover:text-white">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-gray-400 hover:text-white">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookies" className="text-gray-400 hover:text-white">
                      Cookies
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} EduLearn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
