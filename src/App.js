import {useEffect, useState} from "react";
import axios from "axios";
import Movies from "./Movies";
import {Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import "./App.css";
import defaultMovieList from "./DefaultMovieList";

const API_URL = "https://www.omdbapi.com?apikey=7912e3e3";

function App() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    const typeSearch = (event) => {
        setSearch(event.target.value);
    }

    const searchMovies = async (event, title) => {
        setLoading(true);
        event.preventDefault();
        await axios.get((`${API_URL}&s=${title}`))
            .then((response) => {
                const data = response.data;
                setMovies(data.Search);
                console.log(movies);
            })
            .catch((error) => console.error(error));
        setLoading(false);
    }

    useEffect(() => {
        setMovies(defaultMovieList);
    }, [])

    useEffect(() => {
        console.log("timer changed");
    }, [loading])

    return (
        <>
            {
                !loading ? (
                    <div className="App">
                        <Container>
                            <h1 className={'header'}>MovieLand</h1>
                            <div>
                                <Form
                                    onSubmit={(event) => searchMovies(event, search)}
                                >
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Type Movies"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                            value={search}
                                            onChange={(event) => typeSearch(event)}
                                        />

                                    </FloatingLabel>
                                </Form>
                            </div>
                            <Row>
                                {
                                    movies && movies.map((movie, id) => (
                                        <Col sm={12} md={6} lg={4} key={id}>
                                            <Movies movie={movie}/>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Container>
                    </div>
                ) : (
                    <div className={'loading bg-opacity-75'}>Loading...</div>
                )
            }
        </>
    );
}

export default App;
