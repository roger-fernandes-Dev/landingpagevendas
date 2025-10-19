interface CardProps {
    title?: string;
    description?: string;
}

export default function Card({title, description}: CardProps) {

    return (
        <main>
            <h1>card em desenvolvimento</h1>
            <div>{title}</div>
            <div>{description}</div>
        </main>
    );
}
