var flag = 0;
var flag_pos = 0;
var top_x = 0;

function Sidebar() {
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
  let refs = React.useRef();

  function toogleActive(index) {
    changeClass({ ...iconState,
      activeObject: iconState.objects[index]
    });
  }

  function toogleStyles(index) {
    if (index == 0 && flag == 0) {
      iconState.activeObject = iconState.objects[0];
      flag = 1;
      return "active";
    } else {
      if (iconState.objects[index] == iconState.activeObject) {
        return "active";
      } else {
        return "inactive";
      }
    }
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", null, iconState.objects.map((elements, icon) => /*#__PURE__*/React.createElement("li", {
    className: toogleStyles(icon),
    key: icon
  }, /*#__PURE__*/React.createElement("ion-icon", {
    ref: icon == 0 ? refs : null,
    name: elements.icon,
    onClick: e => {
      toogleActive(icon), top_x = e.target.offsetTop;
    }
  }))), /*#__PURE__*/React.createElement("div", {
    id: "marker",
    style: {
      top: top_x
    }
  })));
}

export default Sidebar;