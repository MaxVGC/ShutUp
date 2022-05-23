var flag = 0;

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

  return /*#__PURE__*/React.createElement("ul", null, iconState.objects.map((elements, icon) => /*#__PURE__*/React.createElement("li", {
    className: toogleStyles(icon),
    key: icon
  }, /*#__PURE__*/React.createElement("ion-icon", {
    name: elements.icon,
    onClick: () => {
      toogleActive(icon);
    }
  }))));
}

export default Sidebar;