import expres, { Request, Response } from "express";
import { HelloController } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";

//Router from Express
let helloRouter = expres.Router();

//http://localhost/api/hello?name=Seba/
helloRouter.route('/')
    // GET:
    .get(async (req: Request, res: Response) => {
        //Obtain a Query Param
        let name: any = req?.query?.name
        LogInfo(`Query Param: ${name}`);
        //Controller Instance to Execute method
        const controller: HelloController = new HelloController();
        //Obtain Response
        const response = await controller.getMessage(name);
        // Send to the Client the Response
        return res.send(response);
    })

//Export Hello Router
export default helloRouter;