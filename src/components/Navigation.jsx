export function Navigation(props) {
    const { imgSrc, imgWidth } = props;
    return (
        <nav>
            <img src={imgSrc} width={imgWidth}/>
         <ul>
            <li>
            <a href="#css-html">CSS/HTML</a>
            </li>
            <li>
            <a href="#javascript">JavaScript</a>
            </li>
            <li>
            <a href="#react">React</a>
            </li>
            </ul>
        </nav>
    )
}