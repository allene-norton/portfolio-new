import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
      backgroundColor: 'transparent',
    },
    content: {
        color: '#fff',
        fontSize: '1em',
        borderBottom: 'none',
    },
    header: {
        fontSize: '1.2em',
        borderBottom: 'none',
    }
  });
  
  function createData(langs, tools, libs, additional) {
    return { langs, tools, libs, additional};
  }

const rows = [
  createData('JavaScript', 'PostgreSQL MongoDB', 'React/Redux', 'Photoshop/Illustrator'),
  createData('Ruby', 'WebSockets', 'Node.js', 'Figma'),
  createData('Python', 'REST APIs', 'Ruby on Rails', 'Adobe XD'),
  createData('HTML5', 'Webpack, NPM, Yarn', 'Flask', 'Material-UI'),
  createData('CSS', 'DevOps, CI/CD', 'Express', 'Tailwind CSS'),
];

export default function BasicTable() {
    const classes = useStyles()
  return (
    <TableContainer className={classes.table} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.header} align="center" style={{color:'#f77944'}} >Languages</TableCell>
            <TableCell className={classes.header} align="center" style={{color:'#feef01'}} >Methods + Tools</TableCell>
            <TableCell className={classes.header} align="center" style={{color:'#00b19b'}} >Frameworks + Libraries</TableCell>
            <TableCell className={classes.header} align="center" style={{color:'#b557ad'}} >Additional</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.langs}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell className={classes.content} align="center">{row.langs}</TableCell>
              <TableCell className={classes.content} align="center">{row.tools}</TableCell>
              <TableCell className={classes.content} align="center">{row.libs}</TableCell>
              <TableCell className={classes.content} align="center">{row.additional}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}