import { Container } from "./styles";
import Image from "next/image";
import Link from "next/link";

export function Carousel() {
    return (
        <Container>
            <div className="carousel-container">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" aria-label="Slide 11"></button>
                    </div>
                    {/* As legendas foram desativadas até que sejam necessárias  */}
                    <div className="carousel-inner">  
                        <div className="carousel-item img-fluid  active">
                            <Link href="#">
                                <Image src="/img/inteligencia-02.jpg" className="d-block w-100" alt="..." width={1950} height={800} />
                            </Link>
                            {/* <div className="carousel-caption d-none  d-md-block">
                                <h5>titulo</h5>
                                <p>Descrição</p>
                            </div> */}
                        </div>
                        <div className="carousel-item">
                            <Link href="#">
                                <Image src="/img/certificado-react-coder.PNG" className="img-fluid d-block w-100" alt="..." width={1950} height={800} />
                            </Link>
                            {/* <div className="carousel-caption  d-none  d-md-block">
                                <h5>titulo</h5>
                                <p>Descrição</p>
                            </div> */}
                        </div>
                        <div className="carousel-item">
                            <Link href="#">
                                <Image src="/img/bootcamp-data-science.PNG" className="img-fluid d-block w-100" alt="..." width={1950} height={800} />
                            </Link>
                            {/* <div className="carousel-caption d-none d-md-block">
                                <h5>titulo</h5>
                                <p>Descrição</p>
                            </div> */}
                        </div>
                        <div className="carousel-item">
                            <Link href="#">
                                <Image src="/img/certificado-web-moderno.jpg" className="img-fluid d-block w-100" alt="..." width={1950} height={800} />
                            </Link>
                            {/* <div className="carousel-caption d-none d-md-block">
                                <h5>titulo</h5>
                                <p>Descrição</p>
                            </div> */}
                        </div>
                        <div className="carousel-item">
                            <Link href="#">
                                <Image src="/img/typescript.PNG" className="img-fluid d-block w-100" alt="..." width={1950} height={800} />
                            </Link>
                            {/* <div className="carousel-caption d-none d-md-block">
                                <h5>titulo</h5>
                                <p>Descrição</p>
                            </div> */}
                        </div>
                        <div className="carousel-item">
                            <Link href="#">
                                <Image src="/img/angular-bootcamp.PNG" className="img-fluid d-block w-100" alt="..." width={1950} height={800} />
                            </Link>
                            {/* <div className="carousel-caption d-none d-md-block">
                                <h5>titulo</h5>
                                <p>Descrição</p>
                            </div> */}
                        </div>
                        <div className="carousel-item">
                            <Link href="#">
                                <Image src="/img/machine-learning01.PNG" className="img-fluid d-block w-100" alt="..." width={1950} height={800} />
                            </Link>
                            {/* <div className="carousel-caption d-none d-md-block">
                                <h5>titulo</h5>
                                <p>Descrição</p>
                            </div> */}
                        </div>
                        <div className="carousel-item">
                            <Link href="#">
                                <Image src="/img/redes-neurais.PNG" className="img-fluid d-block w-100" alt="..." width={1950} height={800} />
                            </Link>
                            {/* <div className="carousel-caption d-none d-md-block">
                                <h5>titulo</h5>
                                <p>Descrição</p>
                            </div> */}
                        </div>
                        <div className="carousel-item">
                            <Link href="#">
                                <Image src="/img/etl-python.PNG" className="img-fluid d-block w-100" alt="..." width={1950} height={800} />
                            </Link>
                            {/* <div className="carousel-caption d-none d-md-block">
                                <h5>titulo</h5>
                                <p>Descrição</p>
                            </div> */}
                        </div>
                        <div className="carousel-item">
                            <Link href="#">
                                <Image src="/img/modelagem-de-dados-sql.PNG" className="img-fluid d-block w-100" alt="..." width={1950} height={800} />
                            </Link>
                            {/* <div className="carousel-caption d-none d-md-block">
                                <h5>titulo</h5>
                                <p>Descrição</p>
                            </div> */}
                        </div>
                        <div className="carousel-item">
                            <Link href="#">
                                <Image src="/img/responsividade.PNG" className="img-fluid d-block w-100" alt="..." width={1950} height={800} />
                            </Link>
                            {/* <div className="carousel-caption d-none d-md-block">
                                <h5>titulo</h5>
                                <p>Descrição</p>
                            </div> */}
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </Container>
    );
};