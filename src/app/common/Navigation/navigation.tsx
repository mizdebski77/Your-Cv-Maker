'use client';
import { Button } from "../components/button";

export default function Navigation() {

    return (
        <div>
            <Button
                text="Click Me"
                onClick={() => alert('Button clicked!')}
                padding="15px"
                margin="10px"
                background="red" 
                hoverColor="darkred" 
            />

        </div>
    );
}
