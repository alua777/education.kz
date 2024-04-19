import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import json from './../Components/Request.json'
function RequestDetails({  }) {
    const { value } = useParams(); // Correctly declare id and extract id from the URL parameters
    
    const request = json;

    return (
        <Card style={{ marginTop: '20px' }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Request {request.id}
                </Typography>
                {request && (
                    <>
                        <Typography variant="body1">
                            Subject: {request.at(value - 1).subject}
                        </Typography>
                        <Typography variant="body1">
                            Theme: {request.at(value - 1).theme}
                        </Typography>
                        <Typography variant="body1">
                            Language: {request.at(value - 1).language}
                        </Typography>
                        <Typography variant="body1">
                            Template: {request.at(value - 1).template}
                        </Typography>
                    </>
                )}
            </CardContent>
        </Card>
    );
}

export default RequestDetails;
