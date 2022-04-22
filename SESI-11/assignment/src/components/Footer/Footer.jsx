import { Container, Row, Col } from "react-bootstrap"

export default function Footer(props){
    console.log(props.dataTodos);
    return(
        <>
        <Container>
            <Row>
            <Col className="d-flex">
                {
                props.dataTodos.map((todo)=>{
                    return (
                        <div className=" d-flex justify-content-center bg-primary w-50 mx-4" key={todo.id}>
                            <h1>{todo.title}</h1>
                        </div>
                    )
                })}
            </Col>
            </Row>
        </Container>
        </>
     )
}