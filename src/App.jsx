
import './App.css'
// import Header from './components/Layout/Header'
import './assets/css/font-awesome-all.css';
import './assets/css/flaticon.css';
import './assets/css/owl.css';
import './assets/css/bootstrap.css';
import './assets/css/jquery.fancybox.min.css';
import './assets/css/animate.css';
import './assets/css/color.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import Footer from './components/Layout/Footer';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import PlaceJob from './components/Placejob';
import ApplyNow from './components/ApplyNow';
import Faq from './components/Faq';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import JobOpenings from './components/JobOpenings';
import JobDetails from './components/JobDetails';
import TemporaryStaffing from './components/TemporaryStaffing';
import ProfilePage from './components/ProfilePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Headers from './components/Layout/Headers'
import EditProfile from './components/EditProfile';
import ApplyDetailTable from './components/ApplyDetailTable';
import ProfileDetail from './components/ProfileDetail';


function App() {


  return (
    <div className="App">

      <BrowserRouter>  
      <Headers />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/placejob" element={<PlaceJob />} />
  <Route path="/applynow" element={<ApplyNow />} />
  <Route path="/faq" element={<Faq />} />
  <Route path="/register" element={<RegistrationForm />} />
  <Route path="/login" element={<LoginForm />} />
  <Route path="/job-openings" element={<JobOpenings />} />
  <Route path="/job-details/:id" element={<JobDetails />} />
  <Route path="/temporary" element={<TemporaryStaffing />} />
  <Route path="/profile" element={<ProfilePage />} />
  <Route path="/edit" element={<EditProfile />} />
  <Route path="/apply" element={<ApplyDetailTable />} />
  <Route path="/detail" element={<ProfileDetail />} />

</Routes>
<Footer />
</BrowserRouter>
<ToastContainer
 className="my-toast-container"
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

    </div>
  )
}

export default App
