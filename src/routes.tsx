import App from './App'

const routes = [
    {
        path: "/thoughts?", 
        element: <App error={false}/>,
        errorElement: <App error={true}/>,
    }, 
]

export default routes;