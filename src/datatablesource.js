export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: "user", headerName: "User", width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img src={params.row.img} alt="avatar" className="cellImg" />
                    {params.row.username}
                </div>
            )
        }
    },
    { field:"email", headerName: "Email", width: 230 },
    { field:"age", headerName: "Age", width: 100 },
    { field:"status", headerName: "Status", width: 160, renderCell: (params)=>{
        return(
            <div className={`cellWithStatus ${params.row.status}` }>{params.row.status}</div>
        )
    } },
]

export const userRows = [
    {
        id: 1,
        username: "John Dow",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "John Dow",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        status: "passive",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 3,
        username: "John Dow",
        img: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 4,
        username: "John Dow",
        img: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        status: "pending",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 5,
        username: "John Dow",
        img: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        status: "pending",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 6,
        username: "John Dow",
        img: "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        status: "passive",
        email: "1snow@gmail.com",
        age: 35,
    },

]