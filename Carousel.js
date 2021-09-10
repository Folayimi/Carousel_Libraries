import React from 'react';
import './carousel.css';
import {useState,useEffect} from 'react';
import {ChevronRightIcon,ChevronLeftIcon} from "@heroicons/react/solid"

const Carousel = (props) =>{
    var count=0;        
    const [mouseDown,setMouseDown] = useState(false);
    const [initiate,setInitiate] = useState(false);
    const [moveLeft,setMoveLeft] = useState(false);
    const [moveRight,setMoveRight] = useState(false);
    const [Id,setId]= useState(0);
    const [label,setLabel] = useState(0);
    const [marginR,setMarginR]= useState([]);
    const [marginL,setMarginL]= useState([]);
    const [Initial,setInitial] = useState(0);
    const [Final,setFinal] = useState(0);
    const [BaseColor,setBaseColor] = useState([]);
            
    var {   
            width="15rem",
            height="20rem",
            background="",
            color="black",
            fontSize,
            fontFamily,                                   
            ImageW="80%",
            ImageH="80%",            
            showLabel=true,
            showBase=true,
            setButton=true,
            buttonColor="blue",
            baseColor="blue",
            data} = props;

    const clearList = ()=>{
        for(var b=0;b<count;b++){
            marginR.pop();
            marginL.pop();
            BaseColor.pop();
        }
    }
    const resetBase = (id)=>
    {
        for(var p=0; p<count; p++)
        {
            if(p!==id)
                setBaseColor([...BaseColor,BaseColor[p]="white"]);
            if(p===id)
                setBaseColor([...BaseColor,BaseColor[p]=baseColor]);            
        }                        
    }

    data.map((values) =>
    {
        count++;        
    })


    useEffect(()=>{
        if(initiate===false){
            resetBase(0);                  
            setMarginR([...marginR, marginR[0]=0])
            setMarginL([...marginL, marginL[0]=0])
            for(var i=1;i<count;i++){                
                setMarginR([...marginR,marginR[i]=-100])
                setMarginL([...marginL,marginL[i]=100])
            }
            setLabel(Id+1);                        
            setInitiate(true);            
        }
        if(mouseDown===true && moveLeft===true && Id<count){            
            clearList();
            resetBase(Id);                                                
            setMarginR([...marginR,marginR[Id-1]=100])
            setMarginL([...marginL,marginL[Id-1]=-100])
            setMarginR([...marginR,marginR[Id]=0])
            setMarginL([...marginL,marginL[Id]=0])
            for(var k=Id;k<count-1;k++){
                setMarginR([...marginR,marginR[k+1]=-100])
                setMarginL([...marginL,marginL[k+1]=100])
            }                                                                 
            setMoveLeft(false);
            setMoveRight(false);
            setMouseDown(false);
            setFinal(0);
            setInitial(0);
            setLabel(Id+1);
            clearList();
        }
        else if(mouseDown===true && moveRight===true && Id>1){        
            clearList();
            resetBase(Id-2);
            setBaseColor([...BaseColor,BaseColor[Id-2]=baseColor]);                     
            setMarginR([...marginR,marginR[Id-1]=-100])
            setMarginL([...marginL,marginL[Id-1]=100])
            setMarginR([...marginR,marginR[Id-2]=0])
            setMarginL([...marginL,marginL[Id-2]=0])
            if(Id<count){
                for(var j=Id;j<count;j++){
                    setMarginR([...marginR,marginR[j]=-100])
                    setMarginL([...marginL,marginL[j]=100])
                }
            }            
            else if(Id===count){
                for(var l=Id-3;l>-1;l--){
                    setMarginR([...marginR,marginR[l]=100])
                    setMarginL([...marginL,marginL[l]=-100])
                }
            }            
            setMoveRight(false);
            setMoveLeft(false);
            setMouseDown(false);
            setFinal(0);
            setInitial(0);
            setLabel(Id-1);
            clearList();
        }
    },[moveLeft,moveRight]);
    
    if(showBase===true){                
            return(
                <>
                <div 
                            style={{
                                width:width,
                                height:height                                                                                                
                                }}
                            className="slide">
                {
                    data.map((items)=>{
                        const {id,image,text}=items;
                        var Index =999-id;                                    
                        return(
                        <>
                        <div className="carousel" key={items.id}
                        style={{
                            width:"inherit",
                            height:"inherit",
                            background:background,
                            zIndex:Index,
                            marginLeft:`${marginL[id-1]}%`,
                            marginRight:`${marginR[id-1]}%`
                        }}
    
    
                        onMouseDown={(e)=>{
                            setMouseDown(true);
                            setInitial(e.clientX);
                            setId(id);                        
                        }}
                        onMouseMove={(m)=>{                        
                            setFinal(m.clientX);
                            if(mouseDown===true && Final<Initial){
                                setMoveLeft(true);                                                                                   
                            }
                            else if(mouseDown===true && Initial<Final){                            
                                setMoveRight(true);                                                                                                                           
                            }
                        }}                    
    
    
                        onTouchStart={(i)=>{
                            setMouseDown(true);
                            setInitial(i.targetTouches[0].clientX);                        
                            setId(id);                        
                        }}
                        onTouchMove={(j)=>{                        
                            setFinal(j.targetTouches[0].clientX);
                            if(mouseDown===true && Final<Initial){
                                setMoveLeft(true);                                                                                  
                            }
                            else if(mouseDown===true && Initial<Final){                            
                                setMoveRight(true);                                                                                                
                            }
                        }}            
                        >
    
                        <div className="image" 
                        style={{height:ImageH, width:ImageW}}
                        >
                            <img src={image}
                            style={{
                                width:"100%",
                                height:"100%"                                
                            }} 
                            alt="Img"/>
                        </div>
                        <div className="text"
                        style={{                            
                            color:color,
                            fontSize:fontSize,
                            fontFamily:fontFamily                                                                                
                            }}
                            >
                            <p>{text}</p>
                        </div>                    
                        </div>                    
                        </>
                        )                        
                    })                            
                }
                {
                    data.map((Label)=>{
                        if(showLabel===true && Label.id===count){
                            return(
                                <div className="label">
                                        <p>{label} of {count}</p>
                                </div>                                
                            )                            
                        }                        
                    })                    
                }                
                {
                    data.map((button)=>{
                        if(setButton===true && button.id===count){
                            return(
                                <>
                    <div className="btnContainer">
                    <div className="forwardbtn"
                    onClick={()=>{                     
                        setMouseDown(true);
                        setMoveLeft(true);
                        setId(label);
                        setInitial(0);
                        setFinal(0);                    
                    }} 
                    style={{
                        background:buttonColor,                        
                    }}
                    
                    >
                        <ChevronRightIcon width="30px"/>
                    </div>
    
                    <div className="backwardbtn"
                    onClick={()=>{                    
                        setMouseDown(true);
                        setMoveRight(true);
                        setId(label); 
                        setInitial(0);
                        setFinal(0);                   
                    }} 
                    style={{background:buttonColor}}
                    >
                        <ChevronLeftIcon width="30px"/>
                    </div>
                    </div>                    
                                </>
                            )
                        }                        
                    })
                }                                           
                </div>
                {
                    <div className="baseline"
                    style={{background:background,
                    width:width}}
                    >
                        <div className="box"
                        style={{background:background}}
                        >
                            {
                                data.map((event)=>{                            
                                    return(
                                        <div className="circle" key={event.id}
                                        style={{background:BaseColor[event.id-1]}}                                        
                                        ></div>                                
                                    )                                                        
                                })
                            }
                        </div>
                    </div>
                }                                                                               
            </>       
            )                                    
    }
    return(
        <>
        <div 
                    style={{
                        width:width,
                        height:height                                                                                                
                        }}
                    className="slide">
        {
            data.map((items)=>{
                const {id,image,text}=items;
                var Index =999-id;                                    
                return(
                <>
                <div className="carousel" key={items.id}
                style={{
                    width:"inherit",
                    height:"inherit",
                    background:background,
                    zIndex:Index,
                    marginLeft:`${marginL[id-1]}%`,
                    marginRight:`${marginR[id-1]}%`
                }}


                onMouseDown={(e)=>{
                    setMouseDown(true);
                    setInitial(e.clientX);
                    setId(id);                        
                }}
                onMouseMove={(m)=>{                        
                    setFinal(m.clientX);
                    if(mouseDown===true && Final<Initial){
                        setMoveLeft(true);                                                                                   
                    }
                    else if(mouseDown===true && Initial<Final){                            
                        setMoveRight(true);                                                                                                                           
                    }
                }}                    


                onTouchStart={(i)=>{
                    setMouseDown(true);
                    setInitial(i.targetTouches[0].clientX);                        
                    setId(id);                        
                }}
                onTouchMove={(j)=>{                        
                    setFinal(j.targetTouches[0].clientX);
                    if(mouseDown===true && Final<Initial){
                        setMoveLeft(true);                                                                                  
                    }
                    else if(mouseDown===true && Initial<Final){                            
                        setMoveRight(true);                                                                                                
                    }
                }}            
                >

                <div className="image" 
                style={{height:ImageH, width:ImageW}}
                >
                    <img src={image}
                    style={{
                        width:"100%",
                        height:"100%"                                
                    }} 
                    alt="Img"/>
                </div>
                <div className="text"
                style={{                            
                    color:color,
                    fontSize:fontSize,
                    fontFamily:fontFamily                                                                                
                    }}
                    >
                    <p>{text}</p>
                </div>                    
                </div>                    
                </>
                )                        
            })                            
        }
        {
            data.map((Label)=>{
                if(showLabel===true && Label.id===count){
                    return(
                        <div className="label">
                                <p>{label} of {count}</p>
                        </div>                                
                    )                            
                }                        
            })                    
        }        
        {
            data.map((button)=>{
                if(setButton===true && button.id===count){
                    return(
                        <>
            <div className="btnContainer">
            <div className="forwardbtn"
            onClick={()=>{                     
                setMouseDown(true);
                setMoveLeft(true);
                setId(label);
                setInitial(0);
                setFinal(0);                    
            }} 
            style={{
                background:buttonColor,                        
            }}
            
            >
                <ChevronRightIcon width="30px"/>
            </div>

            <div className="backwardbtn"
            onClick={()=>{                    
                setMouseDown(true);
                setMoveRight(true);
                setId(label); 
                setInitial(0);
                setFinal(0);                   
            }} 
            style={{background:buttonColor}}
            >
                <ChevronLeftIcon width="30px"/>
            </div>
            </div>                    
                        </>
                    )
                }                        
            })
        }                            
        </div>                                                                              
    </>       
    )
}
export default Carousel
