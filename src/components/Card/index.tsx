import Image from "next/image";
import { Container } from "./styles";
import Link from "next/link";

interface CardProps {
    titulo: string;
    image: string;
    link: string;
}

export function Card({ titulo, image, link }: CardProps) {
    return (
        <Container>
            <div className="card">
                <Image
                    src={image}
                    alt="projeto"
                    width={1080}
                    height={900}
                    quality={100}
                />
                <strong>{titulo}</strong>
                <Link href={link}>
                    <button type="submit">Veja mais</button>
                </Link>
            </div>
        </Container>
    )
}