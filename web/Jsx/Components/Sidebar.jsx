import Context from '../Context.js'

var top_x = '46%';

function Sidebar() {
  
  let refs = React.useRef();

  const {state,actions}=React.useContext(Context);

  const handleResize = () => {
    var aux = document.querySelector("ul li.active");
    if (aux != null) {
      if (window.matchMedia("(orientation: landscape)").matches) {
        document.getElementById("marker").style.top = aux.offsetTop + "px";
        document.getElementById("marker").style.left = '-20px';
      }
    }
  }

  const [iconState, changeClass] = React.useState({
    activeObject: null,
    objects: [{
      icon: 'home'
    }, {
      icon: 'chatbubbles'
    }, {
      icon: 'call'
    }, {
      icon: 'accessibility'
    }]
  })

  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  function toogleActive(index, e) {
    top_x = e.target.offsetTop;
    actions({type:'setState',payload:{...state,value:iconState.objects[index].icon}})
    changeClass({ ...iconState, activeObject: iconState.objects[index] });
  }

  function toogleStyles(index) {
    if (iconState.objects[index] == iconState.activeObject) {
      return "active";
    } else {
      return "inactive";
    }
  }

  return (
    <>
      <div className="sidebar-custom">
        <div className="sidebar-logo">
          <img src="../Assets/Logotipo.svg" alt="Sus" />
        </div>
        <div className="sidebar-buttons">
          <ul>{
            iconState.objects.map((elements, icon) => (
              <li className={toogleStyles(icon)} key={icon}>
                <ion-icon name={elements.icon} onClick={(e) => { toogleActive(icon, e) }}></ion-icon>
              </li>
            ))}
            <div id="marker" ref={refs} style={{ top: top_x }}></div>
          </ul>
        </div>
        <div className="sidebar-logout">
          <ion-icon name="log-out-outline"></ion-icon>
        </div>
      </div>
    </>
  )
}

export default Sidebar;



// function toogleStyles(index) {
//   // if (index == 0 && flag == 0) {
//   //   iconState.activeObject = iconState.objects[0];
//   //   flag = 1;
//   //   return "active";
//   // } else {
//   if (iconState.objects[index] == iconState.activeObject) {
//     return "active";
//   } else {
//     return "inactive";
//   }
//   //}
// }