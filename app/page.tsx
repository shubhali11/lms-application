import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap, LayoutDashboard, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-emerald-600" />
            <h1 className="text-2xl font-bold text-gray-900">CorpLearn</h1>
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

      <main className="container mx-auto px-4 py-12">
        {/* Hero Content */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Transform Your Learning Experience</h2>
          <p className="text-xl text-gray-600 mb-8">
            Access high-quality courses, track your progress, and achieve your learning goals with our comprehensive
            learning management system.
          </p>
          <Link href="/courses">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6">Explore Courses</Button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <BookOpen className="h-12 w-12 text-emerald-600 mb-2" />
              <CardTitle>Extensive Course Library</CardTitle>
              <CardDescription>Access hundreds of courses across various disciplines and subjects.</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <LayoutDashboard className="h-12 w-12 text-emerald-600 mb-2" />
              <CardTitle>Intuitive Dashboard</CardTitle>
              <CardDescription>Track your progress and manage your learning journey with ease.</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-12 w-12 text-emerald-600 mb-2" />
              <CardTitle>Expert Instructors</CardTitle>
              <CardDescription>Learn from industry professionals and academic experts.</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Featured Courses */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((course) => (
            <Card key={course} className="overflow-hidden">
              <img
                src={`/placeholder.svg?height=200&width=400&text=Course+${course}`}
                alt={`Course ${course}`}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Introduction to Web Development</CardTitle>
                <CardDescription>Learn the fundamentals of HTML, CSS, and JavaScript</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <BookOpen className="h-4 w-4" />
                  <span>12 Modules</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/courses/1" className="w-full">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Course</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
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
