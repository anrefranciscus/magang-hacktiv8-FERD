import {Container} from "react-bootstrap";


export default function Header(){
    return(
        <Container className="d-flex my-4 justify-content-center align-items-center"> 
            <div className="">
                <h1 className="text-center">Simulasi Antrian</h1>
            </div>
            
        </Container>
    )
}