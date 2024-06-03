
export function Character(props) {
    // Containr
    let container = document.getElementById('App');
    let containerInfo = document.createElement('div');
    container.appendChild(containerInfo)

    // Name
    let name = document.createElement('p');
    name.innerText = {props}
    containerInfo.appendChild(name)

    // name japanese
    
}