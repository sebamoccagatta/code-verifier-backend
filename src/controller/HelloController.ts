import { Get, Query, Route, Tags } from "tsoa";
import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSucces } from "../utils/logger";
import { query } from "express";

@Route("/api/hello")
@Tags("HelloContreller")
export class HelloController implements IHelloController {
    /**
     * Endpint to retreive a Message "Hello {name}" in JSON
     * @param { string | undefined } name Name of user to be greeted
     * @returns { BasicResponse } Promise of BasicResponse
     */
    @Get("/")
    public async getMessage(@Query()name?: string | undefined): Promise<BasicResponse> {
        LogSucces('[api/hello] Get Request');

        return {
            message: `Hello ${name || "World!"}`
        }
    }
    
}