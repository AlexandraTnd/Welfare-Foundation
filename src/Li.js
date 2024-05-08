function Li (props) {
    return <li>
    <a href={props.href} className="nav-link text-white">
      {props.name}
    </a>
  </li>
}

export default Li;