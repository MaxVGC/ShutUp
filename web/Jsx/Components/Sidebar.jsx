var flag=0;

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
    if(index==0 && flag==0){
      iconState.activeObject=iconState.objects[0];
      flag=1;
      return "active";
    }else{
      if(iconState.objects[index]==iconState.activeObject){
        return "active";
      }else{
        return "inactive";
      }
    }  
  }

  return (
    <ul>{
      iconState.objects.map((elements,icon) =>(
        <li className={toogleStyles(icon)} key={icon}>
         <ion-icon name={elements.icon}  onClick={()=>{toogleActive(icon)}}></ion-icon>
        </li>
      ))}
      
    </ul>
  )
}

export default Sidebar;



