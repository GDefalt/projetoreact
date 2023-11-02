import SignIn from "../pages/SignIn/SignIn"
import SignUp from "../pages/SignUp/SignUp"

export const ROUTES = [
  {
    path: "/",
    label: "Cadastro",
    meta: {
      title: "Cadastro",
      description: "",
      keywords: "",
    },
    icon: "",
    component: <SignIn />,
  },
  {
    path: "/signup",
    label: "Login",
    meta: {
      title: "Login",
      description: "",
      keywords: "",
    },
    icon: "",
    component: <SignUp />,
  },
]
