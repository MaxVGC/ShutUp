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
    activeObject:null,
    objects:[{
      icon: 'home'
    }, {
      icon: 'chatbubbles'
    }, {
      icon: 'call'
    }, {
      icon: 'accessibility'
    }]
  })

  function toogleActive(index){
    changeClass({...iconState,activeObject: iconState.objects[index]});
  }

  function toogleStyles(index){
    if(iconState.objects[index]===iconState.activeObject){
      return "active";
    }else{
      return "inactive"
    }
  }

  return (
    <ul>{
      iconState.objects.map((elements,icon) =>(
        <li class={toogleStyles(icon)} key={icon}>
         <ion-icon name={elements.icon}  onClick={()=>{toogleActive(icon)}}></ion-icon>
        </li>
      ))}
    </ul>
  )
}

export default Sidebar;



