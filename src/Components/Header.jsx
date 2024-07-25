export default function Header({image, title}){
    return(
        <header>
            <img src={image} title="header image"></img>
            <h1>{title}</h1>
        </header>
        
    )
}