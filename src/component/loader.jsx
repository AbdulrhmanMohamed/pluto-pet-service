import React from 'react'

function Loader() {
  return (
    <div className='spinner-parent' style={{
       position:'absolute',
       top:'0',
       left:'0',
       right:'0',
       bottom:'0',
       zIndex:'100',
       background:'black',
       display:'flex',
       alignItems:'center',
       justifyContent:'center',
       opacity:"0.8"


    }}>
        <div className="spinner-border" role="status" style={{
            width:'5rem',
            height:'5rem',
            color:'whitesmoke',
        }}>
</div>
    </div>
  )
}

export default Loader