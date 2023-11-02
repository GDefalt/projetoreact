import { SignIn, SignUp } from "./src/pages";


export const ROUTES = [
  {
    path: "/",
    label: "Cadastro",
    helmt: {
      title: "Cadastro",
      description: "",
      keywords: "",
    },
    icon: "",
    component: <SignIn />,
  },
  {
    path: "/SignUp",
    label: "Login",
    helmt: {
      title: "Login",
      description: "",
      keywords: "",
    },
    icon: "",
    component: <SignUp />,
  },
];