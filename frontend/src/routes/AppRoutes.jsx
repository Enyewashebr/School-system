import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import StudentRegistration from '../pages/StudentRegistration'
import CheckApplication from '../pages/CheckApplication'
import News from '../pages/News'
import Login from '../pages/Login'
import PortalLayout from '../layouts/PortalLayout'
import PortalDashboard from '../pages/portal/PortalDashboard'
import Profile from '../pages/portal/Profile'
import Application from '../pages/portal/Application'
import Documents from '../pages/portal/Documents'
import PortalNews from '../pages/portal/PortalNews'
import AdminLayout from '../layouts/AdminLayout'
import AdminDashboard from '../pages/admin/AdminDashboard'
import Applications from '../pages/admin/Applications'
import ApplicationReview from '../pages/admin/ApplicationReview'
import Students from '../pages/admin/Students'
import StudentDetails from '../pages/admin/StudentDetails'
import NewsManagement from '../pages/admin/NewsManagement'
import CreateNews from '../pages/admin/CreateNews'
import EditNews from '../pages/admin/EditNews'
import Settings from '../pages/admin/Settings'
import NewsDetails from '../pages/NewsDetails'
import Register from '../pages/Register'
import ApplicationStatus from '../pages/ApplicationStatus'
import StudentDashboard from '../pages/StudentDashboard'
import StudentProfile from '../pages/StudentProfile'
import ParentDashboard from '../pages/ParentDashboard'
import ParentStudent from '../pages/ParentStudent'
import ProtectedRoute from './ProtectedRoute'
import RegistrationSuccess from '../pages/RegistrationSuccess'


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route
        path="/register/student"
        element={<StudentRegistration />}
      />

      <Route
  path="/registration-success"
  element={<RegistrationSuccess />}
/>

      <Route
  path="/register"
  element={<Register />}
/>

<Route
  path="/application-status"
  element={<ApplicationStatus />}
/>

      <Route
        path="/check-application"
        element={<CheckApplication />}
      />
     <Route
  path="/student"
  element={
    <ProtectedRoute allowedRole="student">
      <StudentDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/parent"
  element={<ParentDashboard />}
/>
<Route
  path="/parent/student"
  element={<ParentStudent />}
/>

<Route
  path="/student/profile"
  element={<StudentProfile />}
/>

      <Route
        path="/news"
        element={<News />}
      />
      <Route
  path="/news/:id"
  element={<NewsDetails />}
/>

      <Route
        path="/login"
        element={<Login />}
      />
  <Route element={<PortalLayout />}>

  <Route
    path="/portal"
    element={<PortalDashboard />}
  />

  <Route
    path="/portal/profile"
    element={<Profile />}
  />

  <Route
    path="/portal/application"
    element={<Application />}
  />

    <Route
    path="/portal/documents"
    element={<Documents />}
  />

  <Route
    path="/portal/news"
    element={<PortalNews />}
  />


</Route>

{/* Admin / Principal */}
<Route element={<AdminLayout />}>

  <Route
  path="/admin"
  element={
    <ProtectedRoute allowedRole="principal">
      <AdminDashboard />
    </ProtectedRoute>
  }
/>


  <Route
  path="/admin/applications"
  element={
    <ProtectedRoute allowedRole="principal">
      <Applications />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/applications/:id"
  element={
    <ProtectedRoute allowedRole="principal">
      <ApplicationReview />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/students"
  element={
    <ProtectedRoute allowedRole="principal">
      <Students />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/students/:id"
  element={
    <ProtectedRoute allowedRole="principal">
      <StudentDetails />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/news"
  element={
    <ProtectedRoute allowedRole="principal">
      <News />
    </ProtectedRoute>
  }
/>

<Route path='/admin/settings'
element={
  <ProtectedRoute allowedRole="principal">
      <Settings />
    </ProtectedRoute>
}
/>

</Route>

    </Routes>
    
  )
}

export default AppRoutes
