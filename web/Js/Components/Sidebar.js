import Context from '../Context.js';
var top_x = '46%';

function Sidebar() {
  let refs = React.useRef();
  const {
    state,
    actions
  } = React.useContext(Context);

  const handleResize = () => {
    var aux = document.querySelector("ul li.active");

    if (aux != null) {
      if (window.matchMedia("(orientation: landscape)").matches) {
        document.getElementById("marker").style.top = aux.offsetTop + "px";
        document.getElementById("marker").style.left = '-20px';
      }
    }
  };

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
  });
  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  function toogleActive(index, e) {
    top_x = e.target.offsetTop;
    actions({
      type: 'setState',
      payload: { ...state,
        value: iconState.objects[index].icon
      }
    });
    changeClass({ ...iconState,
      activeObject: iconState.objects[index]
    });
  }

  function toogleStyles(index) {
    if (iconState.objects[index] == iconState.activeObject) {
      return "active";
    } else {
      return "inactive";
    }
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "sidebar-custom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sidebar-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../Assets/Logotipo.svg",
    alt: "Sus"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sidebar-buttons"
  }, /*#__PURE__*/React.createElement("ul", null, iconState.objects.map((elements, icon) => /*#__PURE__*/React.createElement("li", {
    className: toogleStyles(icon),
    key: icon
  }, /*#__PURE__*/React.createElement("ion-icon", {
    name: elements.icon,
    onClick: e => {
      toogleActive(icon, e);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    id: "marker",
    ref: refs,
    style: {
      top: top_x
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sidebar-logout"
  }, /*#__PURE__*/React.createElement("ion-icon", {
    name: "log-out-outline"
  }))));
}

export default Sidebar; // function toogleStyles(index) {
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