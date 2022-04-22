import { useState, useEffect} from "react";
import {Container, Form, Button, Row, Col} from "react-bootstrap";

export default function Content(props){
    // const [count, setCount] = useState(0);
    // useEffect(()=>{
    //     <div>
    //     <h4>FOO {count}</h4>
    // </div>
    // })
    const [getInputTodo, setInputTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = { 
                id: Math.floor(Math.random() * 100) +1,
                title: getInputTodo
        } 
         console.log(newTodo);
         props.onCreateTodo(newTodo);

         setInputTodo('');
    }

    const handleInputTodo = (e) => {
        setInputTodo(e.target.value);
        console.log(getInputTodo);
    }
    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <Row>
                <Col className="col-md-6 offset-md-3">
                    <Form.Label>Masukkan Nama</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan nama" value={getInputTodo} onChange={handleInputTodo}/>
                </Col>
                <Col className="d-flex col-md-6 offset-md-3 justify-content-center my-2">
                    <div className="mx-2">
                    <Button type="submit" >ANTRIKAN 1</Button>
                    </div>
                    <div className="mx-2">
                    <Button>MUNDURKAN 1</Button>
                    </div>
                </Col>                
                </Row>
            </Form>
        </Container>
    )
}