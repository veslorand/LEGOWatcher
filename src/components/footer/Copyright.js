
import * as React from 'react';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";



function Copyright() {
    return (
            <Typography color={"inherit"}>
                {'Copyright © '}
                <Link href="https://legowatcher.netlify.app" color={"inherit"}>
                    LEGOWatcher
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
    )
}

export default Copyright;