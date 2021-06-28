import React from 'react';
import { TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import Table from '../../layouts/Table'

export default function OrderList() {    

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Pizza</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                    <TableRow >
                        <TableCell>
                            
                        </TableCell>
                        <TableCell>
                            
                        </TableCell>
                    </TableRow>
                    }
                </TableBody>
          </Table>
      </>
    )
}