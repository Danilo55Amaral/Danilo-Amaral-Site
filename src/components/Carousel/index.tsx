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
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item img-fluid  active">
                            <Link href="#">
                                <Image src="/img/imagem-teste.jpg" className="d-block w-100" alt="..." width={1950} height={800} />
                            </Link>
                            {/* <div className="carousel-caption d-none  d-md-block">
                                <h5>Nome do Convidado</h5>
                                <p>Breve descrição do convidado com link para o episódio</p>
                            </div> */}
                        </div>
                        <div className="carousel-item">
                            <Link href="#">
                                <Image src="/img/imagem-teste.jpg" className="img-fluid d-block w-100" alt="..." width={1950} height={800} />
                            </Link>
                            {/* <div className="carousel-caption  d-none  d-md-block">
                                <h5>Nome do Convidado</h5>
                                <p>Breve descrição do convidado com link para o episódio</p>
                            </div> */}
                        </div>
                        <div className="carousel-item">
                            <Link href="#">
                                <Image src="/img/imagem-teste.jpg" className="img-fluid d-block w-100" alt="..." width={1950} height={800} />
                            </Link>
                            {/* <div className="carousel-caption d-none d-md-block">
                                <h5>Nome do Convidado</h5>
                                <p>Breve descrição do convidado com link para o episódio</p>
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