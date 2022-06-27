
export default function ChatWindowComponent({ currentChat }) {
    const [visibleData, setVisibleData] = React.useState(false);

    function toogleVisibleData(){
        if(visibleData){
            setVisibleData(false);
        }else{
            setVisibleData(true);
        }
    }

    return (
        <div className="ChatWindowComponent">
            <div className={'main ' + (visibleData ? 'active' : '')} onClick={()=>(toogleVisibleData())}>
                <div className="header">
                    
                </div>
            </div>
            <div className={'data ' + (visibleData ? 'active' : '')}>

            </div>
        </div>
    )
}
