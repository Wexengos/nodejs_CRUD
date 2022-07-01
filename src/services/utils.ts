import { Response } from "express";

export const badRequest = (res: Response, err: string) => {
    res.status(400).json({
        error: err
    })
}

export const notFound = (res: Response) => res.sendStatus(404)
export const success = (res: Response) => res.sendStatus(200)

export const internalServerError = (res: Response, err: Error) => {
    res.status(500).json({
        error: err.message
    })
}

export const validateNumber = (num: any) => (parseFloat(num) > 0)