import { Request, Response } from 'express';

export class WelcomeController {
  public async handle(req: Request, res: Response): Promise<Response> {
    return res.status(200).send({
      statusCode: 200,
      data: 'Welcome fella',
    });
  }
}
