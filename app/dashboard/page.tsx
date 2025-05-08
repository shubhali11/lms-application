import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, Clock, GraduationCap, LayoutDashboard, Settings, User } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-screen sticky top-0">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-emerald-600" />
              <h1 className="text-xl font-bold">CorpCode</h1>
            </div>
          </div>
          <nav className="flex-1 p-4 space-y-1">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-emerald-50 text-emerald-700"
            >
              <LayoutDashboard className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/courses"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
            >
              <BookOpen className="h-5 w-5" />
              My Courses
            </Link>
            <Link
              href="/dashboard/calendar"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
            >
              <Calendar className="h-5 w-5" />
              Calendar
            </Link>
            <Link
              href="/dashboard/profile"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
            >
              <User className="h-5 w-5" />
              Profile
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </nav>
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-gray-500">john.doe@example.com</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <header className="bg-white border-b border-gray-200 px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          </header>

          <div className="p-6">
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Enrolled Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">5</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Completed Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">2</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Certificates Earned</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">2</div>
                </CardContent>
              </Card>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="in-progress" className="mb-8">
              <TabsList>
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
              </TabsList>

              <TabsContent value="in-progress" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((course) => (
                    <Card key={course} className="overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=200&width=400&text=Course+${course}`}
                        alt={`Course ${course}`}
                        className="w-full h-48 object-cover"
                      />
                      <CardHeader>
                        <CardTitle>Advanced JavaScript</CardTitle>
                        <CardDescription>Master modern JavaScript concepts and patterns</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Progress</span>
                          <span className="font-medium">65%</span>
                        </div>
                        <Progress value={65} className="h-2" />
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>Last accessed: 2 days ago</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link href="/dashboard/courses/1" className="w-full">
                          <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Continue Learning</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="completed" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2].map((course) => (
                    <Card key={course} className="overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=200&width=400&text=Completed+${course}`}
                        alt={`Completed Course ${course}`}
                        className="w-full h-48 object-cover"
                      />
                      <CardHeader>
                        <CardTitle>HTML & CSS Fundamentals</CardTitle>
                        <CardDescription>Build responsive websites from scratch</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Completed</span>
                          <span className="font-medium text-emerald-600">100%</span>
                        </div>
                        <Progress value={100} className="h-2 bg-gray-100" />
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <GraduationCap className="h-4 w-4" />
                          <span>Certificate Earned</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link href="/dashboard/certificates/1" className="w-full">
                          <Button variant="outline" className="w-full">
                            View Certificate
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="bookmarked" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="overflow-hidden">
                    <img
                      src="/placeholder.svg?height=200&width=400&text=Bookmarked+Course"
                      alt="Bookmarked Course"
                      className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                      <CardTitle>Data Science Essentials</CardTitle>
                      <CardDescription>Learn data analysis and visualization techniques</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <BookOpen className="h-4 w-4" />
                        <span>15 Modules</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/courses/3" className="w-full">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Enroll Now</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            {/* Upcoming Deadlines */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>Stay on track with your course assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "JavaScript Final Project", course: "Advanced JavaScript", due: "Tomorrow, 11:59 PM" },
                    { title: "Database Design Quiz", course: "SQL Fundamentals", due: "May 10, 2:00 PM" },
                    { title: "UI/UX Case Study", course: "User Experience Design", due: "May 15, 11:59 PM" },
                  ].map((deadline, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{deadline.title}</h4>
                        <p className="text-sm text-gray-500">{deadline.course}</p>
                        <div className="mt-1 flex items-center gap-1 text-sm font-medium text-red-600">
                          <Clock className="h-4 w-4" />
                          <span>Due: {deadline.due}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="ml-auto">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
