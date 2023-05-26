import React from 'react'

export const Navbar = ({filterIteam,menuList}) => {
    return (
        <>
            <nav className='navbar'>
                <div className="btn-group">
                    {menuList.map((ele)=>{
                        return (
                            <button className="btn-group__item" onClick={() => filterIteam(ele)}>{ele}</button>
                        )
                    })}
                </div>
            </nav>
        </>
    )
}
