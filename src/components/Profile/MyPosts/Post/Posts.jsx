import s from'./Posts.module.css'

const Posts = (props) => {
    return (        
      <div className={s.item}>
        <img src="https://yt3.ggpht.com/Am2GiXGXVJQ3sSNiwb5dwdYIARdlnoUOP4h9Qd9Cmog2NcTYfoimDMG8ypELVSQw876hfjSrcQ=s900-c-k-c0x00ffffff-no-rj"></img>
        {props.message}
        <div>
          <span><span >{props.count}</span> like</span>
        </div>
      </div>
    );
}

export default Posts;