import React from 'react';
import Header from '../dashboard/Header';
import TextField from '@material-ui/core/TextField';
import { InputLabel, Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './Platform.modules.scss'
import Card from '../common/Card';
import Button from './Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function SimpleSelect() {
    const [ReportType, setReportType] = React.useState('');
    const handleChange = (event) => {
        console.log(event);
        setReportType(event.target.value);
    };
    const [OrderStatus, setOrderStatus] = React.useState('');
    const handleChange1 = (event) => {
        console.log(event);
        setOrderStatus(event.target.value);
    };
    const [Warehousestatus, setWarehouseState] = React.useState({
    Warehouse1: false,
    Warehouse2: false,
    Warehouse3: false,
    });
    const handleChange2 = (event) => {
    setWarehouseState(
        { ...Warehousestatus, [event.target.name]: event.target.checked });
            console.log(event.target.value)
    };
    const { Warehouse1, Warehouse2, Warehouse3} = Warehousestatus;
    const [Combinecheck, setCombinecheck] = React.useState({
    Combined: false,
    });
    const handleChange3 = (event) => {
    setCombinecheck(
        { ...Combinecheck, [event.target.name]: event.target.checked });
            console.log(event.target.value)
    };
    const {Combined} = Combinecheck;
            return (
                <div>
                <Header/>
                <div style= {{
                    margin: `0 auto`,
                    width: `20%`,
                    padding: `2%`
                    }}>
                        <hr />
                <Card title="Fill the form" >            
                    <InputLabel style={{marginTop:`10px`}}>Choose The Begin Date</InputLabel>
                    <TextField
                        id="BD"
                        type="date"
                        defaultValue="2000-01-01"
                        className={styles.label}
                        style={{width:'80%',marginBottom:`20px`,marginLeft:`10%`}}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <InputLabel>Choose The End Date</InputLabel>
                    <TextField
                        id="ED"
                        type="date"
                        defaultValue="2000-01-01"
                        className={styles.label}
                        style={{width:'80%',marginBottom:`20px`,marginLeft:`10%`}}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <InputLabel>Type of Report</InputLabel>
                    <Select
                        labelId="Type of Report"
                        id="RT"
                        value={ReportType}
                        onChange={handleChange}
                        style={{width:'80%',marginBottom:`20px`,marginLeft:`10%`}}
                        >
                        
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={'Sales'}>Sales Report</MenuItem>
                        <MenuItem value={'Inventory'}>Inventory Report</MenuItem>
                        <MenuItem value={'Listing'}>Listing Report</MenuItem>
                        <MenuItem value={'Tax'}>Tax Report</MenuItem>
                        </Select>
                    <InputLabel>Order Status</InputLabel>
                    <Select
                        labelId="OrderStatus"
                        id="OS"
                        value={OrderStatus}
                        onChange={handleChange1}
                        style={{width:'80%',display:'flex',marginBottom:`20px`,marginLeft:`10%`}}
                        >
                        <MenuItem><em>None</em></MenuItem>
                        <MenuItem value={'dispacted'}>Dispacted</MenuItem>
                        <MenuItem value={'progress'}>On The Way</MenuItem>
                        <MenuItem value={'warehouse'}>In Warehouse</MenuItem>
                        </Select>
                    <InputLabel>WareHouses</InputLabel>
                        <FormGroup>
                        <FormControlLabel
                        control={<Checkbox checked={Warehouse1} onChange={handleChange2} name="Warehouse1" value="W1"/>}
                        label="Warehouse1"
                        />
                        <FormControlLabel
                        control={<Checkbox checked={Warehouse2} onChange={handleChange2} name="Warehouse2" value="W2"/>}
                        label="Warehouse1"
                        />
                        <FormControlLabel
                        control={<Checkbox checked={Warehouse3} onChange={handleChange2} name="Warehouse3" value="W3"/>}
                        label="Warehouse1"
                        />
                        </FormGroup>
                        <InputLabel>Combined</InputLabel>
                        <FormGroup>
                        <FormControlLabel
                        control={<Checkbox checked={Combined} onChange={handleChange3} name="Combined" value="Combine"/>}
                        label="Combined"
                        />
                        </FormGroup>
                        <Button
                        id="submit"
                        className={styles.button}
                        // OnClick
                        >
                        Submit
                        </Button>
                    </Card>
                    </div>
                </div>
            );
        }

