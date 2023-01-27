import user from "./userRoutes.js"
import express from "express"

const routes = (app) => {
    app.use(
        express.json(),
        user
    )
}

export default routes