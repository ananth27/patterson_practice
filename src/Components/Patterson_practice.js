import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Home } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TextField } from '@mui/material';
import { grid, typography } from '@mui/system';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DescriptionIcon from '@mui/icons-material/Description';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LanIcon from '@mui/icons-material/Lan';
import TablePagination from '@mui/material/TablePagination';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  asset: string,
  type: string,
  description: string,
  parent: string,
  location: string,
  category: string,
  serial: string,
  rfid: string,
) {
  return { name, asset, type, description, parent, location, category, serial, rfid };
}

const rows = [
  createData('', '001610R', 'Rig', 'Rig 00160', '', 'Midland Texas', 'DrillingParent.Rig', '', 'e00401508dae3711'),
];



export default function Patterson_practice() {




  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Grid sm={12} md={12} xs={12} lg={12} xl={12} sx={{}}>
      <AppBar position="static" sx={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#111442' }}>
        <Grid sm={12} md={12} xs={12} lg={12} xl={12} display="flex" justifyContent="center" flexDirection="row" sx={{ p: '2px' }}>
          <Grid sm={6} md={6} xs={6} lg={6} xl={6} display="flex" justifyContent="start" alignItems="center" flexDirection="row">
            <Typography sx={{ ml: '28px' }} variant="h6" component="div">
              Patterson.uti
            </Typography>
            <IconButton
              sx={{ ml: '2px' }}
              size="large"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Button sx={{ textTransform: 'none', backgroundColor: '#4d5071', ml: '2px' }} color="inherit">Site:MID - Midland IO</Button>
          </Grid>
          <Grid sm={6} md={6} xs={6} lg={6} xl={6} display="flex" justifyContent="end" alignItems="center" flexDirection="row">
            <Typography sx={{ m: 'auto' }} edge="start" variant="h7" component="div">
              Dashboard
            </Typography>
            <Typography sx={{ m: 'auto' }} edge="start" variant="h7" component="div">
              Maintanance
            </Typography>
            <Typography sx={{ m: 'auto', borderBottom: '3px solid red' }} edge="start" variant="h7" component="div">
              Assets
            </Typography>
            <Typography sx={{ m: 'auto' }} edge="start" variant="h7" component="div">
              Sites
            </Typography>
            <Typography sx={{ m: 'auto' }} edge="start" variant="h7" component="div">
              Admin
            </Typography>
            <IconButton sx={{ m: 'auto' }}
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <ListItem sx={{ m: 'auto', width: 'auto !important' }}>
              <ListItemAvatar>
                <Avatar>
                </Avatar>
              </ListItemAvatar>
              <ListItemText sx={{ textColor: 'white !important' }} secondaryTypographyProps={{ sx: { color: "white" } }} primary="Bill Horton" secondary="Manager" />
              <ArrowDropDownIcon sx={{ ml: '5px' }} />

            </ListItem>
            <SettingsIcon sx={{ m: 'auto', textAlign: 'center' }} />
          </Grid>
        </Grid>
      </AppBar>
      <Grid sm={12} md={12} xs={12} lg={12} xl={12} sx={{        
        display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "center", alignItems: "center",

      }} >
        <Grid sm={12} md={12} xs={12} lg={12} xl={12} container sx={{p:'10px'}} display="flex" justifyContent="center" flexDirection="row">
          <Grid container sm={12} md={12} xs={12} lg={3} xl={3} display="flex" justifyContent="center" flexDirection="column" alignContent="center" alignItems="center">
            <Grid container sm={12} md={12} xs={12} lg={12} xl={12} sx={{  }}>
              <Grid container sm={12} md={12} xs={12} lg={12} xl={12} display="flex" justifyContent="center" flexDirection="column" alignContent="center" alignItems="center" sx={{
                backgroundColor: 'white',
                borderRadius: '10px',
              }} >
                <Grid sm={12} md={12} xs={12} lg={12} xl={12}  sx={{mt: '15px', width:'95%' }}>
                  <React.Fragment>
                    <ListItemButton sx={{ backgroundColor: "#063ead !important", borderRadius: "4px" }}>
                      <ListItemIcon sx={{ color: 'white !important' }}>
                        <StorageIcon />
                      </ListItemIcon>
                      <ListItemText sx={{ color: 'white' }} primary="Assets" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon >
                        <OpenInNewIcon />
                      </ListItemIcon>
                      <ListItemText primary="Pending & Failed Exports" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <StorageIcon />
                      </ListItemIcon>
                      <ListItemText primary="Planned Asset Inventory" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <StorageIcon />
                      </ListItemIcon>
                      <ListItemText primary="Asset Transfers" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <StorageIcon />
                      </ListItemIcon>
                      <ListItemText primary="Planned Inventory Report" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <LocationOnIcon />
                      </ListItemIcon>
                      <ListItemText primary="Third Party Physical Location" />
                    </ListItemButton>
                    <ListItemButton>
                      <ListItemIcon>
                        <LanIcon />
                      </ListItemIcon>
                      <ListItemText primary="Assets Hierarchy" />
                    </ListItemButton>
                  </React.Fragment>
                </Grid>

              </Grid>
            </Grid>

          </Grid>
          <Grid sm={12} md={12} xs={12} lg={9} xl={9} sx={{pl:'10px'}} display="flex" justifyContent="center" flexDirection="column" alignContent="center" alignItems="center">
            <Grid sx={{ borderRadius: '10px' }} sm={12} md={12} xs={12} lg={12} xl={12} display="flex" justifyContent="center" flexDirection="column">
              <Grid sx={{ backgroundColor: '#111342', height: '50px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} display="flex" justifyContent="start" flexDirection="row">
                <Grid height="50px" sx={{ p: '15px' }} sm={6} md={6} xs={6} lg={6} xl={6} display="flex" justifyContent="start" flexDirection="row">
                  <Typography color="white">Assets</Typography>
                </Grid>
                <Grid height="50px" sx={{ p: '15px' }} sm={6} md={6} xs={6} lg={6} xl={6} display="flex" justifyContent="end" flexDirection="row">
                  <RefreshIcon sx={{ color: 'white', mr: '10px' }} /><SearchIcon sx={{ color: 'white' }} />
                </Grid>
              </Grid>
              <Grid sx={{ p:'10px',
                borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', backgroundColor: 'white',
                display: "flex", flexWrap: "wrap", flexDirection: "column", justifyContent: "space-around",

              }} >

                <Grid>
                  <TextField sx={{ m: 1, width: '30ch' }} id="class-text" label="Keyword" variant="outlined" />
                  <TextField sx={{ m: 1, width: '30ch' }} id="Section-text" label="Type" variant="outlined" />
                  <TextField sx={{ m: 1, width: '30ch' }} id="Section-text" label="Item" variant="outlined" />                  
                  <FormControl sx={{ m: 1, width: '30ch' }}>
                    <InputLabel id="demo-simple-select-helper-label">Site</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      label="Age"
                      
                    >                     
                    </Select>
                    
                  </FormControl>
                  <TextField sx={{ m: 1, width: '30ch' }} id="Section-text" label="Location" variant="outlined" />
                  <TextField sx={{ m: 1, width: '30ch' }} id="Section-text" label="Parent" variant="outlined" />
                </Grid>

              </Grid>
            </Grid>
            <Grid container sx={{ mt: 1 }} item sm={12} md={12} xs={12} lg={12} xl={12} rowSpacing={2} display="flex" justifyContent="center" flexDirection="column">
              <Item sx={{ borderRadius: '10px', backgroundColor:'white' }} display="flex" justifyContent="center" flexDirection="column" >
                <Grid height="50px" sx={{ mb: '8px' }} sm={12} md={12} xs={12} lg={12} xl={12} display="flex" justifyContent="center" flexDirection="row">
                  <Grid padding="5px" sm={6} md={6} xs={6} lg={6} xl={6} display="flex" justifyContent="start" flexDirection="row">
                    <Button variant="contained">Export to Excel</Button>
                  </Grid>
                  <Grid sm={6} md={6} xs={6} lg={6} xl={6} display="flex" justifyContent="end" flexDirection="row">
                    <TablePagination
                      component="div"
                      count={100}
                      page={page}
                      onPageChange={handleChangePage}
                      rowsPerPage={rowsPerPage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </Grid>
                </Grid>
                <TableContainer>
                  <Table sx={{ }} aria-label="customized table">
                    <TableHead sx={{ backgroundColor: "#111342 !important" }}>
                      <TableRow sx={{ backgroundColor: "#111342 !important" }}>
                        <StyledTableCell sx={{ backgroundColor: "#111342 !important" }}></StyledTableCell>
                        <StyledTableCell sx={{ backgroundColor: "#111342 !important" }} align="right">Asset</StyledTableCell>
                        <StyledTableCell sx={{ backgroundColor: "#111342 !important" }} align="right">Type</StyledTableCell>
                        <StyledTableCell sx={{ backgroundColor: "#111342 !important" }} align="right">Discription</StyledTableCell>
                        <StyledTableCell sx={{ backgroundColor: "#111342 !important" }} align="right">Parent</StyledTableCell>
                        <StyledTableCell sx={{ backgroundColor: "#111342 !important" }} align="right">Location</StyledTableCell>
                        <StyledTableCell sx={{ backgroundColor: "#111342 !important" }} align="right">Category</StyledTableCell>
                        <StyledTableCell sx={{ backgroundColor: "#111342 !important" }} align="right">Serial</StyledTableCell>
                        <StyledTableCell sx={{ backgroundColor: "#111342 !important" }} align="right">RFID</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            <DescriptionIcon />
                          </StyledTableCell>
                          <StyledTableCell align="right">{row.asset}</StyledTableCell>
                          <StyledTableCell align="right">{row.type}</StyledTableCell>
                          <StyledTableCell align="right">{row.description}</StyledTableCell>
                          <StyledTableCell align="right">{row.parent}</StyledTableCell>
                          <StyledTableCell align="right">{row.location}</StyledTableCell>
                          <StyledTableCell align="right">{row.category}</StyledTableCell>
                          <StyledTableCell align="right">{row.serial}</StyledTableCell>
                          <StyledTableCell align="right">{row.rfid}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            <DescriptionIcon />
                          </StyledTableCell>
                          <StyledTableCell align="right">{row.asset}</StyledTableCell>
                          <StyledTableCell align="right">{row.type}</StyledTableCell>
                          <StyledTableCell align="right">{row.description}</StyledTableCell>
                          <StyledTableCell align="right">{row.parent}</StyledTableCell>
                          <StyledTableCell align="right">{row.location}</StyledTableCell>
                          <StyledTableCell align="right">{row.category}</StyledTableCell>
                          <StyledTableCell align="right">{row.serial}</StyledTableCell>
                          <StyledTableCell align="right">{row.rfid}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            <DescriptionIcon />
                          </StyledTableCell>
                          <StyledTableCell align="right">{row.asset}</StyledTableCell>
                          <StyledTableCell align="right">{row.type}</StyledTableCell>
                          <StyledTableCell align="right">{row.description}</StyledTableCell>
                          <StyledTableCell align="right">{row.parent}</StyledTableCell>
                          <StyledTableCell align="right">{row.location}</StyledTableCell>
                          <StyledTableCell align="right">{row.category}</StyledTableCell>
                          <StyledTableCell align="right">{row.serial}</StyledTableCell>
                          <StyledTableCell align="right">{row.rfid}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            <DescriptionIcon />
                          </StyledTableCell>
                          <StyledTableCell align="right">{row.asset}</StyledTableCell>
                          <StyledTableCell align="right">{row.type}</StyledTableCell>
                          <StyledTableCell align="right">{row.description}</StyledTableCell>
                          <StyledTableCell align="right">{row.parent}</StyledTableCell>
                          <StyledTableCell align="right">{row.location}</StyledTableCell>
                          <StyledTableCell align="right">{row.category}</StyledTableCell>
                          <StyledTableCell align="right">{row.serial}</StyledTableCell>
                          <StyledTableCell align="right">{row.rfid}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            <DescriptionIcon />
                          </StyledTableCell>
                          <StyledTableCell align="right">{row.asset}</StyledTableCell>
                          <StyledTableCell align="right">{row.type}</StyledTableCell>
                          <StyledTableCell align="right">{row.description}</StyledTableCell>
                          <StyledTableCell align="right">{row.parent}</StyledTableCell>
                          <StyledTableCell align="right">{row.location}</StyledTableCell>
                          <StyledTableCell align="right">{row.category}</StyledTableCell>
                          <StyledTableCell align="right">{row.serial}</StyledTableCell>
                          <StyledTableCell align="right">{row.rfid}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            <DescriptionIcon />
                          </StyledTableCell>
                          <StyledTableCell align="right">{row.asset}</StyledTableCell>
                          <StyledTableCell align="right">{row.type}</StyledTableCell>
                          <StyledTableCell align="right">{row.description}</StyledTableCell>
                          <StyledTableCell align="right">{row.parent}</StyledTableCell>
                          <StyledTableCell align="right">{row.location}</StyledTableCell>
                          <StyledTableCell align="right">{row.category}</StyledTableCell>
                          <StyledTableCell align="right">{row.serial}</StyledTableCell>
                          <StyledTableCell align="right">{row.rfid}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            <DescriptionIcon />
                          </StyledTableCell>
                          <StyledTableCell align="right">{row.asset}</StyledTableCell>
                          <StyledTableCell align="right">{row.type}</StyledTableCell>
                          <StyledTableCell align="right">{row.description}</StyledTableCell>
                          <StyledTableCell align="right">{row.parent}</StyledTableCell>
                          <StyledTableCell align="right">{row.location}</StyledTableCell>
                          <StyledTableCell align="right">{row.category}</StyledTableCell>
                          <StyledTableCell align="right">{row.serial}</StyledTableCell>
                          <StyledTableCell align="right">{row.rfid}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            <DescriptionIcon />
                          </StyledTableCell>
                          <StyledTableCell align="right">{row.asset}</StyledTableCell>
                          <StyledTableCell align="right">{row.type}</StyledTableCell>
                          <StyledTableCell align="right">{row.description}</StyledTableCell>
                          <StyledTableCell align="right">{row.parent}</StyledTableCell>
                          <StyledTableCell align="right">{row.location}</StyledTableCell>
                          <StyledTableCell align="right">{row.category}</StyledTableCell>
                          <StyledTableCell align="right">{row.serial}</StyledTableCell>
                          <StyledTableCell align="right">{row.rfid}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                      {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            <DescriptionIcon />
                          </StyledTableCell>
                          <StyledTableCell align="right">{row.asset}</StyledTableCell>
                          <StyledTableCell align="right">{row.type}</StyledTableCell>
                          <StyledTableCell align="right">{row.description}</StyledTableCell>
                          <StyledTableCell align="right">{row.parent}</StyledTableCell>
                          <StyledTableCell align="right">{row.location}</StyledTableCell>
                          <StyledTableCell align="right">{row.category}</StyledTableCell>
                          <StyledTableCell align="right">{row.serial}</StyledTableCell>
                          <StyledTableCell align="right">{row.rfid}</StyledTableCell>
                        </StyledTableRow>
                      ))}
                      
                    </TableBody>
                  </Table>
                </TableContainer>
              </Item>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
}
