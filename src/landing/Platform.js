import React from 'react';
import Header from '../common/Header';
import TextField from '@material-ui/core/TextField';
import { Input, InputLabel, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './Platform.modules.scss'
import Card from '../common/Card';
import {FormControl } from '@material-ui/core';
import Button from './Button';


export default function SimpleSelect() {
    const classes = makeStyles();
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
            return (
                <div>
                <Header/>
                <div style= {{
                    margin: `0 auto`,
                    width: `18%`
                    }}>
                        <hr />
                <Card title="Fill the form" style={{margin:`auto`}}>            
                    <InputLabel>Choose The Begin Date</InputLabel>
                    <TextField
                        id="BD"
                        type="date"
                        defaultValue="2000-01-01"
                        className={styles.label }
                        style={{width:'80%',marginBottom:`20px`}}
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
                        style={{width:'80%',marginBottom:`20px`}}
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
                        style={{width:'80%',marginBottom:`20px`}}
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
                        style={{width:'80%',display:'flex',marginBottom:`20px`}}
                        >
                        <MenuItem><em>None</em></MenuItem>
                        <MenuItem value={'dispacted'}>Dispacted</MenuItem>
                        <MenuItem value={'progress'}>On The Way</MenuItem>
                        <MenuItem value={'warehouse'}>In Warehouse</MenuItem>
                        </Select>
                        
                        <Button
                        id="submit"
                        className={styles.button}
                        >
                        Submit
                        </Button>
                    </Card>
                    </div>
                </div>
            );
        }