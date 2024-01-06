import Login from "../pages/Login";
import WelcomeAdmin from "../pages/WelcomeAdmin";
import WelcomeUser from "../pages/WelcomeUser";
import Createquiz from "../pages/Createquiz";
import RegisterPage from "../pages/RegisterPage";
import LandingPage from "../pages/LandingPage";
import QuizCategories from "../pages/QuizCategories";
import ManageCategories from "../pages/ManageCategories";
import GetCategories from "../pages/GetCategoriesAdmin";
import EditQuiz from "../pages/EditQuiz";

const routes = [
  {
    element: <WelcomeAdmin />,
    path: "/welcomeadmin",
  },
  {
    element: <WelcomeUser />,
    path: "/welcomeuser",
  },
  {
    element: <Createquiz />,
    path: "/createquiz",
  },
  {
    element: <RegisterPage />,
    path: "/signup",
  },
  {
    element: <Login />,
    path: "/login",
  },
  {
    element: <QuizCategories />,
    path: "/quizcategories",
  },

  {
    element: <ManageCategories />,
    path: "/managecategories",
  },
  {
    element: <GetCategories />,
    path: "/getcategories",
  },
  {
    element: <EditQuiz />,
    path: "/editquiz/:quizName", 
  },
  { element: <LandingPage />, path: "/" },
];

export default routes;
