'use client';

import React, { useEffect, useState } from 'react'
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
const SwaggerPage = () => {
    const [spec, setSpec] = useState<any>(null);

    useEffect(() => {
        fetch('/api/swagger')
            .then(res => res.json())
            .then(setSpec)
            .catch(error => console.error('Error fetching Swagger spec:', error));
    }, []);
    
    
    if (!spec) {
        return <div>Loading...</div>;
    }

    return <SwaggerUI spec={spec} />;
};

export default SwaggerPage;