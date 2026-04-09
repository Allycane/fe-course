import Button from "./component/button/Button.jsx";

export default function App() {
    const stylesObj = { "width":'100px', "h":'50px', "bgColor":'midnightblue', "color":'white'};
    const stylesObj2 = { "width":'200px', "h":'30px', "bgColor":'gray', "color":'white'};
    return(
        <>
            <Button type='button' name='버튼1' style={stylesObj}/>
            <Button type='submit' name='버튼2' style={stylesObj2}/>
        </>
    );
}