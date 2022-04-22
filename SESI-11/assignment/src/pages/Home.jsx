import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";

import { Fragment, useState } from "react";

export default function Home(){
    const [getTodos, setTodos] = useState([
        { id: 1, title: "Eat"}
    ]);

    const eventCreateTodo = (todo) =>{
        setTodos(getTodos.concat(todo))
        console.log(getTodos);
    }
    return(
        <Fragment>
            <Header/>
            <hr/>
            <Content onCreateTodo={eventCreateTodo}/>
            <hr/>
            <Footer dataTodos={getTodos}/>
        </Fragment>
    )
}