import Loadable from "react-loadable";
import Loading from "common/loading"


export const Home = Loadable({
    loader:_=>import("./home"),
    loading:Loading
})


export const Job = Loadable({
    loader:_=>import("./job"),
    loading:Loading
})


export const Mine = Loadable({
    loader:_=>import("./mine"),
    loading:Loading
})



export const Login = Loadable({
    loader:_=>import("./login"),
    loading:Loading
})

export const Location=Loadable({
    loader:_=>import("./location"),
    loading:Loading
})

export const Category=Loadable({
    loader:_=>import("./category"),
    loading:Loading
})


export const Find = Loadable({
    loader:_=>import("./find"),
    loading:Loading
})

export const Order = Loadable({
    loader:_=>import("./order"),
    loading:Loading
})

export const Register = Loadable({
    loader:_=>import("./register"),
    loading:Loading
})