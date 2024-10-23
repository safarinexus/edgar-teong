import App from './App'

const routes = [
    {
        path: "/", 
        element: <App error={false} thoughts={false}/>,
        errorElement: <App error={true} thoughts={false}/>,
    },
    {
        path: "thoughts", 
        element: <App error={false} thoughts={true}/>,
    }
]

export default routes;