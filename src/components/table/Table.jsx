import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const List = () => {
    const rows = [
        {
            id: 1231321,
            product: "Acer Nitro 5",
            img: "https://static.acer.com/up/Resource/Acer/Laptops/Nitro_5/Image/20200413/Acer-Nitro-5_AN515-55_modelpreview.png",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 16319,
            product: "Acer Nitro 5",
            img: "https://static.acer.com/up/Resource/Acer/Laptops/Nitro_5/Image/20200413/Acer-Nitro-5_AN515-55_modelpreview.png",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 12365426,
            product: "Acer Nitro 5",
            img: "https://static.acer.com/up/Resource/Acer/Laptops/Nitro_5/Image/20200413/Acer-Nitro-5_AN515-55_modelpreview.png",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 128974,
            product: "Acer Nitro 5",
            img: "https://static.acer.com/up/Resource/Acer/Laptops/Nitro_5/Image/20200413/Acer-Nitro-5_AN515-55_modelpreview.png",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Pending",
        },
    ]

  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className='tableCell'>Tracking ID</TableCell>
          <TableCell className='tableCell'>Product</TableCell>
          <TableCell className='tableCell'>Customer</TableCell>
          <TableCell className='tableCell'>Date</TableCell>
          <TableCell className='tableCell'>Amount</TableCell>
          <TableCell className='tableCell'>Payment Method</TableCell>
          <TableCell className='tableCell'>Status</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
          >
            <TableCell className='tableCell'>{row.id}</TableCell>
            <TableCell className='tableCell'>
              <div className='cellWrapper'>
                <img src={row.img} className="image" alt=""/>
                {row.product}
              </div>
            </TableCell>
            <TableCell className='tableCell'>{row.customer}</TableCell>
            <TableCell className='tableCell'>{row.date}</TableCell>
            <TableCell className='tableCell'>{row.amount}</TableCell>
            <TableCell className='tableCell'>{row.method}</TableCell>
            <TableCell className='tableCell'>
              <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}
