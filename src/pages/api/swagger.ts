

import { NextApiRequest, NextApiResponse } from 'next';
import { createSwaggerSpec } from 'next-swagger-doc';

const swaggerConfig = {

    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Topics API',
            version: '1.0.0',
            description: 'API documentation for managing topics',
        },
    },
    apis: ['./src/app/api/**/*.ts'], 
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const swaggerSpec = createSwaggerSpec(swaggerConfig);
    res.status(200).json(swaggerSpec);
}
