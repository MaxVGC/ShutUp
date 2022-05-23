const icons = [{
  icon: 'home'
}, {
  icon: 'chatbubbles'
}, {
  icon: 'call'
}, {
  icon: 'accessibility'
}];

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
    if (iconState.objects[index] === iconState.activeObject) {
      return "active";
    } else {
      return "inactive";
    }
  }

  return /*#__PURE__*/React.createElement("ul", null, iconState.objects.map((elements, icon) => /*#__PURE__*/React.createElement("li", {
    class: toogleStyles(icon),
    key: icon
  }, /*#__PURE__*/React.createElement("ion-icon", {
    name: elements.icon,
    onClick: () => {
      toogleActive(icon);
    }
  }))));
}

export default Sidebar;